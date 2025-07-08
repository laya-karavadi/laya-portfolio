import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { illustration, contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);

  // Debug log the entire contactInfo object
  console.log("contactInfo object:", contactInfo);

  // Safely extract values with fallbacks for debugging display
  const title = contactInfo?.title ?? "No contact title provided";
  const subtitle = contactInfo?.subtitle ?? "No contact subtitle provided";
  const number = contactInfo?.number ?? "No phone number provided";
  const emailAddr = contactInfo?.email_address ?? "No email address provided";

  // Log individual fields
  console.log("Contact title:", title);
  console.log("Contact subtitle:", subtitle);
  console.log("Contact number:", number);
  console.log("Contact email:", emailAddr);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className={isDark ? "dark-mode contact-title" : "contact-title"}>
              {title}
            </h1>
            <p className={isDark ? "dark-mode contact-subtitle" : "subTitle contact-subtitle"}>
              {subtitle}
            </p>
            <div className={isDark ? "dark-mode contact-text-div" : "contact-text-div"}>
              {/* Only render phone link if number is defined and valid */}
              {number && number !== "No phone number provided" ? (
                <>
                  <a className="contact-detail" href={"tel:" + number.replace(/[^0-9+]/g, "")}>
                    {number}
                  </a>
                  <br />
                  <br />
                </>
              ) : (
                <p style={{ color: "red" }}>Phone number missing!</p>
              )}

              {/* Only render email link if email is defined */}
              {emailAddr && emailAddr !== "No email address provided" ? (
                <a className="contact-detail-email" href={"mailto:" + emailAddr}>
                  {emailAddr}
                </a>
              ) : (
                <p style={{ color: "red" }}>Email address missing!</p>
              )}

              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
