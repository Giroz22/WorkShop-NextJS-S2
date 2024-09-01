package com.RiwiNotes.domain.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.RiwiNotes.domain.entities.NoteEntity;

@Repository
public interface INoteRepository extends JpaRepository<NoteEntity, String>{
    
}
