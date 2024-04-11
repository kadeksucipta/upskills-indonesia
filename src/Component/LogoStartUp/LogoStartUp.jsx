import React from "react";
import "./LogoStartUp.css"
import startUp from "../../assets/logo start up.png"

const LogoStartUp = () => {
  return (
    <React.Fragment>
      <div className="partner">
        <div className="text-partner">
          <span className="text-startup">2000+ Start Up Berkolaborasi dengan kami untuk memajukan karir siswa</span>
        </div>

        <div className="marquee">
          <div className="track">
            <div className="content">
              <img className="img-partner" src={startUp} alt="" />
              <img className="img-partner-2" src={startUp} alt="" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LogoStartUp;
