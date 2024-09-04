"use client";

import { Button } from "@mui/base";
import React, { useState } from "react";
import ModalNote from "./ModalNote";
import { noteType } from "../service/NoteService";

function Note({ id, title, content, createdAt }: noteType) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleOpen = () => {
    setIsModalOpen(true);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => handleOpen()}
        className="w-44 h-min p-4 rounded-lg flex flex-col justify-between gap-4 bg-neutral-600 text-neutral-200 shadow-md shadow-neutral-500 hover:shadow-yellow-500 hover:scale-110 transition hover:-odd:rotate-1 hover:even:rotate-1 overflow-hidden"
      >
        <h2 className="w-full text-left text-lg font-bold truncate">
          {title != "" ? title : content.split(" ", 1)[0]}
        </h2>
        <p className="w-full max-h-12 text-left text-neutral-400 overflow-y-hidden">
          {content != "" ? content : "No text"}
        </p>
        <span className="text-sm text-neutral-400">{createdAt}</span>
      </Button>
      {isModalOpen && (
        <ModalNote
          handleClose={handleClose}
          dbDataNote={{ id, title, content, createdAt }}
        />
      )}
    </>
  );
}

export default Note;
