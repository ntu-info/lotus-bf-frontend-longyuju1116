# Open the server
_Exported on 11/1/2025 at 13:46:36 GMT+8 from Cursor (2.0.46)_

---

**User**

open the server

---

**Cursor**


檢查 `package.json` 中的啟動腳本。


啟動開發伺服器。


開發伺服器已在背景啟動。Vite 通常會在幾秒內啟動，並顯示本地 URL（通常是 `http://localhost:5173`）。

請在瀏覽器中開啟該 URL。如果需要查看確切的 URL 或確認伺服器狀態，請告訴我。

---

**User**

@AppHeader.css @AppHeader.jsx 把baner背景改成黑色 文字改成白色 小字維持灰色

---

**Cursor**


更新 AppHeader 樣式：背景改為黑色、標題文字改為白色，小字維持灰色。


更新 AppHeader 樣式：背景改為黑色，標題改為白色，小字維持灰色。


```css
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--border);
  background: #000000;
  border-radius: 0;
  padding: 16px 20px;
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.3s ease;
  z-index: 1000;
}

.app-header:hover {
  box-shadow: var(--shadow);
}

.app-header__content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.app-header__logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.3s ease, filter 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  border-radius: 8px;
}

.app-header__logo:hover {
  transform: scale(1.1) rotate(5deg);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
}

.app-header__text {
  flex: 1;
}

.app-header__title {
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 0.2px;
  color: var(--fg-dark);
}

.app-header__subtitle {
  margin-top: 4px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 400;
}

@media (max-width: 1023px) {
  .app-header__content {
    flex-direction: column;
    align-items: flex-start;
  }
}


```

```css
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--border);
  background: #000000;
  border-radius: 0;
  padding: 16px 20px;
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.3s ease;
  z-index: 1000;
}

.app-header:hover {
  box-shadow: var(--shadow);
}

.app-header__content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.app-header__logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.3s ease, filter 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  border-radius: 8px;
}

.app-header__logo:hover {
  transform: scale(1.1) rotate(5deg);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
}

.app-header__text {
  flex: 1;
}

.app-header__title {
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 0.2px;
  color: #ffffff;
}

.app-header__subtitle {
  margin-top: 4px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 400;
}

@media (max-width: 1023px) {
  .app-header__content {
    flex-direction: column;
    align-items: flex-start;
  }
}


```

檢查是否有樣式錯誤：


已完成樣式更新：

1. **背景顏色**：從 `#C7C7E2` 改為 `#000000`
2. **標題文字**：從 `var(--fg-dark)` 改為 `#ffffff`
3. **小字（subtitle）**：維持 `var(--muted)` 灰色

開發伺服器正在運行，變更會自動反映在瀏覽器中。banner 現為黑色背景，標題為白色，小字維持灰色。

---

**User**

@ScrollButtons.css @ScrollButtons.jsx 上下滾動的按鍵改成#FFED97

---

**Cursor**


將上下滾動按鈕的背景顏色改為 `#FFED97`。


將按鈕背景改為 `#FFED97`。


```css
.scroll-buttons {
  position: fixed;
  right: 24px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1000;
}

.scroll-button {
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: #FFED97;
  color: #333;
  font-size: 24px;
  font-weight: 700;
  padding: 0;
}

.scroll-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.scroll-button:active {
  transform: scale(0.95);
}

.scroll-button__arrow {
  display: inline-block;
  line-height: 1;
}

.scroll-button__arrow--up {
  transform: rotate(90deg);
}

.scroll-button__arrow--down {
  transform: rotate(-90deg);
}

@media (max-width: 1023px) {
  .scroll-buttons {
    right: 16px;
    bottom: 16px;
  }

  .scroll-button {
    width: 44px;
    height: 44px;
    font-size: 20px;
  }
}


```

檢查是否有樣式錯誤：


已將上下滾動按鈕的背景顏色改為 `#FFED97`。

變更內容：
- 背景：由漸層改為純色 `#FFED97`
- 文字顏色：維持 `#333`（在 `#FFED97` 背景上可讀）

變更會自動反映在瀏覽器中。按鈕現在為 `#FFED97` 背景色。

---

**User**

要漸層跟半透明

---

**Cursor**


將按鈕背景改為使用 `#FFED97` 的漸層與半透明效果。


將按鈕背景改為 `#FFED97` 的漸層與半透明效果。


```css
.scroll-buttons {
  position: fixed;
  right: 24px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1000;
}

.scroll-button {
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, rgba(255, 237, 151, 0.6) 0%, rgba(255, 237, 151, 0.4) 100%);
  color: #333;
  font-size: 24px;
  font-weight: 700;
  padding: 0;
}

.scroll-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.scroll-button:active {
  transform: scale(0.95);
}

.scroll-button__arrow {
  display: inline-block;
  line-height: 1;
}

.scroll-button__arrow--up {
  transform: rotate(90deg);
}

.scroll-button__arrow--down {
  transform: rotate(-90deg);
}

@media (max-width: 1023px) {
  .scroll-buttons {
    right: 16px;
    bottom: 16px;
  }

  .scroll-button {
    width: 44px;
    height: 44px;
    font-size: 20px;
  }
}


```

檢查是否有樣式錯誤：


已將按鈕背景改為 `#FFED97` 的漸層與半透明效果。

變更內容：
- 背景：使用 `linear-gradient(135deg, rgba(255, 237, 151, 0.6) 0%, rgba(255, 237, 151, 0.4) 100%)`
- 效果：135 度漸層，從較不透明（0.6）到較透明（0.4），保持 `#FFED97` 色調

變更會自動反映在瀏覽器中。按鈕現在有漸層與半透明效果。

---

**User**

@Resizer.css @Resizer.jsx 把藍色改成#E0E0E0

---

**Cursor**


將 Resizer 組件中的藍色改為 `#E0E0E0`。


將所有藍色 `#ECF5FF` 替換為 `#E0E0E0`。


```css
.resizer {
  width: 8px;
  cursor: col-resize;
  position: relative;
  user-select: none;
  touch-action: none;
  align-self: stretch;
  background: transparent;
  transition: background 0.2s ease, width 0.2s ease;
  z-index: 10;
  margin: 0 -4px;
}

.resizer:hover {
  background: linear-gradient(to right, transparent 0%, #E0E0E0 50%, transparent 100%);
  width: 16px;
}

.resizer--dragging {
  background: linear-gradient(to right, transparent 0%, #E0E0E0 50%, transparent 100%);
  width: 16px;
}

@media (max-width: 1023px) {
  .resizer {
    display: none;
  }
}


```

檢查是否有樣式錯誤：


已將 Resizer 組件中的藍色改為 `#E0E0E0`。

變更內容：
- `.resizer:hover` 和 `.resizer--dragging` 的漸層顏色由 `#ECF5FF` 改為 `#E0E0E0`

變更會自動反映在瀏覽器中。當滑鼠懸停在調整器上或正在拖曳時，會顯示淺灰色漸層效果。

---

**User**

網頁標籤有個圖案 把它改成@Logo.css @Logo.jsx 

---

**Cursor**


檢查 `index.html` 中的 favicon 設定，並將其改為使用 Logo 組件中的圖案。


檢查 `public` 目錄中是否有 `logo.svg`：


在 `index.html` 中添加 favicon 連結，指向 Logo 組件使用的 `logo.svg`。


```html
<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    <title>LoTUS-BF</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

檢查是否有錯誤：


已將網頁標籤（favicon）設為 Logo 組件使用的 `logo.svg`。

變更內容：
- 在 `index.html` 的 `<head>` 中添加了 `<link rel="icon" type="image/svg+xml" href="/logo.svg" />`

瀏覽器標籤頁會顯示 Logo 圖案。如果沒有立即更新，請重新整理頁面或清除瀏覽器快取。

---

**User**

@components 新增一個component 功能是讓使用者標記studies 預設是@star-line-yellow-icon.svg ，點擊之後變成@star-symbol-icon.svg 。再新增一個component，功能是Export按鈕，把被標記成@star-symbol-icon.svg 的選項，下載成csv格式（year, title, authors, pubmed id），這顆按鈕放在studies文字的右邊，色號#FFD2D2無邊匡。在新增一個component，功能是clear按鈕，按下去之後所有studies都會被標示成@star-line-yellow-icon.svg ，放在export右邊，淺灰色無邊匡。當使用者切換page時，被標記的studies要保留，免得讓使用者有資料遺失的感覺

---

**Cursor**


檢視 `Studies.jsx` 的結構，接著建立所需的組件。


檢視 App.jsx 以了解整體結構：


建立所需組件並整合到 Studies 中。開始建立組件：


```javascriptreact
import './StarButton.css'

/**
 * StarButton component - Allows users to mark/unmark studies
 * @param {Object} props
 * @param {boolean} props.isMarked - Whether the study is currently marked
 * @param {Function} props.onClick - Callback function when button is clicked
 */
export function StarButton({ isMarked = false, onClick }) {
  return (
    <button
      className={`star-button ${isMarked ? 'star-button--marked' : ''}`}
      onClick={onClick}
      aria-label={isMarked ? 'Unmark study' : 'Mark study'}
      title={isMarked ? 'Unmark study' : 'Mark study'}
    >
      <img
        src={isMarked ? '/star-symbol-icon.svg' : '/star-line-yellow-icon.svg'}
        alt={isMarked ? 'Marked' : 'Unmarked'}
        className="star-button__icon"
      />
    </button>
  )
}

```

```css
.star-button {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  border-radius: 4px;
}

.star-button:hover {
  transform: scale(1.2);
}

.star-button:active {
  transform: scale(0.9);
}

.star-button__icon {
  width: 20px;
  height: 20px;
  display: block;
  pointer-events: none;
}

```

```javascriptreact
import './ExportButton.css'

/**
 * ExportButton component - Exports marked studies to CSV format
 * @param {Object} props
 * @param {Array} props.markedStudies - Array of marked study objects
 */
export function ExportButton({ markedStudies = [] }) {
  const handleExport = () => {
    if (markedStudies.length === 0) {
      alert('No marked studies to export')
      return
    }

    // Create CSV content
    const headers = ['Year', 'Title', 'Authors', 'PubMed ID']
    const rows = markedStudies.map(study => {
      const year = study.year ?? ''
      const title = (study.title ?? '').replace(/"/g, '""') // Escape quotes
      const authors = (study.authors ?? '').replace(/"/g, '""') // Escape quotes
      const pubmedId = study.study_id || study.id || study.pubmed_id || ''
      
      return `"${year}","${title}","${authors}","${pubmedId}"`
    })

    const csvContent = [
      headers.join(','),
      ...rows
    ].join('\n')

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    
    link.setAttribute('href', url)
    link.setAttribute('download', `marked_studies_${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    URL.revokeObjectURL(url)
  }

  return (
    <button
      className="export-button"
      onClick={handleExport}
      disabled={markedStudies.length === 0}
      aria-label={`Export ${markedStudies.length} marked studies`}
      title={`Export ${markedStudies.length} marked studies`}
    >
      Export
    </button>
  )
}

```

```css
.export-button {
  background: #FFD2D2;
  border: none;
  color: #333;
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.export-button:hover:not(:disabled) {
  background: #ffb8b8;
  transform: translateY(-1px);
}

.export-button:active:not(:disabled) {
  transform: translateY(0);
}

.export-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

```

```javascriptreact
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
      aria-label="Clear all markings"
      title="Clear all markings"
    >
      Clear
    </button>
  )
}

```

```css
.clear-star-button {
  background: #E0E0E0;
  border: none;
  color: #333;
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.clear-star-button:hover {
  background: #d0d0d0;
  transform: translateY(-1px);
}

.clear-star-button:active {
  transform: translateY(0);
}

```

修改 `Studies.jsx` 以整合這些功能：


修改 `Studies.jsx` 以整合標記功能，並更新 CSS：


```javascriptreact
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

```

```javascriptreact
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

```

```javascriptreact
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

```

```javascriptreact
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
                <th className="studies__th studies__th--star">
                  <span className="studies__th-content">Mark</span>
                </th>
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

```

```javascriptreact
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
                <th className="studies__th studies__th--star">
                  <span className="studies__th-content">Mark</span>
                </th>
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
                  <td colSpan={3} className="studies__empty-cell">
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
                        <td className="studies__td studies__td--star">
                          <StarButton 
                            isMarked={isMarked}
                            onClick={() => toggleMark(r)}
                          />
                        </td>
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
                        <td colSpan={3} className="studies__td studies__td--detail">
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

```

更新 `Studies.css`，加入標題欄和星號列的樣式：


更新 CSS，加入標題欄與星號列樣式：


```css
.studies {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.studies__title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
}

.studies__title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--fg-dark);
}

.studies__title-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}

.studies__header-info {
  color: var(--fg);
  font-size: 13px;
  white-space: nowrap;
  flex-shrink: 0;
}

.studies__header-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.studies__page-input {
  width: 50px;
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: white;
  color: var(--fg);
  font-weight: 600;
}

.studies__page-input:focus {
  outline: none;
}

.studies__skeleton {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
}

.studies__skeleton-row {
  height: 40px;
  background: var(--bg-light);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

.studies__error {
  margin: 0 12px 12px;
  padding: 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-size: 13px;
}

.studies__table-wrapper {
  overflow-x: hidden;
  overflow-y: auto;
}

.studies__table {
  width: 100%;
  font-size: 13px;
  border-collapse: collapse;
  table-layout: fixed;
}

.studies__thead {
  position: sticky;
  top: 0;
  background: transparent;
  z-index: 10;
}

.studies__th {
  padding: 8px 12px;
  text-align: left;
  font-weight: 600;
  user-select: none;
  border-bottom: none;
  transition: background 0.15s ease;
}

.studies__th:not(.studies__th--no-sort) {
  cursor: pointer;
}

.studies__th:not(.studies__th--no-sort):hover {
  background: rgba(0, 0, 0, 0.02);
}

.studies__th--no-sort {
  cursor: default;
}

.studies__th-content {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.studies__sort-indicator {
  font-size: 10px;
  color: var(--muted);
}

.studies__tr {
  transition: background 0.15s ease;
}

.studies__tr--detail {
  background: transparent;
}

.studies__tr--odd {
  background: transparent;
}

.studies__tr--even {
  background: transparent;
}

.studies__td {
  padding: 8px 12px;
  vertical-align: top;
  border-bottom: none;
}

.studies__td--year {
  white-space: nowrap;
  width: 60px;
  text-align: center;
}

.studies__th:first-child {
  text-align: center;
  width: 60px;
}

.studies__td--title {
  width: auto;
  word-wrap: break-word;
  word-break: break-word;
}

.studies__td--detail {
  padding-top: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  padding-left: 96px;
  background: transparent;
}

.studies__detail-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 0;
  margin-left: 0;
}

.studies__detail-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.studies__detail-label {
  font-weight: 600;
  color: var(--fg-dark);
  min-width: 80px;
  flex-shrink: 0;
}

.studies__detail-value {
  color: var(--fg);
  flex: 1;
}

.studies__title-cell {
  overflow: visible;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
  line-height: 1.5;
  font-size: 17px;
  font-weight: 700;
  color: #004B97;
}

.studies__empty-cell {
  padding: 24px;
  text-align: center;
  color: var(--muted);
}

.studies__pubmed-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #006400;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.15s ease;
}

.studies__pubmed-link:hover {
  color: #228B22;
  text-decoration: underline;
}

.studies__pubmed-link svg {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.studies__pubmed-link:hover svg {
  opacity: 1;
}

.studies__no-pubmed {
  color: var(--muted);
}

.studies__pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  padding: 12px;
  font-size: 13px;
  gap: 16px;
  flex-wrap: wrap;
}

.studies__pagination-info {
  color: var(--fg);
}

.studies__pagination-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__pagination-button {
  padding: 6px 12px;
  background: var(--fg-dark);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
}

.studies__pagination-button:hover:not(:disabled) {
  background: var(--muted);
  transform: translateY(-1px);
}

.studies__pagination-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}


```

```css
.studies {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.studies__title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
}

.studies__title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--fg-dark);
}

.studies__title-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}

.studies__header-info {
  color: var(--fg);
  font-size: 13px;
  white-space: nowrap;
  flex-shrink: 0;
}

.studies__header-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.studies__page-input {
  width: 50px;
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: white;
  color: var(--fg);
  font-weight: 600;
}

.studies__page-input:focus {
  outline: none;
}

.studies__skeleton {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
}

.studies__skeleton-row {
  height: 40px;
  background: var(--bg-light);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

.studies__error {
  margin: 0 12px 12px;
  padding: 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-size: 13px;
}

.studies__table-wrapper {
  overflow-x: hidden;
  overflow-y: auto;
}

.studies__table {
  width: 100%;
  font-size: 13px;
  border-collapse: collapse;
  table-layout: fixed;
}

.studies__thead {
  position: sticky;
  top: 0;
  background: transparent;
  z-index: 10;
}

.studies__th {
  padding: 8px 12px;
  text-align: left;
  font-weight: 600;
  user-select: none;
  border-bottom: none;
  transition: background 0.15s ease;
}

.studies__th:not(.studies__th--no-sort) {
  cursor: pointer;
}

.studies__th:not(.studies__th--no-sort):hover {
  background: rgba(0, 0, 0, 0.02);
}

.studies__th--no-sort {
  cursor: default;
}

.studies__th-content {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.studies__sort-indicator {
  font-size: 10px;
  color: var(--muted);
}

.studies__tr {
  transition: background 0.15s ease;
}

.studies__tr--detail {
  background: transparent;
}

.studies__tr--odd {
  background: transparent;
}

.studies__tr--even {
  background: transparent;
}

.studies__td {
  padding: 8px 12px;
  vertical-align: top;
  border-bottom: none;
}

.studies__th--star {
  width: 50px;
  text-align: center;
  cursor: default;
}

.studies__th--star:hover {
  background: transparent;
}

.studies__td--star {
  width: 50px;
  text-align: center;
  vertical-align: middle;
}

.studies__td--year {
  white-space: nowrap;
  width: 60px;
  text-align: center;
}

.studies__th:first-child {
  text-align: center;
  width: 60px;
}

.studies__td--title {
  width: auto;
  word-wrap: break-word;
  word-break: break-word;
}

.studies__td--detail {
  padding-top: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  padding-left: 96px;
  background: transparent;
}

.studies__detail-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 0;
  margin-left: 0;
}

.studies__detail-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.studies__detail-label {
  font-weight: 600;
  color: var(--fg-dark);
  min-width: 80px;
  flex-shrink: 0;
}

.studies__detail-value {
  color: var(--fg);
  flex: 1;
}

.studies__title-cell {
  overflow: visible;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
  line-height: 1.5;
  font-size: 17px;
  font-weight: 700;
  color: #004B97;
}

.studies__empty-cell {
  padding: 24px;
  text-align: center;
  color: var(--muted);
}

.studies__pubmed-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #006400;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.15s ease;
}

.studies__pubmed-link:hover {
  color: #228B22;
  text-decoration: underline;
}

.studies__pubmed-link svg {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.studies__pubmed-link:hover svg {
  opacity: 1;
}

.studies__no-pubmed {
  color: var(--muted);
}

.studies__pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  padding: 12px;
  font-size: 13px;
  gap: 16px;
  flex-wrap: wrap;
}

.studies__pagination-info {
  color: var(--fg);
}

.studies__pagination-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__pagination-button {
  padding: 6px 12px;
  background: var(--fg-dark);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
}

.studies__pagination-button:hover:not(:disabled) {
  background: var(--muted);
  transform: translateY(-1px);
}

.studies__pagination-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}


```

```css
.studies {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.studies__title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
}

.studies__title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--fg-dark);
}

.studies__title-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}

.studies__header-info {
  color: var(--fg);
  font-size: 13px;
  white-space: nowrap;
  flex-shrink: 0;
}

.studies__header-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.studies__page-input {
  width: 50px;
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: white;
  color: var(--fg);
  font-weight: 600;
}

.studies__page-input:focus {
  outline: none;
}

.studies__skeleton {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
}

.studies__skeleton-row {
  height: 40px;
  background: var(--bg-light);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

.studies__error {
  margin: 0 12px 12px;
  padding: 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-size: 13px;
}

.studies__table-wrapper {
  overflow-x: hidden;
  overflow-y: auto;
}

.studies__table {
  width: 100%;
  font-size: 13px;
  border-collapse: collapse;
  table-layout: fixed;
}

.studies__thead {
  position: sticky;
  top: 0;
  background: transparent;
  z-index: 10;
}

.studies__th {
  padding: 8px 12px;
  text-align: left;
  font-weight: 600;
  user-select: none;
  border-bottom: none;
  transition: background 0.15s ease;
}

.studies__th:not(.studies__th--no-sort) {
  cursor: pointer;
}

.studies__th:not(.studies__th--no-sort):hover {
  background: rgba(0, 0, 0, 0.02);
}

.studies__th--no-sort {
  cursor: default;
}

.studies__th-content {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.studies__sort-indicator {
  font-size: 10px;
  color: var(--muted);
}

.studies__tr {
  transition: background 0.15s ease;
}

.studies__tr--detail {
  background: transparent;
}

.studies__tr--odd {
  background: transparent;
}

.studies__tr--even {
  background: transparent;
}

.studies__td {
  padding: 8px 12px;
  vertical-align: top;
  border-bottom: none;
}

.studies__th--star {
  width: 50px;
  text-align: center;
  cursor: default;
}

.studies__th--star:hover {
  background: transparent;
}

.studies__td--star {
  width: 50px;
  text-align: center;
  vertical-align: middle;
}

.studies__td--year {
  white-space: nowrap;
  width: 60px;
  text-align: center;
}

.studies__th:first-child {
  text-align: center;
  width: 60px;
}

.studies__td--title {
  width: auto;
  word-wrap: break-word;
  word-break: break-word;
}

.studies__td--detail {
  padding-top: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  padding-left: 134px;
  background: transparent;
}

.studies__detail-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 0;
  margin-left: 0;
}

.studies__detail-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.studies__detail-label {
  font-weight: 600;
  color: var(--fg-dark);
  min-width: 80px;
  flex-shrink: 0;
}

.studies__detail-value {
  color: var(--fg);
  flex: 1;
}

.studies__title-cell {
  overflow: visible;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
  line-height: 1.5;
  font-size: 17px;
  font-weight: 700;
  color: #004B97;
}

.studies__empty-cell {
  padding: 24px;
  text-align: center;
  color: var(--muted);
}

.studies__pubmed-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #006400;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.15s ease;
}

.studies__pubmed-link:hover {
  color: #228B22;
  text-decoration: underline;
}

.studies__pubmed-link svg {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.studies__pubmed-link:hover svg {
  opacity: 1;
}

.studies__no-pubmed {
  color: var(--muted);
}

.studies__pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  padding: 12px;
  font-size: 13px;
  gap: 16px;
  flex-wrap: wrap;
}

.studies__pagination-info {
  color: var(--fg);
}

.studies__pagination-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__pagination-button {
  padding: 6px 12px;
  background: var(--fg-dark);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
}

.studies__pagination-button:hover:not(:disabled) {
  background: var(--muted);
  transform: translateY(-1px);
}

.studies__pagination-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}


```

檢查並更新 App.jsx，移除重複的 "Studies" 標題（已在 Studies.jsx 中處理）：


移除 App.jsx 中重複的 "Studies" 標題：


```javascriptreact
import { useCallback, useRef, useState, useEffect } from 'react'
import { QueryBuilder } from './components/QueryBuilder'
import { Studies } from './components/Studies'
import { NiiViewer } from './components/NiiViewer'
import { LandingPage } from './components/LandingPage'
import { AppHeader } from './components/AppHeader'
import { Terms } from './components/Terms'
import { Card, CardTitle } from './components/Card'
import { Resizer } from './components/Resizer'
import { ScrollButtons } from './components/ScrollButtons'
import { EasterEgg } from './components/EasterEgg'
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')
  const [resetKey, setResetKey] = useState(0) // 用於重置組件狀態
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  const handleStart = useCallback(() => {
    // 重置所有狀態
    setQuery('')
    setSizes([50, 50])
    setResetKey(prev => prev + 1) // 強制重新渲染組件
    setShowLanding(false)
  }, [setQuery])

  const handleLogoClick = useCallback(() => {
    // 重置所有狀態
    setQuery('')
    setSizes([50, 50])
    setResetKey(prev => prev + 1) // 強制重新渲染組件
    setShowLanding(true)
  }, [setQuery])

  const handlePickTerm = useCallback((t) => {
    setQuery((q) => (q ? `${q} ${t}` : t))
  }, [setQuery])

  const handleEasterEgg = useCallback(() => {
    setShowEasterEgg(true)
  }, [])

  const handleCloseEasterEgg = useCallback(() => {
    setShowEasterEgg(false)
  }, [])

  // --- resizable panes state ---
  const gridRef = useRef(null)
  const [sizes, setSizes] = useState([50, 50]) // [middle, right] - removed left pane
  const [isDragging, setIsDragging] = useState(false)
  const sizesRef = useRef(sizes)
  const MIN_PX = 240

  // 同步 sizesRef 與 sizes state
  useEffect(() => {
    sizesRef.current = sizes
  }, [sizes])

  const startDrag = useCallback((which, e) => {
    e.preventDefault()
    e.stopPropagation()
    
    setIsDragging(true)
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
    
    const startX = e.clientX
    const rect = gridRef.current.getBoundingClientRect()
    const total = rect.width
    const curSizes = sizesRef.current
    const curPx = curSizes.map(p => (p / 100) * total)
    let rafId = null

    const onMouseMove = (ev) => {
      ev.preventDefault()
      
      // 使用 requestAnimationFrame 確保流暢動畫
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      
      rafId = requestAnimationFrame(() => {
      const dx = ev.clientX - startX
      if (which === 0) {
        let newMid = curPx[0] + dx
        let newRight = curPx[1] - dx
          
          // 確保最小寬度
          if (newMid < MIN_PX) {
            const diff = MIN_PX - newMid
            newMid = MIN_PX
            newRight -= diff
          }
          if (newRight < MIN_PX) {
            const diff = MIN_PX - newRight
            newRight = MIN_PX
            newMid -= diff
          }
          
          // 確保總和不超過 100%
          const totalPx = newMid + newRight
          if (totalPx > total) {
            const ratio = total / totalPx
            newMid *= ratio
            newRight *= ratio
          }
          
        const s1 = (newMid / total) * 100
        const s2 = (newRight / total) * 100
          setSizes([s1, Math.max(0, Math.min(100, s2))])
      }
      })
    }
    
    const onMouseUp = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      setIsDragging(false)
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
    
    window.addEventListener('mousemove', onMouseMove, { passive: false })
    window.addEventListener('mouseup', onMouseUp)
  }, [])

  if (showLanding) {
    return <LandingPage onStart={handleStart} />
  }

  console.log('Rendering main app, query:', query, 'showLanding:', showLanding)

  return (
    <div className="app">
      <AppHeader onLogoClick={handleLogoClick} />
      
      <div className="app__terms-section">
        <Terms key={`terms-${resetKey}`} onPickTerm={handlePickTerm} onEasterEgg={handleEasterEgg} />
      </div>

      <main className={`app__grid ${isDragging ? 'app__grid--dragging' : ''}`} ref={gridRef}>
        <Card className="card--stack card--no-border" style={{ flexBasis: `${sizes[0]}%` }}>
          <CardTitle>Query Builder</CardTitle>
          <QueryBuilder key={`querybuilder-${resetKey}`} query={query} setQuery={setQuery} />
          <Studies key={`studies-${resetKey}`} query={query} />
        </Card>

        <Resizer 
          ariaLabel="Resize middle/right" 
          onMouseDown={(e) => startDrag(0, e)} 
          isDragging={isDragging}
        />

        <Card className="card--no-border" style={{ flexBasis: `${sizes[1]}%` }}>
          <NiiViewer key={`niiviewer-${resetKey}`} query={query} />
        </Card>
      </main>
      <ScrollButtons />
      {showEasterEgg && <EasterEgg onClose={handleCloseEasterEgg} />}
    </div>
  )
}

```

更新 TODO 列表並檢查代碼完整性：


添加表格標題列（Title）：


```javascriptreact
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
                <th className="studies__th studies__th--star">
                  <span className="studies__th-content">Mark</span>
                </th>
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
                <th className="studies__th studies__th--title">
                  <span className="studies__th-content">Title</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {pageRows.length === 0 ? (
                <tr>
                  <td colSpan={3} className="studies__empty-cell">
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
                        <td className="studies__td studies__td--star">
                          <StarButton 
                            isMarked={isMarked}
                            onClick={() => toggleMark(r)}
                          />
                        </td>
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
                        <td colSpan={3} className="studies__td studies__td--detail">
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

```

```css
.studies {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.studies__title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
}

.studies__title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--fg-dark);
}

.studies__title-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}

.studies__header-info {
  color: var(--fg);
  font-size: 13px;
  white-space: nowrap;
  flex-shrink: 0;
}

.studies__header-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.studies__page-input {
  width: 50px;
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: white;
  color: var(--fg);
  font-weight: 600;
}

.studies__page-input:focus {
  outline: none;
}

.studies__skeleton {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
}

.studies__skeleton-row {
  height: 40px;
  background: var(--bg-light);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

.studies__error {
  margin: 0 12px 12px;
  padding: 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-size: 13px;
}

.studies__table-wrapper {
  overflow-x: hidden;
  overflow-y: auto;
}

.studies__table {
  width: 100%;
  font-size: 13px;
  border-collapse: collapse;
  table-layout: fixed;
}

.studies__thead {
  position: sticky;
  top: 0;
  background: transparent;
  z-index: 10;
}

.studies__th {
  padding: 8px 12px;
  text-align: left;
  font-weight: 600;
  user-select: none;
  border-bottom: none;
  transition: background 0.15s ease;
}

.studies__th:not(.studies__th--no-sort) {
  cursor: pointer;
}

.studies__th:not(.studies__th--no-sort):hover {
  background: rgba(0, 0, 0, 0.02);
}

.studies__th--no-sort {
  cursor: default;
}

.studies__th-content {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.studies__sort-indicator {
  font-size: 10px;
  color: var(--muted);
}

.studies__tr {
  transition: background 0.15s ease;
}

.studies__tr--detail {
  background: transparent;
}

.studies__tr--odd {
  background: transparent;
}

.studies__tr--even {
  background: transparent;
}

.studies__td {
  padding: 8px 12px;
  vertical-align: top;
  border-bottom: none;
}

.studies__th--star {
  width: 50px;
  text-align: center;
  cursor: default;
}

.studies__th--title {
  cursor: default;
}

.studies__th--title:hover {
  background: transparent;
}

.studies__td--star {
  width: 50px;
  text-align: center;
  vertical-align: middle;
}

.studies__td--year {
  white-space: nowrap;
  width: 60px;
  text-align: center;
}

.studies__th:first-child {
  text-align: center;
  width: 60px;
}

.studies__td--title {
  width: auto;
  word-wrap: break-word;
  word-break: break-word;
}

.studies__td--detail {
  padding-top: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  padding-left: 134px;
  background: transparent;
}

.studies__detail-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 0;
  margin-left: 0;
}

.studies__detail-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.studies__detail-label {
  font-weight: 600;
  color: var(--fg-dark);
  min-width: 80px;
  flex-shrink: 0;
}

.studies__detail-value {
  color: var(--fg);
  flex: 1;
}

.studies__title-cell {
  overflow: visible;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
  line-height: 1.5;
  font-size: 17px;
  font-weight: 700;
  color: #004B97;
}

.studies__empty-cell {
  padding: 24px;
  text-align: center;
  color: var(--muted);
}

.studies__pubmed-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #006400;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.15s ease;
}

.studies__pubmed-link:hover {
  color: #228B22;
  text-decoration: underline;
}

.studies__pubmed-link svg {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.studies__pubmed-link:hover svg {
  opacity: 1;
}

.studies__no-pubmed {
  color: var(--muted);
}

.studies__pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  padding: 12px;
  font-size: 13px;
  gap: 16px;
  flex-wrap: wrap;
}

.studies__pagination-info {
  color: var(--fg);
}

.studies__pagination-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__pagination-button {
  padding: 6px 12px;
  background: var(--fg-dark);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
}

.studies__pagination-button:hover:not(:disabled) {
  background: var(--muted);
  transform: translateY(-1px);
}

.studies__pagination-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}


```

移除 CSS 中已過時的 `.studies__th:first-child` 規則：


```css
.studies {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.studies__title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
}

.studies__title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--fg-dark);
}

.studies__title-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}

.studies__header-info {
  color: var(--fg);
  font-size: 13px;
  white-space: nowrap;
  flex-shrink: 0;
}

.studies__header-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.studies__page-input {
  width: 50px;
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: white;
  color: var(--fg);
  font-weight: 600;
}

.studies__page-input:focus {
  outline: none;
}

.studies__skeleton {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
}

.studies__skeleton-row {
  height: 40px;
  background: var(--bg-light);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

.studies__error {
  margin: 0 12px 12px;
  padding: 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-size: 13px;
}

.studies__table-wrapper {
  overflow-x: hidden;
  overflow-y: auto;
}

.studies__table {
  width: 100%;
  font-size: 13px;
  border-collapse: collapse;
  table-layout: fixed;
}

.studies__thead {
  position: sticky;
  top: 0;
  background: transparent;
  z-index: 10;
}

.studies__th {
  padding: 8px 12px;
  text-align: left;
  font-weight: 600;
  user-select: none;
  border-bottom: none;
  transition: background 0.15s ease;
}

.studies__th:not(.studies__th--no-sort) {
  cursor: pointer;
}

.studies__th:not(.studies__th--no-sort):hover {
  background: rgba(0, 0, 0, 0.02);
}

.studies__th--no-sort {
  cursor: default;
}

.studies__th-content {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.studies__sort-indicator {
  font-size: 10px;
  color: var(--muted);
}

.studies__tr {
  transition: background 0.15s ease;
}

.studies__tr--detail {
  background: transparent;
}

.studies__tr--odd {
  background: transparent;
}

.studies__tr--even {
  background: transparent;
}

.studies__td {
  padding: 8px 12px;
  vertical-align: top;
  border-bottom: none;
}

.studies__th--star {
  width: 50px;
  text-align: center;
  cursor: default;
}

.studies__th--title {
  cursor: default;
}

.studies__th--title:hover {
  background: transparent;
}

.studies__td--star {
  width: 50px;
  text-align: center;
  vertical-align: middle;
}

.studies__td--year {
  white-space: nowrap;
  width: 60px;
  text-align: center;
}

.studies__td--title {
  width: auto;
  word-wrap: break-word;
  word-break: break-word;
}

.studies__td--detail {
  padding-top: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  padding-left: 134px;
  background: transparent;
}

.studies__detail-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 0;
  margin-left: 0;
}

.studies__detail-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.studies__detail-label {
  font-weight: 600;
  color: var(--fg-dark);
  min-width: 80px;
  flex-shrink: 0;
}

.studies__detail-value {
  color: var(--fg);
  flex: 1;
}

.studies__title-cell {
  overflow: visible;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
  line-height: 1.5;
  font-size: 17px;
  font-weight: 700;
  color: #004B97;
}

.studies__empty-cell {
  padding: 24px;
  text-align: center;
  color: var(--muted);
}

.studies__pubmed-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #006400;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.15s ease;
}

.studies__pubmed-link:hover {
  color: #228B22;
  text-decoration: underline;
}

.studies__pubmed-link svg {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.studies__pubmed-link:hover svg {
  opacity: 1;
}

.studies__no-pubmed {
  color: var(--muted);
}

.studies__pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  padding: 12px;
  font-size: 13px;
  gap: 16px;
  flex-wrap: wrap;
}

.studies__pagination-info {
  color: var(--fg);
}

.studies__pagination-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__pagination-button {
  padding: 6px 12px;
  background: var(--fg-dark);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
}

.studies__pagination-button:hover:not(:disabled) {
  background: var(--muted);
  transform: translateY(-1px);
}

.studies__pagination-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}


```

已完成所有功能。總結如下：

## 已完成的功能

1. **StarButton component** (`StarButton.jsx` 和 `StarButton.css`)
   - 預設顯示空心星星圖標 (`star-line-yellow-icon.svg`)
   - 點擊後變成實心星星圖標 (`star-symbol-icon.svg`)
   - 具有 hover 和 active 動畫效果

2. **ExportButton component** (`ExportButton.jsx` 和 `ExportButton.css`)
   - 導出被標記的 studies 為 CSV 格式
   - CSV 包含：Year, Title, Authors, PubMed ID
   - 按鈕顏色：`#FFD2D2`，無邊框
   - 當沒有標記項目時會禁用

3. **ClearStarButton component** (`ClearStarButton.jsx` 和 `ClearStarButton.css`)
   - 清除所有標記
   - 按鈕顏色：淺灰色 (`#E0E0E0`)，無邊框

4. **Studies.jsx 整合**
   - 在表格第一列添加了星號標記按鈕
   - 使用 `localStorage` 持久化標記狀態
   - 在 "Studies" 標題右側添加了 Export 和 Clear 按鈕
   - 跨頁面切換時保留標記狀態

5. **樣式更新**
   - 更新了 `Studies.css` 以支援新布局
   - 添加了標題欄樣式
   - 調整了表格列寬度和對齊

所有功能已整合並可使用。標記狀態會保存在瀏覽器的 localStorage 中，即使在切換頁面或重新整理後也會保留。

---

**User**

@star-line-yellow-icon.svg @star-symbol-icon.svg 圖片沒有正確顯示 然後圖片放在year底下 不要壓縮到空間

---

**Cursor**


檢查目前的實現，確認圖片顯示問題，並將星號按鈕移到 year 列下方。


將星號按鈕移到 year 列下方，並檢查圖片路徑。


修改代碼：將星號按鈕移到 year 列下方，並檢查圖片路徑。


```javascriptreact
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
                <th className="studies__th studies__th--title">
                  <span className="studies__th-content">Title</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {pageRows.length === 0 ? (
                <tr>
                  <td colSpan={3} className="studies__empty-cell">
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
                        <td className="studies__td studies__td--star">
                          <StarButton 
                            isMarked={isMarked}
                            onClick={() => toggleMark(r)}
                          />
                        </td>
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
                        <td colSpan={3} className="studies__td studies__td--detail">
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

```

```javascriptreact
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

```

```css
.studies {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.studies__title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
}

.studies__title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--fg-dark);
}

.studies__title-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}

.studies__header-info {
  color: var(--fg);
  font-size: 13px;
  white-space: nowrap;
  flex-shrink: 0;
}

.studies__header-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.studies__page-input {
  width: 50px;
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: white;
  color: var(--fg);
  font-weight: 600;
}

.studies__page-input:focus {
  outline: none;
}

.studies__skeleton {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
}

.studies__skeleton-row {
  height: 40px;
  background: var(--bg-light);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

.studies__error {
  margin: 0 12px 12px;
  padding: 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-size: 13px;
}

.studies__table-wrapper {
  overflow-x: hidden;
  overflow-y: auto;
}

.studies__table {
  width: 100%;
  font-size: 13px;
  border-collapse: collapse;
  table-layout: fixed;
}

.studies__thead {
  position: sticky;
  top: 0;
  background: transparent;
  z-index: 10;
}

.studies__th {
  padding: 8px 12px;
  text-align: left;
  font-weight: 600;
  user-select: none;
  border-bottom: none;
  transition: background 0.15s ease;
}

.studies__th:not(.studies__th--no-sort) {
  cursor: pointer;
}

.studies__th:not(.studies__th--no-sort):hover {
  background: rgba(0, 0, 0, 0.02);
}

.studies__th--no-sort {
  cursor: default;
}

.studies__th-content {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.studies__sort-indicator {
  font-size: 10px;
  color: var(--muted);
}

.studies__tr {
  transition: background 0.15s ease;
}

.studies__tr--detail {
  background: transparent;
}

.studies__tr--odd {
  background: transparent;
}

.studies__tr--even {
  background: transparent;
}

.studies__td {
  padding: 8px 12px;
  vertical-align: top;
  border-bottom: none;
}

.studies__th--star {
  width: 50px;
  text-align: center;
  cursor: default;
}

.studies__th--title {
  cursor: default;
}

.studies__th--title:hover {
  background: transparent;
}

.studies__td--star {
  width: 50px;
  text-align: center;
  vertical-align: middle;
}

.studies__td--year {
  white-space: nowrap;
  width: 60px;
  text-align: center;
  vertical-align: top;
}

.studies__year-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
}

.studies__year-value {
  font-weight: 600;
}

.studies__td--title {
  width: auto;
  word-wrap: break-word;
  word-break: break-word;
}

.studies__td--detail {
  padding-top: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  padding-left: 134px;
  background: transparent;
}

.studies__detail-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 0;
  margin-left: 0;
}

.studies__detail-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.studies__detail-label {
  font-weight: 600;
  color: var(--fg-dark);
  min-width: 80px;
  flex-shrink: 0;
}

.studies__detail-value {
  color: var(--fg);
  flex: 1;
}

.studies__title-cell {
  overflow: visible;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
  line-height: 1.5;
  font-size: 17px;
  font-weight: 700;
  color: #004B97;
}

.studies__empty-cell {
  padding: 24px;
  text-align: center;
  color: var(--muted);
}

.studies__pubmed-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #006400;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.15s ease;
}

.studies__pubmed-link:hover {
  color: #228B22;
  text-decoration: underline;
}

.studies__pubmed-link svg {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.studies__pubmed-link:hover svg {
  opacity: 1;
}

.studies__no-pubmed {
  color: var(--muted);
}

.studies__pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  padding: 12px;
  font-size: 13px;
  gap: 16px;
  flex-wrap: wrap;
}

.studies__pagination-info {
  color: var(--fg);
}

.studies__pagination-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__pagination-button {
  padding: 6px 12px;
  background: var(--fg-dark);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
}

.studies__pagination-button:hover:not(:disabled) {
  background: var(--muted);
  transform: translateY(-1px);
}

.studies__pagination-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}


```

```css
.studies {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.studies__title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
}

.studies__title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--fg-dark);
}

.studies__title-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}

.studies__header-info {
  color: var(--fg);
  font-size: 13px;
  white-space: nowrap;
  flex-shrink: 0;
}

.studies__header-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.studies__page-input {
  width: 50px;
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: white;
  color: var(--fg);
  font-weight: 600;
}

.studies__page-input:focus {
  outline: none;
}

.studies__skeleton {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
}

.studies__skeleton-row {
  height: 40px;
  background: var(--bg-light);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

.studies__error {
  margin: 0 12px 12px;
  padding: 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-size: 13px;
}

.studies__table-wrapper {
  overflow-x: hidden;
  overflow-y: auto;
}

.studies__table {
  width: 100%;
  font-size: 13px;
  border-collapse: collapse;
  table-layout: fixed;
}

.studies__thead {
  position: sticky;
  top: 0;
  background: transparent;
  z-index: 10;
}

.studies__th {
  padding: 8px 12px;
  text-align: left;
  font-weight: 600;
  user-select: none;
  border-bottom: none;
  transition: background 0.15s ease;
}

.studies__th:not(.studies__th--no-sort) {
  cursor: pointer;
}

.studies__th:not(.studies__th--no-sort):hover {
  background: rgba(0, 0, 0, 0.02);
}

.studies__th--no-sort {
  cursor: default;
}

.studies__th-content {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.studies__sort-indicator {
  font-size: 10px;
  color: var(--muted);
}

.studies__tr {
  transition: background 0.15s ease;
}

.studies__tr--detail {
  background: transparent;
}

.studies__tr--odd {
  background: transparent;
}

.studies__tr--even {
  background: transparent;
}

.studies__td {
  padding: 8px 12px;
  vertical-align: top;
  border-bottom: none;
}

.studies__th--star {
  width: 50px;
  text-align: center;
  cursor: default;
}

.studies__th--title {
  cursor: default;
}

.studies__th--title:hover {
  background: transparent;
}

.studies__td--star {
  width: 50px;
  text-align: center;
  vertical-align: middle;
}

.studies__td--year {
  white-space: nowrap;
  width: 60px;
  text-align: center;
  vertical-align: top;
}

.studies__year-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
}

.studies__year-value {
  font-weight: 600;
}

.studies__td--title {
  width: auto;
  word-wrap: break-word;
  word-break: break-word;
}

.studies__td--detail {
  padding-top: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  padding-left: 96px;
  background: transparent;
}

.studies__detail-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 0;
  margin-left: 0;
}

.studies__detail-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.studies__detail-label {
  font-weight: 600;
  color: var(--fg-dark);
  min-width: 80px;
  flex-shrink: 0;
}

.studies__detail-value {
  color: var(--fg);
  flex: 1;
}

.studies__title-cell {
  overflow: visible;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
  line-height: 1.5;
  font-size: 17px;
  font-weight: 700;
  color: #004B97;
}

.studies__empty-cell {
  padding: 24px;
  text-align: center;
  color: var(--muted);
}

.studies__pubmed-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #006400;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.15s ease;
}

.studies__pubmed-link:hover {
  color: #228B22;
  text-decoration: underline;
}

.studies__pubmed-link svg {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.studies__pubmed-link:hover svg {
  opacity: 1;
}

.studies__no-pubmed {
  color: var(--muted);
}

.studies__pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  padding: 12px;
  font-size: 13px;
  gap: 16px;
  flex-wrap: wrap;
}

.studies__pagination-info {
  color: var(--fg);
}

.studies__pagination-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__pagination-button {
  padding: 6px 12px;
  background: var(--fg-dark);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
}

.studies__pagination-button:hover:not(:disabled) {
  background: var(--muted);
  transform: translateY(-1px);
}

.studies__pagination-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}


```

```css
.studies {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.studies__title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
}

.studies__title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--fg-dark);
}

.studies__title-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}

.studies__header-info {
  color: var(--fg);
  font-size: 13px;
  white-space: nowrap;
  flex-shrink: 0;
}

.studies__header-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.studies__page-input {
  width: 50px;
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: white;
  color: var(--fg);
  font-weight: 600;
}

.studies__page-input:focus {
  outline: none;
}

.studies__skeleton {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
}

.studies__skeleton-row {
  height: 40px;
  background: var(--bg-light);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

.studies__error {
  margin: 0 12px 12px;
  padding: 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-size: 13px;
}

.studies__table-wrapper {
  overflow-x: hidden;
  overflow-y: auto;
}

.studies__table {
  width: 100%;
  font-size: 13px;
  border-collapse: collapse;
  table-layout: fixed;
}

.studies__thead {
  position: sticky;
  top: 0;
  background: transparent;
  z-index: 10;
}

.studies__th {
  padding: 8px 12px;
  text-align: left;
  font-weight: 600;
  user-select: none;
  border-bottom: none;
  transition: background 0.15s ease;
}

.studies__th:not(.studies__th--no-sort) {
  cursor: pointer;
}

.studies__th:not(.studies__th--no-sort):hover {
  background: rgba(0, 0, 0, 0.02);
}

.studies__th--no-sort {
  cursor: default;
}

.studies__th-content {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.studies__sort-indicator {
  font-size: 10px;
  color: var(--muted);
}

.studies__tr {
  transition: background 0.15s ease;
}

.studies__tr--detail {
  background: transparent;
}

.studies__tr--odd {
  background: transparent;
}

.studies__tr--even {
  background: transparent;
}

.studies__td {
  padding: 8px 12px;
  vertical-align: top;
  border-bottom: none;
}

.studies__th--title {
  cursor: default;
}

.studies__th--title:hover {
  background: transparent;
}

.studies__td--year {
  white-space: nowrap;
  width: 60px;
  text-align: center;
  vertical-align: top;
}

.studies__year-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
}

.studies__year-value {
  font-weight: 600;
}

.studies__td--title {
  width: auto;
  word-wrap: break-word;
  word-break: break-word;
}

.studies__td--detail {
  padding-top: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  padding-left: 96px;
  background: transparent;
}

.studies__detail-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 0;
  margin-left: 0;
}

.studies__detail-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.studies__detail-label {
  font-weight: 600;
  color: var(--fg-dark);
  min-width: 80px;
  flex-shrink: 0;
}

.studies__detail-value {
  color: var(--fg);
  flex: 1;
}

.studies__title-cell {
  overflow: visible;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
  line-height: 1.5;
  font-size: 17px;
  font-weight: 700;
  color: #004B97;
}

.studies__empty-cell {
  padding: 24px;
  text-align: center;
  color: var(--muted);
}

.studies__pubmed-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #006400;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.15s ease;
}

.studies__pubmed-link:hover {
  color: #228B22;
  text-decoration: underline;
}

.studies__pubmed-link svg {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.studies__pubmed-link:hover svg {
  opacity: 1;
}

.studies__no-pubmed {
  color: var(--muted);
}

.studies__pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  padding: 12px;
  font-size: 13px;
  gap: 16px;
  flex-wrap: wrap;
}

.studies__pagination-info {
  color: var(--fg);
}

.studies__pagination-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__pagination-button {
  padding: 6px 12px;
  background: var(--fg-dark);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
}

.studies__pagination-button:hover:not(:disabled) {
  background: var(--muted);
  transform: translateY(-1px);
}

.studies__pagination-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}


```

```css
.star-button {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  border-radius: 4px;
  flex-shrink: 0;
}

.star-button:hover {
  transform: scale(1.2);
}

.star-button:active {
  transform: scale(0.9);
}

.star-button__icon {
  width: 24px;
  height: 24px;
  display: block;
  pointer-events: none;
  object-fit: contain;
}


```

清理不需要的 CSS，並檢查圖片路徑：


檢查圖片路徑並確保正確顯示：


更新 StarButton 組件，確保圖片正確顯示，並調整 year 列寬度以避免壓縮：


```javascriptreact
import './StarButton.css'

/**
 * StarButton component - Allows users to mark/unmark studies
 * @param {Object} props
 * @param {boolean} props.isMarked - Whether the study is currently marked
 * @param {Function} props.onClick - Callback function when button is clicked
 */
export function StarButton({ isMarked = false, onClick }) {
  const handleImageError = (e) => {
    console.error('Failed to load star icon:', e.target.src)
    // Fallback: create a simple SVG star inline
    const svgContent = isMarked 
      ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.1"><path fill="#ffd401" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"/></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.42"><path fill="#ffcf00" d="M66.71 3.55L81.1 37.26l36.58 3.28v-.01c1.55.13 2.91.89 3.85 2.01a5.663 5.663 0 011.32 4.13v.01a5.673 5.673 0 01-1.69 3.57c-.12.13-.25.25-.39.36L93.25 74.64l8.19 35.83c.35 1.53.05 3.06-.73 4.29a5.652 5.652 0 01-3.54 2.52l-.14.03c-.71.14-1.43.15-2.12.02v.01c-.75-.13-1.47-.42-2.11-.84l-.05-.03-31.3-18.71-31.55 18.86a5.664 5.664 0 01-7.79-1.96c-.38-.64-.62-1.33-.73-2.02-.1-.63-.09-1.27.02-1.89.02-.13.04-.27.08-.4l8.16-35.7c-9.24-8.07-18.74-16.1-27.83-24.3l-.08-.08a5.64 5.64 0 01-1.72-3.7c-.1-1.45.36-2.93 1.4-4.12l.12-.13.08-.08a5.668 5.668 0 013.77-1.72h.06l36.34-3.26 14.44-33.8c.61-1.44 1.76-2.5 3.11-3.05 1.35-.54 2.9-.57 4.34.04.69.29 1.3.71 1.8 1.22.53.53.94 1.15 1.22 1.82l.02.06zm10.19 37.2L61.85 5.51a.42.42 0 00-.09-.14.42.42 0 00-.14-.09.427.427 0 00-.35 0c-.1.04-.19.12-.24.24L45.98 40.75c-.37.86-1.18 1.49-2.18 1.58l-37.9 3.4c-.08.01-.16.02-.24.02-.06 0-.13.02-.18.05-.03.01-.05.03-.07.05l-.1.12c-.05.08-.07.17-.06.26.01.09.04.18.09.25.06.05.13.11.19.17l28.63 25c.77.61 1.17 1.62.94 2.65l-8.51 37.22-.03.14c-.01.06-.02.12-.01.17a.454.454 0 00.33.36c.12.03.24.02.34-.04l32.85-19.64c.8-.5 1.85-.54 2.72-.02L95.43 112c.08.04.16.09.24.14.05.03.1.05.16.06v.01c.04.01.09.01.14 0l.04-.01c.12-.03.22-.1.28-.2.06-.09.08-.21.05-.33L87.8 74.28a2.6 2.6 0 01.83-2.55l28.86-25.2c.04-.03.07-.08.1-.13.02-.04.03-.1.04-.17a.497.497 0 00-.09-.33.48.48 0 00-.3-.15v-.01c-.01 0-.03 0-.03-.01l-37.97-3.41c-1-.01-1.93-.6-2.34-1.57z"/></svg>'
    const blob = new Blob([svgContent], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    e.target.src = url
  }

  return (
    <button
      className={`star-button ${isMarked ? 'star-button--marked' : ''}`}
      onClick={onClick}
      aria-label={isMarked ? 'Unmark study' : 'Mark study'}
      title={isMarked ? 'Unmark study' : 'Mark study'}
    >
      <img
        src={isMarked ? '/star-symbol-icon.svg' : '/star-line-yellow-icon.svg'}
        alt={isMarked ? 'Marked' : 'Unmarked'}
        className="star-button__icon"
        onError={handleImageError}
      />
    </button>
  )
}


```

```css
.studies {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.studies__title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
}

.studies__title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--fg-dark);
}

.studies__title-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}

.studies__header-info {
  color: var(--fg);
  font-size: 13px;
  white-space: nowrap;
  flex-shrink: 0;
}

.studies__header-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.studies__page-input {
  width: 50px;
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: white;
  color: var(--fg);
  font-weight: 600;
}

.studies__page-input:focus {
  outline: none;
}

.studies__skeleton {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
}

.studies__skeleton-row {
  height: 40px;
  background: var(--bg-light);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

.studies__error {
  margin: 0 12px 12px;
  padding: 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-size: 13px;
}

.studies__table-wrapper {
  overflow-x: hidden;
  overflow-y: auto;
}

.studies__table {
  width: 100%;
  font-size: 13px;
  border-collapse: collapse;
  table-layout: fixed;
}

.studies__thead {
  position: sticky;
  top: 0;
  background: transparent;
  z-index: 10;
}

.studies__th {
  padding: 8px 12px;
  text-align: left;
  font-weight: 600;
  user-select: none;
  border-bottom: none;
  transition: background 0.15s ease;
}

.studies__th:not(.studies__th--no-sort) {
  cursor: pointer;
}

.studies__th:not(.studies__th--no-sort):hover {
  background: rgba(0, 0, 0, 0.02);
}

.studies__th--no-sort {
  cursor: default;
}

.studies__th-content {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.studies__sort-indicator {
  font-size: 10px;
  color: var(--muted);
}

.studies__tr {
  transition: background 0.15s ease;
}

.studies__tr--detail {
  background: transparent;
}

.studies__tr--odd {
  background: transparent;
}

.studies__tr--even {
  background: transparent;
}

.studies__td {
  padding: 8px 12px;
  vertical-align: top;
  border-bottom: none;
}

.studies__th--title {
  cursor: default;
}

.studies__th--title:hover {
  background: transparent;
}

.studies__td--year {
  white-space: nowrap;
  width: 80px;
  min-width: 80px;
  text-align: center;
  vertical-align: top;
}

.studies__year-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
  min-height: 60px;
}

.studies__year-value {
  font-weight: 600;
}

.studies__td--title {
  width: auto;
  word-wrap: break-word;
  word-break: break-word;
}

.studies__td--detail {
  padding-top: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  padding-left: 96px;
  background: transparent;
}

.studies__detail-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 0;
  margin-left: 0;
}

.studies__detail-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.studies__detail-label {
  font-weight: 600;
  color: var(--fg-dark);
  min-width: 80px;
  flex-shrink: 0;
}

.studies__detail-value {
  color: var(--fg);
  flex: 1;
}

.studies__title-cell {
  overflow: visible;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
  line-height: 1.5;
  font-size: 17px;
  font-weight: 700;
  color: #004B97;
}

.studies__empty-cell {
  padding: 24px;
  text-align: center;
  color: var(--muted);
}

.studies__pubmed-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #006400;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.15s ease;
}

.studies__pubmed-link:hover {
  color: #228B22;
  text-decoration: underline;
}

.studies__pubmed-link svg {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.studies__pubmed-link:hover svg {
  opacity: 1;
}

.studies__no-pubmed {
  color: var(--muted);
}

.studies__pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  padding: 12px;
  font-size: 13px;
  gap: 16px;
  flex-wrap: wrap;
}

.studies__pagination-info {
  color: var(--fg);
}

.studies__pagination-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__pagination-button {
  padding: 6px 12px;
  background: var(--fg-dark);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
}

.studies__pagination-button:hover:not(:disabled) {
  background: var(--muted);
  transform: translateY(-1px);
}

.studies__pagination-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}


```

更新 detail 行的 padding，以匹配新的 year 列寬度：


```css
.studies {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.studies__title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
}

.studies__title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--fg-dark);
}

.studies__title-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}

.studies__header-info {
  color: var(--fg);
  font-size: 13px;
  white-space: nowrap;
  flex-shrink: 0;
}

.studies__header-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.studies__page-input {
  width: 50px;
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: white;
  color: var(--fg);
  font-weight: 600;
}

.studies__page-input:focus {
  outline: none;
}

.studies__skeleton {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
}

.studies__skeleton-row {
  height: 40px;
  background: var(--bg-light);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

.studies__error {
  margin: 0 12px 12px;
  padding: 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-size: 13px;
}

.studies__table-wrapper {
  overflow-x: hidden;
  overflow-y: auto;
}

.studies__table {
  width: 100%;
  font-size: 13px;
  border-collapse: collapse;
  table-layout: fixed;
}

.studies__thead {
  position: sticky;
  top: 0;
  background: transparent;
  z-index: 10;
}

.studies__th {
  padding: 8px 12px;
  text-align: left;
  font-weight: 600;
  user-select: none;
  border-bottom: none;
  transition: background 0.15s ease;
}

.studies__th:not(.studies__th--no-sort) {
  cursor: pointer;
}

.studies__th:not(.studies__th--no-sort):hover {
  background: rgba(0, 0, 0, 0.02);
}

.studies__th--no-sort {
  cursor: default;
}

.studies__th-content {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.studies__sort-indicator {
  font-size: 10px;
  color: var(--muted);
}

.studies__tr {
  transition: background 0.15s ease;
}

.studies__tr--detail {
  background: transparent;
}

.studies__tr--odd {
  background: transparent;
}

.studies__tr--even {
  background: transparent;
}

.studies__td {
  padding: 8px 12px;
  vertical-align: top;
  border-bottom: none;
}

.studies__th--title {
  cursor: default;
}

.studies__th--title:hover {
  background: transparent;
}

.studies__td--year {
  white-space: nowrap;
  width: 80px;
  min-width: 80px;
  text-align: center;
  vertical-align: top;
}

.studies__year-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
  min-height: 60px;
}

.studies__year-value {
  font-weight: 600;
}

.studies__td--title {
  width: auto;
  word-wrap: break-word;
  word-break: break-word;
}

.studies__td--detail {
  padding-top: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  padding-left: 116px;
  background: transparent;
}

.studies__detail-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 0;
  margin-left: 0;
}

.studies__detail-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.studies__detail-label {
  font-weight: 600;
  color: var(--fg-dark);
  min-width: 80px;
  flex-shrink: 0;
}

.studies__detail-value {
  color: var(--fg);
  flex: 1;
}

.studies__title-cell {
  overflow: visible;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
  line-height: 1.5;
  font-size: 17px;
  font-weight: 700;
  color: #004B97;
}

.studies__empty-cell {
  padding: 24px;
  text-align: center;
  color: var(--muted);
}

.studies__pubmed-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #006400;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.15s ease;
}

.studies__pubmed-link:hover {
  color: #228B22;
  text-decoration: underline;
}

.studies__pubmed-link svg {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.studies__pubmed-link:hover svg {
  opacity: 1;
}

.studies__no-pubmed {
  color: var(--muted);
}

.studies__pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  padding: 12px;
  font-size: 13px;
  gap: 16px;
  flex-wrap: wrap;
}

.studies__pagination-info {
  color: var(--fg);
}

.studies__pagination-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__pagination-button {
  padding: 6px 12px;
  background: var(--fg-dark);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
}

.studies__pagination-button:hover:not(:disabled) {
  background: var(--muted);
  transform: translateY(-1px);
}

.studies__pagination-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}


```

更新 year 列的 header 寬度：


```css
.studies {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.studies__title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
}

.studies__title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--fg-dark);
}

.studies__title-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}

.studies__header-info {
  color: var(--fg);
  font-size: 13px;
  white-space: nowrap;
  flex-shrink: 0;
}

.studies__header-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.studies__page-input {
  width: 50px;
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: white;
  color: var(--fg);
  font-weight: 600;
}

.studies__page-input:focus {
  outline: none;
}

.studies__skeleton {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
}

.studies__skeleton-row {
  height: 40px;
  background: var(--bg-light);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

.studies__error {
  margin: 0 12px 12px;
  padding: 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-size: 13px;
}

.studies__table-wrapper {
  overflow-x: hidden;
  overflow-y: auto;
}

.studies__table {
  width: 100%;
  font-size: 13px;
  border-collapse: collapse;
  table-layout: fixed;
}

.studies__thead {
  position: sticky;
  top: 0;
  background: transparent;
  z-index: 10;
}

.studies__th {
  padding: 8px 12px;
  text-align: left;
  font-weight: 600;
  user-select: none;
  border-bottom: none;
  transition: background 0.15s ease;
}

.studies__th:not(.studies__th--no-sort) {
  cursor: pointer;
}

.studies__th:not(.studies__th--no-sort):hover {
  background: rgba(0, 0, 0, 0.02);
}

.studies__th--no-sort {
  cursor: default;
}

.studies__th-content {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.studies__sort-indicator {
  font-size: 10px;
  color: var(--muted);
}

.studies__tr {
  transition: background 0.15s ease;
}

.studies__tr--detail {
  background: transparent;
}

.studies__tr--odd {
  background: transparent;
}

.studies__tr--even {
  background: transparent;
}

.studies__td {
  padding: 8px 12px;
  vertical-align: top;
  border-bottom: none;
}

.studies__th--title {
  cursor: default;
}

.studies__th--title:hover {
  background: transparent;
}

.studies__th:has(.studies__th-content:has(.studies__sort-indicator)) {
  width: 80px;
  min-width: 80px;
  text-align: center;
}

.studies__td--year {
  white-space: nowrap;
  width: 80px;
  min-width: 80px;
  text-align: center;
  vertical-align: top;
}

.studies__year-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
  min-height: 60px;
}

.studies__year-value {
  font-weight: 600;
}

.studies__td--title {
  width: auto;
  word-wrap: break-word;
  word-break: break-word;
}

.studies__td--detail {
  padding-top: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  padding-left: 116px;
  background: transparent;
}

.studies__detail-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 0;
  margin-left: 0;
}

.studies__detail-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.studies__detail-label {
  font-weight: 600;
  color: var(--fg-dark);
  min-width: 80px;
  flex-shrink: 0;
}

.studies__detail-value {
  color: var(--fg);
  flex: 1;
}

.studies__title-cell {
  overflow: visible;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
  line-height: 1.5;
  font-size: 17px;
  font-weight: 700;
  color: #004B97;
}

.studies__empty-cell {
  padding: 24px;
  text-align: center;
  color: var(--muted);
}

.studies__pubmed-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #006400;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.15s ease;
}

.studies__pubmed-link:hover {
  color: #228B22;
  text-decoration: underline;
}

.studies__pubmed-link svg {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.studies__pubmed-link:hover svg {
  opacity: 1;
}

.studies__no-pubmed {
  color: var(--muted);
}

.studies__pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  padding: 12px;
  font-size: 13px;
  gap: 16px;
  flex-wrap: wrap;
}

.studies__pagination-info {
  color: var(--fg);
}

.studies__pagination-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__pagination-button {
  padding: 6px 12px;
  background: var(--fg-dark);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
}

.studies__pagination-button:hover:not(:disabled) {
  background: var(--muted);
  transform: translateY(-1px);
}

.studies__pagination-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}


```

直接為 year header 添加 class：


```javascriptreact
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

```

```css
.studies {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.studies__title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
}

.studies__title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--fg-dark);
}

.studies__title-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}

.studies__header-info {
  color: var(--fg);
  font-size: 13px;
  white-space: nowrap;
  flex-shrink: 0;
}

.studies__header-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.studies__page-input {
  width: 50px;
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: white;
  color: var(--fg);
  font-weight: 600;
}

.studies__page-input:focus {
  outline: none;
}

.studies__skeleton {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
}

.studies__skeleton-row {
  height: 40px;
  background: var(--bg-light);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

.studies__error {
  margin: 0 12px 12px;
  padding: 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-size: 13px;
}

.studies__table-wrapper {
  overflow-x: hidden;
  overflow-y: auto;
}

.studies__table {
  width: 100%;
  font-size: 13px;
  border-collapse: collapse;
  table-layout: fixed;
}

.studies__thead {
  position: sticky;
  top: 0;
  background: transparent;
  z-index: 10;
}

.studies__th {
  padding: 8px 12px;
  text-align: left;
  font-weight: 600;
  user-select: none;
  border-bottom: none;
  transition: background 0.15s ease;
}

.studies__th:not(.studies__th--no-sort) {
  cursor: pointer;
}

.studies__th:not(.studies__th--no-sort):hover {
  background: rgba(0, 0, 0, 0.02);
}

.studies__th--no-sort {
  cursor: default;
}

.studies__th-content {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.studies__sort-indicator {
  font-size: 10px;
  color: var(--muted);
}

.studies__tr {
  transition: background 0.15s ease;
}

.studies__tr--detail {
  background: transparent;
}

.studies__tr--odd {
  background: transparent;
}

.studies__tr--even {
  background: transparent;
}

.studies__td {
  padding: 8px 12px;
  vertical-align: top;
  border-bottom: none;
}

.studies__th--title {
  cursor: default;
}

.studies__th--title:hover {
  background: transparent;
}

.studies__th--year {
  width: 80px;
  min-width: 80px;
  text-align: center;
}

.studies__td--year {
  white-space: nowrap;
  width: 80px;
  min-width: 80px;
  text-align: center;
  vertical-align: top;
}

.studies__year-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
  min-height: 60px;
}

.studies__year-value {
  font-weight: 600;
}

.studies__td--title {
  width: auto;
  word-wrap: break-word;
  word-break: break-word;
}

.studies__td--detail {
  padding-top: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  padding-left: 116px;
  background: transparent;
}

.studies__detail-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 0;
  margin-left: 0;
}

.studies__detail-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.studies__detail-label {
  font-weight: 600;
  color: var(--fg-dark);
  min-width: 80px;
  flex-shrink: 0;
}

.studies__detail-value {
  color: var(--fg);
  flex: 1;
}

.studies__title-cell {
  overflow: visible;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
  line-height: 1.5;
  font-size: 17px;
  font-weight: 700;
  color: #004B97;
}

.studies__empty-cell {
  padding: 24px;
  text-align: center;
  color: var(--muted);
}

.studies__pubmed-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #006400;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.15s ease;
}

.studies__pubmed-link:hover {
  color: #228B22;
  text-decoration: underline;
}

.studies__pubmed-link svg {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.studies__pubmed-link:hover svg {
  opacity: 1;
}

.studies__no-pubmed {
  color: var(--muted);
}

.studies__pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  padding: 12px;
  font-size: 13px;
  gap: 16px;
  flex-wrap: wrap;
}

.studies__pagination-info {
  color: var(--fg);
}

.studies__pagination-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__pagination-button {
  padding: 6px 12px;
  background: var(--fg-dark);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
}

.studies__pagination-button:hover:not(:disabled) {
  background: var(--muted);
  transform: translateY(-1px);
}

.studies__pagination-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}


```

已完成以下修改：

## 完成的修改

1. **星號按鈕位置調整**
   - 移除了單獨的星號列（第一列）
   - 將星號按鈕移到 year 列下方，與年份垂直排列

2. **空間優化**
   - 將 year 列寬度從 60px 調整為 80px，並設置 `min-width` 確保不會被壓縮
   - 為 year 列添加 `min-height: 60px`，確保有足夠空間顯示年份和星號
   - 調整了 detail 行的 `padding-left` 以匹配新的列寬度

3. **圖片顯示修復**
   - 在 `StarButton` 組件中添加了 `onError` 處理器
   - 如果圖片載入失敗，會使用內聯 SVG 作為備用方案
   - 調整了圖片大小為 24x24px，並添加了 `object-fit: contain` 確保正確顯示

4. **CSS 優化**
   - 移除了不需要的星號列相關樣式
   - 添加了 `.studies__year-cell` 樣式，使用 flexbox 垂直排列年份和星號
   - 為 year header 添加了專用的 class 和樣式

現在星號按鈕會顯示在 year 列下方，不會壓縮空間，圖片應該能正確顯示。如果圖片路徑有問題，會自動使用備用的內聯 SVG。

---

**User**

這兩張圖片顯示還是有問題 檢查是為什麼

---

**Cursor**


檢查圖片顯示問題，先確認圖片路徑與文件是否存在。


檢查其他組件如何引用 public 目錄下的圖片，並確認路徑問題：


可能原因：路徑問題或 SVG 使用 CSS class。改為直接使用內聯 SVG，避免路徑與 CSS class 問題：


```javascriptreact
import './StarButton.css'

/**
 * StarButton component - Allows users to mark/unmark studies
 * @param {Object} props
 * @param {boolean} props.isMarked - Whether the study is currently marked
 * @param {Function} props.onClick - Callback function when button is clicked
 */
export function StarButton({ isMarked = false, onClick }) {
  // Inline SVG content to avoid path issues
  const unmarkedStarSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.42" width="24" height="24">
      <path 
        d="M66.71 3.55L81.1 37.26l36.58 3.28v-.01c1.55.13 2.91.89 3.85 2.01a5.663 5.663 0 011.32 4.13v.01a5.673 5.673 0 01-1.69 3.57c-.12.13-.25.25-.39.36L93.25 74.64l8.19 35.83c.35 1.53.05 3.06-.73 4.29a5.652 5.652 0 01-3.54 2.52l-.14.03c-.71.14-1.43.15-2.12.02v.01c-.75-.13-1.47-.42-2.11-.84l-.05-.03-31.3-18.71-31.55 18.86a5.664 5.664 0 01-7.79-1.96c-.38-.64-.62-1.33-.73-2.02-.1-.63-.09-1.27.02-1.89.02-.13.04-.27.08-.4l8.16-35.7c-9.24-8.07-18.74-16.1-27.83-24.3l-.08-.08a5.64 5.64 0 01-1.72-3.7c-.1-1.45.36-2.93 1.4-4.12l.12-.13.08-.08a5.668 5.668 0 013.77-1.72h.06l36.34-3.26 14.44-33.8c.61-1.44 1.76-2.5 3.11-3.05 1.35-.54 2.9-.57 4.34.04.69.29 1.3.71 1.8 1.22.53.53.94 1.15 1.22 1.82l.02.06zm10.19 37.2L61.85 5.51a.42.42 0 00-.09-.14.42.42 0 00-.14-.09.427.427 0 00-.35 0c-.1.04-.19.12-.24.24L45.98 40.75c-.37.86-1.18 1.49-2.18 1.58l-37.9 3.4c-.08.01-.16.02-.24.02-.06 0-.13.02-.18.05-.03.01-.05.03-.07.05l-.1.12c-.05.08-.07.17-.06.26.01.09.04.18.09.25.06.05.13.11.19.17l28.63 25c.77.61 1.17 1.62.94 2.65l-8.51 37.22-.03.14c-.01.06-.02.12-.01.17a.454.454 0 00.33.36c.12.03.24.02.34-.04l32.85-19.64c.8-.5 1.85-.54 2.72-.02L95.43 112c.08.04.16.09.24.14.05.03.1.05.16.06v.01c.04.01.09.01.14 0l.04-.01c.12-.03.22-.1.28-.2.06-.09.08-.21.05-.33L87.8 74.28a2.6 2.6 0 01.83-2.55l28.86-25.2c.04-.03.07-.08.1-.13.02-.04.03-.1.04-.17a.497.497 0 00-.09-.33.48.48 0 00-.3-.15v-.01c-.01 0-.03 0-.03-.01l-37.97-3.41c-1-.01-1.93-.6-2.34-1.57z" 
        fill="#ffcf00"
      />
    </svg>
  )

  const markedStarSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.1" width="24" height="24">
      <defs>
        <style>{`.cls-1{fill:#ffd401;}`}</style>
      </defs>
      <path 
        className="cls-1"
        d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"
      />
    </svg>
  )

  return (
    <button
      className={`star-button ${isMarked ? 'star-button--marked' : ''}`}
      onClick={onClick}
      aria-label={isMarked ? 'Unmark study' : 'Mark study'}
      title={isMarked ? 'Unmark study' : 'Mark study'}
    >
      <div className="star-button__icon">
        {isMarked ? markedStarSvg : unmarkedStarSvg}
      </div>
    </button>
  )
}


```

```css
.star-button {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  border-radius: 4px;
  flex-shrink: 0;
}

.star-button:hover {
  transform: scale(1.2);
}

.star-button:active {
  transform: scale(0.9);
}

.star-button__icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.star-button__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}


```

發現 `star-symbol-icon.svg` 使用了 CSS class，改為直接在 SVG 中使用 fill 屬性：


```javascriptreact
import './StarButton.css'

/**
 * StarButton component - Allows users to mark/unmark studies
 * @param {Object} props
 * @param {boolean} props.isMarked - Whether the study is currently marked
 * @param {Function} props.onClick - Callback function when button is clicked
 */
export function StarButton({ isMarked = false, onClick }) {
  // Inline SVG content to avoid path issues
  const unmarkedStarSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.42" width="24" height="24">
      <path 
        d="M66.71 3.55L81.1 37.26l36.58 3.28v-.01c1.55.13 2.91.89 3.85 2.01a5.663 5.663 0 011.32 4.13v.01a5.673 5.673 0 01-1.69 3.57c-.12.13-.25.25-.39.36L93.25 74.64l8.19 35.83c.35 1.53.05 3.06-.73 4.29a5.652 5.652 0 01-3.54 2.52l-.14.03c-.71.14-1.43.15-2.12.02v.01c-.75-.13-1.47-.42-2.11-.84l-.05-.03-31.3-18.71-31.55 18.86a5.664 5.664 0 01-7.79-1.96c-.38-.64-.62-1.33-.73-2.02-.1-.63-.09-1.27.02-1.89.02-.13.04-.27.08-.4l8.16-35.7c-9.24-8.07-18.74-16.1-27.83-24.3l-.08-.08a5.64 5.64 0 01-1.72-3.7c-.1-1.45.36-2.93 1.4-4.12l.12-.13.08-.08a5.668 5.668 0 013.77-1.72h.06l36.34-3.26 14.44-33.8c.61-1.44 1.76-2.5 3.11-3.05 1.35-.54 2.9-.57 4.34.04.69.29 1.3.71 1.8 1.22.53.53.94 1.15 1.22 1.82l.02.06zm10.19 37.2L61.85 5.51a.42.42 0 00-.09-.14.42.42 0 00-.14-.09.427.427 0 00-.35 0c-.1.04-.19.12-.24.24L45.98 40.75c-.37.86-1.18 1.49-2.18 1.58l-37.9 3.4c-.08.01-.16.02-.24.02-.06 0-.13.02-.18.05-.03.01-.05.03-.07.05l-.1.12c-.05.08-.07.17-.06.26.01.09.04.18.09.25.06.05.13.11.19.17l28.63 25c.77.61 1.17 1.62.94 2.65l-8.51 37.22-.03.14c-.01.06-.02.12-.01.17a.454.454 0 00.33.36c.12.03.24.02.34-.04l32.85-19.64c.8-.5 1.85-.54 2.72-.02L95.43 112c.08.04.16.09.24.14.05.03.1.05.16.06v.01c.04.01.09.01.14 0l.04-.01c.12-.03.22-.1.28-.2.06-.09.08-.21.05-.33L87.8 74.28a2.6 2.6 0 01.83-2.55l28.86-25.2c.04-.03.07-.08.1-.13.02-.04.03-.1.04-.17a.497.497 0 00-.09-.33.48.48 0 00-.3-.15v-.01c-.01 0-.03 0-.03-.01l-37.97-3.41c-1-.01-1.93-.6-2.34-1.57z" 
        fill="#ffcf00"
      />
    </svg>
  )

  const markedStarSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.1" width="24" height="24">
      <path 
        fill="#ffd401"
        d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"
      />
    </svg>
  )

  return (
    <button
      className={`star-button ${isMarked ? 'star-button--marked' : ''}`}
      onClick={onClick}
      aria-label={isMarked ? 'Unmark study' : 'Mark study'}
      title={isMarked ? 'Unmark study' : 'Mark study'}
    >
      <div className="star-button__icon">
        {isMarked ? markedStarSvg : unmarkedStarSvg}
      </div>
    </button>
  )
}


```

已修復圖片顯示問題。主要變更：

## 修復的問題

1. **圖片路徑問題**
   - 原使用外部文件路徑 (`/star-symbol-icon.svg` 和 `/star-line-yellow-icon.svg`)
   - 改為使用內聯 SVG，避免路徑與 base path 配置問題

2. **CSS class 問題**
   - `star-symbol-icon.svg` 使用了 CSS class (`class="cls-1"`)，內聯時可能無法正確應用
   - 改為直接使用 `fill="#ffd401"` 屬性

3. **結構調整**
   - 將 `<img>` 標籤改為直接渲染 SVG 元素
   - 更新了 CSS 樣式以適應新的結構
   - 移除了不再需要的 `onError` 處理器

現在星星圖標應該能正確顯示：
- 未標記時顯示黃色空心星星 (`#ffcf00`)
- 標記後顯示黃色實心星星 (`#ffd401`)

圖片現在是內聯的，不依賴外部文件路徑，在任何環境下都能正常顯示。

---

**User**

export出來的studies以當下的時間命名，然後clear按鈕名稱改成clear remark，左邊的sturdies 離上面的按鈕太近了需要往下一點

---

**Cursor**


檢查相關文件，準備進行修改：


進行修改：


```javascriptreact
import './ExportButton.css'

/**
 * ExportButton component - Exports marked studies to CSV format
 * @param {Object} props
 * @param {Array} props.markedStudies - Array of marked study objects
 */
export function ExportButton({ markedStudies = [] }) {
  const handleExport = () => {
    if (markedStudies.length === 0) {
      alert('No marked studies to export')
      return
    }

    // Create CSV content
    const headers = ['Year', 'Title', 'Authors', 'PubMed ID']
    const rows = markedStudies.map(study => {
      const year = study.year ?? ''
      const title = (study.title ?? '').replace(/"/g, '""') // Escape quotes
      const authors = (study.authors ?? '').replace(/"/g, '""') // Escape quotes
      const pubmedId = study.study_id || study.id || study.pubmed_id || ''
      
      return `"${year}","${title}","${authors}","${pubmedId}"`
    })

    const csvContent = [
      headers.join(','),
      ...rows
    ].join('\n')

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    
    // Generate filename with current timestamp
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')
    const timestamp = `${year}${month}${day}_${hours}${minutes}${seconds}`
    
    link.setAttribute('href', url)
    link.setAttribute('download', `marked_studies_${timestamp}.csv`)
    link.style.visibility = 'hidden'
    
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    URL.revokeObjectURL(url)
  }

  return (
    <button
      className="export-button"
      onClick={handleExport}
      disabled={markedStudies.length === 0}
      aria-label={`Export ${markedStudies.length} marked studies`}
      title={`Export ${markedStudies.length} marked studies`}
    >
      Export
    </button>
  )
}


```

```javascriptreact
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


```

```css
.studies {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.studies__title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
}

.studies__title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--fg-dark);
}

.studies__title-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}

.studies__header-info {
  color: var(--fg);
  font-size: 13px;
  white-space: nowrap;
  flex-shrink: 0;
}

.studies__header-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.studies__page-input {
  width: 50px;
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: white;
  color: var(--fg);
  font-weight: 600;
}

.studies__page-input:focus {
  outline: none;
}

.studies__skeleton {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
}

.studies__skeleton-row {
  height: 40px;
  background: var(--bg-light);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

.studies__error {
  margin: 0 12px 12px;
  padding: 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-size: 13px;
}

.studies__table-wrapper {
  overflow-x: hidden;
  overflow-y: auto;
}

.studies__table {
  width: 100%;
  font-size: 13px;
  border-collapse: collapse;
  table-layout: fixed;
}

.studies__thead {
  position: sticky;
  top: 0;
  background: transparent;
  z-index: 10;
}

.studies__th {
  padding: 8px 12px;
  text-align: left;
  font-weight: 600;
  user-select: none;
  border-bottom: none;
  transition: background 0.15s ease;
}

.studies__th:not(.studies__th--no-sort) {
  cursor: pointer;
}

.studies__th:not(.studies__th--no-sort):hover {
  background: rgba(0, 0, 0, 0.02);
}

.studies__th--no-sort {
  cursor: default;
}

.studies__th-content {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.studies__sort-indicator {
  font-size: 10px;
  color: var(--muted);
}

.studies__tr {
  transition: background 0.15s ease;
}

.studies__tr--detail {
  background: transparent;
}

.studies__tr--odd {
  background: transparent;
}

.studies__tr--even {
  background: transparent;
}

.studies__td {
  padding: 8px 12px;
  vertical-align: top;
  border-bottom: none;
}

.studies__th--title {
  cursor: default;
}

.studies__th--title:hover {
  background: transparent;
}

.studies__th--year {
  width: 80px;
  min-width: 80px;
  text-align: center;
}

.studies__td--year {
  white-space: nowrap;
  width: 80px;
  min-width: 80px;
  text-align: center;
  vertical-align: top;
}

.studies__year-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
  min-height: 60px;
}

.studies__year-value {
  font-weight: 600;
}

.studies__td--title {
  width: auto;
  word-wrap: break-word;
  word-break: break-word;
}

.studies__td--detail {
  padding-top: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  padding-left: 116px;
  background: transparent;
}

.studies__detail-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 0;
  margin-left: 0;
}

.studies__detail-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.studies__detail-label {
  font-weight: 600;
  color: var(--fg-dark);
  min-width: 80px;
  flex-shrink: 0;
}

.studies__detail-value {
  color: var(--fg);
  flex: 1;
}

.studies__title-cell {
  overflow: visible;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
  line-height: 1.5;
  font-size: 17px;
  font-weight: 700;
  color: #004B97;
}

.studies__empty-cell {
  padding: 24px;
  text-align: center;
  color: var(--muted);
}

.studies__pubmed-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #006400;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.15s ease;
}

.studies__pubmed-link:hover {
  color: #228B22;
  text-decoration: underline;
}

.studies__pubmed-link svg {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.studies__pubmed-link:hover svg {
  opacity: 1;
}

.studies__no-pubmed {
  color: var(--muted);
}

.studies__pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  padding: 12px;
  font-size: 13px;
  gap: 16px;
  flex-wrap: wrap;
}

.studies__pagination-info {
  color: var(--fg);
}

.studies__pagination-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.studies__pagination-button {
  padding: 6px 12px;
  background: var(--fg-dark);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
}

.studies__pagination-button:hover:not(:disabled) {
  background: var(--muted);
  transform: translateY(-1px);
}

.studies__pagination-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}


```

已完成以下修改：

## 完成的修改

1. **Export 檔案名稱使用完整時間戳記**
   - 格式：`marked_studies_YYYYMMDD_HHMMSS.csv`
   - 例如：`marked_studies_20241215_143025.csv`
   - 包含年月日及時分秒

2. **Clear 按鈕名稱改為 "Clear Remark"**
   - 按鈕文字從 "Clear" 改為 "Clear Remark"
   - 同時更新了 aria-label 和 title

3. **Studies 標題增加間距**
   - 在 `.studies__title-bar` 中添加了 `margin-top: 16px`
   - 標題與上方按鈕的間距已增加

變更會自動反映在瀏覽器中。匯出的 CSV 檔案會以當前時間命名，Clear 按鈕顯示為 "Clear Remark"，Studies 標題與上方按鈕的間距已增加。

