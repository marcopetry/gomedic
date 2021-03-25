import React from 'react'

import './Banner.css'

import fecharImg from '../../assets/fechar.png'

export const Banner = ({ setBannerOpen }) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="d-flex justify-content-between h-100 w-100">
          <div className="d-flex flex-column justify-content-center align-items-center w-50">
            <h3 className="text-uppercase text-white ms-5 me-auto">Sintomas do covid 19</h3>
            <div className="bg-custom me-auto">
              <h5 className="text-white ms-5 mb-0 p-2">Sintomas de síndrome gripal-SG</h5>
            </div>
            <ul className="d-flex flex-column w-100">
              <li className="text-white my-1 ms-5 fw-bold">Tosse</li>
              <li className="text-white my-1 ms-5 fw-bold">Febre</li>
              <li className="text-white my-1 ms-5 fw-bold">Coriza</li>
              <li className="text-white my-1 ms-5 fw-bold">Dor de garganta</li>
              <li className="text-white my-1 ms-5 fw-bold">Dificuldade para respirar</li>
              <li className="text-white my-1 ms-5 fw-bold">Perda do olfato (anosmia)</li>
              <li className="text-white my-1 ms-5 fw-bold">Alteração do paladar (ageusia)</li>
              <li className="text-white my-1 ms-5 fw-bold">Distúrbios gastrintestinais (vômitos/diarreia)</li>
              <li className="text-white my-1 ms-5 fw-bold">Cansaço (astenia)</li>
              <li className="text-white my-1 ms-5 fw-bold">Diminuição do apetite (hiporexia)</li>
              <li className="text-white my-1 ms-5 fw-bold">Dispnéia (falta de ar)</li>
            </ul>
          </div>
          <div className="d-flex flex-column h-100 w-50 justify-content-between align-items-center">
            <div className="d-flex w-100 justify-content-end mt-4 me-5" onClick={() => setBannerOpen(false)}>
              <img src={fecharImg} alt="fechar" />
            </div>
            <div className="d-flex justify-content-center flex-column align-items-center">
              <h4 className="text-white mb-4">Você está com suspeita de COVID19?</h4>
              <button className="btn banner-btn mb-5">Agendar consulta</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
