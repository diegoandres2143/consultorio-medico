import React from "react";

const SobreNosotros = () => (
  <section id="sobre-nosotros" className="py-20" data-aos="fade-right">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#023E73]">
        Sobre Nosotros
      </h2>
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-[#32628C]">
          Descripción
        </h3>
        <p className="text-gray-700">
          Brindamos atención médica integral y de calidad en Medellín, Colombia. Ofrecemos servicios especializados como consultas generales, asesorías anticonceptivas, manejo de infecciones de transmisión sexual, procedimientos menores y atención médica domiciliaria. Nuestro compromiso es garantizar diagnósticos precisos, tratamientos efectivos y un trato humano y profesional. Agenda tu cita fácilmente y prioriza tu salud con nosotros.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#32628C]">
            Misión
          </h3>
          <p className="text-gray-700">
            Brindar atención médica integral y de calidad, basada en la ética, el profesionalismo y el compromiso con la salud de nuestros pacientes. Nos enfocamos en ofrecer diagnósticos precisos, tratamientos efectivos y un trato humano y cercano, asegurando el bienestar y la confianza de quienes nos eligen para su cuidado.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#32628C]">
            Visión
          </h3>
          <p className="text-gray-700">
            Ser un consultorio médico reconocido por su excelencia en la atención, innovación en tratamientos y compromiso con la salud de nuestros pacientes. Buscamos consolidarnos como un referente en el sector, ofreciendo un servicio que combine tecnología, calidez humana y un enfoque integral en el cuidado de la salud.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SobreNosotros;
