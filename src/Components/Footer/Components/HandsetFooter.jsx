import React from "react";
import wctLogoWhite from "../../../assets/images/wctLogoWhite.svg";
import {
  Facebook,
  Instagram,
  Linkdin,
  Skype,
  Twitter,
  Youtube,
} from "../../SocialIcon";
import { appPathName } from "../../../data";
import { Link } from "react-router-dom";

const HandsetFooter = () => {
  const quickLinkData = [
    { name: "Home", navigateTo: appPathName.homePagePath },
    { name: "Career", navigateTo: appPathName.careerPath },
    { name: "About Us", navigateTo: appPathName.aboutUsPath },
    { name: "Contact Us", navigateTo: appPathName.contactUsPath },
    { name: "For Admins", navigateTo: appPathName.adminLoginPath },
  ];

  const serviceData = [
    { serviceName: "IT Project Staffing", navigateTo: "/" },
    { serviceName: "Managed Project Delivery", navigateTo: "/" },
    { serviceName: "Offshore Offerings", navigateTo: "/" },
    { serviceName: "Direct Placement", navigateTo: "/" },
  ];
  return (
    <div className="bg-[#141414] text-white">
      <div className="container mx-auto px-6">
        <img src={wctLogoWhite} className="mx-auto pt-12 pb-7" />

        <p className="text-center text-base pb-10">
          Hire the best team of professionals and get quality consistently.
        </p>

        <div className="flex items-baseline justify-between pb-12">
          {/* <Facebook /> */}
          {/* <Instagram /> */}
          {/* <Twitter /> */}
          <Linkdin />
          {/* <Youtube /> */}
          {/* <Skype /> */}
        </div>

        <div>
          <h4 className="text-center font-semibold text-2xl pb-7">
            Quicklinks
          </h4>

          {quickLinkData.map((quickLink, index) => (
            <div className="text-center py-1" key={index}>
              <Link to={quickLink.navigateTo}>{quickLink.name}</Link>
            </div>
          ))}
        </div>

        <div className="py-20">
          <h4 className="text-center font-semibold text-2xl pb-7">Services</h4>

          {serviceData.map((service, index) => (
            <div className="text-center py-1" key={index}>
              <Link to={service.navigateTo}>{service.serviceName}</Link>
            </div>
          ))}
        </div>

        <div className="pb-20">
          <div className="pb-12">
            <h5 className="font-bold text-2xl pb-6">
              Address &nbsp;{" "}
              <span className="font-light text-sm tracking-[3px]">
                HEADQUARTERS
              </span>
            </h5>

            <h4 className="text-2xl">Pennsylvania, USA</h4>
            <p className="mt-1 font-light">
              630 Municipal Drive, Suite # 400 <br /> Nazareth PA 18064
            </p>
          </div>

          <div className="grid grid-cols-12 py-3">
            <div className="col-span-4">
              <p className="font-semibold">Email</p>
            </div>
            <div className="col-span-8">
              <a href="mailto: info@whitecollartech.com">
                <p>info@whitecollartech.com</p>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-12 py-3">
            <div className="col-span-4">
              <p className="font-semibold">Phone</p>
            </div>
            <div className="col-span-8">
              <a href="tel:+14842981111">
                <p>484-298-1111</p>
              </a>
            </div>
          </div>
        </div>

        <p className="text-center pb-7">Privacy Policy</p>
        <p className="text-center pb-20">Terms & Conditions</p>
        <p className="text-center text-xs pb-12">
          Copyright © 2023 White Collar Technologies
        </p>
      </div>
    </div>
  );
};

export default HandsetFooter;
