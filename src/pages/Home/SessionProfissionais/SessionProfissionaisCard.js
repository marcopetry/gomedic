import './SessionProfissionaisCard.css'
import cruz from '../../../assets/cruz-icon.png'

export const SessionProfissionaisCard = ({ children, title, icon, className, ...props }) => {
  return (
    <div
      className={`session-profissionais-card d-flex flex-column w-25 align-items-center justify-content-between p-5 mt-5 ${className}`}
      {...props}
    >
      <div className="d-flex flex-column align-items-center">
        <img className="mb-5" src={icon} alt="clinico" />
        <h4 className="text-center text-white">{title}</h4>
        <span className="text-center text-white mt-4">{children}</span>
      </div>
      <div className="session-profissionais-card-retangulo rounded-2 p-3 mt-5">
        <img src={cruz} alt="icon-medico" />
      </div>
    </div>
  )
}
