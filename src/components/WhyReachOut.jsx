
import f1 from "../assets/feature-img-one.jpg";
import f2 from "../assets/feature-img-two.jpg";
import f3 from "../assets/feature-img-three.jpg";
import f4 from "../assets/feature-img-four.jpg";

const cards = [
  {
    img: f1,
    title:
      "Learn about Ayurveda's specialised approach to women's reproductive and hormonal health.",
  },
  {
    img: f2,
    title:
      "Receive personalised, confidential guidance tailored to your stage of life.",
  },
  {
    img: f3,
    title:
      "Begin with an online or in-person doctor — your first step toward balance and well-being.",
  },
  {
    img: f4,
    title:
      "Enquiries are always welcome; we're here to support, inform, and care.",
  },
];

function FeatureCard({ img, title }) {
  return (
    <article className="feature-card relative h-64 sm:h-72 lg:h-80 rounded-[18px] overflow-hidden">
      {/* background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${img})` }}
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 feature-card-overlay pointer-events-none" />

      {/* text */}
      <div className="absolute left-6 bottom-6 right-6">
        <p className="feature-card-text text-[14px] sm:text-[15px]">
          {title}
        </p>
      </div>
    </article>
  );
}

export default function WhyReachOut() {
  return (
    <section className="w-full flex justify-center mt-12 mb-20">
      <div className="w-full max-w-295 px-6">

        {/* label */}
        <div className="mb-4 text-center md:text-left">
          <span className="inline-block text-[13px] px-4 py-1 border border-[rgba(0,0,0,0.06)] rounded-full text-[#bfbfbf]">
            Why Reach Out
          </span>
        </div>

        {/* heading */}
        <div className="mb-8 text-center md:text-left">
          <h3 className="why-heading text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] leading-[1.35]">
            <span className="font-semibold">Bhaavni </span>
            stands as the first choice for women in every phase of life,
            where <span className="font-semibold">Ayurveda</span> becomes a lifelong health companion.
          </h3>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {cards.map((c, i) => (
            <FeatureCard key={i} img={c.img} title={c.title} />
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="w-full md:flex-1 text-center md:text-left">
            <div className="h-px bg-[#e6e6e6] w-full" />

            <p className="text-[15px] md:text-[16px] text-[#333333] mt-4">
              Discover wellness and harmony with Ayurveda
            </p>
          </div>

          <div>
            <button className="bg-[#4E4489] px-6 py-2 rounded-full shadow-md text-white">
              Book your consultation today
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}