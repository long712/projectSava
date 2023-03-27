import React from "react";
import video1 from "../../../accsets/img/video1.png";
import video2 from "../../../accsets/img/video2.png";
import arrowNext from "../../../accsets/img/arrowNext.png";
import BasieTitle from "../../../conponents/title";
import "./style.css";
import { useTranslation } from "react-i18next";

const NeededFeatures = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const { t } = useTranslation();

  const contents = [
    "Access to multiple Meeting VR teams",
    "Possibility to order custom rooms",
    "Choose from preset avatars or Avatar generated from selfie",
    "Meeting moderator panel",
    "Persistent content in rooms",
    "Save and export notes, screenshots & whiteboards",
    "Use whiteboards and sticky notes",
    "Hand Tracking technique (simulating virtual hand activity)",
    "Display remote desktop activity (Remote desktop streaming) to VR space",
    "Using Voice zones",
    "Upload and use your own files (images, videos, documents, 360 and 3D files)",
    "Schedule meetings",
  ];

  const slides = [
    {
      name: video1,
      className: "video1",
    },
    {
      name: video2,
      className: "video2",
    },

    {
      name: video2,
      className: "video2",
    },
  ];
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const content = "NEEDED FEATURES";
  return (
    <div className="NeededFeatures-container">
      <div className="NeededFeatures-content">
        <BasieTitle content={content} />
        <div className="NeededFeatures-content-slide">
          <div className="slide-content-title">
            <h1 className="slide-title">{t("OUR MEETING ROOM")}</h1>
            <div className="slide-video">
              <img
                src={slides[currentSlide].name}
                className={slides[currentSlide].className}
                alt=""
              />
              <img
                src={slides[(currentSlide + 1) % slides.length].name}
                alt=""
                className={slides[(currentSlide + 1) % slides.length].className}
              />
              {/* <img src={video1} alt="" className="video1" />
              <img src={video2} alt="" className="video2" /> */}
              <img
                src={arrowNext}
                alt=""
                height="100%"
                className="arrowNext"
                onClick={nextSlide}
              />
            </div>
          </div>
          <div className="slide-content">
            <div className="NeededFeatures-content-paragraph">
              <ul>
                {contents.map((item, index) => (
                  <li key={index}>{t(item)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default NeededFeatures;
