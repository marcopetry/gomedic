import React from 'react'

import './SessionCadastro.css'

import massagista from '../../../assets/ortopedista--com-paciente.png'

export const SessionCadastro = () => {
  return (
    <div className="d-flex justify-content-center session-cadastro-background-color w-100 mx-auto">
      <div className="w-35 d-flex flex-column justify-content-center align-items-center py-5">
        <span className="text-color-1">Você é um profissional da saúde?</span>
        <h3 className="text-color-1 text-uppercase text-center">Cadastre seu consultório ou clínica</h3>
        <hr className="color-1 w-75 my-1 h-2px" />
        <hr className="color-1 w-100 my-1 h-2px" />
        <span className="text-center">
          Aproveite as oportunidades do mundo digital! Cadastre-se e administre sua agenda de consultas on-line.
          Preencha nosso formulário e aguarde contato.
        </span>
        <button className="btn btn-lg color-1 mt-4 text-white text-uppercase">Cadastrar agora</button>
      </div>
      <img src={massagista} alt="massagista" height="400px" id="massagista" />
      {/* <div />
      <div /> bordas de baixo */}
    </div>
  )
}
