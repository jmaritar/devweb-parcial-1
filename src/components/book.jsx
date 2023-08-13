import Image from 'next/image'
import { useState, useEffect } from 'react'
import { AiFillHeart } from 'react-icons/ai'

export default function Book ({ book }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [price, setPrice] = useState(0)

  useEffect(() => {
    setPrice((Math.random() * 40 + 10).toFixed(2))
  }, [])

  return (
    <li className="flex space-x-4 rounded-md bg-[#FFE8D6] p-6 shadow-lg">
      {book.cover_id && (
        <Image
          width={500}
          height={500}
          src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
          alt={book.title}
          className="w-32"
        />
      )}
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <h2 className="font-poppins font-semibold text-[#282A23]">{book.title}</h2>
          <button
            className="group rounded-md bg-white p-2 transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            onClick={() => setIsFavorite(!isFavorite)}>
            {isFavorite
              ? (
                <AiFillHeart className='h-7 w-7 text-red-600'/>
              )
              : (
                <AiFillHeart className='h-7 w-7 text-red-200 group-hover:text-red-400'/>
              )}
          </button>
        </div>
        <p className="mt-2 text-gray-700">{book.subtitle}</p>
        <p className="mt-2 text-gray-500">by {book.authors[0].name}</p>
        <p className="mt-4 font-semibold text-green-500">Q {price}</p>
      </div>
    </li>
  )
}
