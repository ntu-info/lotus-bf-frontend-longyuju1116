import './ClearStarButton.css'

/**
 * ClearStarButton component - Clears all study markings
 * @param {Object} props
 * @param {Function} props.onClick - Callback function when button is clicked
 */
export function ClearStarButton({ onClick }) {
  return (
    <button
      className="clear-star-button"
      onClick={onClick}
      aria-label="Clear all remarks"
      title="Clear all remarks"
    >
      Clear Remark
    </button>
  )
}

