import React from "react";
import Modal from "react-modal";

const MessageModal = ({ open, setOpen, msgVal, setMsgVal }) => {
  return (
    <Modal
      isOpen={open}
      style={{
        content: {
          maxHeight: "391px",
          maxWidth: "572px",
          borderRadius: "20px",
          top: "50%",
          left: "50%",
          background: "#F7F7F7",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <div className="">
        <div className="flex items-center justify-between">
          <p className="text-base">Message (Optional)</p>
          <p
            onClick={() => {
              setOpen(false);
            }}
            className="text-base text-[#0055A5] font-medium cursor-pointer"
          >
            Close X
          </p>
        </div>

        <textarea
          value={msgVal}
          onChange={(e) => setMsgVal(e.target.value)}
          style={{ minHeight: "250px" }}
          className="w-full bg-white rounded-2xl my-4 p-2"
          placeholder="Write your message here..."
        ></textarea>

        <button
          onClick={() => {
            if (msgVal) setOpen(false);
          }}
          className="bg-[#0055A5] text-white hover:bg-[#141414] px-4 py-2 rounded-lg transition-all float-right"
        >
          Submit{" "}
        </button>
      </div>
    </Modal>
  );
};

export default MessageModal;
