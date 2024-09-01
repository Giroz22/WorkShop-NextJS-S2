package com.RiwiNotes.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.RiwiNotes.api.dto.errors.ErrorsResponse;
import com.RiwiNotes.infrastructure.services.GenericService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

public abstract class GenericController<E,ID,RQ,RS> {
    @Autowired
    protected GenericService<E,ID,RQ,RS> service;

    @Operation(summary = "Retrieves a list of all resources ")
    @ApiResponse(responseCode = "400", description = "Invalid query parameters",      
        content = {
            @Content(mediaType = "application/json", schema = @Schema(implementation = ErrorsResponse.class))
        }
    )
    @GetMapping("")
    public ResponseEntity<Page<RS>> getAll(
        @RequestParam(defaultValue = "1") int page, 
        @RequestParam(defaultValue = "5") int size
    )
    {
        return ResponseEntity.ok().body(this.service.findAll(page-1,size));
    }
    
    @Operation(summary = "Retrieves information about a specific resource.")
    @ApiResponse(responseCode = "400", description = "Resource not found.",      
        content = {
            @Content(mediaType = "application/json", schema = @Schema(implementation = ErrorsResponse.class))
        }
    )
    @GetMapping("/{id}")
    public ResponseEntity<RS> getById(@PathVariable ID id) {
        return ResponseEntity.ok().body(this.service.findById(id));
    }
    
    @Operation(summary = "Creates a new resource")
    @ApiResponse(responseCode = "400", description = "Incorrect or missing input data.",      
        content = {
            @Content(mediaType = "application/json", schema = @Schema(implementation = ErrorsResponse.class))
        }
    )
    @PostMapping("")
    public ResponseEntity<RS> create(@Validated @RequestBody RQ request) {
        return ResponseEntity.ok().body(this.service.create(request));
    }
    
    @Operation(summary = "Updates information about a specific resource.")
    @ApiResponse(responseCode = "400", description = "Incorrect or missing input data.",      
        content = {
            @Content(mediaType = "application/json", schema = @Schema(implementation = ErrorsResponse.class))
        }
    )
    @PutMapping("/{id}")
    public ResponseEntity<RS> update(@PathVariable ID id, @Validated @RequestBody RQ request) {    
        return ResponseEntity.ok().body(this.service.update(id, request));
    }

    @Operation(summary = "Deletes a specific resource.")
    @ApiResponse(responseCode = "400", description = "Incorrect or missing input data.",      
        content = {
            @Content(mediaType = "application/json", schema = @Schema(implementation = ErrorsResponse.class))
        }
    )
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable ID id){
        this.service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
