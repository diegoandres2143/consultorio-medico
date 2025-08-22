import React from "react";

const ComoFunciona = () => (
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
            Oprima el botón de "Agendar cita", luego en WhatsApp llene sus datos y su fecha deseada.
          </p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-4">📩</div>
          <h3 className="text-xl font-semibold mb-3 text-[#32628C]">
            Paso 2
          </h3>
          <p className="text-gray-700">
            Recibirá un mensaje por WhatsApp de confirmación o modificación de su cita.
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
);

export default ComoFunciona;
