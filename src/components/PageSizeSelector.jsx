import './PageSizeSelector.css'

export function PageSizeSelector({ pageSize, onChange }) {
  const options = [20, 50, 100]

  return (
    <div className="page-size-selector">
      <span className="page-size-selector__label">Results per page:</span>
      <div className="page-size-selector__buttons">
        {options.map(size => (
          <button
            key={size}
            className={`page-size-selector__button ${pageSize === size ? 'page-size-selector__button--active' : ''}`}
            onClick={() => onChange(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}

