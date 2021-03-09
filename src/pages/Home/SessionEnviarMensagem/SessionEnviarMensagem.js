import React from 'react'
import './SessionEnviarMensagem.css'
import logo from '../../../assets/logo.png'

export const SessionEnviarMensagem = () => {
  return (
    <div className="background-color-mensagem p-5">
      <div className="m-auto d-flex w-75  justify-content-between align-items-center">
        <div>
          <img src={logo} alt="gomedic" height="200px" />
        </div>

        <div className="d-flex flex-column w-50 justify-content-center align-items-center me-5">
          <h3 className="text-light text-center text-uppercase">Agende suas consultas em instantes</h3>
          <hr className="w-75 m-0 mt-1 bg-white h-2-px" />
          <hr className="w-100 m-0 mt-1 bg-white h-2-px" />

          <span className="text-light text-center mt-4">
            Você já parou para pensar em como é difícil marcar consultas?
          </span>
          <span className="text-light text-center">
            Primeiro você revira o livro do convênio ou busca especialistas e clínicas na internet. Depois faz várias
            ligações e, se tudo der certo, consegue um horário para a mesma semana. Mas não precisa ser assim! Aqui você
            encontra especialistas e agenda consultas em instantes.
          </span>
          <button className="btn btn-outline-light w-50 mt-4">Enviar Mensagem</button>
        </div>
      </div>
    </div>
  )
}
