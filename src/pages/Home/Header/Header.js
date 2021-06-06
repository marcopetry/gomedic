import React, { useEffect } from 'react'
import './Header.css'
import '../../index.css'

export const Header = ({ setBannerOpen }) => {
  const resizeImages = () => {
    const [containerHeader] = document.getElementsByClassName('container-header')
    const [containerHeaderContent] = document.getElementsByClassName('container-header-content')

    containerHeader.style.backgroundSize = `${containerHeader.clientWidth}px ${containerHeader.clientWidth * 0.3}px`
    containerHeaderContent.style.height = `${containerHeader.clientWidth * 0.3}px`
  }

  window.addEventListener('resize', resizeImages)

  useEffect(() => {
    resizeImages()

    return () => window.removeEventListener('resize', resizeImages)
  }, [])

  return (
    <div className="container-header">
      <div className="container-header-content">
        <h1 className="font-xlarge">AGENDA SUA CONSULTA, EXAME OU SEÇÃO</h1>
        <hr className="hr-primario" />
        <hr className="hr-secundario my-0" />

        <h2 className="text-uppercase font-large mt-2">Se você está com sintomas do Covid 19?</h2>

        <div className="container-header-content-clique-aqui d-flex flex-sm-column  flex-row align-items-center">
          <h2 className="font-medium">Clique no botão abaixo para agendar a sua consulta!</h2>
          <h3 className="font-medium ms-2">Veja quais são os sintomas</h3>
          <button className="btn ms-2" onClick={() => setBannerOpen(true)}>
            Clique aqui
          </button>
        </div>

        <button className="btn btn-lg btn-outline-light bg-transparent mt-3 py-3 line-height-0-3em">
          <div className="d-flex align-items-center flex-column">
            <h6 className="text-uppercase font-medium">Agenda consulta</h6>
            <span className="font-medium">para paciente com suspeita de COVID 19</span>
          </div>
        </button>
      </div>
    </div>
  )
}
