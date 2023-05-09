import React from "react";

const WcLocationsCard = ({ imgSrc, state, country }) => {
  return (
    <>
      <div class="relative w-full overflow-hidden bg-cover bg-no-repeat">
        <img src={imgSrc} class="w-full" alt="Louvre" />
        <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-[#000] to-transparent opacity-70 rounded-3xl"></div>

        <p className="absolute bottom-0 font-light text-[40px] text-white p-4">
          {state}, <br /> {country}
        </p>
      </div>
    </>
  );
};

export default WcLocationsCard;
