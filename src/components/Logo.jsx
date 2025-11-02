import './Logo.css'

export function Logo({ onClick, className = '' }) {
  return (
    <div className={`logo-container ${className}`}>
      <img 
        src={`${import.meta.env.BASE_URL}logo.svg`} 
        alt="LoTUS Logo" 
        className="logo"
        onClick={onClick}
      />
    </div>
  )
}

