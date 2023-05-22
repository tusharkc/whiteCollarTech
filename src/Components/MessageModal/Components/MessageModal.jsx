import React from "react";
import Modal from "react-modal";
import useWindowSize from "../../../hooks/useWindowSize";

const MessageModal = ({ open, setOpen, msgVal, setMsgVal }) => {
  const { width } = useWindowSize();
  return (
    <Modal
      isOpen={open}
      style={{
        overlay: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: `${width > 1024 ? "0px" : "12px"}`,
        },
        content: {
          position: "initial",
          maxHeight: "391px",
          minWidth: `${width > 1024 ? "572px" : "100%"}`,
          borderRadius: "20px",
          background: "#F7F7F7",
        },
      }}
    >
      <>
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
          style={{ height: "250px" }}
          className="w-full bg-white rounded-2xl my-4 p-2 resize-none"
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
      </>
    </Modal>
  );
};

export default MessageModal;
