'use client'

import Book from '@/components/book'
import { useState, useEffect } from 'react'

export default function BookList () {
  const [books, setBooks] = useState([])

  useEffect(() => {
    async function fetchBooks () {
      const res = await fetch('https://openlibrary.org/subjects/fantasy.json?published_in=2000-2021&limit=15')
      const data = await res.json()
      setBooks(data.works)
    }

    fetchBooks()
  }, [])

  return (
    <div className="mt-20 min-h-screen bg-[#282A23] p-8">
      <div className="mx-auto">
        <h1 className="font-poppins mb-8 text-xl font-semibold text-[#FFE8D6]">Lista de Libros de Fantasía</h1>

        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {books.map(book => (
            <Book key={book.key} book={book} />
          ))}
        </ul>
      </div>
    </div>
  )
}
