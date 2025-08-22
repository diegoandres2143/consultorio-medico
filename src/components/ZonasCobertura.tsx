import React from "react";

const ZonasCobertura = () => (
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
          <span className="text-sm text-[#32628C] mt-2">Zona urbana y principales barrios</span>
        </div>
        <div className="flex flex-col items-center bg-white/90 rounded-xl shadow-md px-8 py-6 w-64 mb-4 md:mb-0">
          <span className="text-4xl mb-2">🏘️</span>
          <span className="text-xl font-bold text-[#023E73]">Itagüí</span>
          <span className="text-sm text-[#32628C] mt-2">Cobertura total</span>
        </div>
        <div className="flex flex-col items-center bg-white/90 rounded-xl shadow-md px-8 py-6 w-64">
          <span className="text-4xl mb-2">🌳</span>
          <span className="text-xl font-bold text-[#023E73]">Envigado</span>
          <span className="text-sm text-[#32628C] mt-2">Cobertura total</span>
        </div>
      </div>
    </div>
  </div>
);

export default ZonasCobertura;
