import React from "react";
import backgroundIntroduce from "../../accsets/img/backgroundIntroduce.png";
import "./style.css";

const BasieImgIntroduce = (props) => {
  const { imgIntroduce } = props;
  return (
    <div className="introduce-content-img">
      <img
        src={backgroundIntroduce}
        alt=""
        className="introduce-content-img-background"
      />
      <img
        src={imgIntroduce}
        alt=""
        className="introduce-content-img-content"
       
      />
    </div>
  );
};

export default BasieImgIntroduce;
