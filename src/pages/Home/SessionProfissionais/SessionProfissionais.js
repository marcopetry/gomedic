import './SessionProfissionais.css'
import poligon from '../../../assets/Polygon.png'
import clinicoIcon from '../../../assets/clinico-icon.png'
import aparelhoMedicoIcon from '../../../assets/aparelho-medico-icon.png'
import planilhaMedicaIcon from '../../../assets/planilha-medica-icon.png'

import denteIcon from '../../../assets/dente-icon.png'
import { SessionProfissionaisCard } from './SessionProfissionaisCard'

export const SessionProfissionais = () => {
  return (
    <div className="d-flex flex-column align-items-center mb-5">
      <div className="d-flex align-items-center justify-content-center mt-5 w-100">
        <img src={poligon} alt="poligon" className="session-profissionais-poligon transform-180" />
        <div className="d-flex flex-column w-50">
          <div className="d-flex flex-column align-items-center">
            <span className="session-profissionais-text-color">Marque sua consulta com os melhores</span>
            <span className="text-uppercase fs-5">Profissionais</span>
          </div>
          <hr className="session-profissionais-hr my-1 mx-5" />
          <hr className="session-profissionais-hr my-1" />
        </div>
        <img className="session-profissionais-poligon" src={poligon} alt="poligon" />
      </div>

      <div className="d-flex w-75">
        <SessionProfissionaisCard title="Clínicos Gerais" icon={clinicoIcon} className="color-1">
          Com ampla capacitação em diversas áreas da Medicina. Trabalham habitualmente nos Cuidados da Saúde Primários.
        </SessionProfissionaisCard>
        <SessionProfissionaisCard title="Médicos Especialistas" icon={aparelhoMedicoIcon} className="color-2">
          Especialistas que atuam em áreas especificas, atendem em Clínicas Médicas ou na Medicina Interna.
        </SessionProfissionaisCard>
        <SessionProfissionaisCard title="Dentistas" icon={denteIcon} className="color-3">
          Responsáveis por cuidar da saúde bucal em geral e implantodentistas especializados.
        </SessionProfissionaisCard>
        <SessionProfissionaisCard title="Terapeutas" icon={planilhaMedicaIcon} className="color-4">
          Profissionais das áreas de psicologia, fisioterapia, ortopedia, fonoaudiologia, terapias naturais e outras.
        </SessionProfissionaisCard>
      </div>

      <button className="btn btn-outline-primary btn-lg mt-5 color-button">Ver Todos</button>
    </div>
  )
}
