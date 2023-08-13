'use client'

import { Button } from '@mui/material'
import React, { useState } from 'react'
import { MdHome, MdCalendarToday, MdList, MdContacts } from 'react-icons/md'
import { useRouter } from 'next/navigation'

const MainLayout = () => {
  const router = useRouter()
  const [activeRoute, setActiveRoute] = useState('')

  const navItems = [
    { id: 'Home', label: 'Home', icon: <MdHome />, route: '/' },
    { id: 'Calendar', label: 'Calendar', icon: <MdCalendarToday />, route: '/calendar' },
    { id: 'ListBooks', label: 'List Books', icon: <MdList />, route: '/list-books' },
    { id: 'Contacts', label: 'Contacts', icon: <MdContacts />, route: '/contacts' }
  ]

  const handleNavigation = (route, itemId) => {
    setActiveRoute(itemId)
    router.push(route)
  }

  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-[#282A23] p-4">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="font-poppins text-xl font-semibold text-[#FFE8D6]">Club de Libros</div>
          <div className="flex space-x-4">
            {navItems.map(item => (
              <Button
                key={item.id}
                onClick={() => handleNavigation(item.route, item.id)}
                className={`group transition-transform duration-300 ease-in-out ${
                  activeRoute === item.id
                    ? 'font-roboto bg-[#FFE8D6] text-[#282A22] hover:scale-[1.05] hover:bg-[#FFE8D6]'
                    : 'font-poppins bg-[#282A23] text-[#FFE8D6] hover:scale-[1.05] hover:bg-[#FFE8D6] hover:text-[#282A22]'
                }`}
              >
                <div
                  className={`mr-1 opacity-0 transition-opacity duration-0 ease-in-out hover:opacity-100 group-hover:opacity-100 ${
                    activeRoute === item.id ? 'opacity-100' : ''
                  }`}
                >
                  {item.icon}
                </div>
                {item.label}
              </Button>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}

export default MainLayout
