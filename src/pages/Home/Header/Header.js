import React, { useEffect } from 'react'
import './Header.css'

export const Header = ({ setBannerOpen }) => {
  useEffect(() => {
    const [containerHeader] = document.getElementsByClassName('container-header')
    const [containerHeaderContent] = document.getElementsByClassName('container-header-content')

    containerHeader.style.backgroundSize = `${containerHeader.clientWidth}px ${containerHeader.clientWidth * 0.3}px`
    containerHeaderContent.style.height = `${containerHeader.clientWidth * 0.3}px`
  }, [])

  return (
    <div className="container-header">
      <div className="container-header-content">
        <h1 className="fs-5">AGENDA SUA CONSULTA, EXAME OU SEÇÃO</h1>
        <hr className="hr-primario" />
        <hr className="hr-secundario my-1" />

        <h2 className="text-uppercase fs-6 mt-2">Se você está com sintomas do Covid 19?</h2>

        <div className="container-header-content-clique-aqui d-flex flex-row align-items-center">
          <h2 className="fs-6">Clique no botão abaixo para agendar a sua consulta!</h2>
          <h3 className="fs-6 ms-2">Veja quais são os sintomas</h3>
          <button className="btn ms-2 btn-sm" onClick={() => setBannerOpen(true)}>
            Clique aqui
          </button>
        </div>

        <button className="btn btn-lg btn-outline-light bg-transparent mt-3 py-3 line-height-0-3em">
          <div className="d-flex align-items-center flex-column">
            <h6 className="text-uppercase">Agenda consulta</h6>
            <span className="font-size-0-8em to-lower-case">para paciente com suspeita de COVID 19</span>
          </div>
        </button>
      </div>
    </div>
  )
}
