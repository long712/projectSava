import React from "react";
import Introduce from "./intro";
import Questions from "./questions";
import SupportForm from "./supportForm";

const Support = () => {
  return (
    <div>
      <Introduce />
      <SupportForm />
      <Questions />
    </div>
  );
};

export default Support;
