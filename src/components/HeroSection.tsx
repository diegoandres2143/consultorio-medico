import React from "react";

const HeroSection = () => (
  <section
    id="inicio"
    className="pt-20 bg-gradient-to-b from-[#0FAEBF] to-[#023E73] text-white"
    data-aos="zoom-out-down"
  >
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold">
            Consultorio Médico <br /> Dr. Garces
          </h1>
          <p className="text-xl italic">
            Servimos con Dignidad y Honestidad.
          </p>
          <a
            href="https://wa.me/573002171407"
            className="inline-block bg-[#0FAEBF] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#32628C] transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Cita
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="/Foto Nilson FINAL.jpeg"
            alt="Doctor Nelson en su consultorio"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
