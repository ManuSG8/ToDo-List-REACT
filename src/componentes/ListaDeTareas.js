import React, { useState } from 'react'
import TareaFormulario from './TareaFormulario'
import Tarea from './Tarea'
import '../styles/ListaDeTareas.css'

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]) // Inicialmente tareas va a ser un array vacio

  const agregarTarea = tarea => {
    // Comprobamos que la cadena no este vacia
    if(tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim()

      const tareasActualizadas = [tarea, ...tareas]
      setTareas(tareasActualizadas)
    }
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActualizadas)
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id) {
        tarea.completada = !tarea.completada
      }
      return tarea
    })
    setTareas(tareasActualizadas)
  }

  return(
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id} // Identificador unico
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          )
        }
      </div>
    </>
  )
}

export default ListaDeTareas