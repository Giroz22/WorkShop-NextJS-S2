package com.RiwiNotes.infrastructure.helpers.mappers;

import java.time.LocalDate;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.RiwiNotes.api.dto.request.NoteRequest;
import com.RiwiNotes.api.dto.response.NoteResponse;
import com.RiwiNotes.domain.entities.NoteEntity;

@Mapper(componentModel = "spring")
public abstract class NoteMapper implements IMapperBase<NoteEntity,NoteRequest,NoteResponse>{

    @Override
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    public NoteEntity requestToEntity(NoteRequest request){
        return NoteEntity.builder()
            .title(request.getTitle())
            .content(request.getContent())
            .createdAt(LocalDate.now())
            .build();
    }
}
