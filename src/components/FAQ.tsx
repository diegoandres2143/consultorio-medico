import React from "react";

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
];

const FAQ = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section id="faq" className="py-20 bg-[#F2F2F2]" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#023E73]">Preguntas Frecuentes</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <button
                className="flex items-center w-full text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-2xl mr-4">{faq.icon}</span>
                <span className="font-semibold text-[#32628C] text-lg">{faq.question}</span>
              </button>
              {openFaq === index && (
                <p className="mt-4 text-gray-700 text-justify">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
