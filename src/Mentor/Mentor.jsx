import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Mentor.css";
import bgUiux from "../assets/bg dan mentor/bg uiux.png";
import mentorUiux from "../assets/bg dan mentor/mentor uiux.png";
//
import bgMobiledev from "../assets/bg dan mentor/bg mobile dev.png";
import mentorMobiledev from "../assets/bg dan mentor/mentor mobile dev.png";
//
import bgFedev from "../assets/bg dan mentor/bg fe dev.png";
import mentorFedev from "../assets/bg dan mentor/mentor fe dev.png";
//
import bgFullstack from "../assets/bg dan mentor/bg fullstack dev.png";
import mentorFullstack from "../assets/bg dan mentor/mentor fullstack dev.png";
//
import bgCyber from "../assets/bg dan mentor/bg ciber security.png";
import mentorCyber from "../assets/bg dan mentor/mentor cyber security.png";
//
import bgBlockchain from "../assets/bg dan mentor/bg blockchain.png";
import mentorBlockchain from "../assets/bg dan mentor/mentor blockchain.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Mentor = () => {
  return (
    <div className="parent">
      <div className="parent-text-mentor">
        <span className="text-mentor">
          Mentor Beperpengalaman dari perusahan ternama
        </span>
      </div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        <div className="slider">
          <img src={bgUiux} alt="" />
          <div className="content-mentor">
            <img className="img-mentor" src={mentorUiux} alt="" />
            <div>
              <p>
                Charlize Wijaya | UI/UX at{" "}
                <span className="pt-mentor">roboCORP</span>
              </p>
            </div>
          </div>
          <div className="parent-line">
            <hr className="line-card" />
          </div>
          <div className="btn-mentor">
            <button className="btn-card-mentor">Reguler</button>
            <button className="btn-card-mentor">Pemberkasan</button>
          </div>
          <div className="parent-line">
            <hr className="line-card" />
          </div>
          <div className="parent-ratting">
            <img
              className="bintang-lima"
              src="https://static.vecteezy.com/system/resources/previews/003/355/389/original/five-5-star-rank-sign-illustration-free-vector.jpg"
              alt=""
            />
          </div>
          <div className="parent-btn-daftar-sekarang">
            <button className="btn-daftar-sekarang">DAFTAR SEKARANG</button>
          </div>
        </div>

        {/*  */}

        <div className="slider">
          <img src={bgMobiledev} alt="" />
          <div className="content-mentor">
            <img className="img-mentor" src={mentorMobiledev} alt="" />
            <div>
              <p>
                David Clayton | Mobile Dev at{" "}
                <span className="pt-mentor">TESLA</span>
              </p>
            </div>
          </div>
          <div className="parent-line">
            <hr className="line-card" />
          </div>
          <div className="btn-mentor">
            <button className="btn-card-mentor">Reguler</button>
            <button className="btn-card-mentor">Pemberkasan</button>
          </div>
          <div className="parent-line">
            <hr className="line-card" />
          </div>
          <div className="parent-ratting">
            <img
              className="bintang-lima"
              src="https://static.vecteezy.com/system/resources/previews/003/355/389/original/five-5-star-rank-sign-illustration-free-vector.jpg"
              alt=""
            />
          </div>
          <div className="parent-btn-daftar-sekarang">
            <button className="btn-daftar-sekarang">DAFTAR SEKARANG</button>
          </div>
        </div>

        {/*  */}

        <div className="slider">
          <img src={bgFedev} alt="" />
          <div className="content-mentor">
            <img className="img-mentor" src={mentorFedev} alt="" />
            <div>
              <p>
                Aditya | Frontend Dev at{" "}
                <span className="pt-mentor">LINKpedia</span>
              </p>
            </div>
          </div>
          <div className="parent-line">
            <hr className="line-card" />
          </div>
          <div className="btn-mentor">
            <button className="btn-card-mentor">Reguler</button>
            <button className="btn-card-mentor">Pemberkasan</button>
          </div>
          <div className="parent-line">
            <hr className="line-card" />
          </div>
          <div className="parent-ratting">
            <img
              className="bintang-lima"
              src="https://static.vecteezy.com/system/resources/previews/003/355/389/original/five-5-star-rank-sign-illustration-free-vector.jpg"
              alt=""
            />
          </div>
          <div className="parent-btn-daftar-sekarang">
            <button className="btn-daftar-sekarang">DAFTAR SEKARANG</button>
          </div>
        </div>

        {/*  */}

        <div className="slider">
          <img src={bgFullstack} alt="" />
          <div className="content-mentor">
            <img className="img-mentor" src={mentorFullstack} alt="" />
            <div>
              <p>
                Oktaviana | Fullstack Dev at{" "}
                <span className="pt-mentor">IT Family</span>
              </p>
            </div>
          </div>
          <div className="parent-line">
            <hr className="line-card" />
          </div>
          <div className="btn-mentor">
            <button className="btn-card-mentor">Reguler</button>
            <button className="btn-card-mentor">Pemberkasan</button>
          </div>
          <div className="parent-line">
            <hr className="line-card" />
          </div>
          <div className="parent-ratting">
            <img
              className="bintang-lima"
              src="https://static.vecteezy.com/system/resources/previews/003/355/389/original/five-5-star-rank-sign-illustration-free-vector.jpg"
              alt=""
            />
          </div>
          <div className="parent-btn-daftar-sekarang">
            <button className="btn-daftar-sekarang">DAFTAR SEKARANG</button>
          </div>
        </div>

        {/*  */}

        <div className="slider">
          <img src={bgCyber} alt="" />
          <div className="content-mentor">
            <img className="img-mentor" src={mentorCyber} alt="" />
            <div>
              <p>
                Daniella | Cyber Security at{" "}
                <span className="pt-mentor">PRO Tech</span>
              </p>
            </div>
          </div>
          <div className="parent-line">
            <hr className="line-card" />
          </div>
          <div className="btn-mentor">
            <button className="btn-card-mentor">Reguler</button>
            <button className="btn-card-mentor">Pemberkasan</button>
          </div>
          <div className="parent-line">
            <hr className="line-card" />
          </div>
          <div className="parent-ratting">
            <img
              className="bintang-lima"
              src="https://static.vecteezy.com/system/resources/previews/003/355/389/original/five-5-star-rank-sign-illustration-free-vector.jpg"
              alt=""
            />
          </div>
          <div className="parent-btn-daftar-sekarang">
            <button className="btn-daftar-sekarang">DAFTAR SEKARANG</button>
          </div>
        </div>

        {/*  */}

        <div className="slider">
          <img src={bgBlockchain} alt="" />
          <div className="content-mentor">
            <img className="img-mentor" src={mentorBlockchain} alt="" />
            <div>
              <p>
                Prasetya | Blockchain Dev at{" "}
                <span className="pt-mentor">RumahTrade</span>
              </p>
            </div>
          </div>
          <div className="parent-line">
            <hr className="line-card" />
          </div>
          <div className="btn-mentor">
            <button className="btn-card-mentor">Reguler</button>
            <button className="btn-card-mentor">Pemberkasan</button>
          </div>
          <div className="parent-line">
            <hr className="line-card" />
          </div>
          <div className="parent-ratting">
            <img
              className="bintang-lima"
              src="https://static.vecteezy.com/system/resources/previews/003/355/389/original/five-5-star-rank-sign-illustration-free-vector.jpg"
              alt=""
            />
          </div>
          <div className="parent-btn-daftar-sekarang">
            <button className="btn-daftar-sekarang">DAFTAR SEKARANG</button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default Mentor;
