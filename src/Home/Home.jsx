import React from "react";
import "./Home.css";
import Navbar from "../Component/Navbar/Navbar";
import model1 from "../assets/model/model hero 1.png";
import buku from "../assets/icon/icon belajar sekarang.png";
import coin from "../assets/icon/icon kosnultasi gratis.png";
import LogoStartUp from "../Component/LogoStartUp/LogoStartUp";
import KategoriProgram from "../Component/KategoriProgram/KategoriProgram";
import Mentor from "../Mentor/Mentor";
import Footer from "../Component/Footer/Footer";
import Faq from "../Component/Faq/Faq";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container-hero">
        <div className="field-hero">
          <div className="text">
            <h2 className="title-hero">
              Mulai Karirmu Sebagai Developer Profesional
            </h2>
            <span className="desk-hero">
              Satu - satunya Platform Edukasi di Bidang IT yang memberikan
              Sertifikaasi dan Jaminan Penyaluran kerja ke Luar Negeri baik
              Bekerja secara Remote atau pun Onsite
            </span>
            <div className="field-button">
              <button className="btn-belajar-sekarang">
                {" "}
                <img className="icon-buku" src={buku} alt="" /> BELAJAR SEKARANG
              </button>
              <button className="btn-konsultasi">
                {" "}
                <img className="icon-coin" src={coin} alt="" /> KONSULTASI
                GRATIS
              </button>
            </div>
          </div>
          {/* MODEL */}
          <img className="model-hero" src={model1} alt="" />
        </div>
      </div>
      <div className="field-kategory-startup">
        <LogoStartUp />
        <KategoriProgram />
      </div>
      <Mentor />
      <div className="container-faq">
        <Faq />
      </div>
      <div className="container-footer">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
