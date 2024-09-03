import React, { useState } from "react";
import { Button } from "@mui/base/Button";

//Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";

//Type
import { deleteNote, noteType, save, update } from "@/app/service/NoteService";

type modalPropsTypes = {
  dbDataNote?: noteType;
  handleClose: () => void;
};

export default function ModalNote({
  dbDataNote = {
    id: "",
    title: "",
    content: "",
    createdAt: "",
  },
  handleClose,
}: modalPropsTypes) {
  const [dataNote, setDataNote] = useState(dbDataNote);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (dataNote.id.length == 0) {
      console.log("Creating...");
      //Create
      await save(dataNote)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    } else {
      console.log("Updating...");
      //Update
      await update(dataNote)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }
  };

  const fetchDelete = async () => {
    await deleteNote(dataNote.id)
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
        alert("The note was deleted successful");
      });
  };

  const handleBackBtn = () => {
    //Be close the modal
    handleClose();

    //Show data
    if (dataNote != dbDataNote) {
      console.log("Sending to DB...");
      fetchData();
    }
  };

  const handleDeleteBtn = () => {
    const deleteNote: boolean = confirm("You are sure of delete the note");

    if (deleteNote) {
      fetchDelete();
      handleClose();
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
          {dataNote.id && (
            <Button onClick={() => handleDeleteBtn()}>
              <DeleteIcon fontSize="large" className="hover:text-red-500" />
            </Button>
          )}
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
