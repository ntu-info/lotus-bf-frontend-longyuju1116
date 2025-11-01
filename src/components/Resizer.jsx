import './Resizer.css'

export function Resizer({ onMouseDown, ariaLabel, isDragging = false }) {
  return (
    <div 
      className={`resizer ${isDragging ? 'resizer--dragging' : ''}`}
      aria-label={ariaLabel}
      onMouseDown={onMouseDown}
    />
  )
}

