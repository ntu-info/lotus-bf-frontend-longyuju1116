// Locations.jsx
import { useEffect, useMemo, useState } from 'react'
import './Locations.css'

function cls (...xs) { return xs.filter(Boolean).join(' ') }

export function Locations ({ query }) {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const [r, setR] = useState(6.0)
  const [limit, setLimit] = useState(200)
  const [offset, setOffset] = useState(0)
  const [sortKey, setSortKey] = useState('study_id')
  const [sortDir, setSortDir] = useState('asc')
  const pageSize = 30
  const [page, setPage] = useState(1)

  useEffect(() => { setPage(1); setOffset(0) }, [query])

  useEffect(() => {
    if (!query) return
    let alive = true
    const ac = new AbortController()
    ;(async () => {
      setLoading(true); setErr('')
      try {
        const u = new URL(`/query/${encodeURIComponent(query)}/locations`, window.location.origin)
        u.searchParams.set('r', String(r))
        if (limit != null) u.searchParams.set('limit', String(limit))
        if (offset) u.searchParams.set('offset', String(offset))
        const res = await fetch(u.pathname + u.search, { signal: ac.signal })
        const data = await res.json().catch(()=>({}))
        if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`)
        if (!alive) return
        setRows(Array.isArray(data?.results) ? data.results : [])
      } catch (e) {
        if (!alive) return
        setErr(e?.message || String(e))
        setRows([])
      } finally {
        if (alive) setLoading(false)
      }
    })()
    return () => { alive = false; ac.abort() }
  }, [query, r, limit, offset])

  const sorted = useMemo(() => {
    const arr = [...rows]
    const dir = sortDir === 'asc' ? 1 : -1
    arr.sort((a,b) => {
      const A = a?.[sortKey], B = b?.[sortKey]
      if (sortKey === 'study_id' || sortKey === 'x' || sortKey === 'y' || sortKey === 'z') {
        return ((Number(A)||0) - (Number(B)||0)) * dir
      }
      return String(A||'').localeCompare(String(B||'')) * dir
    })
    return arr
  }, [rows, sortKey, sortDir])

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize))
  const pageRows = sorted.slice((page - 1) * pageSize, page * pageSize)

  const changeSort = (k) => {
    if (k === sortKey) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(k); setSortDir('asc') }
  }

  // Helper function to get PubMed URL
  const getPubMedUrl = (studyId) => {
    if (!studyId) return null
    const id = String(studyId).trim()
    if (!id || !/^\d+$/.test(id)) return null
    return `https://pubmed.ncbi.nlm.nih.gov/${id}/`
  }

  return (
    <div className="locations">
      <div className="locations__header">
        <div className="locations__title">Locations</div>
        <div className="locations__header-text">
          {query ? `query: ${query}` : '請在上方建立查詢'}
        </div>
      </div>

      <div className="locations__controls">
        <label className="locations__control">
          r (mm)
          <input 
            type="number" 
            step="0.5" 
            value={r} 
            onChange={e=>setR(Number(e.target.value)||6)} 
            className="locations__input"
          />
        </label>
        <label className="locations__control">
          limit
          <input 
            type="number" 
            step="10" 
            value={limit} 
            onChange={e=>setLimit(Math.max(0, Number(e.target.value)||0))} 
            className="locations__input"
          />
        </label>
        <label className="locations__control">
          offset
          <input 
            type="number" 
            step="10" 
            value={offset} 
            onChange={e=>setOffset(Math.max(0, Number(e.target.value)||0))} 
            className="locations__input"
          />
        </label>
      </div>

      {!query && (
        <div className="locations__empty">
          尚未提供查詢字串。
        </div>
      )}

      {query && loading && (
        <div className="locations__skeleton">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="locations__skeleton-row" />
          ))}
        </div>
      )}

      {query && err && (
        <div className="locations__error">
          {err}
        </div>
      )}

      {query && !loading && !err && (
        <div className="locations__table-wrapper">
          <table className="locations__table">
            <thead className="locations__thead">
              <tr>
                {[
                  { key: 'study_id', label: 'Study ID' },
                  { key: 'x', label: 'X' },
                  { key: 'y', label: 'Y' },
                  { key: 'z', label: 'Z' }
                ].map(({ key, label }) => (
                  <th 
                    key={key} 
                    className="locations__th"
                    onClick={() => changeSort(key)}
                  >
                    <span className="locations__th-content">
                      {label}
                      <span className="locations__sort-indicator">
                        {sortKey === key ? (sortDir === 'asc' ? '▲' : '▼') : ''}
                      </span>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pageRows.length === 0 ? (
                <tr>
                  <td colSpan={4} className="locations__empty-cell">
                    無資料
                  </td>
                </tr>
              ) : (
                pageRows.map((r, i) => {
                  const pubmedUrl = getPubMedUrl(r.study_id)
                  return (
                    <tr 
                      key={i} 
                      className={cls(
                        'locations__tr',
                        i % 2 ? 'locations__tr--even' : 'locations__tr--odd'
                      )}
                    >
                      <td className="locations__td">
                        {pubmedUrl ? (
                          <a
                            href={pubmedUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="locations__pubmed-link"
                            title={`View on PubMed: ${r.study_id}`}
                          >
                            <span>{r.study_id}</span>
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                              <path d="M11 3h6v6M17 3l-8 8M17 11v6H3V3h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </a>
                        ) : (
                          <span>{r.study_id}</span>
                        )}
                      </td>
                      <td className="locations__td">{r.x}</td>
                      <td className="locations__td">{r.y}</td>
                      <td className="locations__td">{r.z}</td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      )}

      {query && !loading && !err && (
        <div className="locations__pagination">
          <div className="locations__pagination-info">
            共 <b>{sorted.length}</b> 筆，頁 <b>{page}</b>/<b>{totalPages}</b>
          </div>
          <div className="locations__pagination-controls">
            <button 
              disabled={page <= 1} 
              onClick={() => setPage(1)}
              className="locations__pagination-button"
            >
              ⏮
            </button>
            <button 
              disabled={page <= 1} 
              onClick={() => setPage(p => Math.max(1, p - 1))}
              className="locations__pagination-button"
            >
              上一頁
            </button>
            <button 
              disabled={page >= totalPages} 
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              className="locations__pagination-button"
            >
              下一頁
            </button>
            <button 
              disabled={page >= totalPages} 
              onClick={() => setPage(totalPages)}
              className="locations__pagination-button"
            >
              ⏭
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
