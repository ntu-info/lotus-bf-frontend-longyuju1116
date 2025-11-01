import { useEffect, useMemo, useState, useRef } from 'react'
import './Studies.css'
import { PageSizeSelector } from './PageSizeSelector'
import { YearFilter } from './YearFilter'
import { Pagination } from './Pagination'
import { StarButton } from './StarButton'
import { ExportButton } from './ExportButton'
import { ClearStarButton } from './ClearStarButton'

function classNames (...xs) { return xs.filter(Boolean).join(' ') }

// Helper function to get unique study ID
const getStudyId = (study) => {
  return study.study_id || study.id || study.pubmed_id || `${study.year}_${study.title}`
}

// localStorage key for marked studies
const MARKED_STUDIES_KEY = 'lotus-bf-marked-studies'

export function Studies ({ query }) {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const [sortKey, setSortKey] = useState('year')
  const [sortDir, setSortDir] = useState('desc')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)
  const [selectedYears, setSelectedYears] = useState([])
  const [markedStudies, setMarkedStudies] = useState(new Set())
  const tableTopRef = useRef(null)

  // Load marked studies from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(MARKED_STUDIES_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        setMarkedStudies(new Set(parsed))
      }
    } catch (e) {
      console.error('Failed to load marked studies:', e)
    }
  }, [])

  // Save marked studies to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(MARKED_STUDIES_KEY, JSON.stringify(Array.from(markedStudies)))
    } catch (e) {
      console.error('Failed to save marked studies:', e)
    }
  }, [markedStudies])

  // Toggle study marking
  const toggleMark = (study) => {
    const studyId = getStudyId(study)
    setMarkedStudies(prev => {
      const newSet = new Set(prev)
      if (newSet.has(studyId)) {
        newSet.delete(studyId)
      } else {
        newSet.add(studyId)
      }
      return newSet
    })
  }

  // Clear all markings
  const clearAllMarks = () => {
    setMarkedStudies(new Set())
  }

  // Get marked studies data for export
  const markedStudiesData = useMemo(() => {
    return rows.filter(study => {
      const studyId = getStudyId(study)
      return markedStudies.has(studyId)
    })
  }, [rows, markedStudies])

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

  return (
    <div className="studies">
      {query && !loading && !err && (
        <div className="studies__title-bar">
          <h2 className="studies__title">Studies</h2>
          <div className="studies__title-actions">
            <ExportButton markedStudies={markedStudiesData} />
            <ClearStarButton onClick={clearAllMarks} />
          </div>
        </div>
      )}
      <YearFilter 
        selectedYears={selectedYears} 
        onYearsChange={setSelectedYears}
        query={query}
        searchResults={rows}
      />

      {query && !loading && !err && (
        <div className="studies__header" ref={tableTopRef}>
          <div className="studies__header-info">
            <b>{sorted.length}</b> results
          </div>
          <PageSizeSelector pageSize={pageSize} onChange={setPageSize} />
          {totalPages > 1 && (
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
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
                  className="studies__th studies__th--year"
                  onClick={() => changeSort('year')}
                >
                  <span className="studies__th-content">
                    Year
                    <span className="studies__sort-indicator">
                      {sortKey === 'year' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
                    </span>
                  </span>
                </th>
                <th className="studies__th studies__th--title">
                  <span className="studies__th-content">Title</span>
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
                  const studyId = getStudyId(r)
                  const isMarked = markedStudies.has(studyId)
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
                          <div className="studies__year-cell">
                            <div className="studies__year-value">{r.year ?? ''}</div>
                            <StarButton 
                              isMarked={isMarked}
                              onClick={() => toggleMark(r)}
                            />
                          </div>
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

      {query && !loading && !err && totalPages > 1 && (
        <div className="studies__pagination">
          <div className="studies__pagination-info">
            <b>{sorted.length}</b> results
          </div>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  )
}
