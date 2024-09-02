"use client";

import { Button } from "@mui/base";
import React, { useState } from "react";
import ModalNote from "./ModalNote";
import { noteType } from "../service/NoteService";

function Note(dbDataNote: noteType) {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  const handlerBtn = (id: string) => {
    handleOpen();
  };

  return (
    <>
      <Button
        onClick={() => handlerBtn(dbDataNote.id)}
        className="w-44 h-min p-4 rounded-lg flex flex-col justify-between gap-4 bg-neutral-600 shadow-lg text-neutral-200 hover:scale-110 transition hover:-odd:rotate-1 hover:even:rotate-1 overflow-hidden"
      >
        <h2 className="text-lg font-bold truncate">{dbDataNote.title}</h2>
        <p className="text-neutral-400 truncate">{dbDataNote.content}</p>
        <span className="text-sm text-neutral-400">{dbDataNote.createdAt}</span>
      </Button>
      {openModal && (
        <ModalNote handleClose={handleClose} dbDataNote={dbDataNote} />
      )}
    </>
  );
}

export default Note;
