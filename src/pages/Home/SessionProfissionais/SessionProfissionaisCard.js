import './SessionProfissionaisCard.css'
import cruz from '../../../assets/cruz-icon.png'

export const SessionProfissionaisCard = ({ children, title, icon }) => {
  return (
    <div className="session-profissionais-container-card d-flex flex-column w-25 align-items-center justify-content-between">
      <div className="d-flex flex-column align-items-center justify-content-between w-75">
        <img className="mt-5" src={icon} alt="clinico" height="50px" />
        <h4 className="mt-4 text-center text-white font-medium">{title}</h4>
      </div>

      <div className="w-75 d-flex flex-column align-items-center justify-content-center h-100">
        <span className="text-center text-white font-small">{children}</span>
      </div>

      <div className="session-profissionais-card-retangulo rounded-2 p-3 mb-5">
        <img src={cruz} alt="icon-medico" height="25px" />
      </div>
    </div>
  )
}
