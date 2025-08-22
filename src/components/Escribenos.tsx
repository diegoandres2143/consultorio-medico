import React from "react";

const Escribenos = () => (
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
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#32628C]">Contacto</h3>
          <p className="text-gray-700 mb-4">
            Si tienes alguna pregunta, inquietud o deseas agendar una cita, puedes escribirnos directamente por WhatsApp o completar el siguiente formulario para enviar un mensaje al médico por correo electrónico.
          </p>
          <a
            href="https://wa.me/573002171407"
            className="inline-block bg-[#0FAEBF] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#32628C] transition duration-300 mb-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
        <div>
          <form action="mailto:nilsonjesusgarces@gmail.com" method="POST" className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0FAEBF]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0FAEBF]"
              required
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0FAEBF]"
              rows={4}
              required
            />
            <button
              type="submit"
              className="bg-[#023E73] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0FAEBF] transition duration-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Escribenos;
