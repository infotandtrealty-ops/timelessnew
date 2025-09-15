import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/navigation"; 
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";

import hero1 from "@/assets/faical.webp";
import hero2 from "@/assets/filler.jpg";
import hero3 from "@/assets/clinic.jpg";

const Hero = () => {
  const slides = [
    {
      image: hero1,
      heading: "Discover Your Destiny Through Vedic Astrology",
      text: "Get deep insights into your life, career, marriage, and health with precise astrological analysis based on your birth chart. Align your decisions with cosmic timing and divine direction. Our expert astrologers bring clarity, confidence, and divine guidance to your journey.",
      button: "Book Appointment",
    },
    {
      image: hero2,
      heading: "Find Balance in Life",
      text: "Life often feels overwhelming with uncertainty and stress. Our personalized astrology consultations help you find balance, peace of mind, and clarity in your decisions. Whether it’s relationships, work, or personal growth, we guide you toward harmony with cosmic wisdom.",
      button: "Book Appointment",
    },
    {
      image: hero3,
      heading: "Unlock Your Potential",
      text: "Your birth chart is a key to untapped opportunities. With astrology, unlock hidden talents, make confident career decisions, and overcome life’s obstacles. From love and marriage to health and financial growth, we provide insights that empower your future.",
      button: "Book Appointment",
    },
  ];

  return (
    <section className="relative min-h-screen">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content Section divided into 2 columns */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-20">
              
              {/* Left Side Content */}
              <div className="flex-1 flex flex-col justify-center text-left max-w-2xl">
                <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg tracking-wide">
                  {slide.heading}
                </h1>
                <p className="text-base md:text-xl text-white/90 mb-8 leading-relaxed font-light">
                  {slide.text}
                </p>
                <Button
                  variant="luxury"
                  size="xl"
                  className="font-semibold shadow-lg hover:scale-105 transition-transform"
                >
                  {slide.button}
                </Button>
              </div>

              {/* Right Side Lead Form */}
              <div className="flex-1 w-full max-w-md bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg mt-10 md:mt-0">
                <h2 className="text-2xl font-bold text-white mb-6">Get a Free Consultation</h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <Button
                    type="submit"
                    variant="luxury"
                    size="lg"
                    className="w-full font-semibold shadow-lg hover:scale-105 transition-transform"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Arrows */}
        <div className="swiper-button-prev !text-white !w-12 !h-12 !flex !items-center !justify-center !bg-black/40 hover:!bg-black/70 rounded-full absolute left-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
          ‹
        </div>
        <div className="swiper-button-next !text-white !w-12 !h-12 !flex !items-center !justify-center !bg-black/40 hover:!bg-black/70 rounded-full absolute right-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
          ›
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;

