import React from "react";

const services = [
  {
    title: "Consulta médica general",
    description:
      "Brindamos atención integral y personalizada para niños, adolescentes y adultos, enfocándonos en la prevención, diagnóstico y tratamiento de enfermedades comunes. Nuestro objetivo es garantizar tu bienestar y ofrecerte soluciones médicas confiables y profesionales.",
  },
  {
    title: "Asesoría anticonceptiva",
    description:
      "Recibe orientación profesional y personalizada sobre métodos anticonceptivos, adaptada a tus necesidades y estilo de vida. Te ayudamos a tomar decisiones informadas para tu salud sexual y reproductiva, con total confidencialidad y respeto.",
  },
  {
    title: "Manejo de infecciones de transmisión sexual",
    description:
      "Diagnóstico, tratamiento y educación sobre infecciones de transmisión sexual (ITS), promoviendo una salud sexual segura y responsable. Te acompañamos en todo el proceso, resolviendo tus dudas y brindando el mejor cuidado médico.",
  },
  {
    title: "Lectura de resultados de laboratorio",
    description:
      "Interpretación médica detallada de pruebas como hemogramas, uroanálisis, glicemia, creatinina y estudios hormonales. Te explicamos tus resultados de manera clara y te orientamos sobre los pasos a seguir para tu salud.",
  },
  {
    title: "Interpretación de imágenes diagnósticas",
    description:
      "Evaluamos radiografías, ecografías, tomografías, resonancias magnéticas y electrocardiogramas para ofrecerte un diagnóstico preciso y profesional. Te ayudamos a comprender tus estudios y a tomar decisiones informadas sobre tu tratamiento.",
  },
  {
    title: "Procedimientos menores",
    description:
      "Realizamos procedimientos médicos básicos como inyectología, lavado de oídos, manejo de uñas encarnadas, cauterización de verrugas y retiro de implantes anticonceptivos, con profesionalismo y seguridad, priorizando tu comodidad y bienestar.",
  },
  {
    title: "Asesorías médico-legales",
    description:
      "Brindamos acompañamiento y asesoría en trámites médico-legales, como derechos de petición y tutelas, garantizando el respeto por tus derechos y el acceso a la salud. Te orientamos en cada paso del proceso legal relacionado con tu atención médica.",
  },
  {
    title: "Atención médica domiciliaria",
    description:
      "Servicio médico profesional en la comodidad de tu hogar, ideal para pacientes con movilidad reducida o que prefieren evitar desplazamientos. Incluye consultas, seguimiento y tratamientos básicos, siempre con atención humana y personalizada.",
  },
];

const Servicios = () => (
  <section
    id="servicios"
    className="py-20 bg-white"
    data-aos="zoom-out-left"
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#023E73]">
        Nuestros Servicios
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const imageSrc = `/${index + 1}.png`;
          return (
            <div
              key={index}
              className="flip-card cursor-pointer w-full h-80 focus:outline-none"
              tabIndex={0}
            >
              <div className="flip-card-inner w-full h-full">
                <div className="flip-card-front">
                  <h3 className="text-xl font-bold mb-4 text-[#32628C] text-center px-2">
                    {service.title}
                  </h3>
                  <img
                    src={imageSrc}
                    alt={service.title}
                    className="h-48 w-48 object-cover rounded-xl shadow mb-2 border-4 border-[#0FAEBF] mx-auto"
                  />
                  <span className="text-[#0FAEBF] text-sm mt-2">Haz click para ver detalles</span>
                </div>
                <div className="flip-card-back">
                  <h3 className="text-xl font-bold mb-4 text-[#0FAEBF] text-center">
                    {service.title}
                  </h3>
                  <p className="text-base text-justify px-4">{service.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Servicios;
