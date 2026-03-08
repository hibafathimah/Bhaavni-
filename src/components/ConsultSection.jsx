import React from "react";
import Sketch from "../assets/consult-illustration.png";

export default function ConsultSection() {
  return (
    <section className="w-full flex justify-center py-16 md:py-20">
      <div className="w-full max-w-295 px-6 grid grid-cols-1 md:grid-cols-12 items-center gap-10">

        {/* IMAGE */}
        <div className="md:col-span-7 flex justify-center md:justify-start">
          <img
            src={Sketch}
            alt="sketch illustration"
            className="w-65 sm:w-[320px] md:w-full object-contain sketch-img"
          />
        </div>

        {/* TEXT */}
        <div className="md:col-span-5 text-center md:text-left">

          <h3 className="consult-heading
          text-[24px]
          sm:text-[28px]
          md:text-[30px]
          lg:text-[32px]">

            <span className="text-[#8b8b8b] font-normal">
              Consult
            </span>{" "}
            from <br />

            <span className="font-medium">
              Anywhere
            </span>

          </h3>

          <p className="mt-6 text-[14px] sm:text-[15px] leading-[1.7] text-[#666666] max-w-105 mx-auto md:mx-0">
            Start your Ayurvedic care from home. Our virtual consultations
            connect you with expert doctors, delivering authentic,
            evidence-based Ayurvedic gynaecology to women in India and around
            the world.
          </p>

          <div className="mt-8">
            <button className="bg-[#4E4489] px-6 py-2 rounded-full shadow-md text-white">
              Connect With Us Today
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}