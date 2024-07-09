import React from "react";
import ParticleConfig from "../../../assets/particle-config";
// import "./particleBackGround.css";
import Particles from "react-particles-js";

// import Particles from "react-particles";

const ParticleBackGround = () => {
  return (
    <div className="particleBackGround">
      <Particles params={ParticleConfig}></Particles>
    </div>
  );
};

export default ParticleBackGround;
