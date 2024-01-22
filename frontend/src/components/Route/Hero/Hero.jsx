import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import visitandbuy_banner from "../../../Assests/visitandbuy_banner.jpg";
import visitandbuy_mobile_banner from "../../../Assests/visitandbuy_mobile_banner.jpg";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[40vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
    >
      {/* Mobile Version: Show on screens smaller than 800px */}
      <div className={`md:hidden ${styles.section} w-full`}>
        {/* Replace the mobile banner image here */}
        <img
          src={visitandbuy_mobile_banner}
          alt="Mobile Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Desktop Version: Show on screens 800px and larger */}
      <div className={`hidden md:block ${styles.section} w-full hidden`}>
        {/* Replace the desktop banner content here */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> */}
        <img
          src={visitandbuy_banner}
          alt="Desktop Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
