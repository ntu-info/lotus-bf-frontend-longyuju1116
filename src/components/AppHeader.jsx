import './AppHeader.css'

export function AppHeader({ onLogoClick }) {
  return (
    <header className="app-header">
      <div className="app-header__content">
        <img 
          src="/logo.svg" 
          alt="LoTUS Logo" 
          className="app-header__logo"
          onClick={onLogoClick}
          onError={(e) => {
            console.error('Failed to load logo.svg from /logo.svg, trying /lotus-bf/logo.svg')
            e.target.src = '/lotus-bf/logo.svg'
          }}
        />
        <div className="app-header__text">
          <h1 className="app-header__title">LoTUS-BF</h1>
          <div className="app-header__subtitle">
            Location-or-Term Unified Search for Brain Functions
          </div>
        </div>
      </div>
    </header>
  )
}

