import { Button } from "@mui/base";
import React, { useState } from "react";
import ModalNote from "./ModalNote";

//Icons
import AddIcon from "@mui/icons-material/Add";

function AddNote() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  const handlerBtn = () => {
    handleOpen();
  };
  return (
    <>
      <Button
        onClick={() => handlerBtn()}
        className="rounded-full w-8 h-8 flex justify-center items-center bg-yellow-600 hover:scale-110 transition"
      >
        <AddIcon />
      </Button>
      {openModal && <ModalNote handleClose={handleClose} />}
    </>
  );
}

export default AddNote;
