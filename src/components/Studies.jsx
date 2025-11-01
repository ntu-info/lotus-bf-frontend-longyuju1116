import { useEffect, useMemo, useState, useRef } from 'react'
import './Studies.css'
import { PageSizeSelector } from './PageSizeSelector'
import { YearFilter } from './YearFilter'

function classNames (...xs) { return xs.filter(Boolean).join(' ') }

export function Studies ({ query }) {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const [sortKey, setSortKey] = useState('year')
  const [sortDir, setSortDir] = useState('desc')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)
  const [selectedYears, setSelectedYears] = useState([])
  const [pageInput, setPageInput] = useState('1')
  const tableTopRef = useRef(null)

  // Helper function to get PubMed URL
  const getPubMedUrl = (studyId) => {
    if (!studyId) return null
    const id = String(studyId).trim()
    if (!id || !/^\d+$/.test(id)) return null
    return `https://pubmed.ncbi.nlm.nih.gov/${id}/`
  }

  // Scroll to top when page changes
  const scrollToTop = () => {
    if (tableTopRef.current) {
      tableTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Handle page change with scroll
  const handlePageChange = (newPage) => {
    setPage(newPage)
    // Use setTimeout to ensure DOM has updated before scrolling
    setTimeout(() => {
      scrollToTop()
    }, 100)
  }

  useEffect(() => { setPage(1) }, [query, selectedYears])
  useEffect(() => { setPage(1) }, [pageSize])

  useEffect(() => {
    if (!query) return
    let alive = true
    const ac = new AbortController()
    ;(async () => {
      setLoading(true)
      setErr('')
      try {
        const url = `/query/${encodeURIComponent(query)}/studies`
        const res = await fetch(url, { signal: ac.signal })
        const data = await res.json().catch(() => ({}))
        if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`)
        if (!alive) return
        const list = Array.isArray(data?.results) ? data.results : []
        setRows(list)
      } catch (e) {
        if (!alive) return
        setErr(`Unable to fetch studies: ${e?.message || e}`)
        setRows([])
      } finally {
        if (alive) setLoading(false)
      }
    })()
    return () => { alive = false; ac.abort() }
  }, [query])

  const changeSort = (key) => {
    // 只有 year 可以排序
    if (key !== 'year') return
    if (key === sortKey) setSortDir(d => (d === 'asc' ? 'desc' : 'asc'))
    else { setSortKey(key); setSortDir('asc') }
  }

  const sorted = useMemo(() => {
    let arr = [...rows]
    
    // 根據選中的年份過濾
    if (selectedYears.length > 0) {
      arr = arr.filter(r => {
        const year = String(r?.year || '')
        return selectedYears.includes(year)
      })
    }
    
    // 排序
    const dir = sortDir === 'asc' ? 1 : -1
    arr.sort((a, b) => {
      const A = a?.[sortKey]
      const B = b?.[sortKey]
      if (sortKey === 'year') return (Number(A || 0) - Number(B || 0)) * dir
      if (sortKey === 'pubmed') {
        const idA = a?.study_id || a?.id || a?.pubmed_id || ''
        const idB = b?.study_id || b?.id || b?.pubmed_id || ''
        return String(idA).localeCompare(String(idB), 'en') * dir
      }
      return String(A || '').localeCompare(String(B || ''), 'en') * dir
    })
    return arr
  }, [rows, sortKey, sortDir, selectedYears])

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize))
  const pageRows = sorted.slice((page - 1) * pageSize, page * pageSize)

  const handlePageJump = () => {
    const pageNum = parseInt(pageInput, 10)
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages && pageNum !== page) {
      handlePageChange(pageNum)
    }
  }

  const handlePageInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handlePageJump()
      e.target.blur() // 讓輸入框失去焦點
    }
  }

  const handlePageInputBlur = () => {
    handlePageJump()
  }

  // 當頁碼改變時，同步更新輸入框（但只在不是用戶正在輸入時）
  useEffect(() => {
    setPageInput(String(page))
  }, [page])

  return (
    <div className="studies">
      <YearFilter 
        selectedYears={selectedYears} 
        onYearsChange={setSelectedYears}
        query={query}
        searchResults={rows}
      />

      {query && !loading && !err && (
        <div className="studies__header" ref={tableTopRef}>
          <div className="studies__header-info">
            <b>{sorted.length}</b> results, page{' '}
            <input
              type="number"
              min="1"
              max={totalPages}
              value={pageInput}
              onChange={(e) => setPageInput(e.target.value)}
              onKeyDown={handlePageInputKeyDown}
              onBlur={handlePageInputBlur}
              className="studies__page-input"
            />
            {' '}/ <b>{totalPages}</b>
          </div>
          <PageSizeSelector pageSize={pageSize} onChange={setPageSize} />
          <div className="studies__header-controls">
            <button 
              disabled={page <= 1} 
              onClick={() => handlePageChange(1)}
              className="studies__pagination-button"
            >
              &lt;&lt;
            </button>
            <button 
              disabled={page <= 1} 
              onClick={() => handlePageChange(Math.max(1, page - 1))}
              className="studies__pagination-button"
            >
              &lt;
            </button>
            <button 
              disabled={page >= totalPages} 
              onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
              className="studies__pagination-button"
            >
              &gt;
            </button>
            <button 
              disabled={page >= totalPages} 
              onClick={() => handlePageChange(totalPages)}
              className="studies__pagination-button"
            >
              &gt;&gt;
            </button>
          </div>
        </div>
      )}

      {query && loading && (
        <div className="studies__skeleton">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="studies__skeleton-row" />
          ))}
        </div>
      )}

      {query && err && (
        <div className="studies__error">
          {err}
        </div>
      )}

      {query && !loading && !err && (
        <div className="studies__table-wrapper">
          <table className="studies__table">
            <thead className="studies__thead">
              <tr>
                <th 
                  className="studies__th"
                  onClick={() => changeSort('year')}
                >
                  <span className="studies__th-content">
                    Year
                    <span className="studies__sort-indicator">
                      {sortKey === 'year' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
                    </span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {pageRows.length === 0 ? (
                <tr>
                  <td colSpan={2} className="studies__empty-cell">
                    No data
                  </td>
                </tr>
              ) : (
                pageRows.map((r, i) => {
                  const globalIndex = (page - 1) * pageSize + i
                  const pubmedUrl = getPubMedUrl(r.study_id || r.id || r.pubmed_id)
                  return (
                    <>
                      <tr 
                        key={`row-${globalIndex}`}
                        className={classNames(
                          'studies__tr',
                          i % 2 ? 'studies__tr--even' : 'studies__tr--odd'
                        )}
                      >
                        <td className="studies__td studies__td--year">
                          {r.year ?? ''}
                        </td>
                        <td className="studies__td studies__td--title">
                          <div className="studies__title-cell" title={r.title}>
                            {r.title || ''}
                          </div>
                        </td>
                      </tr>
                      <tr 
                        key={`detail-${globalIndex}`}
                        className={classNames(
                          'studies__tr',
                          'studies__tr--detail',
                          i % 2 ? 'studies__tr--even' : 'studies__tr--odd'
                        )}
                      >
                        <td colSpan={2} className="studies__td studies__td--detail">
                          <div className="studies__detail-content">
                            <div className="studies__detail-row">
                              <span className="studies__detail-label">Journal:</span>
                              <span className="studies__detail-value">{r.journal || '—'}</span>
                            </div>
                            <div className="studies__detail-row">
                              <span className="studies__detail-label">Authors:</span>
                              <span className="studies__detail-value">{r.authors || '—'}</span>
                            </div>
                            <div className="studies__detail-row">
                              <span className="studies__detail-label">PubMed:</span>
                              {pubmedUrl ? (
                                <a
                                  href={pubmedUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="studies__pubmed-link"
                                  title={`View on PubMed: ${r.study_id || r.id || r.pubmed_id}`}
                                >
                                  <span>{r.study_id || r.id || r.pubmed_id}</span>
                                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                                    <path d="M11 3h6v6M17 3l-8 8M17 11v6H3V3h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </a>
                              ) : (
                                <span className="studies__no-pubmed">—</span>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      )}

      {query && !loading && !err && (
        <div className="studies__pagination">
          <div className="studies__pagination-info">
            <b>{sorted.length}</b> results, page{' '}
            <input
              type="number"
              min="1"
              max={totalPages}
              value={pageInput}
              onChange={(e) => setPageInput(e.target.value)}
              onKeyDown={handlePageInputKeyDown}
              onBlur={handlePageInputBlur}
              className="studies__page-input"
            />
            {' '}/ <b>{totalPages}</b>
          </div>
          <div className="studies__pagination-controls">
            <button 
              disabled={page <= 1} 
              onClick={() => handlePageChange(1)}
              className="studies__pagination-button"
            >
              &lt;&lt;
            </button>
            <button 
              disabled={page <= 1} 
              onClick={() => handlePageChange(Math.max(1, page - 1))}
              className="studies__pagination-button"
            >
              &lt;
            </button>
            <button 
              disabled={page >= totalPages} 
              onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
              className="studies__pagination-button"
            >
              &gt;
            </button>
            <button 
              disabled={page >= totalPages} 
              onClick={() => handlePageChange(totalPages)}
              className="studies__pagination-button"
            >
              &gt;&gt;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
