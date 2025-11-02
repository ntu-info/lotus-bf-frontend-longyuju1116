import './AppHeader.css'

export function AppHeader({ onLogoClick }) {
  return (
    <header className="app-header">
      <div className="app-header__content">
        <img 
          src={`${import.meta.env.BASE_URL || ''}logo.svg`} 
          alt="LoTUS Logo" 
          className="app-header__logo"
          onClick={onLogoClick}
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

