import React, { useCallback } from 'react'

import './Banner.css'

import fecharImg from '../../assets/fechar.png'
import { useHistory } from 'react-router'

export const Banner = () => {
  const history = useHistory()

  const redirectHome = useCallback(() => {
    history.push('/')
  }, [history])

  return (
    <div className="banner">
      <div className="banner-btn-fechar" onClick={redirectHome}>
        <img src={fecharImg} alt="fechar" />
      </div>
      <div className="d-flex justify-content-between h-100 w-100 py-10">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-uppercase text-white my-3">Sintomas do covid 19</h1>
          <div className="bg-custom py-1 px-5 my-3">
            <h2 className="text-white ms-5">Sintomas de síndrome gripal-SG</h2>
          </div>
          <ul className="d-flex flex-column w-100">
            <li className="text-white my-2 ms-5 fs-4 fw-bold">Tosse</li>
            <li className="text-white my-2 ms-5 fs-4 fw-bold">Febre</li>
            <li className="text-white my-2 ms-5 fs-4 fw-bold">Coriza</li>
            <li className="text-white my-2 ms-5 fs-4 fw-bold">Dor de garganta</li>
            <li className="text-white my-2 ms-5 fs-4 fw-bold">Dificuldade para respirar</li>
            <li className="text-white my-2 ms-5 fs-4 fw-bold">Perda do olfato (anosmia)</li>
            <li className="text-white my-2 ms-5 fs-4 fw-bold">Alteração do paladar (ageusia)</li>
            <li className="text-white my-2 ms-5 fs-4 fw-bold">Distúrbios gastrintestinais (vômitos/diarreia)</li>
            <li className="text-white my-2 ms-5 fs-4 fw-bold">Cansaço (astenia)</li>
            <li className="text-white my-2 ms-5 fs-4 fw-bold">Diminuição do apetite (hiporexia)</li>
            <li className="text-white my-2 ms-5 fs-4 fw-bold">Dispnéia (falta de ar)</li>
          </ul>
        </div>
        <div className="d-flex flex-column h-100 w-50 justify-content-end align-items-center">
          <h3 className="text-white mb-4">Você está com suspeita de COVID19?</h3>
          <button className="btn banner-btn">Agendar consulta</button>
        </div>
      </div>
    </div>
  )
}
