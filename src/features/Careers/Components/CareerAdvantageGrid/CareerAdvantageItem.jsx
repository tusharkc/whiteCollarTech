import { CheckOutlined } from "@ant-design/icons";
import React from "react";

const CareerAdvantageItem = ({ title, description }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <p className="font-semibold text-[22px]">{title}</p>
        <span className="flex items-center justify-center bg-[#ccdeed] p-1 rounded-full">
          <CheckOutlined style={{ color: "#0055a4" }} />
        </span>
      </div>
      <p className="font-light">{description}</p>
    </div>
  );
};

export default CareerAdvantageItem;
