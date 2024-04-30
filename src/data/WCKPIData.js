import directPlacement from "../assets/images/directPlacement.png";
import itProjectStaffing from "../assets/images/itProjectStaffing.webp";
import managedProjectDelivery from "../assets/images/managedProjectDelivery.webp";
import offShoreOffering from "../assets/images/offShoreOffering.png";
import appPathName from "./appPathName";

const WCKPIData = [
  {
    image: itProjectStaffing,
    title: "Project Staffing",
    description:
      "We are the best recruiters when it comes to providing you with professionals including business analysts, QA specialists, project managers, technical writers, or computer system validation experts.",
    ctaLink: appPathName.contactUsPath,
  },
  {
    image: managedProjectDelivery,
    title: "Managed Project Delivery",
    description:
      "Successfully execute your projects, on time, on budget, and with quality by hiring our highly skilled team of industry experts. Get your pick of the pool of talent that we have and elevate your business.",
    ctaLink: appPathName.contactUsPath,
  },
  {
    image: offShoreOffering,
    title: "Offshore Offerings",
    description:
      "We provide both offshore and nearshore professionals for your IT projects. This way you can avail the benefits of different timezones or outsource your work nearby in the same timezone.",
    ctaLink: appPathName.contactUsPath,
  },
  {
    image: directPlacement,
    title: "Direct Placement",
    description:
      "We match the top industry candidates seeking opportunities and placements with businesses and provide them with a team of highly-seasoned, gifted professionals.",
    ctaLink: appPathName.contactUsPath,
  },
];

export default WCKPIData;
