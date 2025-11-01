import './Resizer.css'

export function Resizer({ onMouseDown, ariaLabel }) {
  return (
    <div 
      className="resizer" 
      aria-label={ariaLabel}
      onMouseDown={onMouseDown}
    />
  )
}

