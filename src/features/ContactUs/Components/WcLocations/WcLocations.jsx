import React from "react";
import locationInfoData from "../../../../data/locationInfoData";
import WcLocationsCard from "./WcLocationsCard";

const WcLocations = () => {
  return (
    <div className="mx-0 sm:mx-36 mt-20 sm:mt-48 px-6 sm:px-0">
      <div>
        <h2 className="font-light text-4xl sm:text-[45px] text-center">
          Our global office network
        </h2>
        <p className="text-center pt-4">
          We are slowly expanding to a global presence but in the meantime, you
          can <br className="hidden sm:block" /> find us in the USA, Canada as
          well as in India.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8 sm:gap-28 my-24">
        <div className="col-span-12 sm:col-span-6 place-self-center">
          <p className="text-[#0055A5] tracking-widest">HEADQUARTERS</p>

          <h1 className="text-5xl sm:text-6xl font-normal leading-normal">
            Pennsylvania, <br /> USA
          </h1>

          <p className="text-2xl font-light mt-5">
            630 Municipal Drive, Suite # 400 Nazareth PA 18064
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6">
          <iframe
            src={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.086714315409!2d-75.33808822339633!3d40.71610753736326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c46a74055a4495%3A0x3756958a42ab9252!2s630%20Municipal%20Dr%2C%20Nazareth%2C%20PA%2018064%2C%20USA!5e0!3m2!1sen!2sin!4v1683601450133!5m2!1sen!2sin"
            }
            height="364"
            loading="lazy"
            className="w-full rounded-2xl"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <h2 className="font-light text-4xl sm:text-[45px] text-center">
        Our other offices
      </h2>

      <div className="grid grid-cols-12 gap-4 mt-7 sm:mt-20 mb-20 sm:mb-36">
        {locationInfoData.map((location, index) => (
          <div key={index} className="col-span-12 sm:col-span-4">
            <WcLocationsCard {...location} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WcLocations;
