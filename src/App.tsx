import React, { useEffect } from 'react';
import { Menu, Phone, Clock, MapPin, Instagram, Facebook, ChevronDown } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    title: "Consulta médica general",
    description: "Atención integral para niños, adolescentes y adultos, enfocada en la prevención, diagnóstico y tratamiento de enfermedades comunes.",
    icon: "🩺"
  },
  {
    title: "Asesoría anticonceptiva",
    description: "Orientación profesional sobre métodos anticonceptivos para elegir la opción más adecuada según cada paciente.",
    icon: "💊"
  },
  {
    title: "Manejo de infecciones de transmisión sexual",
    description: "Diagnóstico, tratamiento y educación sobre ITS para una salud sexual segura y responsable.",
    icon: "🔬"
  },
  {
    title: "Lectura de resultados de laboratorio",
    description: "Interpretación médica de pruebas como hemogramas, uroanálisis, glicemia, creatinina y estudios hormonales.",
    icon: "📑"
  },
  {
    title: "Interpretación de imágenes diagnósticas",
    description: "Evaluación de radiografías, ecografías, tomografías, resonancias magnéticas y electrocardiogramas para un diagnóstico preciso.",
    icon: "🏥"
  },
  {
    title: "Procedimientos menores",
    description: "Servicios como inyectología, lavado de oídos, manejo de uñas encarnadas, cauterización de verrugas y retiro de implantes anticonceptivos.",
    icon: "💉"
  }
];

const faqs = [
  {
    question: "¿Cuánto dura la consulta?",
    answer: "La consulta tiene una duración aproximada de 30-45 minutos.",
    icon: "⏳"
  },
  {
    question: "¿Se atienden emergencias?",
    answer: "No, el consultorio ofrece citas programadas. En caso de emergencia, diríjase a un centro hospitalario.",
    icon: "🚑"
  },
  {
    question: "¿Cómo puedo pagar la consulta?",
    answer: "El pago se realiza directamente en efectivo, con el médico en el consultorio o por transferencia bancaria por medio de NEQUI o Bancolombia.",
    icon: "💳"
  }
];

const testimonials = [
  {
    text: "Excelente atención, muy profesional y amable.",
    author: "María R."
  },
  {
    text: "Explicó todo con claridad y resolvió mis dudas.",
    author: "Carlos M."
  },
  {
    text: "Lo recomiendo, gran médico y ser humano.",
    author: "Laura G."
  }
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
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Navigation */}
      <nav className="bg-[#023E73] text-white fixed w-full z-50" data-aos="fade-right">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-white p-0 rounded-full">
                <img src="/Logo Nilson.png" alt="Logo Nilson" className="h-12 w-12" />
              </div>
              <div className="text-xl font-bold ml-2">Dr. Garcés</div>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu />
            </button>
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-[#023E73] md:bg-transparent`}>
              <ul className="md:flex space-y-2 md:space-y-0 md:space-x-3 p-4 md:p-0">
                <li className="mb-2 md:mb-0"><a href="#inicio" className="block px-4 py-2 rounded-full border-2 border-[#0FAEBF] hover:bg-[#0FAEBF] hover:text-white transition duration-300">Inicio</a></li>
                <li className="mb-2 md:mb-0"><a href="#sobre-nosotros" className="block px-4 py-2 rounded-full border-2 border-[#0FAEBF] hover:bg-[#0FAEBF] hover:text-white transition duration-300">Sobre Nosotros</a></li>
                <li className="mb-2 md:mb-0"><a href="#servicios" className="block px-4 py-2 rounded-full border-2 border-[#0FAEBF] hover:bg-[#0FAEBF] hover:text-white transition duration-300">Servicios</a></li>
                <li className="mb-2 md:mb-0"><a href="#como-funciona" className="block px-4 py-2 rounded-full border-2 border-[#0FAEBF] hover:bg-[#0FAEBF] hover:text-white transition duration-300">Cómo Funciona</a></li>
                <li className="mb-2 md:mb-0"><a href="#faq" className="block px-4 py-2 rounded-full border-2 border-[#0FAEBF] hover:bg-[#0FAEBF] hover:text-white transition duration-300">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 bg-gradient-to-b from-[#0FAEBF] to-[#023E73] text-white" data-aos="zoom-out-down">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold">Consultorio Médico <br /> Dr. Garcés</h1>
              <p className="text-xl" style={{ fontStyle: 'italic' }}>Servimos con Dignidad y Honestidad.</p>
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
    <h2 className="text-3xl font-bold text-center mb-12 text-[#023E73]">Sobre Nosotros</h2>
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-[#32628C]">Misión</h3>
        <p className="text-gray-700">
          Brindar atención médica integral y de calidad, basada en la ética, el profesionalismo y el compromiso con la salud de nuestros pacientes. Nos enfocamos en ofrecer diagnósticos precisos, tratamientos efectivos y un trato humano y cercano, asegurando el bienestar y la confianza de quienes nos eligen para su cuidado.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-[#32628C]">Visión</h3>
        <p className="text-gray-700">
          Ser un consultorio médico reconocido por su excelencia en la atención, innovación en tratamientos y compromiso con la salud de nuestros pacientes. Buscamos consolidarnos como un referente en el sector, ofreciendo un servicio que combine tecnología, calidez humana y un enfoque integral en el cuidado de la salud.
        </p>
      </div>
    </div>

    {/* Biografía */}
    <section id="biografia" className="py-20 bg-[#023E73] text-white" data-aos="fade-left">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-[#0FAEBF]">Biografía</h2>
    <div className="grid md:grid-cols-2 gap-12">
      <div className="flex justify-center">
        <img 
          src="/Foto Nilson FINAL.jpeg" 
          alt="Doctor Nilson Jesús Garcés Córdoba" 
          className="rounded-lg shadow-xl w-80 h-auto"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl"><strong>Nombre:</strong><br /> <br /><li>Nilson Jesús Garcés Córdoba</li></p>
        <p className="text-xl"><strong>Estudios:</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>Médico General - Universidad del Sinú</li>
          <li>Especialista en Gerencia de la calidad y Auditor en salud - Universidad Cooperativa de Colombia</li>
          <li>Especialista en Derecho Médico (En Curso) - ¿Universidad? (Por definir)</li>
        </ul>
      </div>
    </div>
    <hr className="my-12 border-t-2 border-[#0FAEBF]" />
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div>
        <div className="text-4xl mb-4">📄</div>
        <h3 className="text-xl font-semibold">Número de tarjeta profesional</h3>
      </div>
      <div>
        <div className="text-4xl mb-4">📑</div>
        <h3 className="text-xl font-semibold">Registro en el Rethus</h3>
      </div>
      <div>
        <div className="text-4xl mb-4">📜</div>
        <h3 className="text-xl font-semibold">Certificado de ética profesional</h3>
      </div>
    </div>
  </div>
</section>

    {/* Testimonials */}
    <div className="mt-16" data-aos="fade-up">
      <h3 className="text-2xl font-semibold mb-8 text-center text-[#32628C]">Lo que dicen nuestros pacientes</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
            <p className="text-[#0FAEBF] font-semibold">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-white" data-aos="zoom-out-left">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-[#023E73]">Nuestros Servicios</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="bg-[#c0e6e7] p-6 rounded-lg shadow-md">
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-3 text-[#32628C]">{service.title}</h3>
          <p className="text-gray-700">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Cómo Funciona */}
      <section id="como-funciona" className="py-20" data-aos="flip-right">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#023E73]">Cómo Funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-3 text-[#32628C]">Paso 1</h3>
              <p className="text-gray-700">Oprima el botón de "Agendar cita", luego en WhatsApp llene sus datos y su fecha deseada.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📩</div>
              <h3 className="text-xl font-semibold mb-3 text-[#32628C]">Paso 2</h3>
              <p className="text-gray-700">Recibirá un mensaje por WhatsApp de confirmación o modificación de su cita.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-3 text-[#32628C]">Paso 3</h3>
              <p className="text-gray-700">Asista a su consulta en la fecha y hora indicadas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white" data-aos="fade-left">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#023E73]">Preguntas Frecuentes</h2>
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
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-6 py-4 text-gray-700 ${
                    openFaq === index ? 'block' : 'hidden'
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
      <footer className="bg-gradient-to-b from-[#0FAEBF] to-[#023E73] text-white py-12" data-aos="fade-right">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
        <div className="space-y-2">
          <p className="flex items-center">
            <Phone className="mr-2 h-5 w-5" />
            <a href="https://wa.me/573002171407" target="_blank" rel="noopener noreferrer">
              +57 300 217 1407
            </a>
          </p>
          <p className="flex items-center">
            <MapPin className="mr-2 h-5 w-5" />
            Cra 45 Nº 83-34, Barrio Manrique, Medellín - Colombia
          </p>
          <div className="flex items-start">
            <Clock className="mr-2 h-5 w-5 mt-1" />
            <div>
              <p>Lunes a Viernes: 4:30 PM - 9:00 PM</p>
              <p>Sábados: 8:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex space-x-4">
          <a href="#" className="hover:text-[#0FAEBF]">
            <Instagram />
          </a>
          <a href="#" className="hover:text-[#0FAEBF]">
            <Facebook />
          </a>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8754327425547!2d-75.5645!3d6.2786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442f1c3c3c3c3d%3A0x3c3c3c3c3c3c3c3c!2sCra%2045%20%2383-34%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1620000000000!5m2!1ses!2sco"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
        <div className="text-center mt-4">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Cra+45+%2383-34%2C+Medell%C3%ADn%2C+Antioquia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0FAEBF] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#32628C] transition duration-300"
          >
            ¿Cómo llegar?
          </a>
        </div>
      </div>
    </div>
    <div className="text-center mt-8 pt-8 border-t border-black-700">
      <p>&copy; 2025 Consultorio Médico - Dr. Garcés. Todos los derechos reservados <br /><br /> Elaborado por Diego Andrés Candamil Puerta</p>
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
