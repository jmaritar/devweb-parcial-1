'use client'

import React from 'react'

const PageContacts = () => {
  return (
    <div className="min-h-screen bg-[#282A23] p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-poppins mb-8 text-xl font-semibold text-[#FFE8D6]">Contáctanos</h1>

        {/* Formulario de contacto */}
        <div className="mb-8 rounded-md bg-white p-6 shadow-lg">
          <h2 className="font-poppins mb-4 font-semibold text-[#282A23]">Envíanos un mensaje</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="mb-2 block text-gray-700">Nombre:</label>
              <input type="text" id="name" placeholder="Escribe tu nombre" className="w-full rounded-md border p-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block text-gray-700">Correo electrónico:</label>
              <input type="email" id="email" placeholder="Escribe tu correo" className="w-full rounded-md border p-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="mb-2 block text-gray-700">Mensaje:</label>
              <textarea id="message" rows="5" placeholder="Escribe tu mensaje" className="w-full rounded-md border p-2"></textarea>
            </div>
            <button type="submit" className="rounded-md bg-[#FFE8D6] px-4 py-2 text-[#282A23]">Enviar</button>
          </form>
        </div>

        {/* Información de contacto */}
        <div className="mb-8 rounded-md bg-white p-6 shadow-lg">
          <h2 className="font-poppins mb-4 font-semibold text-[#282A23]">Información de contacto</h2>
          <p className="mb-2"><span className="font-semibold">Dirección:</span> 123 Calle Principal, Ciudad, País</p>
          <p className="mb-2"><span className="font-semibold">Teléfono:</span> +123 456 7890</p>
          <p className="mb-2"><span className="font-semibold">Correo:</span> info@tudominio.com</p>
        </div>

        {/* Redes Sociales */}
        <div className="rounded-md bg-white p-6 shadow-lg">
          <h2 className="font-poppins mb-4 font-semibold text-[#282A23]">Síguenos en redes sociales</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-[#282A23] hover:text-[#FFE8D6]">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" className="text-[#282A23] hover:text-[#FFE8D6]">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="text-[#282A23] hover:text-[#FFE8D6]">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageContacts
