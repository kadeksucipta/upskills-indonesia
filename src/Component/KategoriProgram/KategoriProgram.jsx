import React from "react";
import "./KategoriProgram.css";
import uiux from "../../assets/program/program uiux.png";
import mobileapps from "../../assets/program/program mobile apps.png";
import reactdev from "../../assets/program/program react dev.png";
import fullstackdev from "../../assets/program/program full stack.png";
import cyber from "../../assets/program/program cyber security.png";
import blockchain from "../../assets/program/program blockchain.png";
import iconProgram from "../../assets/judul kategori program.png";

const KategoriProgram = () => {
  return (
    <React.Fragment>
      <div className="parent-kategori-program">
        <div className="parent-judul-kategori">
            <img className="icon-program" src={iconProgram} alt="" />
        </div>
        <div className="field-program">
          <img className="kategori-program" src={uiux} alt="" />
          <img className="kategori-program" src={mobileapps} alt="" />
          <img className="kategori-program" src={reactdev} alt="" />
          <img className="kategori-program" src={fullstackdev} alt="" />
          <img className="kategori-program" src={cyber} alt="" />
          <img className="kategori-program" src={blockchain} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default KategoriProgram;
