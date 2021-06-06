import React, { useEffect } from 'react'

import './SessionCadastro.css'

import massagista from '../../../assets/ortopedista--com-paciente.png'

export const SessionCadastro = () => {
  const resizeImages = () => {
    const containerHeader = document.getElementById('session-cadastro')
    const massagista = document.getElementById('massagista')

    // containerHeader.style.backgroundSize = `${containerHeader.clientWidth}px ${containerHeader.clientWidth * 0.3}px`
    massagista.style.height = `${containerHeader.clientWidth * 0.3 > 400 ? 400 : containerHeader.clientWidth * 0.3}px`
  }

  window.addEventListener('resize', resizeImages)

  useEffect(() => {
    resizeImages()

    return () => window.removeEventListener('resize', resizeImages)
  }, [])

  return (
    <>
      <div
        id="session-cadastro"
        className="d-flex justify-content-center session-cadastro-background-color w-100 mx-auto"
      >
        <div className="w-35 d-flex flex-column justify-content-center align-items-center py-5">
          <span className="text-color-1 font-medium">Você é um profissional da saúde?</span>
          <h3 className="text-color-1 text-uppercase text-center">Cadastre seu consultório ou clínica</h3>
          <hr className="color-1 w-75 my-1 h-2px" />
          <hr className="color-1 w-100 my-1 h-2px" />
          <span className="text-center font-small">
            Aproveite as oportunidades do mundo digital! Cadastre-se e administre sua agenda de consultas on-line.
            Preencha nosso formulário e aguarde contato.
          </span>
          <button className="btn btn-lg color-1 mt-4 text-white text-uppercase">Cadastrar agora</button>
        </div>
        <img src={massagista} alt="massagista" height="400px" id="massagista" />
        <div />
      </div>
      <div className="border-bottom-cadastro margin-20px-negativo" />
      <div className="border-bottom-cadastro opacity-100" />
    </>
  )
}
