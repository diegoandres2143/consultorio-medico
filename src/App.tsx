import React, { useEffect } from "react";
import { useState } from "react";
// Componente para mostrar certificado miniatura y ampliado
function CertificadoMiniatura({ src, alt, titulo }: { src: string; alt: string; titulo: string }) {
  const [ampliado, setAmpliado] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <img
        src={src}
        alt={alt}
        className="w-24 h-24 object-contain rounded shadow cursor-pointer border border-[#0FAEBF] hover:scale-105 transition"
        onClick={() => setAmpliado(true)}
      />
      <h3 className="text-xl font-semibold mt-4">{titulo}</h3>
      {ampliado && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={() => setAmpliado(false)}>
          <img
            src={src}
            alt={alt}
            className="max-w-lg w-full rounded-xl border-4 border-[#0FAEBF] shadow-2xl bg-white p-2"
            style={{ boxShadow: "0 0 40px 10px rgba(0,180,255,0.15)" }}
          />
        </div>
      )}
    </div>
  );
}
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
const EMAILJS_BLOCK_KEY = "emailjs_last_sent";
const EMAILJS_HISTORY_KEY = "emailjs_history";
const RECAPTCHA_SITE_KEY = "TU_CLAVE_PUBLICA_RECAPTCHA"; // Reemplaza por tu clave pública
import {
  Menu,
  Phone,
  Clock,
  Mail,
  Instagram,
  Facebook,
  ChevronDown,
  MapPin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

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
      "Actualmente el servicio se manera 100% de manera domiciliaria, no necesitas transportarte a un punto físico, nosotros vamos directamente a atenderte en la comodidad de tu hogar.",
    icon: "📍",
  },
];



function App() {
  const [flippedService, setFlippedService] = useState<number | null>(null);
  const [certModal, setCertModal] = useState<{ src: string; alt: string } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [form, setForm] = useState<{
    name: string;
    email: string;
    phone: string;
    motivo: string;
    otroMotivo: string;
    subject: string;
    message: string;
    file: File | null;
  }>({
    name: "",
    email: "",
    phone: "",
    motivo: "",
    otroMotivo: "",
    subject: "",
    message: "",
    file: null,
  });
  const [errors, setErrors] = useState<any>({});
  // Validación en tiempo real
  useEffect(() => {
    const newErrors: any = {};
    if (form.name && form.name.length < 3) newErrors.name = "El nombre debe tener al menos 3 caracteres.";
    if (form.name && form.name.length > 50) newErrors.name = "El nombre no debe superar 50 caracteres.";
    if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = "Correo electrónico inválido.";
    if (form.email && form.email.length > 100) newErrors.email = "El correo no debe superar 100 caracteres.";
    if (form.phone && form.phone.length < 7) newErrors.phone = "Teléfono inválido.";
    if (form.phone && form.phone.length > 15) newErrors.phone = "El teléfono no debe superar 15 dígitos.";
    if (!form.motivo) newErrors.motivo = "Selecciona un motivo.";
    if (form.motivo === "Otro" && !form.otroMotivo) newErrors.otroMotivo = "Especifica el motivo.";
    if (form.otroMotivo && form.otroMotivo.length > 100) newErrors.otroMotivo = "El motivo no debe superar 100 caracteres.";
    if (form.subject && form.subject.length < 3) newErrors.subject = "Tema demasiado corto.";
    if (form.subject && form.subject.length > 100) newErrors.subject = "El tema no debe superar 100 caracteres.";
    if (form.message && form.message.length < 10) newErrors.message = "El mensaje debe tener al menos 10 caracteres.";
    if (form.message && form.message.length > 500) newErrors.message = "El mensaje no debe superar 500 caracteres.";
    setErrors(newErrors);
  }, [form]);
  const [loading, setLoading] = useState(false);
  const [recaptcha, setRecaptcha] = useState<string | null>(null);
  const [blockTime, setBlockTime] = useState<number>(0);
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState<any[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Cargar historial de mensajes enviados
    const hist = localStorage.getItem(EMAILJS_HISTORY_KEY);
    if (hist) setHistory(JSON.parse(hist));
    // Verificar bloqueo y actualizar en tiempo real
    const updateBlockTime = () => {
      const lastSent = localStorage.getItem(EMAILJS_BLOCK_KEY);
      if (lastSent) {
        const now = Date.now();
        const remaining = 10 * 60 * 1000 - (now - parseInt(lastSent));
        setBlockTime(remaining > 0 ? remaining : 0);
      } else {
        setBlockTime(0);
      }
    };
    updateBlockTime();
    const interval = setInterval(updateBlockTime, 1000);
    AOS.init({ duration: 2000 });
    return () => clearInterval(interval);
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
            <div className="flex items-center min-w-0">
              <div className="bg-white p-0 rounded-full flex-shrink-0">
                <img
                  src="/Logo Nilson.png"
                  alt="Logo Nilson"
                  className="h-12 w-12"
                />
              </div>
              <div className="text-xl font-bold ml-2 truncate">Dr. Garces</div>
            </div>
            {/* Botón hamburguesa visible en móviles y pantallas verticales */}
            <button
              className="block xl:hidden ml-2 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
            >
              <Menu size={32} />
            </button>
            {/* Menú principal */}
            <div
              className={`${isMenuOpen ? "block" : "hidden"
                } absolute top-full left-0 w-full bg-[#023E73] xl:bg-transparent xl:static xl:block xl:w-auto`}
            >
              <ul className="flex flex-col xl:flex-row xl:space-x-3 space-y-2 xl:space-y-0 p-4 xl:p-0">
                <li>
                  <a
                    href="#inicio"
                    className="block px-4 py-2 rounded-full border-2 border-[#0FAEBF] hover:bg-[#0FAEBF] hover:text-white transition duration-300 text-center"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#sobre-nosotros"
                    className="block px-4 py-2 rounded-full border-2 border-[#0FAEBF] hover:bg-[#0FAEBF] hover:text-white transition duration-300 text-center"
                  >
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#conocenos"
                    className="block px-4 py-2 rounded-full border-2 border-[#0FAEBF] hover:bg-[#0FAEBF] hover:text-white transition duration-300 text-center"
                  >
                    Conócenos
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="block px-4 py-2 rounded-full border-2 border-[#0FAEBF] hover:bg-[#0FAEBF] hover:text-white transition duration-300 text-center"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#como-funciona"
                    className="block px-4 py-2 rounded-full border-2 border-[#0FAEBF] hover:bg-[#0FAEBF] hover:text-white transition duration-300 text-center"
                  >
                    Cómo Funciona
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="block px-4 py-2 rounded-full border-2 border-[#0FAEBF] hover:bg-[#0FAEBF] hover:text-white transition duration-300 text-center"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#escribenos"
                    className="block px-4 py-2 rounded-full border-2 border-[#0FAEBF] hover:bg-[#0FAEBF] hover:text-white transition duration-300 text-center"
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
                Dr. Garcés | Consultorio Médico
              </h1>
              <p className="text-xl italic">
                Servimos con Dignidad y Honestidad.
              </p>
              <a
                href="https://wa.me/573217528622"
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
              Brindamos atención médica domiciliaria en Medellín, Colombia. Nuestro servicio está 100% enfocado en llevar la consulta y el cuidado profesional directamente a tu hogar, con especialidades como consultas generales, asesorías anticonceptivas, manejo de infecciones de transmisión sexual y procedimientos menores. Nos comprometemos a ofrecer diagnósticos precisos, tratamientos efectivos y un trato humano y profesional, sin que tengas que desplazarte. Agenda tu cita fácilmente y prioriza tu salud desde la comodidad de tu casa
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
            className="py-20 bg-[#023E73] text-white mt-20 w-full"
            style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}
            data-aos="fade-up"
          >
            <div className="px-4 md:px-16 mx-0">
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
              <div className="mt-12 grid grid-cols-2 gap-4 justify-center items-center">
                {/* Card Certificado RETUS */}
                <div
                  className="flex flex-col justify-center items-center rounded-xl shadow p-4 w-44 bg-gray-300 mx-auto cursor-pointer hover:scale-105 transition"
                  onClick={() => setCertModal({ src: "/RETUS.png", alt: "Certificado RETUS" })}
                >
                  <img
                    src="/RETUS.png"
                    alt="Certificado RETUS"
                    className="w-16 h-16 object-contain rounded mb-2 mx-auto"
                    style={{ border: "none" }}
                  />
                  <h3 className="text-s font-semibold text-[#023E73] mt-2 text-center">Registro en el Rethus</h3>
                </div>
                {/* Card Certificado Ética */}
                <div
                  className="flex flex-col justify-center items-center rounded-xl shadow p-4 w-44 bg-gray-300 mx-auto cursor-pointer hover:scale-105 transition"
                  onClick={() => setCertModal({ src: "/etica.png", alt: "Certificado de ética profesional" })}
                >
                  <img
                    src="/etica.png"
                    alt="Certificado de ética profesional"
                    className="w-16 h-16 object-contain rounded mb-2 mx-auto"
                    style={{ border: "none" }}
                  />
                  <h3 className="text-s font-semibold text-[#023E73] mt-2 text-center">Certificado de ética profesional</h3>
                </div>
                {/* Modal para imagen ampliada de certificado */}
                {certModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={() => setCertModal(null)}>
                    <img
                      src={certModal.src}
                      alt={certModal.alt}
                      className="max-w-lg w-full rounded-xl border-4 border-[#0FAEBF] shadow-2xl bg-white p-2"
                      style={{ boxShadow: "0 0 40px 10px rgba(0,180,255,0.15)" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Zonas de Cobertura */}
          <div className="mt-16" data-aos="fade-up">
            <div className="bg-gradient-to-r from-[#0FAEBF] to-[#32628C] rounded-2xl shadow-lg py-10 px-6 md:px-16 flex flex-col items-center">
              <h3 className="text-3xl font-bold mb-6 text-white text-center tracking-wide drop-shadow">
                <span className="inline-block align-middle mr-2">🗺️</span>Zonas de Cobertura
              </h3>
              <p className="text-center text-lg mb-8 text-white/90">
                El servicio médico domiciliario está disponible en las siguientes áreas metropolitanas:
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
                <div className="flex flex-col items-center bg-white/90 rounded-xl shadow-md px-8 py-6 w-64 mb-4 md:mb-0">
                  <span className="text-4xl mb-2">🏙️</span>
                  <span className="text-xl font-bold text-[#023E73]">Medellín</span>
                  <span className="text-sm text-[#32628C] mt-2">Cobertura total</span>
                </div>
                <div className="flex flex-col items-center bg-white/90 rounded-xl shadow-md px-8 py-6 w-64 mb-4 md:mb-0">
                  <span className="text-4xl mb-2">🏘️</span>
                  <span className="text-xl font-bold text-[#023E73]">Itagüí</span>
                  <span className="text-sm text-[#32628C] mt-2">Zona urbana</span>
                </div>
                <div className="flex flex-col items-center bg-white/90 rounded-xl shadow-md px-8 py-6 w-64">
                  <span className="text-4xl mb-2">🌳</span>
                  <span className="text-xl font-bold text-[#023E73]">Envigado</span>
                  <span className="text-sm text-[#32628C] mt-2">Barrios Principales</span>
                </div>
              </div>
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
            {services.map((service, index) => {
              // Asignar imagen por índice (1.png a 9.png)
              const imageSrc = `/${index + 1}.png`;
              // Mejorar descripciones cortas
              let description = service.description;
              if (description.length < 60) {
                if (service.title.includes('Asesoría anticonceptiva')) {
                  description = 'Recibe orientación profesional y personalizada sobre métodos anticonceptivos, adaptada a tus necesidades y estilo de vida. Te ayudamos a tomar decisiones informadas para tu salud sexual y reproductiva.';
                } else if (service.title.includes('Asesorías médico-legales')) {
                  description = 'Brindamos acompañamiento y asesoría en trámites médico-legales, como derechos de petición y tutelas, garantizando el respeto por tus derechos y el acceso a la salud.';
                } else if (service.title.includes('Procedimientos menores')) {
                  description = 'Realizamos procedimientos médicos básicos como inyectología, lavado de oídos, manejo de uñas encarnadas, cauterización de verrugas y retiro de implantes anticonceptivos, con profesionalismo y seguridad.';
                }
              }
              return (
                <div
                  key={index}
                  className={`flip-card cursor-pointer w-full h-80 focus:outline-none ${flippedService === index ? 'flipped' : ''}`}
                  tabIndex={0}
                  onClick={() => setFlippedService(flippedService === index ? null : index)}
                >
                  <div className="flip-card-inner w-full h-full">
                    {/* Front Side */}
                    <div className="flip-card-front ">
                      <h3 className="text-xl font-bold mb-4 text-[#32628C] text-center px-2">
                        {service.title}
                      </h3>
                      <img
                        src={imageSrc}
                        alt={service.title}
                        className="h-48 w-48 object-cover rounded-xl shadow mb-2 border-4 border-[#0FAEBF] mx-auto"
                      />
                      <span className="text-[#0FAEBF] text-sm mt-2">Ver detalles</span>
                    </div>
                    {/* Back Side */}
                    <div className="flip-card-back flex flex-col items-center justify-center text-center">
                      <h3 className="text-xl font-bold mb-4 text-[#0FAEBF] text-center w-full">
                        {service.title}
                      </h3>
                      <p className="text-base px-4 text-center w-full">{description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
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
              <div className="flex flex-col items-center space-y-12 h-full justify-between">
                <h3 className="text-2xl font-semibold text-[#32628C] text-center">
                  Escríbenos un mensaje
                </h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  Estamos aquí para ayudarte. La atención se maneja principalmente
                  por WhatsApp, pero si prefieres contactarnos por otro medio o
                  tienes dudas sobre nuestros servicios, puedes escribirnos a
                  través del siguiente formulario. ¡Nos pondremos en contacto
                  contigo lo antes posible!
                </p>
                <div className="flex justify-center items-center w-full">
                  <img
                    src="/form.png"
                    alt="Decorativo"
                    className="max-w-xs w-full rounded-xl shadow-lg border-4 border-[#0FAEBF]"
                  />
                </div>
                <div className="flex items-center justify-center w-full">
                  <a
                    href="https://wa.me/573217528622"
                    className="flex items-center bg-[#0FAEBF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#32628C] transition duration-300 text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="mr-2 h-6 w-6" />
                    Contáctanos por WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Formulario a la derecha */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#023E73]">
                Formulario
              </h3>
              {/* Formulario con EmailJS */}
              {/* Formulario con validación, loading, motivo, archivo, recaptcha, historial y animaciones */}
              <form
                className="space-y-4 animate-fadein"
                onSubmit={async e => {
                  e.preventDefault();
                  if (blockTime > 0) {
                    alert(`Ya enviaste un mensaje. Espera ${Math.ceil(blockTime / 60000)} minuto(s).`);
                    return;
                  }
                  // Validación avanzada
                  const newErrors: any = {};
                  if (!form.name || form.name.length < 3) newErrors.name = "El nombre debe tener al menos 3 caracteres.";
                  if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = "Correo electrónico inválido.";
                  if (!form.phone || form.phone.length < 7) newErrors.phone = "Teléfono inválido.";
                  if (!form.motivo) newErrors.motivo = "Selecciona un motivo.";
                  if (form.motivo === "Otro" && !form.otroMotivo) newErrors.otroMotivo = "Especifica el motivo.";
                  if (!form.subject || form.subject.length < 3) newErrors.subject = "Tema demasiado corto.";
                  if (!form.message || form.message.length < 10) newErrors.message = "El mensaje debe tener al menos 10 caracteres.";
                  if (!recaptcha) newErrors.recaptcha = "Completa el reCAPTCHA.";
                  if (form.file) {
                    if (form.file.size > 5 * 1024 * 1024) newErrors.file = "El archivo no debe superar 5MB.";
                    if (!/(jpg|jpeg|png)$/i.test(form.file.name)) newErrors.file = "Solo se permiten imágenes JPG o PNG.";
                  }
                  setErrors(newErrors);
                  if (Object.keys(newErrors).length > 0) return;
                  setLoading(true);
                  // Envío con EmailJS
                  try {
                    await emailjs.send(
                      "service_gj2tgfs", // Tu Service ID
                      "template_ehbtsbq", // Tu nuevo Template ID
                      {
                        name: form.name,
                        email: form.email,
                        phone: form.phone,
                        motivo: form.motivo === "Otro" ? form.otroMotivo : form.motivo,
                        subject: form.subject,
                        message: form.message,
                        date: new Date().toLocaleString(),
                      },
                      "wHVGO1UQp2atbsA-f" // Tu Public Key
                    );
                    const now = Date.now();
                    localStorage.setItem(EMAILJS_BLOCK_KEY, now.toString());
                    setBlockTime(10 * 60 * 1000);
                    // Guardar historial
                    const newHistory = [...history, { ...form, date: new Date().toLocaleString() }];
                    setHistory(newHistory);
                    localStorage.setItem(EMAILJS_HISTORY_KEY, JSON.stringify(newHistory));
                    alert("¡Tu mensaje fue enviado correctamente! Puedes enviar otro mensaje en 10 minutos.");
                    setForm({ name: "", email: "", phone: "", motivo: "", otroMotivo: "", subject: "", message: "", file: null });
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  } catch {
                    alert("Hubo un error al enviar el mensaje. Por favor intenta de nuevo más tarde.");
                  }
                  setLoading(false);
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    maxLength={50}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className={`w-full px-4 py-2 rounded-lg border ${errors.name ? "border-red-500" : "border-gray-300"} text-gray-800 focus:ring-[#0FAEBF] focus:border-[#0FAEBF]`}
                  />
                  {errors.name && <span className="flex items-center text-red-600 text-sm font-semibold mt-1 animate-shake"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" /></svg>{errors.name}</span>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    maxLength={100}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className={`w-full px-4 py-2 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"} text-gray-800 focus:ring-[#0FAEBF] focus:border-[#0FAEBF]`}
                  />
                  {errors.email && <span className="flex items-center text-red-600 text-sm font-semibold mt-1 animate-shake"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" /></svg>{errors.email}</span>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={15}
                    onChange={e => {
                      const value = e.target.value.replace(/[^0-9]/g, "");
                      setForm(f => ({ ...f, phone: value }));
                    }}
                    className={`w-full px-4 py-2 rounded-lg border ${errors.phone ? "border-red-500" : "border-gray-300"} text-gray-800 focus:ring-[#0FAEBF] focus:border-[#0FAEBF]`}
                  />
                  {errors.phone && <span className="flex items-center text-red-600 text-sm font-semibold mt-1 animate-shake"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" /></svg>{errors.phone}</span>}
                </div>
                <div>
                  <label htmlFor="motivo" className="block text-sm font-medium text-gray-700">Motivo de contacto</label>
                  <select id="motivo" name="motivo" value={form.motivo} onChange={e => setForm(f => ({ ...f, motivo: e.target.value, otroMotivo: "" }))} className={`w-full px-4 py-2 rounded-lg border ${errors.motivo ? "border-red-500" : "border-gray-300"} text-gray-800 focus:ring-[#0FAEBF] focus:border-[#0FAEBF`}>
                    <option value="">Selecciona una opción</option>
                    <option value="Consulta médica">Consulta médica</option>
                    <option value="Solicitud de cita">Solicitud de cita</option>
                    <option value="Resultados de laboratorio">Resultados de laboratorio</option>
                    <option value="Asesoría anticonceptiva">Asesoría anticonceptiva</option>
                    <option value="Interpretación de imágenes">Interpretación de imágenes</option>
                    <option value="Procedimientos menores">Procedimientos menores</option>
                    <option value="Asesoría médico-legal">Asesoría médico-legal</option>
                    <option value="Atención domiciliaria">Atención domiciliaria</option>
                    <option value="Otro">Otro</option>
                  </select>
                  {errors.motivo && (
                    <span className="flex items-center text-red-600 text-sm font-semibold mt-1 animate-shake">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" /></svg>{errors.motivo}
                    </span>
                  )}
                  {form.motivo === "Otro" && (
                    <>
                      <input type="text" placeholder="Especifica el motivo" value={form.otroMotivo} maxLength={100} onChange={e => setForm(f => ({ ...f, otroMotivo: e.target.value }))} className={`mt-2 w-full px-4 py-2 rounded-lg border ${errors.otroMotivo ? "border-red-500" : "border-gray-300"} text-gray-800 focus:ring-[#0FAEBF] focus:border-[#0FAEBF]`} />
                      {errors.otroMotivo && (
                        <span className="flex items-center text-red-600 text-sm font-semibold mt-1 animate-shake">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" /></svg>{errors.otroMotivo}
                        </span>
                      )}
                    </>
                  )}
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Tema a tratar</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    maxLength={100}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    className={`w-full px-4 py-2 rounded-lg border ${errors.subject ? "border-red-500" : "border-gray-300"} text-gray-800 focus:ring-[#0FAEBF] focus:border-[#0FAEBF]`}
                  />
                  {errors.subject && <span className="flex items-center text-red-600 text-sm font-semibold mt-1 animate-shake"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" /></svg>{errors.subject}</span>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje o descripción</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    maxLength={500}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    rows={4}
                    className={`w-full px-4 py-2 rounded-lg border ${errors.message ? "border-red-500" : "border-gray-300"} text-gray-800 focus:ring-[#0FAEBF] focus:border-[#0FAEBF]`}
                  />
                  {errors.message && <span className="flex items-center text-red-600 text-sm font-semibold mt-1 animate-shake"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" /></svg>{errors.message}</span>}
                </div>
                <div>
                  <label htmlFor="file" className="block text-sm font-medium text-gray-700">Adjuntar imagen (JPG/PNG, máx. 5MB)</label>
                  <input ref={fileInputRef} type="file" id="file" name="file" accept="image/jpeg,image/png" onChange={e => setForm(f => ({ ...f, file: e.target.files?.[0] || null }))} className={`w-full px-4 py-2 rounded-lg border ${errors.file ? "border-red-500" : "border-gray-300"} text-gray-800 focus:ring-[#0FAEBF] focus:border-[#0FAEBF]`} />
                  {errors.file && <span className="text-red-500 text-xs animate-shake">{errors.file}</span>}
                </div>
                <div className="flex justify-center">
                  <ReCAPTCHA sitekey="6LcREa8rAAAAAAbobuz8FGo9BVKJznZjycCgOfNX" onChange={(v: string | null) => setRecaptcha(v)} />
                  {errors.recaptcha && <span className="text-red-500 text-xs animate-shake ml-2">{errors.recaptcha}</span>}
                </div>
                <button type="submit" disabled={loading || blockTime > 0} className={`w-full bg-[#0FAEBF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#32628C] transition duration-300 ${loading || blockTime > 0 ? "opacity-50 cursor-not-allowed" : ""}`}>{loading ? "Enviando..." : "Enviar Mensaje"}</button>
                {blockTime > 0 && (
                  <div className="flex items-center justify-center mt-2">
                    <span className="text-sm text-[#d97706] font-semibold bg-[#fffbe6] px-3 py-2 rounded shadow animate-pulse">
                      Debes esperar {Math.floor(blockTime / 60000)} minuto(s) y {Math.floor((blockTime % 60000) / 1000)} segundo(s) para enviar otro mensaje.
                    </span>
                  </div>
                )}
                <div className="flex justify-end mt-2">
                  <button type="button" className="text-xs text-[#32628C] underline" onClick={() => setShowHistory(true)}>Ver historial de mensajes enviados</button>
                </div>
              </form>
              {/* Modal historial de mensajes enviados */}
              {showHistory && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 animate-fadein">
                  <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg relative">
                    <button className="absolute top-2 right-2 text-[#32628C]" onClick={() => setShowHistory(false)}>✕</button>
                    <h4 className="text-lg font-bold mb-4 text-[#023E73]">Historial de mensajes enviados</h4>
                    {history.length === 0 ? (
                      <p className="text-gray-600">No has enviado mensajes en esta sesión.</p>
                    ) : (
                      <ul className="space-y-2 max-h-64 overflow-y-auto">
                        {history.map((msg, i) => (
                          <li key={i} className="border rounded p-2 text-xs">
                            <strong>Fecha:</strong> {msg.date}<br />
                            <strong>Nombre:</strong> {msg.name}<br />
                            <strong>Email:</strong> {msg.email}<br />
                            <strong>Teléfono:</strong> {msg.phone}<br />
                            <strong>Motivo:</strong> {msg.motivo}<br />
                            <strong>Tema:</strong> {msg.subject}<br />
                            <strong>Mensaje:</strong> {msg.message}<br />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}
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
                    className={`transform transition-transform ${openFaq === index ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`px-6 py-4 text-gray-700 ${openFaq === index ? "block" : "hidden"
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
      <footer className="bg-[#1A2536] text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
            {/* Contacto */}
            <div className="flex-1 min-w-[220px]">
              <h3 className="text-xl font-bold mb-4 text-[#0FAEBF] text-center">Contacto</h3>
              <div className="flex flex-col items-center w-full">
                <ul className="space-y-2 w-fit text-left">
                  <li className="flex items-center text-base">
                    <Phone className="mr-2 h-5 w-5 text-[#0FAEBF]" />
                    <a href="https://wa.me/573217528622" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">+57 321 752 8622</a>
                  </li>
                  <li className="flex items-center text-base">
                    <Mail className="mr-2 h-5 w-5 text-[#0FAEBF]" />
                    <a href="mailto:drgarces19022025@hotmail.com" className="hover:underline text-white">drgarces19022025@hotmail.com</a>
                  </li>
                  {/* Nueva línea para la dirección */}
                  <li className="flex items-center text-base">
                    <MapPin className="mr-2 h-5 w-5 text-[#0FAEBF] flex-shrink-0" />
                    <a 
                      href="https://maps.google.com/?q=Avenida+33+%2357-29,+Barrio+Niquía" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:underline text-white"
                    >
                      Avenida 33 #57-29, Barrio Niquía
                    </a>
                  </li>
                </ul>
              </div>
              <h4 className="text-lg font-bold mt-6 mb-2 text-[#0FAEBF] text-center">Horarios</h4>
              <div className="flex flex-col items-center w-full">
                <ul className="space-y-1 text-base w-fit text-left">
                  <li className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-[#0FAEBF]" />
                    <span className="text-white">Lun-Vie: 4:30 PM - 9:00 PM</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-[#0FAEBF]" />
                    <span className="text-white">Sábado: 8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-[#0FAEBF]" />
                    <span className="text-white">Domingo: 9:00 AM - 6:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Redes sociales */}
            <div className="flex-1 min-w-[220px]">
              <h3 className="text-xl font-bold mb-4 text-[#0FAEBF] text-center">Síguenos</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://www.instagram.com/consultoriomedicodrgarces/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#0FAEBF] text-white rounded-full shadow hover:bg-[#32628C] transition">
                  <Instagram className="h-5 w-5" /> Instagram
                </a>
                <a href="https://m.facebook.com/61573190233989/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#0FAEBF] text-white rounded-full shadow hover:bg-[#32628C] transition">
                  <Facebook className="h-5 w-5" /> Facebook
                </a>
                <a href="mailto:drgarces19022025@hotmail.com" className="flex items-center gap-2 px-4 py-2 bg-[#0FAEBF] text-white rounded-full shadow hover:bg-[#32628C] transition">
                  <Mail className="h-5 w-5" /> Correo
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8">
        <hr className="border-t border-white mb-6 w-full mx-auto" />
            <p className="text-m text-gray-200 font-normal">
              &copy; 2025 Consultorio Médico - Dr. Garces. Todos los derechos reservados.<br />
              <span className="text-m">Elaborado por Diego Andrés Candamil Puerta</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/573217528622"
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
