import React from "react";

const WcLocationsCard = ({ iframeSrc, city, country, locationInfo }) => {
  return (
    <>
      <iframe
        src={iframeSrc}
        height="289"
        loading="lazy"
        className="w-full rounded-2xl"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="mt-7">
        <h2 className="font-light text-[40px]">
          {city},<br />
          {country}
        </h2>

        <p className="mt-3 font-light">{locationInfo}</p>
      </div>
    </>
  );
};

export default WcLocationsCard;
