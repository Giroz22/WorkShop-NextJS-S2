package com.RiwiNotes.infrastructure.helpers.mappers;

public interface IMapperBase<E,RQ,RS> {
    E requestToEntity(RQ request);    
    RS entityToResponse(E entity);
}
