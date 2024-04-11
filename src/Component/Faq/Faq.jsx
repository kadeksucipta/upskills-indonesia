import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <React.Fragment>
      <div className="accordion">
        <h1>Paling Sering ditanyakan</h1>
        <div className="accordion-item">
          <input type="checkbox" id="accordion1" />
          <label htmlFor="accordion1" className="accordion-item-title">
            <span className="icon" />
            Berapa Jumlah Mentor dan Perusahan yang berkolaborasi dengan
            Upskills ?
          </label>
          <div className="accordion-item-desc">
            Upskills Berkolobarasi dengan 500+ Mentor dan 2000+ Perusahan
            ternama baik di Dalam maupun Luar Negeri
          </div>
        </div>
        <div className="accordion-item">
          <input type="checkbox" id="accordion2" />
          <label htmlFor="accordion2" className="accordion-item-title">
            <span className="icon" />
            Bagaimana cara mendaftar di Upskills ?
          </label>
          <div className="accordion-item-desc">
            1. Bisa dengan cara mendaftar dan membuat akun Upskills terlebih dahulu <br/>
            2. Atau dengan langsung Menghubungi Admin Upskills
          </div>
        </div>
        <div className="accordion-item">
          <input type="checkbox" id="accordion3" />
          <label htmlFor="accordion3" className="accordion-item-title">
            <span className="icon" />
            Apakah ada Program pemberkasan penyaluran kerja ?
          </label>
          <div className="accordion-item-desc">
            Ya, Upskills Memberikan benefit bagi para siswa untuk di bantu dalam penyaluran kerja
          </div>
        </div>
        <div className="accordion-item">
          <input type="checkbox" id="accordion4" />
          <label htmlFor="accordion4" className="accordion-item-title">
            <span className="icon" />
            Perusahaan apa saja yang berkolaboarasi dengan Upskill ?
          </label>
          <div className="accordion-item-desc">
            Perusahan yang berkolaboaradi dengan Upskills adalah : <br />
            1. Tokopedia <br />
            2. Ruang guru <br />
            3. Gojek <br />
            4. Aku Pintar Academy <br />
            5. Tekom Indonesia <br />
            6. Google Indonesia <br />
            7. TESLA <br />
            dan masih banyak perusahaan besar lainnya
          </div>
        </div>
        <div className="accordion-item">
          <input type="checkbox" id="accordion5" />
          <label htmlFor="accordion5" className="accordion-item-title">
            <span className="icon" />
            Kelas Apa saja yang tersedia di Upskills ?
          </label>
          <div className="accordion-item-desc">
            1. Kelas Web Desain <br />
            2. Kelas IT dan Web Programming <br />
            3. Kelas Cyber Security <br />
            4. Kelas Blockchain dan Web 3
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Faq;
