import React from "react";
import wctLogoLight from "../../../assets/images/wctLogoWhite.svg";
import {
  Facebook,
  Instagram,
  Linkdin,
  Skype,
  Twitter,
  Youtube,
} from "../../SocialIcon";

const Footer = () => {
  return (
    <div className="bg-[#141414] text-white">
      <div className="mx-[140px] pt-24 py-8">
        <div className="grid grid-cols-12 gap-28">
          <div className="col-span-3">
            <img src={wctLogoLight} />
            <p className="mt-9 mb-12 text-sm leading-6">
              Hire the best team of professionals and get quality consistently.{" "}
            </p>
            <div className="flex items-baseline justify-between mb-12">
              <Facebook />
              <Instagram />
              <Twitter />
              <Linkdin />
              <Youtube />
              <Skype />
            </div>

            <iframe
              className="rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.086714315409!2d-75.33808822339633!3d40.71610753736326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c46a74055a4495%3A0x3756958a42ab9252!2s630%20Municipal%20Dr%2C%20Nazareth%2C%20PA%2018064%2C%20USA!5e0!3m2!1sen!2sin!4v1683689479648!5m2!1sen!2sin"
              width="278"
              height="183"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="col-span-9">
            <div className="flex items-start justify-between mb-5">
              <div>
                <h5 className="font-bold text-2xl pb-6">
                  Address &nbsp;{" "}
                  <span className="font-light text-sm tracking-[3px]">
                    HEADQUARTERS
                  </span>
                </h5>

                <h4 className="text-2xl">Pennsylvania, USA</h4>
                <p className="mt-1">
                  630 Municipal Drive, Suite # 400 <br /> Nazareth PA 18064
                </p>
              </div>
              <div>
                <h5 className="font-bold text-2xl pb-6">Email</h5>
                <a href="mailto: info@whitecollartech.com">
                  <p>info@whitecollartech.com</p>
                </a>
              </div>
              <div>
                <h5 className="font-bold text-2xl pb-6">Phone</h5>
                <a href="tel:+14842981111">
                  <p>484-298-1111</p>
                </a>
              </div>
            </div>

            <div style={{ height: "1px", backgroundColor: "white" }} />

            <div className="flex items-start justify-between mt-14">
              <div>
                <h5 className="font-bold text-2xl pb-6">Quicklinks</h5>

                <p className="cursor-pointer">Home</p>
                <p className="py-4 cursor-pointer">Career</p>
                <p className="cursor-pointer">About Us</p>
                <p className="py-4 cursor-pointer">Contact Us</p>
              </div>
              <div>
                <h5 className="font-bold text-2xl pb-6">Services</h5>

                <p className="cursor-pointer">IT Project Staffing</p>
                <p className="py-4 cursor-pointer">Managed Project Delivery</p>
                <p className="cursor-pointer">Offshore Offerings</p>
                <p className="py-4 cursor-pointer">Direct Placement</p>
              </div>

              <div>
                <h5 className="font-semibold text-4xl pb-6">Let's Talk</h5>

                <p className="mt-5 mb-7">
                  Let's setup a meeting and have a <br /> coffee session.
                </p>
                <button className="bg-white hover:bg-[#0055A5] text-black hover:text-white transition-all p-3 rounded-xl">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "1px", backgroundColor: "white" }} />

      <div className="mx-[140px] flex items-center justify-between py-8">
        <p className="">Copyright © 2023 White Collar</p>

        <div>
          <p className="inline-block mx-9">Privacy Policy</p>
          <p className="inline-block">Terms & Services</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
