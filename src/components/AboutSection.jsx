

import bottomImg from "../assets/bottom-img.png";
import imgOne from "../assets/img-one.jpg";
import middleImg from "../assets/middle-img.png";
import leftFlower from "../assets/left-flower.png";
import iconOne from "../assets/icon-one.png";
import iconTwo from "../assets/icon-two.png";
import iconThree from "../assets/icon-three.png";
import iconFour from "../assets/icon-four.png";
import iconFive from "../assets/icon-five.png";
import iconSix from "../assets/icon-six.png";
import rightFlower from "../assets/right-img.png";

const items = [
  { icon: iconOne, title: "Adolescent Health", desc: "nurturing balanced growth and menstrual harmony" },
  { icon: iconTwo, title: "Reproductive Health", desc: "promoting regular cycles and vitality" },
  { icon: iconThree, title: "Preconceptional Care", desc: "preparing mind and body for conception" },
  { icon: iconFour, title: "Infertility Management", desc: "gentle, time-tested methods to restore balance" },
  { icon: iconFive, title: "Antenatal & Postnatal Care", desc: "supporting safe pregnancy, recovery, and strength" },
  { icon: iconSix, title: "Menopausal Care", desc: "easing transition with grace and confidence" },
];

export default function AboutSection() {
  return (
    <>
      {/* ABOUT SECTION */}
      <section id="aboutus" className="relative w-full flex justify-center mt-20 overflow-visible">

        {/* Watercolor background */}
        <img
          src={middleImg}
          alt=""
          className="absolute pointer-events-none hidden md:block"
        />

        {/* Flower */}
        <img
          src={leftFlower}
          alt=""
          className="absolute -left-6 top-36 w-35 pointer-events-none hidden lg:block"
        />

        <div className="w-full max-w-295 grid grid-cols-1 md:grid-cols-12 items-center gap-10 relative z-10 px-6">

          {/* Image */}
          <div className="md:col-span-6">
            <img
              src={imgOne}
              alt="meditation"
              className="w-full rounded-[20px] shadow-lg object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:col-span-6 max-w-full md:max-w-130 text-center md:text-left">

            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[#5f5f5f]">
              Bhaavni is a dedicated Ayurvedic centre for women's health — a trusted companion offering authentic,
              natural, and exclusive care. Led by expertise in Prasuti Tantra evam Striroga (Ayurvedic
              Gynaecology & Obstetrics), we focus solely on women's health — helping you achieve hormonal balance,
              fertility goals, and lifelong wellness.
            </p>

            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[#5f5f5f] mt-6">
              Our approach blends classical Ayurvedic evaluation with modern understanding, offering a personalised
              journey built on privacy, trust, and compassionate communication. Each treatment plan is thoughtfully
              curated, combining detailed case taking, nutritional guidance, and mindful practices like yoga and
              meditation.
            </p>

            <button className="mt-6 text-[14px] text-[#7c6bb3] flex items-center justify-center md:justify-start gap-2">
              Learn More →
            </button>

          </div>
        </div>
      </section>


      {/* SPECIALITIES SECTION */}
      <section
        id="specialities"
        className="relative w-full flex justify-center py-10 mt-20 md:mt-32 bg-no-repeat bg-bottom bg-contain"
        style={{ backgroundImage: `url(${bottomImg})` }}
      >

        {/* Flower */}
        <img
          src={rightFlower}
          className="absolute right-0 bottom-10 w-30 pointer-events-none hidden lg:block"
        />

        <div className="w-full max-w-300 px-6">

          {/* Label */}
          <div className="mb-6 text-center md:text-left">
            <span className="text-[12px] border border-[#9a9a9a] px-6 py-2 rounded-full text-[#8a8a8a]">
              Specialities
            </span>
          </div>

          {/* Heading */}
          <h2 className="heading-font text-[28px] sm:text-[32px] md:text-[36px] leading-tight text-[#3c3c3c] max-w-full md:max-w-162.5 text-center md:text-left">
            A Curated Journey
            <br />
            of <span className="text-[#9a9a9a]">Ayurvedic Wellness</span> for Women
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {items.map((item, index) => (
              <div
                key={index}
                className="border border-[#e5e5e5] rounded-xl p-6 flex items-start gap-4 hover:shadow-sm transition"
              >

                <img src={item.icon} alt="" className="w-9.5 h-9.5" />

                <div>
                  <h4 className="text-[15px] font-medium text-[#3c3c3c]">
                    {item.title}
                  </h4>

                  <p className="text-[13px] text-[#8a8a8a] mt-1 leading-5">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}