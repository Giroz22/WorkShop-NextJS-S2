package com.RiwiNotes.api.dto.request;

import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class NoteRequest {
    @Size(max = 100, message = "The title can't ber longer than 100 characters")
    private String title;

    //@NotBlank(message = "The content can't be void")
    private String content;
}
