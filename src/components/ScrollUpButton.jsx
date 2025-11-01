import './ScrollDownButton.css'

/**
 * ScrollUpButton component - A button that scrolls to the previous fullscreen section
 * 
 * @param {Object} props
 * @param {Function} props.onClick - Callback function when button is clicked
 */
export function ScrollUpButton({ onClick }) {
  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('ScrollUpButton clicked', { onClick, type: typeof onClick })
    if (typeof onClick === 'function') {
      onClick()
    } else {
      console.warn('onClick is not a function:', onClick)
    }
  }

  return (
    <button
      className="scroll-down-button scroll-up-button"
      onClick={handleClick}
      aria-label="Scroll to previous section"
      title="Scroll to previous section"
    >
      <svg
        className="scroll-down-button__arrow scroll-up-button__arrow"
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
          transform="rotate(-90 12 12)"
        />
      </svg>
    </button>
  )
}

