import Image from 'next/image'

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="flex justify-center space-y-6 rounded-lg bg-[#FFE8D6] p-8 shadow-lg">
        <Image
          src="/book.png"
          width={500}
          height={500}
          alt="Imagen del Club de Libros"
          className="rounded-md"
        />
        <div className='m-4'>
          <div className="font-poppins mb-4 text-center text-xl font-semibold text-[#282A23]">
          Bienvenido al Club de Libros
          </div>

          <div className="font-poppins text-[#282A23]">
          El Club de Libros es un espacio para amantes de la literatura donde compartimos y discutimos nuestras lecturas favoritas. Si eres un apasionado de los libros y buscas un lugar para conectar con personas con tus mismos intereses, ¡este es tu sitio! Únete a nosotros y descubre nuevos mundos a través de la lectura.
          </div>
        </div>
      </div>
    </main>
  )
}
