import { Button } from "@mui/base/Button";

//Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useState } from "react";

//Type
import { noteType } from "@/app/service/NoteService";

interface modalPropsTypes {
  dbDataNote: noteType;
  handleClose: () => void;
}

export default function ModalNote({
  dbDataNote,
  handleClose,
}: modalPropsTypes) {
  const [dataNote, setDataNote] = useState(dbDataNote);

  const handleBackBtn = () => {
    //Be close the modal
    handleClose();

    //Show data
    if (dataNote != dbDataNote) {
      console.log("Sending to DB...");
      dbDataNote = dataNote;
    } else {
      console.log("Don't sent to DB...");
    }
  };

  return (
    <div className="w-screen h-screen absolute top-0 z-50 flex flex-col justify-center items-center  bg-neutral-900/75">
      <div
        id="modalNote"
        className="w-3/5 h-4/5 p-5 flex flex-col gap-5  rounded-md overflow-y-auto"
      >
        <div className="w-full flex justify-between items-center">
          <Button onClick={() => handleBackBtn()}>
            <ArrowBackIcon fontSize="large" className="hover:text-yellow-500" />
          </Button>
        </div>
        <div className="w-full h-full flex flex-col gap-2 py-6 px-4 rounded-md bg-neutral-600/95">
          <input
            type="text"
            placeholder="Title"
            className="w-full bg-transparent px-2 text-white outline-none border-none"
            defaultValue={dataNote.title}
            onChange={(event) =>
              setDataNote({ ...dataNote, title: event.target.value })
            }
          />
          <div className="w-full bg-transparent px-2 text-neutral-400 text-sm">
            {dataNote.createdAt}
          </div>
          <textarea
            placeholder="Content"
            className="w-full h-full bg-transparent mt-2 p-2 text-white outline-none border-none "
            defaultValue={dataNote.content}
            onChange={(event) =>
              setDataNote({ ...dataNote, content: event.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
}
