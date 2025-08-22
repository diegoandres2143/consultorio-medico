import React from "react";

const Biografia = () => (
  <section
    id="biografia"
    className="py-20 bg-[#023E73] text-white mt-20"
    data-aos="fade-left"
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#0FAEBF]">
        Biografía
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="flex justify-center">
          <img
            src="/Foto Nilson FINAL.jpeg"
            alt="Doctor Nilson Jesús Garces Córdoba"
            className="rounded-lg shadow-xl h-64 w-64 object-cover"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#0FAEBF]">Dr. Nilson Jesús Garces Córdoba</h3>
          <p className="text-white text-justify">
            Médico cirujano egresado de la Universidad de Antioquia, con amplia experiencia en atención primaria, medicina general y procedimientos menores. Comprometido con la salud y el bienestar de sus pacientes, ofrece un trato humano, ético y profesional. Su vocación de servicio y actualización constante lo convierten en una excelente opción para el cuidado médico domiciliario en Medellín y municipios aledaños.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Biografia;
