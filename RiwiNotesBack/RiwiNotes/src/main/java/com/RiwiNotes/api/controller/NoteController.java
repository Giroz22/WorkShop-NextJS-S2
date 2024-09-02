package com.RiwiNotes.api.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.RiwiNotes.api.dto.request.NoteRequest;
import com.RiwiNotes.api.dto.response.NoteResponse;
import com.RiwiNotes.domain.entities.NoteEntity;

@RestController
@RequestMapping(path = "/notes")
@CrossOrigin(origins = "http://localhost:3000")
public class NoteController extends GenericController<NoteEntity,String,NoteRequest,NoteResponse> {
    
}
