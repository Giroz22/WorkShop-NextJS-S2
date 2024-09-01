package com.RiwiNotes.infrastructure.abstract_services;

import com.RiwiNotes.api.dto.request.NoteRequest;
import com.RiwiNotes.api.dto.response.NoteResponse;
import com.RiwiNotes.domain.entities.NoteEntity;

public interface INoteService extends IGenericService<NoteEntity,String,NoteRequest,NoteResponse>{
    
}
