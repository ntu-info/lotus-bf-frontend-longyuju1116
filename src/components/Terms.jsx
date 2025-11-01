import { useEffect, useMemo, useState } from 'react'
import './Terms.css'
import { ClearButton } from './ClearButton'
import { Pagination } from './Pagination'

export function Terms ({ onPickTerm, onEasterEgg }) {
  const [terms, setTerms] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const [page, setPage] = useState(1)
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
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const trimmedSearch = search.trim()
                // 檢查是否搜尋 "LoTUS-BF" (不區分大小寫)
                if (trimmedSearch.toLowerCase() === 'lotus-bf' && onEasterEgg) {
                  onEasterEgg()
                }
              }
            }}
            placeholder="Search terms…"
            className="terms__input"
          />
          {search && (
            <ClearButton
              onClick={() => {
                setSearch('')
                setPage(1)
              }}
              ariaLabel="Clear search"
            />
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
            <div className="terms__pagination-wrapper">
              <div className="terms__pagination-info">
                <b>{formatNumber(totalItems)}</b> results
              </div>
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}
