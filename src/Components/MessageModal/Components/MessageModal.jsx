import React from "react";
import Modal from "react-modal";

const MessageModal = ({ open, setOpen }) => {
  return (
    <Modal isOpen={open} className={"max-h-[391px]"}>
      <div className="">Hello</div>
    </Modal>
  );
};

export default MessageModal;
