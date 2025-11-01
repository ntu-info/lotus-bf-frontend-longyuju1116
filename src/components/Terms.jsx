import { useEffect, useMemo, useState } from 'react'
import './Terms.css'

export function Terms ({ onPickTerm }) {
  const [terms, setTerms] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const [page, setPage] = useState(1)
  const [pageInput, setPageInput] = useState('1')
  const rowsPerPage = 3 // 每頁顯示 3 行
  const estimatedItemsPerRow = 10 // 估計每行可以顯示的數量（用於計算分頁）- 減半後約每頁 30 個

  useEffect(() => {
    let alive = true
    const ac = new AbortController()
    const load = async () => {
      setLoading(true)
      setErr('')
      try {
        const res = await fetch('/terms', { signal: ac.signal })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        if (!alive) return
        setTerms(Array.isArray(data?.terms) ? data.terms : [])
      } catch (e) {
        if (!alive) return
        setErr(`Failed to fetch terms: ${e?.message || e}`)
      } finally {
        if (alive) setLoading(false)
      }
    }
    load()
    return () => { alive = false; ac.abort() }
  }, [])

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase()
    if (!s) return terms
    return terms.filter(t => t.toLowerCase().includes(s))
  }, [terms, search])

  const totalItems = filtered.length
  const estimatedItemsPerPage = rowsPerPage * estimatedItemsPerRow
  const totalPages = Math.max(1, Math.ceil(totalItems / estimatedItemsPerPage))
  const startIndex = (page - 1) * estimatedItemsPerPage
  const endIndex = startIndex + estimatedItemsPerPage
  const pageTerms = filtered.slice(startIndex, endIndex)

  useEffect(() => {
    if (page > totalPages && totalPages > 0) {
      setPage(totalPages)
    }
  }, [page, totalPages])

  // Format number with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const handlePageJump = () => {
    const pageNum = parseInt(pageInput, 10)
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages && pageNum !== page) {
      setPage(pageNum)
    }
  }

  const handlePageInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handlePageJump()
      e.target.blur()
    }
  }

  const handlePageInputBlur = () => {
    handlePageJump()
  }

  // Sync pageInput with page
  useEffect(() => {
    setPageInput(String(page))
  }, [page])

  return (
    <div className="terms">
      <div className="terms__header">
        <h2 className="terms__title">Terms</h2>
      </div>
      
      <div className="terms__controls">
        <div className="terms__input-wrapper">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setPage(1)
            }}
            placeholder="Search terms…"
            className="terms__input"
          />
          {search && (
            <button
              onClick={() => {
                setSearch('')
                setPage(1)
              }}
              className="terms__clear-icon"
              aria-label="Clear search"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="18" height="18">
                <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z" fill="currentColor"/>
              </svg>
            </button>
          )}
        </div>
      </div>

      {loading && (
        <div className="terms__skeleton">
          {Array.from({ length: rowsPerPage }).map((_, i) => (
            <div key={i} className="terms__skeleton-row" />
          ))}
        </div>
      )}

      {err && (
        <div className="terms__error">
          {err}
        </div>
      )}

      {!loading && !err && (
        <>
          <div className="terms__list">
            {pageTerms.length === 0 ? (
              <div className="terms__empty">No terms found</div>
            ) : (
              <div className="terms__container">
                {pageTerms.map((t, idx) => (
                  <a
                    key={`${t}-${startIndex + idx}`}
                    href="#"
                    className="terms__name"
                    title={t}
                    aria-label={`Add term ${t}`}
                    onClick={(e) => { e.preventDefault(); onPickTerm?.(t); }}
                  >
                    {t}
                  </a>
                ))}
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="terms__pagination">
              <div className="terms__pagination-info">
                <b>{formatNumber(totalItems)}</b> results, page{' '}
                <input
                  type="number"
                  min="1"
                  max={totalPages}
                  value={pageInput}
                  onChange={(e) => setPageInput(e.target.value)}
                  onKeyDown={handlePageInputKeyDown}
                  onBlur={handlePageInputBlur}
                  className="terms__page-input"
                />
                {' '}/ <b>{totalPages}</b>
              </div>
              <div className="terms__pagination-controls">
                <button 
                  disabled={page <= 1} 
                  onClick={() => setPage(1)}
                  className="terms__pagination-button"
                >
                  &lt;&lt;
                </button>
                <button 
                  disabled={page <= 1} 
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  className="terms__pagination-button"
                >
                  &lt;
                </button>
                <button 
                  disabled={page >= totalPages} 
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  className="terms__pagination-button"
                >
                  &gt;
                </button>
                <button 
                  disabled={page >= totalPages} 
                  onClick={() => setPage(totalPages)}
                  className="terms__pagination-button"
                >
                  &gt;&gt;
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
