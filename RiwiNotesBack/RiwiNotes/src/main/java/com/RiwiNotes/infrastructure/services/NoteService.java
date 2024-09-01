package com.RiwiNotes.infrastructure.services;

import org.springframework.stereotype.Service;

import com.RiwiNotes.api.dto.request.NoteRequest;
import com.RiwiNotes.api.dto.response.NoteResponse;
import com.RiwiNotes.domain.entities.NoteEntity;
import com.RiwiNotes.infrastructure.abstract_services.INoteService;

@Service
public class NoteService 
    extends GenericService<NoteEntity,String,NoteRequest,NoteResponse> 
    implements INoteService
{
    
}
