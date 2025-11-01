import { useEffect, useState, useMemo, useRef } from 'react'
import './YearFilter.css'

export function YearFilter({ selectedYears, onYearsChange, query, searchResults }) {
  const [allYearStats, setAllYearStats] = useState([]) // 所有 studies 的年份統計
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const hasClearedRef = useRef(false) // 追蹤是否用戶主動清除過
  const prevQueryRef = useRef(query) // 追蹤前一個 query
  const [isDragging, setIsDragging] = useState(false) // 追蹤是否正在拖拽選擇

  // 獲取所有 studies 的年份統計（只在組件掛載時執行一次）
  useEffect(() => {
    let alive = true
    const ac = new AbortController()
    ;(async () => {
      setLoading(true)
      setErr('')
      try {
        // 方法1: 嘗試專門的統計 endpoint
        try {
          const res1 = await fetch('/query/years/stats', { signal: ac.signal })
          if (res1.ok) {
            const data = await res1.json().catch(() => null)
            if (data && Array.isArray(data.years)) {
              const stats = data.years.map(({ year, count }) => ({
                year: Number(year),
                count: Number(count)
              })).sort((a, b) => a.year - b.year)
              if (!alive) return
              setAllYearStats(stats)
              setLoading(false)
              return
            }
          }
        } catch (e) {
          // 繼續嘗試其他方法
        }
        
        // 方法2: 嘗試獲取所有數據並統計
        try {
          const res2 = await fetch('/query/all/studies', { signal: ac.signal })
          if (res2.ok) {
            const responseData = await res2.json().catch(() => ({}))
            const list = Array.isArray(responseData?.results) ? responseData.results : []
            const statsMap = new Map()
            list.forEach(study => {
              const year = study?.year
              if (year) {
                statsMap.set(year, (statsMap.get(year) || 0) + 1)
              }
            })
            const stats = Array.from(statsMap.entries())
              .map(([year, count]) => ({ year: Number(year), count }))
              .sort((a, b) => a.year - b.year)
            if (!alive) return
            setAllYearStats(stats)
            setLoading(false)
            return
          }
        } catch (e) {
          // 繼續嘗試其他方法
        }
        
        // 如果都沒有成功，設置空數組
        if (!alive) return
        setAllYearStats([])
      } catch (e) {
        if (!alive) return
        console.warn('Year statistics API not available:', e?.message || e)
        setAllYearStats([])
      } finally {
        if (alive) setLoading(false)
      }
    })()
    return () => { alive = false; ac.abort() }
  }, [])

  // 根據是否有搜尋結果來決定顯示哪個統計
  const yearStats = useMemo(() => {
    // 如果有搜尋結果，統計搜尋結果中的年份
    if (query && searchResults && searchResults.length > 0) {
      const statsMap = new Map()
      searchResults.forEach(study => {
        const year = study?.year
        if (year) {
          statsMap.set(year, (statsMap.get(year) || 0) + 1)
        }
      })
      return Array.from(statsMap.entries())
        .map(([year, count]) => ({ year: Number(year), count }))
        .sort((a, b) => a.year - b.year)
    }
    // 否則顯示所有 studies 的統計
    return allYearStats
  }, [query, searchResults, allYearStats])

  // 預設選取所有年份（只在初始載入時，或關鍵字改變時）
  useEffect(() => {
    // 如果關鍵字改變了，重置 hasClearedRef 並自動選取所有年份
    if (prevQueryRef.current !== query) {
      hasClearedRef.current = false
      prevQueryRef.current = query
      if (yearStats.length > 0) {
        const allYears = yearStats.map(s => String(s.year))
        onYearsChange(allYears)
      }
      return
    }
    
    // 只在初始載入且未清除過時自動選取
    if (yearStats.length > 0 && selectedYears.length === 0 && !hasClearedRef.current) {
      const allYears = yearStats.map(s => String(s.year))
      onYearsChange(allYears)
    }
  }, [yearStats, selectedYears, onYearsChange, query])

  const maxCount = useMemo(() => {
    if (yearStats.length === 0) return 1
    return Math.max(...yearStats.map(s => s.count))
  }, [yearStats])

  const getColorForCount = (count) => {
    const ratio = count / maxCount
    
    // 紅黃綠藍漸層：多(紅) -> 中高(黃) -> 中(綠) -> 少(藍)
    if (ratio >= 0.75) return '#ef4444' // 紅色（最多）
    if (ratio >= 0.5) return '#f59e0b'  // 黃色（中高）
    if (ratio >= 0.25) return '#10b981' // 綠色（中）
    return '#3b82f6' // 藍色（少）
  }

  const toggleYear = (year) => {
    // 如果正在拖拽，不執行 toggle
    if (isDragging) return
    
    const yearStr = String(year)
    const newSelected = new Set(selectedYears)
    if (newSelected.has(yearStr)) {
      newSelected.delete(yearStr)
    } else {
      newSelected.add(yearStr)
    }
    onYearsChange(Array.from(newSelected))
  }

  const selectAll = () => {
    const allYears = yearStats.map(s => String(s.year))
    onYearsChange(allYears)
  }

  const clearAll = () => {
    // Clear 時設置為空數組，所有年份都不會被選中
    hasClearedRef.current = true
    onYearsChange([])
  }

  const selectRecentYears = (yearsCount) => {
    if (yearStats.length === 0) return
    
    const maxYear = Math.max(...yearStats.map(s => s.year))
    const startYear = maxYear - yearsCount + 1
    const recentYears = yearStats
      .filter(s => s.year >= startYear && s.year <= maxYear)
      .map(s => String(s.year))
    
    onYearsChange(recentYears)
  }

  const isYearSelected = (year) => {
    return selectedYears.includes(String(year))
  }

  // 處理拖拽選擇
  const handleMouseDown = (e) => {
    // 只響應左鍵
    if (e.button === 0) {
      setIsDragging(true)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseEnter = (year) => {
    if (isDragging) {
      // 拖拽時切換該年份的選取狀態
      const yearStr = String(year)
      const newSelected = new Set(selectedYears)
      if (newSelected.has(yearStr)) {
        newSelected.delete(yearStr)
      } else {
        newSelected.add(yearStr)
      }
      onYearsChange(Array.from(newSelected))
    }
  }

  // 添加全局事件監聽器來處理滑鼠釋放
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      window.addEventListener('mouseup', handleGlobalMouseUp)
      return () => {
        window.removeEventListener('mouseup', handleGlobalMouseUp)
      }
    }
  }, [isDragging])

  return (
    <div className="year-filter">
      <div className="year-filter__header">
        <div className="year-filter__controls">
          <button 
            className="year-filter__control-button year-filter__control-button--short"
            onClick={() => selectRecentYears(5)}
            disabled={yearStats.length === 0}
            title="Select the past 5 years"
          >
            5y
          </button>
          <button 
            className="year-filter__control-button year-filter__control-button--short"
            onClick={() => selectRecentYears(10)}
            disabled={yearStats.length === 0}
            title="Select the past 10 years"
          >
            10y
          </button>
          <button 
            className="year-filter__control-button"
            onClick={selectAll}
            disabled={yearStats.length === 0}
          >
            Select All
          </button>
          <button 
            className="year-filter__control-button"
            onClick={clearAll}
          >
            Clear
          </button>
        </div>
      </div>

      {loading && (
        <div className="year-filter__skeleton">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="year-filter__skeleton-bar" />
          ))}
        </div>
      )}

      {!loading && err && (
        <div className="year-filter__error">
          Unable to load year statistics
        </div>
      )}

      {!loading && !err && yearStats.length === 0 && (
        <div className="year-filter__info">
          <span>No year data available</span>
        </div>
      )}

      {!loading && !err && yearStats.length > 0 && (
        <div 
          className="year-filter__chart"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
            {yearStats.map(({ year, count }) => {
              // 圖表實際可用高度：120px (總高度) - 24px (top padding) - 20px (bottom padding) = 76px
              // 標籤高度 20px 已經在 bottom padding 內，所以長條圖可以使用約 76px
              const maxBarHeight = 76 // 長條圖最大高度
              const heightRatio = maxCount > 0 ? count / maxCount : 0
              const barHeight = Math.max(heightRatio * maxBarHeight, 20)
              const color = getColorForCount(count)
              const selected = isYearSelected(year)
              
              return (
                <div key={year} className="year-filter__bar-container">
                  <div className="year-filter__bar-wrapper">
                    <div
                      className={`year-filter__bar ${selected ? 'year-filter__bar--selected' : ''}`}
                      style={{
                        '--bar-color': color,
                        height: `${barHeight}px`
                      }}
                      onClick={() => toggleYear(year)}
                      onMouseEnter={() => handleMouseEnter(year)}
                      title={`${year}: ${count} studies`}
                    >
                      {selected && (
                        <div className="year-filter__bar-check">✓</div>
                      )}
                    </div>
                  </div>
                  <div className="year-filter__bar-label">{year}</div>
                </div>
              )
            })}
          </div>
      )}
    </div>
  )
}

