import './ScrollDownButton.css'

/**
 * ScrollDownButton component - A button that scrolls to the next fullscreen section
 * 
 * @param {Object} props
 * @param {Function} props.onClick - Callback function when button is clicked
 */
export function ScrollDownButton({ onClick }) {
  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('ScrollDownButton clicked', { onClick, type: typeof onClick })
    if (typeof onClick === 'function') {
      onClick()
    } else {
      console.warn('onClick is not a function:', onClick)
    }
  }

  return (
    <button
      className="scroll-down-button"
      onClick={handleClick}
      aria-label="Scroll to next section"
      title="Scroll to next section"
    >
      <svg
        className="scroll-down-button__arrow"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 6L15 12L9 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="rotate(90 12 12)"
        />
      </svg>
    </button>
  )
}

