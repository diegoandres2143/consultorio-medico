import React, { useEffect } from "react";
import {
  Menu,
  Phone,
  Clock,
  Instagram,
  Facebook,
  ChevronDown,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Consulta médica general",
    description:
      "Atención integral para niños, adolescentes y adultos, enfocada en la prevención, diagnóstico y tratamiento de enfermedades comunes.",
    icon: "🩺",
  },
  {
    title: "Asesoría anticonceptiva",
    description:
      "Orientación profesional sobre métodos anticonceptivos para elegir la opción más adecuada según cada paciente.",
    icon: "💊",
  },
  {
    title: "Manejo de infecciones de transmisión sexual",
    description:
      "Diagnóstico, tratamiento y educación sobre ITS para una salud sexual segura y responsable.",
    icon: "🔬",
  },
  {
    title: "Lectura de resultados de laboratorio",
    description:
      "Interpretación médica de pruebas como hemogramas, uroanálisis, glicemia, creatinina y estudios hormonales.",
    icon: "📑",
  },
  {
    title: "Interpretación de imágenes diagnósticas",
    description:
      "Evaluación de radiografías, ecografías, tomografías, resonancias magnéticas y electrocardiogramas para un diagnóstico preciso.",
    icon: "🏥",
  },
  {
    title: "Procedimientos menores",
    description:
      "Servicios como inyectología, lavado de oídos, manejo de uñas encarnadas, cauterización de verrugas y retiro de implantes anticonceptivos.",
    icon: "💉",
  },
  {
    title: "Asesorías médico-legales",
    description:
      "Ofrecemos orientación personalizada en Derechos de petición y tutelas.",
    icon: "⚖️",
  },
  {
    title: "Atención médica domiciliaria",
    description:
      "Servicio médico en la comodidad de tu hogar, ideal para pacientes con movilidad reducida o que prefieren evitar desplazamientos. Incluye consultas, seguimiento y tratamientos básicos.",
    icon: "🏠",
  },
];

const faqs = [
  {
    question: "¿Cuánto dura la consulta?",
    answer: "La consulta tiene una duración aproximada de 30-45 minutos.",
    icon: "⏳",
  },
  {
    question: "¿Se atienden emergencias?",
    answer:
      "No, el consultorio ofrece citas programadas. En caso de emergencia, diríjase a un centro hospitalario.",
    icon: "🚑",
  },
  {
    question: "¿Cómo puedo pagar la consulta?",
    answer:
      "El pago se realiza directamente en efectivo, con el médico en el consultorio o por transferencia bancaria por medio de NEQUI o Bancolombia.",
    icon: "💳",
  },
  {
    question: "¿Puedo cancelar o reprogramar mi cita?",
    answer:
      "Sí, puedes cancelar o reprogramar tu cita con al menos 24 horas de anticipación. De lo contrario, se cobrará el valor de la consulta.",
    icon: "📅",
  },
  {
    question: "¿Qué debo llevar a la consulta?",
    answer:
      "Es importante llevar tu documento de identidad, carné de EPS, exámenes médicos recientes y la historia clínica de tratamientos previos.",
    icon: "📋",
  },
  {
    question: "¿Dónde está ubicado el consultorio?",
    answer:
      "Estamos ubicados dentro del “Centro médico y odontológico clásico.”",
    icon: "📍",
  },
];

const testimonials = [
  {
    text: "Excelente atención, muy profesional y amable.",
    author: "María R.",
  },
  {
    text: "Explicó todo con claridad y resolvió mis dudas.",
    author: "Carlos M.",
  },
  {
    text: "Lo recomiendo, gran médico y ser humano.",
    author: "Laura G.",
  },
];

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] overflow-x-hidden">
      {/* Navigation */}
      <nav
        className="bg-[#023E73] text-white fixed w-full z-50"
        data-aos="fade-right"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-white p-0 rounded-full">
                <img
                  src="/Logo Nilson.png"
                  alt="Logo Nilson"
                  className="h-12 w-12"
                />
              </div>
              <div className="text-xl font-bold ml-2">Dr. Garces</div>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu />
            </button>
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:block absolute md:relative top-full left-0 w-full md:w-auto bg-[#023E73] md:bg-transparent`}
            >
              <ul className="md:flex space-y-2 md:space-y-0 md:space-x-3 p-4 md:p-0">
                <li className="mb-2 md:mb-0">
                  <a
                    href="#inicio"
                    className="block px-4 py-2 rounded-full border-2 border-[#0FAEBF] hover:bg-[#0FAEBF] hover:text-white transition duration-300"
                  >
                    Inicio
                  </a>
                </li>
                <li className="mb-2 md:mb-0">
                  <a
                    href="#sobre-nosotros"
                    className="block px-4 py-2 rounded-full border-2 border-[#0FAEBF] hover:bg-[#0FAEBF] hover:text-white transition duration-300"
                  >
                    Sobre Nosotros
                  </a>
                </li>
                <li className="mb-2 md:mb-0">
                  <a
                    href="#conocenos"
                    className="block px-4 py-2 rounded-full border-2 border-[#0FAEBF] hover:bg-[#0FAEBF] hover:text-white transition duration-300"
                  >
                    Conócenos
                  </a>
                </li>
                <li className="mb-2 md:mb-0">
                  <a
                    href="#servicios"
                    className="block px-4 py-2 rounded-full border-2 border-[#0FAEBF] hover:bg-[#0FAEBF] hover:text-white transition duration-300"
                  >
                    Servicios
                  </a>
                </li>
                <li className="mb-2 md:mb-0">
                  <a
                    href="#como-funciona"
                    className="block px-4 py-2 rounded-full border-2 border-[#0FAEBF] hover:bg-[#0FAEBF] hover:text-white transition duration-300"
                  >
                    Cómo Funciona
                  </a>
                </li>
                <li className="mb-2 md:mb-0">
                  <a
                    href="#faq"
                    className="block px-4 py-2 rounded-full border-2 border-[#0FAEBF] hover:bg-[#0FAEBF] hover:text-white transition duration-300"
                  >
                    FAQ
                  </a>
                </li>
                <li className="mb-2 md:mb-0">
                  <a
                    href="#escribenos"
                    className="block px-4 py-2 rounded-full border-2 border-[#0FAEBF] hover:bg-[#0FAEBF] hover:text-white transition duration-300"
                  >
                    Escríbenos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Sobre Nosotros */}
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
              Brindamos atención médica integral y de calidad en Medellín,
              Colombia. Ofrecemos servicios especializados como consultas
              generales, asesorías anticonceptivas, manejo de infecciones de
              transmisión sexual, procedimientos menores y atención médica
              domiciliaria. Nuestro compromiso es garantizar diagnósticos
              precisos, tratamientos efectivos y un trato humano y profesional.
              Agenda tu cita fácilmente y prioriza tu salud con nosotros.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#32628C]">
                Misión
              </h3>
              <p className="text-gray-700">
                Brindar atención médica integral y de calidad, basada en la
                ética, el profesionalismo y el compromiso con la salud de
                nuestros pacientes. Nos enfocamos en ofrecer diagnósticos
                precisos, tratamientos efectivos y un trato humano y cercano,
                asegurando el bienestar y la confianza de quienes nos eligen
                para su cuidado.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#32628C]">
                Visión
              </h3>
              <p className="text-gray-700">
                Ser un consultorio médico reconocido por su excelencia en la
                atención, innovación en tratamientos y compromiso con la salud
                de nuestros pacientes. Buscamos consolidarnos como un referente
                en el sector, ofreciendo un servicio que combine tecnología,
                calidez humana y un enfoque integral en el cuidado de la salud.
              </p>
            </div>
          </div>

          {/* Conócenos
          <section
            id="conocenos"
            className="py-20 bg-gradient-to-b from-[#F2F2F2] to-[#E6E6E6]"
            data-aos="fade-up"
          >
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-[#023E73]">
                Conócenos
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { src: "/F1.jpg", alt: "Corredor" },
                  { src: "/F5.jpg", alt: "Consultorio por fuera" },
                  { src: "/F3.jpg", alt: "Sala de espera" },
                  { src: "/F4.jpg", alt: "Recepción" },
                  { src: "/F6.jpg", alt: "Vista exterior" },
                  { src: "/F2.jpg", alt: "Consultorio por dentro" },
                ].map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="rounded-lg shadow-lg w-full h-auto transform transition-transform duration-300 group-hover:scale-105 border-4 border-[#6a95bc]"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white text-lg font-semibold">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section> */}

          {/* Biografía */}
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
                    className="rounded-lg shadow-xl w-80 h-auto"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-xl">
                    <strong>Nilson Jesús Garces Córdoba</strong>
                  </p>
                  <p className="text-l">
                    Médico comprometido con el bienestar de sus pacientes,
                    ofreciendo un enfoque integral que combina ciencia, ética y
                    empatía. Con una sólida formación y experiencia en el campo
                    de la medicina, su objetivo es brindar diagnósticos precisos
                    y tratamientos efectivos, asegurando siempre un trato humano
                    y cercano. Su vocación por la salud lo impulsa a mantenerse
                    en constante actualización para ofrecer la mejor atención
                    posible.
                  </p>
                  <p className="text-xl">
                    <strong>Estudios:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Médico General - Universidad del Sinú</li>
                    <li>
                      Especialista en Gerencia de la calidad y Auditor en salud
                      - Universidad Cooperativa de Colombia
                    </li>
                    <li>
                      Especialista en Derecho Médico (En Curso) - Universidad
                      Cooperativa de Colombia
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="my-12 border-t-2 border-[#0FAEBF]" />
              <h3 className="text-2xl font-semibold mb-8 text-center text-[#0FAEBF]">
                Contamos con los siguientes certificados:
              </h3>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl mb-4">📄</div>
                  <h3 className="text-xl font-semibold">
                    Número de tarjeta profesional
                  </h3>
                </div>
                <div>
                  <div className="text-4xl mb-4">📑</div>
                  <h3 className="text-xl font-semibold">
                    Registro en el Rethus
                  </h3>
                </div>
                <div>
                  <div className="text-4xl mb-4">📜</div>
                  <h3 className="text-xl font-semibold">
                    Certificado de ética profesional
                  </h3>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <div className="mt-16" data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-8 text-center text-[#32628C]">
              Lo que dicen nuestros pacientes
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                  <p className="text-[#0FAEBF] font-semibold">
                    - {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
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
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#c0e6e7] p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-[#32628C]">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section id="como-funciona" className="py-20" data-aos="flip-right">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#023E73]">
            Cómo Funciona
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-3 text-[#32628C]">
                Paso 1
              </h3>
              <p className="text-gray-700">
                Oprima el botón de "Agendar cita", luego en WhatsApp llene sus
                datos y su fecha deseada.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📩</div>
              <h3 className="text-xl font-semibold mb-3 text-[#32628C]">
                Paso 2
              </h3>
              <p className="text-gray-700">
                Recibirá un mensaje por WhatsApp de confirmación o modificación
                de su cita.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-3 text-[#32628C]">
                Paso 3
              </h3>
              <p className="text-gray-700">
                Asista a su consulta en la fecha y hora indicadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Escríbenos */}
<section
  id="escribenos"
  className="py-20 bg-gradient-to-b from-[#E6E6E6] to-[#F2F2F2]"
  data-aos="fade-up"
>
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 text-[#023E73]">
      Escríbenos
    </h2>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Texto a la izquierda */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#32628C]">
          Escríbenos un mensaje
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Estamos aquí para ayudarte. La atención se maneja principalmente por
          WhatsApp, pero si prefieres contactarnos por otro medio o tienes
          dudas sobre nuestros servicios, puedes escribirnos a través del
          siguiente formulario. ¡Nos pondremos en contacto contigo lo antes
          posible!
        </p>
        <div className="flex items-center space-x-4 mt-6">
          <a
            href="https://wa.me/573002171407"
            className="flex items-center bg-[#0FAEBF] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#32628C] transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-2 h-5 w-5" />
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>

      {/* Formulario a la derecha */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-[#023E73]">Formulario</h3>
        <form
          action="/api/contact" // Cambia esta ruta según tu backend
          method="POST"
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:ring-[#0FAEBF] focus:border-[#0FAEBF]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:ring-[#0FAEBF] focus:border-[#0FAEBF]"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:ring-[#0FAEBF] focus:border-[#0FAEBF]"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Tema a tratar
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:ring-[#0FAEBF] focus:border-[#0FAEBF]"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Mensaje o descripción
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:ring-[#0FAEBF] focus:border-[#0FAEBF]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#0FAEBF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#32628C] transition duration-300"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white" data-aos="fade-left">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#023E73]">
            Preguntas Frecuentes
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-[#32628C] flex items-center">
                    <span className="mr-2">{faq.icon}</span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`transform transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-6 py-4 text-gray-700 ${
                    openFaq === index ? "block" : "hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-gradient-to-b from-[#0FAEBF] to-[#023E73] text-white py-12"
        data-aos="fade-right"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Información de Contacto
              </h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  <a
                    href="https://wa.me/573002171407"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +57 300 217 1407
                  </a>
                </p>
                <p className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  <span>Lunes a Sábado: 8:00 AM - 8:00 PM</span>
                </p>
              </div>
              <div className="mt-4 flex space-x-4">
                <a
                  href="https://www.instagram.com/consultoriomedicodrgarces/"
                  className="hover:text-[#0FAEBF] flex items-center space-x-2"
                >
                  <Instagram />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://m.facebook.com/61573190233989/"
                  className="hover:text-[#0FAEBF] flex items-center space-x-2"
                >
                  <Facebook />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-black-700">
            <p>
              &copy; 2025 Consultorio Médico - Dr. Garces. Todos los derechos
              reservados <br />
              <br /> Elaborado por Diego Andrés Candamil Puerta
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/573002171407"
        className="fixed bottom-4 right-4 bg-[#0FAEBF] text-white px-4 py-3 rounded-full flex items-center space-x-2 shadow-lg hover:bg-[#32628C] transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-down"
      >
        <FaWhatsapp className="h-6 w-6" />
        <span>Contáctanos</span>
      </a>
    </div>
  );
}

export default App;
