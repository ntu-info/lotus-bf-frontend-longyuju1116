import './Logo.css'

export function Logo({ onClick, className = '' }) {
  return (
    <div className={`logo-container ${className}`}>
      <img 
        src="/logo.svg" 
        alt="LoTUS Logo" 
        className="logo"
        onClick={onClick}
        onError={(e) => {
          console.error('Failed to load logo.svg from /logo.svg, trying /lotus-bf/logo.svg')
          e.target.src = '/lotus-bf/logo.svg'
        }}
      />
    </div>
  )
}

