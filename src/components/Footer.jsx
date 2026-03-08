import logo from "../assets/logo.svg";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center py-16 bg-white">
      <div className="w-full max-w-295 px-6 grid grid-cols-1 md:grid-cols-12 gap-10">

        {/* LOGO SECTION */}
        <div className="md:col-span-4 md:pr-10 md:border-r border-[#e5e5e5] text-center md:text-left">

          <img
            src={logo}
            alt="Bhaavni"
            className="w-50 mx-auto md:mx-0 mb-8"
          />

          <p className="text-[15px] text-[#333333] mb-4">
            Connect With Us
          </p>

          <div className="flex justify-center md:justify-start gap-4">

            <div className="w-9 h-9 flex items-center justify-center border border-[#e5e5e5] rounded-full">
              <Instagram size={18} />
            </div>

            <div className="w-9 h-9 flex items-center justify-center border border-[#e5e5e5] rounded-full">
              <Linkedin size={18} />
            </div>

          </div>

        </div>


        {/* RIGHT SIDE CONTENT */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center md:text-left">

          {/* SPECIALITIES */}
          <div>
            <h4 className="footer-heading">Specialities</h4>

            <ul className="footer-list">
              <li>Adolescent Health</li>
              <li>Reproductive Health</li>
              <li>Preconceptional Care</li>
              <li>Infertility Management</li>
              <li>Antenatal & Postnatal Care</li>
              <li>Menopausal Care</li>
            </ul>
          </div>


          {/* NAVIGATION */}
          <div>
            <h4 className="footer-heading">Navigation</h4>

            <ul className="footer-list">
              <li>Home</li>
              <li>About Us</li>
              <li>Why Reach Out</li>
              <li>Contact Us</li>
            </ul>
          </div>


          {/* ADDRESS */}
          <div>
            <h4 className="footer-heading">Address</h4>

            <p className="footer-text">
              Bhaavni Ayurveda <br />
              Nedumbassery, Kochi – 683572 <br />
              Kerala, India
            </p>

            <h4 className="footer-heading mt-6">Get in touch</h4>

            <p className="footer-text">
              WhatsApp: +91 94466 61280 <br />
              Email: info@bhaavniayurveda.com
            </p>
          </div>

        </div>


        {/* COPYRIGHT */}
        <div className="md:col-span-12 text-center mt-10 text-[14px] text-[#666666]">
          © 2025 Bhaavni Ayurveda. All rights reserved. Site by MWD
        </div>

      </div>
    </footer>
  );
}