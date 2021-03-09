import React from 'react'
import './SessionContatos.css'

import poligon from '../../../assets/Polygon-white.png'
import facebookIcon from '../../../assets/facebook-icon.png'
import instagramIcon from '../../../assets/instagram-icon.png'
import twitterIcon from '../../../assets/twitter-icon.png'

export const SessionContatos = () => {
  return (
    <div className="session-contatos-background-color w-100">
      <div className="d-flex flex-row p-5 justify-content-around w-75 m-auto">
        <div className="d-flex flex-column w-75">
          <div className="d-flex aling-items-center">
            <img src={poligon} alt="poligon" width="15px" />
            <span className="ms-2 text-white fw-bold">CONTATOS</span>
          </div>
          <span className="text-white mt-3">guiliano-depiro@hotmail.com</span>
          <span className="text-white">+55(43)99612-0000</span>
        </div>

        <hr className="h-100 bg-white" />

        <div className="d-flex flex-column w-75">
          <div className="d-flex aling-items-center">
            <img src={poligon} alt="poligon" width="15px" />
            <span className="ms-2 text-white fw-bold">SOBRE NÓS</span>
          </div>

          <span className="text-white mt-3">
            Consultas não precisam ser complicadas. Esta ferramenta conecta pacientes a especialistas da saúde
          </span>
        </div>

        <hr />

        <div className="d-flex flex-column w-75 align-items-center">
          <div className="d-flex aling-items-center">
            <img src={poligon} alt="poligon" width="15px" />
            <span className="ms-2 text-white fw-bold">ACOMPANHE</span>
          </div>

          <div className="ms-5 mt-3">
            <img className="me-3" src={twitterIcon} alt="twitter-contact" height="40px" />
            <img className="me-3" src={facebookIcon} alt="facebook-contact" height="40px" />
            <img src={instagramIcon} alt="instagram-contact" height="40px" />
          </div>
        </div>
      </div>
    </div>
  )
}
