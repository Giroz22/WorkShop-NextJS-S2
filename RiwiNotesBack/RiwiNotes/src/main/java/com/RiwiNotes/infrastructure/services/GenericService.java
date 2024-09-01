package com.RiwiNotes.infrastructure.services;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import com.RiwiNotes.infrastructure.abstract_services.IGenericService;
import com.RiwiNotes.infrastructure.helpers.mappers.IMapperBase;
import com.RiwiNotes.util.exceptions.IdNotFoundException;

import jakarta.transaction.Transactional;

public abstract class GenericService<E,ID,RQ,RS> implements IGenericService<E,ID,RQ,RS>{

    @Autowired
    private JpaRepository<E,ID> repository;

    @Autowired
    private IMapperBase<E,RQ,RS> mapper;

    @Override
    @Transactional
    public RS create(RQ request) {
        E entity = this.mapper.requestToEntity(request);        
        
        E entitySaved = this.repository.save(entity);

        return this.mapper.entityToResponse(entitySaved);
    }

    @Override
    public Page<RS> findAll(int page, int size) {

        if (page<0) page = 0;

        PageRequest pagination = PageRequest.of(page, size); 

        return this.repository.findAll(pagination).map((entity) ->
            this.mapper.entityToResponse(entity)
        );
    }

    @Override
    public RS findById(ID id) {
        
        E enitity = this.find(id);

        return this.mapper.entityToResponse(enitity);
    }

    @Override
    @Transactional
    public RS update(ID id, RQ request) {
        E entity = this.find(id);

        E entityRequest = this.mapper.requestToEntity(request);

        BeanUtils.copyProperties(entityRequest, entity, "id");

        E voucherUpdated = this.repository.save(entity);

        return this.mapper.entityToResponse(voucherUpdated);

    }

    @Override
    public void delete(ID id) {
        E entity = this.find(id);
        
        this.repository.delete(entity);
    }

    public E find(ID id){
        return this.repository.findById(id).orElseThrow(() -> new IdNotFoundException(this.getClass().getSimpleName()));
    }
}
