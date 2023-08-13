'use client'

import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import AddEventForm from '@/components/AddEventForm'

const localizer = momentLocalizer(moment)

function CalendarPage () {
  const [events, setEvents] = useState([
    {
      title: 'Reunión de Lectura',
      start: new Date(),
      end: new Date(moment().add(1, 'hours').toDate())
    },
    {
      title: 'Evento de Presentación de Libro',
      start: new Date(moment().add(2, 'days').toDate()),
      end: new Date(moment().add(2, 'days').add(2, 'hours').toDate())
    }
  ])

  const handleAddEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, event])
  }

  return (
    <div className="m-4 mt-20 space-y-6 rounded-lg bg-[#FFE8D6] p-8 shadow-lg">
      <div className='flex justify-between'>
        <h1 className="mb-4 text-xl font-bold">Próximas Reuniones y Eventos</h1>
        <AddEventForm onAdd={handleAddEvent} />
      </div>
      <div style={{ height: 500, marginTop: '20px' }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    </div>
  )
}

export default CalendarPage
