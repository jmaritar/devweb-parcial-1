'use client'

import React, { useState } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { AiOutlinePlus } from 'react-icons/ai'

function AddEventForm ({ onAdd }) {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleSubmit = () => {
    if (title && startDate && endDate) {
      onAdd({
        title,
        start: new Date(startDate),
        end: new Date(endDate)
      })
      setTitle('')
      setStartDate('')
      setEndDate('')
      setOpen(false)
    }
  }

  return (
    <>
      <Button className='bg-[#282A23] text-[#FFE8D6] hover:scale-[1.05] hover:bg-[#282A23] hover:text-[#FFE8D6]' color="primary" onClick={() => setOpen(true)}>
        <AiOutlinePlus className='mr-2 h-6 w-6'/>
        Agregar Evento
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Agregar Nuevo Evento</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Título del Evento"
            type="text"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            id="start-date"
            label="Fecha de Inicio"
            type="datetime-local"
            fullWidth
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            margin="dense"
            id="end-date"
            label="Fecha de Finalización"
            type="datetime-local"
            fullWidth
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputLabelProps={{
              shrink: true
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddEventForm
