import React from "react";
import Development from "./development-stage";
import Goals from "./goals";
import Introduce from "./introduce";
import NeededFeatures from "./needed-features";
import New from "./new";
import UseCases from "./useCases";

const Home = () => {
  return (
    <div>
      <Introduce />
      <NeededFeatures />
      <UseCases />
      <Goals />
      <Development />
      <New />
    </div>
  );
};

export default Home;
