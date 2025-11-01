import './QueryBuilder.css'
import { ClearButton } from './ClearButton'

export function QueryBuilder({ query, setQuery }) {
  const append = (token) => setQuery((q) => (q ? `${q} ${token}` : token));

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setQuery(e.currentTarget.value);
    }
  };

  return (
    <div className="query-builder">
      <div className="query-builder__input-wrapper">
      <input
        value={query || ''}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Create a query here, e.g.: [-22,-4,18] NOT emotion"
        className="query-builder__input"
      />
        {query && (
          <ClearButton
            onClick={() => setQuery('')}
            ariaLabel="Clear query"
          />
        )}
      </div>

      <div className="query-builder__toolbar">
        {[
          { label: 'AND', onClick: () => append('AND') },
          { label: 'OR', onClick: () => append('OR') },
          { label: 'NOT', onClick: () => append('NOT') },
          { label: '(', onClick: () => append('(') },
          { label: ')', onClick: () => append(')') },
        ].map((b) => (
          <button
            key={b.label}
            onClick={b.onClick}
            className="query-builder__button"
          >
            {b.label}
          </button>
        ))}
      </div>
    </div>
  );
}
