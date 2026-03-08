
import banner from "../assets/banner-img.png";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />

      <section id="home" className="w-full flex justify-center site-body">
        <div className="w-full max-w-330 grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-6">
          {/* TEXT */}
          <div className="md:col-span-7 mt-10 md:mt-16 text-center md:text-left">
            <h1 className="hero-heading text-[34px] sm:text-[40px] md:text-[48px] lg:text-[65px] leading-[1.02] font-normal">
              With <span className="hero-em font-semibold">Her</span>, in <br />
              Every <span className="hero-em font-semibold">Season</span> of
              Life
            </h1>

            <p className="mt-4 text-[14px] sm:text-[16px] max-w-130 mx-auto md:mx-0 text-gray-600 leading-[1.6]">
              Ayurvedic care designed to support, heal, and empower every phase
              of womanhood.
            </p>

            <div className="mt-6 flex justify-center md:justify-start">
              <button
                className="inline-flex items-center justify-center px-7 py-3 rounded-full text-white text-[15px] font-medium shadow-2xl
                bg-linear-to-r from-(--brand-purple-1) to-(--brand-purple-2)
                btn-pill-shadow"
              >
                Begin your healing journey with us
              </button>
            </div>

            {/* vertical line decorative */}
            <div className="hidden md:block mt-12 h-28 w-0.5 bg-gray-200"></div>
          </div>

          {/* ILLUSTRATION */}
          <div className="md:col-span-5 flex justify-center md:justify-end relative">
            <img
              src={banner}
              alt="hero illustration"
              className="w-65 sm:w-85 md:w-105 lg:w-130 object-contain grayscale-20 contrast-105"
            />

            {/* decorative smoke */}
            <div className="hidden md:block absolute -left-24 bottom-0 w-105 h-55 smoke-bottom rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  );
}
