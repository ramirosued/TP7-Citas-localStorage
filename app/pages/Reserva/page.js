'use client'
import Subtitulo from '@/app/components/Subtitulo/Subtitulo';
import Titulo from '@/app/components/Titulo/Titulo';
import Formulario from '@/app/components/Formulario/Formulario';
import Citas from '@/app/components/Cita/Cita';
import { useState, useEffect } from 'react'
export default function Reserva() {
  const [citas, setCitas] = useState(() => {
    // Obtén las citas del localStorage o inicializa con un array vacío
    const storedCitas = localStorage.getItem("citas");
    return storedCitas ? JSON.parse(storedCitas) : [];
  });

  useEffect(() => {
    // Guarda las citas en localStorage cada vez que cambian
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

    return(
            <>
            <Titulo texto="Administrador de citas" />
            <div className='container'>
                <div className='column'>
                  <Subtitulo texto={'CREAR MI CITA'}></Subtitulo>
                  <Formulario citas={citas} setCitas={setCitas} name={'Nombre mascota'} name1={'Nombre dueño'} fecha={'Fecha'} hora={'Hora'} sintomas={'Sintomas'} tipo={'Date'} tipo1={'Time'}></Formulario>
                </div>
                <div className='column'>
                  <Subtitulo texto={'ADMINISTRA TUS CITAS'}></Subtitulo>
                  {
                    citas.map(t => <Citas citas={citas} setCitas={setCitas} id={t.id} mascota={t.nombre} dueño={t.nombreDueño} fecha={t.fecha} hora={t.hora} sintomas={t.sintomas}/>)
                  }        
              </div>
            </div>
            </>
          );    
}
