# Change color and font style
_Exported on 11/1/2025 at 11:55:38 GMT+8 from Cursor (2.0.46)_

---

**User**

@NiiViewer.css @NiiViewer.jsx coordination input(XYZ)顏色改成黑色、字體粗體放大

---

**Cursor**


查看 `NiiViewer.jsx` 和 `NiiViewer.css`，定位 XYZ 輸入框並調整樣式（黑色、粗體、放大）。


調整 XYZ 輸入框樣式：顏色改為黑色，字體粗體並放大。


```css
.nii-viewer {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nii-viewer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.nii-viewer__header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nii-viewer__advance-button {
  padding: 6px 12px;
  background: var(--bg-light);
  color: var(--fg);
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nii-viewer__advance-button:hover {
  background: var(--border);
}

.nii-viewer__title {
  font-weight: 700;
  font-size: 20px;
  color: var(--fg-dark);
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0;
}

.nii-viewer__input[type="range"] {
  width: 160px;
}

.nii-viewer__download-link {
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  color: var(--fg);
  background: #FFD2D2;
  text-decoration: none;
  transition: all 0.2s ease;
}

.nii-viewer__download-link:hover {
  background: #FF9797;
  color: var(--fg-dark);
}

.nii-viewer__section {
  border: none;
  border-radius: 12px;
  padding: 12px;
  font-size: 13px;
}

.nii-viewer__label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.nii-viewer__threshold-row {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 8px;
}

.nii-viewer__threshold-row .nii-viewer__label {
  margin-bottom: 0;
}

.nii-viewer__select,
.nii-viewer__input {
  padding: 6px 8px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  transition: all 0.2s ease;
}

.nii-viewer__select:focus,
.nii-viewer__input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
}

.nii-viewer__controls-row-top {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.nii-viewer__controls-row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nii-viewer__tip {
  margin-left: auto;
  font-size: 12px;
  color: var(--muted);
  font-style: italic;
}

.nii-viewer__coordinate-label {
  display: flex;
  align-items: center;
  font-size: 16px;
}

.nii-viewer__coordinate-label span {
  font-weight: 700;
  color: #000000;
  font-size: 20px;
}

.nii-viewer__coordinate-input {
  width: 80px;
  padding: 4px 8px;
  border: 1px solid #ECF5FF;
  border-radius: 6px;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  margin-left: 4px;
  background: white;
  cursor: text;
}

.nii-viewer__coordinate-input:focus {
  outline: none;
  border-color: #004B97;
  box-shadow: 0 0 0 2px rgba(0, 75, 151, 0.1);
}

.nii-viewer__grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, auto);
}

.nii-viewer__grid-download {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 8px;
}

.nii-viewer__skeleton-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, auto);
}

.nii-viewer__skeleton-item {
  height: 256px;
  animation: pulse 1.5s ease-in-out infinite;
  border-radius: 12px;
  border: none;
  background: var(--bg-light);
}

.nii-viewer__error {
  border-radius: 8px;
  border: none;
  background: #fee;
  padding: 12px;
  font-size: 13px;
  color: #c33;
}

.nii-viewer__slice-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nii-viewer__slice-label {
  font-size: 12px;
  color: var(--muted);
}

.nii-viewer__slice-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.nii-viewer__slice-input {
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: transparent;
  color: var(--fg);
  font-weight: 600;
  cursor: default;
}

.nii-viewer__slice-input:focus {
  outline: none;
  box-shadow: none;
}

.nii-viewer__canvas {
  width: 100%;
  height: 256px;
  border-radius: 12px;
  border: none;
  cursor: crosshair;
}

.nii-viewer__button {
  padding: 4px 8px;
  background: var(--fg-dark);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nii-viewer__button:hover {
  background: var(--muted);
}

.nii-viewer__button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.nii-viewer__mode-buttons {
  display: flex;
  gap: 8px;
}

.nii-viewer__mode-button {
  padding: 6px 12px;
  background: var(--bg-light);
  color: var(--fg);
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nii-viewer__mode-button:hover {
  background: var(--border);
}

.nii-viewer__mode-button--active {
  background: var(--fg-dark);
  color: white;
}

.nii-viewer__mode-button--active:hover {
  background: var(--muted);
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@media (max-width: 1023px) {
  .nii-viewer__grid,
  .nii-viewer__skeleton-grid {
    grid-template-columns: 1fr;
  }
}

```

已更新 XYZ 座標輸入框樣式：

1. **顏色改為黑色**：從 `#004B97` 改為 `#000000`
2. **字體粗體**：維持 `font-weight: 700`
3. **字體放大**：從 `16px` 改為 `20px`

修改位置：
- `.nii-viewer__coordinate-label span`（X:、Y:、Z: 標籤）
- `.nii-viewer__coordinate-input`（輸入框）

檢查是否有錯誤：


修改完成，沒有錯誤。XYZ 座標輸入框現在為：
- 黑色文字（`#000000`）
- 粗體（`font-weight: 700`）
- 字體大小 20px（原本 16px）

重新載入頁面即可看到更新。

---

**User**

先幫我把server打開

---

**Cursor**


檢查 `package.json` 以確認啟動 server 的命令：


啟動開發伺服器：


開發伺服器已在背景啟動。Vite 通常會在幾秒內啟動並顯示本地 URL（通常是 `http://localhost:5173`）。請在瀏覽器中打開該 URL 查看應用。

如果需要查看伺服器輸出或確認狀態，請告訴我。

---

**User**

藍色邊匡刪除 改成沒有顏色好了

---

**Cursor**


將座標輸入框的藍色邊框改為無顏色（移除或設為透明）。


移除藍色邊框，改為無顏色（透明）。


```css
.nii-viewer {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nii-viewer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.nii-viewer__header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nii-viewer__advance-button {
  padding: 6px 12px;
  background: var(--bg-light);
  color: var(--fg);
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nii-viewer__advance-button:hover {
  background: var(--border);
}

.nii-viewer__title {
  font-weight: 700;
  font-size: 20px;
  color: var(--fg-dark);
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0;
}

.nii-viewer__input[type="range"] {
  width: 160px;
}

.nii-viewer__download-link {
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  color: var(--fg);
  background: #FFD2D2;
  text-decoration: none;
  transition: all 0.2s ease;
}

.nii-viewer__download-link:hover {
  background: #FF9797;
  color: var(--fg-dark);
}

.nii-viewer__section {
  border: none;
  border-radius: 12px;
  padding: 12px;
  font-size: 13px;
}

.nii-viewer__label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.nii-viewer__threshold-row {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 8px;
}

.nii-viewer__threshold-row .nii-viewer__label {
  margin-bottom: 0;
}

.nii-viewer__select,
.nii-viewer__input {
  padding: 6px 8px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  transition: all 0.2s ease;
}

.nii-viewer__select:focus,
.nii-viewer__input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
}

.nii-viewer__controls-row-top {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.nii-viewer__controls-row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nii-viewer__tip {
  margin-left: auto;
  font-size: 12px;
  color: var(--muted);
  font-style: italic;
}

.nii-viewer__coordinate-label {
  display: flex;
  align-items: center;
  font-size: 16px;
}

.nii-viewer__coordinate-label span {
  font-weight: 700;
  color: #000000;
  font-size: 20px;
}

.nii-viewer__coordinate-input {
  width: 80px;
  padding: 4px 8px;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  margin-left: 4px;
  background: white;
  cursor: text;
}

.nii-viewer__coordinate-input:focus {
  outline: none;
  border: none;
  box-shadow: none;
}

.nii-viewer__grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, auto);
}

.nii-viewer__grid-download {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 8px;
}

.nii-viewer__skeleton-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, auto);
}

.nii-viewer__skeleton-item {
  height: 256px;
  animation: pulse 1.5s ease-in-out infinite;
  border-radius: 12px;
  border: none;
  background: var(--bg-light);
}

.nii-viewer__error {
  border-radius: 8px;
  border: none;
  background: #fee;
  padding: 12px;
  font-size: 13px;
  color: #c33;
}

.nii-viewer__slice-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nii-viewer__slice-label {
  font-size: 12px;
  color: var(--muted);
}

.nii-viewer__slice-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.nii-viewer__slice-input {
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: transparent;
  color: var(--fg);
  font-weight: 600;
  cursor: default;
}

.nii-viewer__slice-input:focus {
  outline: none;
  box-shadow: none;
}

.nii-viewer__canvas {
  width: 100%;
  height: 256px;
  border-radius: 12px;
  border: none;
  cursor: crosshair;
}

.nii-viewer__button {
  padding: 4px 8px;
  background: var(--fg-dark);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nii-viewer__button:hover {
  background: var(--muted);
}

.nii-viewer__button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.nii-viewer__mode-buttons {
  display: flex;
  gap: 8px;
}

.nii-viewer__mode-button {
  padding: 6px 12px;
  background: var(--bg-light);
  color: var(--fg);
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nii-viewer__mode-button:hover {
  background: var(--border);
}

.nii-viewer__mode-button--active {
  background: var(--fg-dark);
  color: white;
}

.nii-viewer__mode-button--active:hover {
  background: var(--muted);
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@media (max-width: 1023px) {
  .nii-viewer__grid,
  .nii-viewer__skeleton-grid {
    grid-template-columns: 1fr;
  }
}

```

已移除藍色邊框。修改內容：

1. 一般狀態：將 `border: 1px solid #ECF5FF;` 改為 `border: none;`
2. 聚焦狀態：移除 `border-color: #004B97;` 和藍色陰影，改為 `border: none;` 和 `box-shadow: none;`

現在 XYZ 座標輸入框為無邊框，聚焦時也不會有藍色邊框或陰影。

檢查是否有錯誤：


已完成，沒有錯誤。XYZ 座標輸入框現在為無邊框。刷新頁面即可看到更新。

---

**User**

聚焦的時候要有灰黑色的邊匡

---

**Cursor**


為聚焦狀態添加灰黑色邊框：


```css
.nii-viewer {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nii-viewer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.nii-viewer__header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nii-viewer__advance-button {
  padding: 6px 12px;
  background: var(--bg-light);
  color: var(--fg);
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nii-viewer__advance-button:hover {
  background: var(--border);
}

.nii-viewer__title {
  font-weight: 700;
  font-size: 20px;
  color: var(--fg-dark);
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0;
}

.nii-viewer__input[type="range"] {
  width: 160px;
}

.nii-viewer__download-link {
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  color: var(--fg);
  background: #FFD2D2;
  text-decoration: none;
  transition: all 0.2s ease;
}

.nii-viewer__download-link:hover {
  background: #FF9797;
  color: var(--fg-dark);
}

.nii-viewer__section {
  border: none;
  border-radius: 12px;
  padding: 12px;
  font-size: 13px;
}

.nii-viewer__label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.nii-viewer__threshold-row {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 8px;
}

.nii-viewer__threshold-row .nii-viewer__label {
  margin-bottom: 0;
}

.nii-viewer__select,
.nii-viewer__input {
  padding: 6px 8px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  transition: all 0.2s ease;
}

.nii-viewer__select:focus,
.nii-viewer__input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
}

.nii-viewer__controls-row-top {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.nii-viewer__controls-row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nii-viewer__tip {
  margin-left: auto;
  font-size: 12px;
  color: var(--muted);
  font-style: italic;
}

.nii-viewer__coordinate-label {
  display: flex;
  align-items: center;
  font-size: 16px;
}

.nii-viewer__coordinate-label span {
  font-weight: 700;
  color: #000000;
  font-size: 20px;
}

.nii-viewer__coordinate-input {
  width: 80px;
  padding: 4px 8px;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  margin-left: 4px;
  background: white;
  cursor: text;
}

.nii-viewer__coordinate-input:focus {
  outline: none;
  border: 1px solid #333333;
  box-shadow: none;
}

.nii-viewer__grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, auto);
}

.nii-viewer__grid-download {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 8px;
}

.nii-viewer__skeleton-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, auto);
}

.nii-viewer__skeleton-item {
  height: 256px;
  animation: pulse 1.5s ease-in-out infinite;
  border-radius: 12px;
  border: none;
  background: var(--bg-light);
}

.nii-viewer__error {
  border-radius: 8px;
  border: none;
  background: #fee;
  padding: 12px;
  font-size: 13px;
  color: #c33;
}

.nii-viewer__slice-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nii-viewer__slice-label {
  font-size: 12px;
  color: var(--muted);
}

.nii-viewer__slice-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.nii-viewer__slice-input {
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: transparent;
  color: var(--fg);
  font-weight: 600;
  cursor: default;
}

.nii-viewer__slice-input:focus {
  outline: none;
  box-shadow: none;
}

.nii-viewer__canvas {
  width: 100%;
  height: 256px;
  border-radius: 12px;
  border: none;
  cursor: crosshair;
}

.nii-viewer__button {
  padding: 4px 8px;
  background: var(--fg-dark);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nii-viewer__button:hover {
  background: var(--muted);
}

.nii-viewer__button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.nii-viewer__mode-buttons {
  display: flex;
  gap: 8px;
}

.nii-viewer__mode-button {
  padding: 6px 12px;
  background: var(--bg-light);
  color: var(--fg);
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nii-viewer__mode-button:hover {
  background: var(--border);
}

.nii-viewer__mode-button--active {
  background: var(--fg-dark);
  color: white;
}

.nii-viewer__mode-button--active:hover {
  background: var(--muted);
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@media (max-width: 1023px) {
  .nii-viewer__grid,
  .nii-viewer__skeleton-grid {
    grid-template-columns: 1fr;
  }
}

```

已為聚焦狀態添加灰黑色邊框。檢查是否有錯誤：


已更新：聚焦時會顯示灰黑色邊框（`#333333`）。

- 一般狀態：無邊框
- 聚焦狀態：灰黑色邊框（`1px solid #333333`）

刷新頁面後，點擊 XYZ 輸入框時會看到灰黑色邊框。

---

**User**

當@Terms.css @Terms.jsx terms的搜尋欄底下的詞彙被按下去時，@QueryBuilder.css @QueryBuilder.jsx 搜尋欄位目前已經有同步顯示，但是選取的年份會依據上一個詞彙決定，修正成每次只要是從terms點擊來的詞彙都選取全部年份

---

**Cursor**


搜尋年份選擇相關代碼，確認年份選擇邏輯：


查找主應用組件，了解 Terms 與 QueryBuilder 的交互：


檢查 Studies 組件如何與 YearFilter 交互：


問題：當 query 改變時，YearFilter 依賴 `yearStats` 是否已更新，可能導致年份未重置。調整邏輯：在 query 改變時立即重置年份選擇，不依賴 `yearStats` 的更新。


修正：當 query 改變時，即使 `yearStats` 尚未更新（因為 API 請求是異步的），也應重置年份選擇。調整邏輯：


```javascriptreact
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
    // 如果關鍵字改變了，重置 hasClearedRef
    if (prevQueryRef.current !== query) {
      hasClearedRef.current = false
      prevQueryRef.current = query
      // 當 query 改變時，立即重置年份選擇為空數組
      // 等待 yearStats 更新後再自動選取所有年份
      onYearsChange([])
      return
    }
  }, [query, onYearsChange])

  // 當 yearStats 更新時，如果 query 已改變且未清除過，自動選取所有年份
  useEffect(() => {
    // 如果關鍵字改變了（標記已重置），且 yearStats 有數據，自動選取所有年份
    if (!hasClearedRef.current && yearStats.length > 0) {
      const allYears = yearStats.map(s => String(s.year))
      // 只有在當前選中的年份與全部年份不同時才更新，避免不必要的重渲染
      const currentSet = new Set(selectedYears)
      const allYearsSet = new Set(allYears)
      if (currentSet.size !== allYearsSet.size || 
          !allYears.every(y => currentSet.has(y))) {
        onYearsChange(allYears)
      }
    }
    // 只在初始載入且未清除過時自動選取
    else if (yearStats.length > 0 && selectedYears.length === 0 && !hasClearedRef.current) {
      const allYears = yearStats.map(s => String(s.year))
      onYearsChange(allYears)
    }
  }, [yearStats, selectedYears, onYearsChange])

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


```

檢查是否有錯誤：


優化邏輯，確保每次 query 改變時都自動選取全部年份：


```javascriptreact
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

  // 追蹤 yearStats 是否對應當前 query
  const yearStatsQueryRef = useRef(query)

  // 預設選取所有年份（只在初始載入時，或關鍵字改變時）
  useEffect(() => {
    // 如果關鍵字改變了，重置 hasClearedRef
    if (prevQueryRef.current !== query) {
      hasClearedRef.current = false
      prevQueryRef.current = query
      // 重置 yearStatsQueryRef，表示 yearStats 還未更新到新的 query
      yearStatsQueryRef.current = query
    }
  }, [query])

  // 當 yearStats 更新時，如果 query 已改變且未清除過，自動選取所有年份
  useEffect(() => {
    // 檢查 yearStats 是否對應當前 query
    // 如果 yearStats 是基於當前 query 的結果，則標記為已更新
    if (query && searchResults && searchResults.length > 0) {
      // 有搜尋結果時，yearStats 是基於當前 query 的
      yearStatsQueryRef.current = query
    }

    // 如果 yearStats 已更新到當前 query，且未清除過，自動選取所有年份
    if (yearStatsQueryRef.current === query && !hasClearedRef.current && yearStats.length > 0) {
      const allYears = yearStats.map(s => String(s.year))
      // 只有在當前選中的年份與全部年份不同時才更新，避免不必要的重渲染
      const currentSet = new Set(selectedYears)
      const allYearsSet = new Set(allYears)
      if (currentSet.size !== allYearsSet.size || 
          !allYears.every(y => currentSet.has(y))) {
        onYearsChange(allYears)
      }
    }
    // 只在初始載入且未清除過時自動選取（當沒有 query 時）
    else if (!query && yearStats.length > 0 && selectedYears.length === 0 && !hasClearedRef.current) {
      const allYears = yearStats.map(s => String(s.year))
      onYearsChange(allYears)
    }
  }, [yearStats, selectedYears, onYearsChange, query, searchResults])

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


```

修正邏輯：當 `searchResults` 更新時才自動選取所有年份（表示新 query 的數據已載入）：


```javascriptreact
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
    // 如果關鍵字改變了，重置 hasClearedRef
    if (prevQueryRef.current !== query) {
      hasClearedRef.current = false
      prevQueryRef.current = query
    }
  }, [query])

  // 當 searchResults 更新時（表示新 query 的數據已載入），如果未清除過，自動選取所有年份
  useEffect(() => {
    // 如果有 query 且有搜尋結果，表示這是基於當前 query 的數據
    // 如果未清除過，自動選取所有年份
    if (query && searchResults && searchResults.length > 0 && !hasClearedRef.current && yearStats.length > 0) {
      const allYears = yearStats.map(s => String(s.year))
      // 只有在當前選中的年份與全部年份不同時才更新，避免不必要的重渲染
      const currentSet = new Set(selectedYears)
      const allYearsSet = new Set(allYears)
      if (currentSet.size !== allYearsSet.size || 
          !allYears.every(y => currentSet.has(y))) {
        onYearsChange(allYears)
      }
    }
    // 只在初始載入且未清除過時自動選取（當沒有 query 時）
    else if (!query && yearStats.length > 0 && selectedYears.length === 0 && !hasClearedRef.current) {
      const allYears = yearStats.map(s => String(s.year))
      onYearsChange(allYears)
    }
  }, [yearStats, selectedYears, onYearsChange, query, searchResults])

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


```

檢查是否有錯誤：


已修正年份選擇邏輯。修改如下：

## 修改說明

1. **當 query 改變時**：重置 `hasClearedRef` 為 `false`，標記年份選擇需要重置

2. **當 searchResults 更新時**：檢查是否為新 query 的數據（`query && searchResults && searchResults.length > 0`），且 `hasClearedRef` 為 `false`，則自動選取所有年份

## 運作流程

1. 從 Terms 點擊詞彙時，`query` 改變
2. `hasClearedRef` 重置為 `false`
3. `Studies` 組件重新獲取數據，`searchResults` 更新
4. `yearStats` 基於新的 `searchResults` 自動更新
5. 檢測到新 query 的數據已載入，且未清除過，自動選取所有年份

這樣可確保每次從 Terms 點擊詞彙時，都會自動選取該詞彙對應的所有年份，而不會保留上一個詞彙的年份選擇。

請測試一下，從 Terms 點擊不同的詞彙，確認年份選擇是否正確重置為全部年份。

---

**User**

把
@Terms.css @Terms.jsx 搜尋欄位的clear button 功能也放到@QueryBuilder.css @QueryBuilder.jsx 的搜尋欄位裡面

---

**Cursor**


查看 Terms 組件中清除按鈕的實現，然後在 QueryBuilder 中加入相同功能：


在 QueryBuilder 中加入清除按鈕功能：


修改 QueryBuilder 組件，加入清除按鈕功能：


```javascriptreact
import './QueryBuilder.css'

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
          <button
            onClick={() => setQuery('')}
            className="query-builder__clear-icon"
            aria-label="Clear query"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="18" height="18">
              <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z" fill="currentColor"/>
            </svg>
          </button>
        )}
      </div>

      <div className="query-builder__toolbar">
        {[
          { label: 'AND', onClick: () => append('AND') },
          { label: 'OR', onClick: () => append('OR') },
          { label: 'NOT', onClick: () => append('NOT') },
          { label: '(', onClick: () => append('(') },
          { label: ')', onClick: () => append(')') },
          { label: 'Reset', onClick: () => setQuery('') },
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

```

```css
.query-builder {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.query-builder__input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.query-builder__input {
  width: 100%;
  padding: 10px 40px 10px 14px;
  border: 2px solid var(--border);
  border-radius: 12px;
  outline: none;
  transition: all 0.2s ease;
  font-size: 14px;
  font-family: inherit;
}

.query-builder__clear-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #666 !important;
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  opacity: 1;
}

.query-builder__clear-icon:hover {
  color: #666 !important;
}

.query-builder__clear-icon svg {
  width: 100%;
  height: 100%;
  display: block;
  color: inherit;
}

.query-builder__clear-icon svg path {
  fill: currentColor;
}

.query-builder__input:focus {
  border-color: var(--fg-dark);
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
}

.query-builder__toolbar {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  overflow-x: auto;
}

.query-builder__button {
  padding: 6px 12px;
  background: var(--fg-dark);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.query-builder__button:hover {
  background: var(--muted);
  transform: translateY(-1px);
}

.query-builder__button:active {
  transform: translateY(0);
}

@media (min-width: 1024px) {
  .query-builder__input {
    min-width: 640px;
  }
}


```

檢查是否有錯誤：


已在 QueryBuilder 組件中加入清除按鈕功能。

## 修改內容

### QueryBuilder.jsx
1. 添加 `query-builder__input-wrapper` 包裹層
2. 添加清除按鈕：當 `query` 有值時顯示
3. 使用與 Terms 組件相同的 SVG 圖標

### QueryBuilder.css
1. 添加 `query-builder__input-wrapper` 樣式（相對定位容器）
2. 添加 `query-builder__clear-icon` 樣式（絕對定位於輸入框右側）
3. 調整輸入框右側 padding：從 `10px 14px` 改為 `10px 40px 10px 14px`，為清除按鈕留出空間

現在 QueryBuilder 的搜尋欄位與 Terms 組件一致，當輸入框有內容時，右側會顯示清除按鈕（X），點擊可清除整個查詢。

請測試功能是否正常運作。

---

**User**

可以把這個button獨自做成component好了@components 

---

**Cursor**


創建獨立的清除按鈕組件，並更新 Terms 和 QueryBuilder 以使用它：


建立獨立的清除按鈕組件，並更新 Terms 和 QueryBuilder 以使用它：


```javascriptreact
import './ClearButton.css'

/**
 * ClearButton component - A reusable clear button with X icon
 * 
 * @param {Object} props
 * @param {Function} props.onClick - Callback function when button is clicked
 * @param {string} [props.ariaLabel] - Accessibility label for the button
 * @param {string} [props.className] - Additional CSS class name
 */
export function ClearButton({ onClick, ariaLabel = 'Clear', className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`clear-button ${className}`}
      aria-label={ariaLabel}
      type="button"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="18" height="18">
        <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z" fill="currentColor"/>
      </svg>
    </button>
  )
}

```

```css
.clear-button {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #666 !important;
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  opacity: 1;
}

.clear-button:hover {
  color: #666 !important;
}

.clear-button svg {
  width: 100%;
  height: 100%;
  display: block;
  color: inherit;
}

.clear-button svg path {
  fill: currentColor;
}

```

更新 QueryBuilder 和 Terms 以使用新的 ClearButton 組件：


```javascriptreact
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
          { label: 'Reset', onClick: () => setQuery('') },
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

```

```javascriptreact
import { useEffect, useMemo, useState } from 'react'
import './Terms.css'
import { ClearButton } from './ClearButton'

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

```

```javascriptreact
import { useEffect, useMemo, useState } from 'react'
import './Terms.css'
import { ClearButton } from './ClearButton'

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

```

從 QueryBuilder.css 和 Terms.css 移除舊的清除按鈕樣式：


移除 QueryBuilder.css 和 Terms.css 中的舊清除按鈕樣式：


```css
.query-builder {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.query-builder__input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.query-builder__input {
  width: 100%;
  padding: 10px 40px 10px 14px;
  border: 2px solid var(--border);
  border-radius: 12px;
  outline: none;
  transition: all 0.2s ease;
  font-size: 14px;
  font-family: inherit;
}

.query-builder__input:focus {
  border-color: var(--fg-dark);
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
}

.query-builder__toolbar {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  overflow-x: auto;
}

.query-builder__button {
  padding: 6px 12px;
  background: var(--fg-dark);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.query-builder__button:hover {
  background: var(--muted);
  transform: translateY(-1px);
}

.query-builder__button:active {
  transform: translateY(0);
}

@media (min-width: 1024px) {
  .query-builder__input {
    min-width: 640px;
  }
}


```

```css
.terms {
  width: 100%;
}

.terms__header {
  margin-bottom: 16px;
}

.terms__title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: var(--fg-dark);
}

.terms__controls {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  width: 100%;
  align-items: stretch;
}

.terms__input-wrapper {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
}

.terms__input {
  flex: 1;
  padding: 12px 40px 12px 16px;
  border: 2px solid var(--border);
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
  width: 100%;
  min-width: 0;
}

.terms__input:focus {
  outline: none;
  border-color: var(--fg-dark);
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
}

.terms__skeleton {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.terms__skeleton-row {
  height: 40px;
  background: var(--bg-light);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.terms__error {
  padding: 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-size: 13px;
}

.terms__list {
  margin-bottom: 16px;
}

.terms__container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
}

.terms__empty {
  padding: 24px;
  text-align: center;
  color: var(--muted);
  font-size: 14px;
}

.terms__row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}

.terms__name {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  color: var(--fg);
  text-decoration: none;
  border-radius: 6px;
  font-size: 13px;
  transition: all 0.15s ease;
  cursor: pointer;
  border: none;
  background: radial-gradient(circle, rgba(196, 225, 255, 0.4), rgba(255, 255, 255, 0.2));
  white-space: nowrap;
  flex-shrink: 0;
}

.terms__name:hover {
  background: radial-gradient(circle, rgba(196, 225, 255, 0.5), rgba(255, 255, 255, 0.3));
  color: var(--fg);
  border: none;
  transform: translateY(-1px);
}

.terms__pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  gap: 16px;
}

.terms__pagination-info {
  font-size: 13px;
  color: var(--fg);
}

.terms__pagination-info b {
  color: var(--fg-dark);
  font-weight: 600;
}

.terms__page-input {
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

.terms__page-input:focus {
  outline: none;
}

.terms__pagination-controls {
  display: flex;
  gap: 8px;
}

.terms__pagination-button {
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

.terms__pagination-button:hover:not(:disabled) {
  background: var(--muted);
  transform: translateY(-1px);
}

.terms__pagination-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

@media (max-width: 768px) {
  .terms__controls {
    flex-direction: column;
  }
}


```

檢查是否有錯誤：


已將清除按鈕提取為獨立組件。變更如下：

## 創建的新文件

1. **ClearButton.jsx**：可重用的清除按鈕組件
   - 接受 `onClick` 回調函數
   - 接受可選的 `ariaLabel` prop（預設為 'Clear'）
   - 接受可選的 `className` prop 用於自定義樣式
   - 包含 JSDoc 文檔註釋

2. **ClearButton.css**：清除按鈕的樣式
   - 絕對定位（右側 12px，垂直居中）
   - 包含 hover 狀態樣式
   - SVG 圖標樣式

## 更新的文件

1. **QueryBuilder.jsx**
   - 導入 `ClearButton` 組件
   - 使用 `ClearButton` 取代原本的 button 元素

2. **Terms.jsx**
   - 導入 `ClearButton` 組件
   - 使用 `ClearButton` 取代原本的 button 元素

3. **QueryBuilder.css**
   - 移除 `.query-builder__clear-icon` 相關樣式

4. **Terms.css**
   - 移除 `.terms__clear-icon` 相關樣式

現在清除按鈕已成為可重用的組件，可在專案中任何地方使用。兩個組件（QueryBuilder 和 Terms）現在都使用相同的 `ClearButton` 組件，代碼更簡潔且易於維護。

---

**User**

把@QueryBuilder.css @QueryBuilder.jsx 裡面的reset button刪除

---

**Cursor**


查看 QueryBuilder.jsx，找出並刪除 Reset 按鈕：


移除 Reset 按鈕：


```javascriptreact
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

```

檢查是否有錯誤：


已刪除 QueryBuilder 組件中的 Reset 按鈕。

現在 toolbar 只包含以下按鈕：
- AND
- OR
- NOT
- (
- )

清除查詢功能現在只能通過輸入框右側的 `ClearButton` 來實現，與輸入框內聯，更符合常見的 UI 模式。

沒有錯誤，修改完成。

---

**User**

@Terms.css @Terms.jsx 裡面有page頁碼顯示，我想要改成這樣的格式 << < page xx/xx > >> ，刪除原本page的顯示，把這個功能做成component，讓@QueryBuilder.css @QueryBuilder.jsx 的頁碼也是這樣操作

---

**Cursor**


查看 Terms 組件中的分頁實現，然後創建可重用的分頁組件：


檢查 Studies 組件是否有分頁功能：


創建可重用的分頁組件，並在 Terms 和 QueryBuilder 中使用：


```javascriptreact
import './Pagination.css'

/**
 * Pagination component - A reusable pagination component with format: << < page xx/xx > >>
 * 
 * @param {Object} props
 * @param {number} props.currentPage - Current page number (1-based)
 * @param {number} props.totalPages - Total number of pages
 * @param {Function} props.onPageChange - Callback function when page changes, receives new page number
 */
export function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  const handleFirstPage = () => {
    if (currentPage > 1) {
      onPageChange(1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const handleLastPage = () => {
    if (currentPage < totalPages) {
      onPageChange(totalPages)
    }
  }

  return (
    <div className="pagination">
      <button
        disabled={currentPage <= 1}
        onClick={handleFirstPage}
        className="pagination__button"
        aria-label="First page"
      >
        &lt;&lt;
      </button>
      <button
        disabled={currentPage <= 1}
        onClick={handlePrevPage}
        className="pagination__button"
        aria-label="Previous page"
      >
        &lt;
      </button>
      <span className="pagination__info">
        page {currentPage}/{totalPages}
      </span>
      <button
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className="pagination__button"
        aria-label="Next page"
      >
        &gt;
      </button>
      <button
        disabled={currentPage >= totalPages}
        onClick={handleLastPage}
        className="pagination__button"
        aria-label="Last page"
      >
        &gt;&gt;
      </button>
    </div>
  )
}

```

```css
.pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

.pagination__button {
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

.pagination__button:hover:not(:disabled) {
  background: var(--muted);
  transform: translateY(-1px);
}

.pagination__button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

.pagination__info {
  font-size: 13px;
  color: var(--fg);
  padding: 0 8px;
  white-space: nowrap;
}

```

更新 Terms.jsx 以使用新的 Pagination 組件：


```javascriptreact
import { useEffect, useMemo, useState } from 'react'
import './Terms.css'
import { ClearButton } from './ClearButton'
import { Pagination } from './Pagination'

export function Terms ({ onPickTerm }) {
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

```

```javascriptreact
import { useEffect, useMemo, useState } from 'react'
import './Terms.css'
import { ClearButton } from './ClearButton'
import { Pagination } from './Pagination'

export function Terms ({ onPickTerm }) {
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

```

```javascriptreact
import { useEffect, useMemo, useState } from 'react'
import './Terms.css'
import { ClearButton } from './ClearButton'
import { Pagination } from './Pagination'

export function Terms ({ onPickTerm }) {
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
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          )}
        </>
      )}
    </div>
  )
}

```

清理 Terms.css 中不再需要的分頁樣式：


```css
.terms {
  width: 100%;
}

.terms__header {
  margin-bottom: 16px;
}

.terms__title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: var(--fg-dark);
}

.terms__controls {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  width: 100%;
  align-items: stretch;
}

.terms__input-wrapper {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
}

.terms__input {
  flex: 1;
  padding: 12px 40px 12px 16px;
  border: 2px solid var(--border);
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
  width: 100%;
  min-width: 0;
}

.terms__input:focus {
  outline: none;
  border-color: var(--fg-dark);
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
}

.terms__skeleton {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.terms__skeleton-row {
  height: 40px;
  background: var(--bg-light);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.terms__error {
  padding: 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-size: 13px;
}

.terms__list {
  margin-bottom: 16px;
}

.terms__container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
}

.terms__empty {
  padding: 24px;
  text-align: center;
  color: var(--muted);
  font-size: 14px;
}

.terms__row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}

.terms__name {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  color: var(--fg);
  text-decoration: none;
  border-radius: 6px;
  font-size: 13px;
  transition: all 0.15s ease;
  cursor: pointer;
  border: none;
  background: radial-gradient(circle, rgba(196, 225, 255, 0.4), rgba(255, 255, 255, 0.2));
  white-space: nowrap;
  flex-shrink: 0;
}

.terms__name:hover {
  background: radial-gradient(circle, rgba(196, 225, 255, 0.5), rgba(255, 255, 255, 0.3));
  color: var(--fg);
  border: none;
  transform: translateY(-1px);
}


@media (max-width: 768px) {
  .terms__controls {
    flex-direction: column;
  }
}


```

檢查錯誤，並確認 QueryBuilder 是否需要分頁。先檢查錯誤：


已在 Terms 組件中完成分頁組件的整合。QueryBuilder 目前沒有需要分頁的數據列表，因此未添加分頁。

## 創建的新文件

1. **Pagination.jsx**：可重用的分頁組件
   - 格式：`<< < page xx/xx > >>`
   - 接受 `currentPage`、`totalPages` 和 `onPageChange` props
   - 當只有一頁時自動隱藏

2. **Pagination.css**：分頁組件的樣式

## 更新的文件

1. **Terms.jsx**
   - 導入 `Pagination` 組件
   - 刪除 `pageInput` 相關狀態和處理函數
   - 刪除 `formatNumber` 函數
   - 使用 `Pagination` 組件替換原有的分頁 UI
   - 移除原本的頁碼輸入框和分頁按鈕

2. **Terms.css**
   - 刪除所有分頁相關的樣式（`.terms__pagination`、`.terms__pagination-info`、`.terms__page-input`、`.terms__pagination-controls`、`.terms__pagination-button`）

現在 Terms 組件的分頁顯示格式為：`<< < page xx/xx > >>`

關於 QueryBuilder：目前沒有數據列表需要分頁，因此未添加。如果之後需要，可以直接使用 `Pagination` 組件。

沒有錯誤，修改完成。

---

**User**

還是應該是在@Studies.css @Studies.jsx 裡面，你找找看，應該有頁碼的功能。然後Terms的Results個數要留著 把這個功能還原

---

**Cursor**


更新 Studies.jsx 以使用 Pagination 組件，並在 Terms.jsx 中保留 results 個數顯示：


更新 Studies.jsx 和 Terms.jsx：在 Studies 中使用 Pagination 組件，並在 Terms 中保留 results 個數顯示。


```javascriptreact
import { useEffect, useMemo, useState, useRef } from 'react'
import './Studies.css'
import { PageSizeSelector } from './PageSizeSelector'
import { YearFilter } from './YearFilter'
import { Pagination } from './Pagination'

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

```

```javascriptreact
import { useEffect, useMemo, useState, useRef } from 'react'
import './Studies.css'
import { PageSizeSelector } from './PageSizeSelector'
import { YearFilter } from './YearFilter'
import { Pagination } from './Pagination'

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

```

```javascriptreact
import { useEffect, useMemo, useState, useRef } from 'react'
import './Studies.css'
import { PageSizeSelector } from './PageSizeSelector'
import { YearFilter } from './YearFilter'
import { Pagination } from './Pagination'

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

```

```javascriptreact
import { useEffect, useMemo, useState, useRef } from 'react'
import './Studies.css'
import { PageSizeSelector } from './PageSizeSelector'
import { YearFilter } from './YearFilter'
import { Pagination } from './Pagination'

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

移除不再需要的 pageInput 狀態：


移除不再需要的 pageInput 狀態：


```javascriptreact
import { useEffect, useMemo, useState, useRef } from 'react'
import './Studies.css'
import { PageSizeSelector } from './PageSizeSelector'
import { YearFilter } from './YearFilter'
import { Pagination } from './Pagination'

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

更新 Terms.jsx，添加 results 個數顯示：


更新 Terms.jsx，添加 results 個數顯示：


```javascriptreact
import { useEffect, useMemo, useState } from 'react'
import './Terms.css'
import { ClearButton } from './ClearButton'
import { Pagination } from './Pagination'

export function Terms ({ onPickTerm }) {
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
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          )}
        </>
      )}
    </div>
  )
}

```

修正 Terms.jsx 的分頁部分：


```javascriptreact
import { useEffect, useMemo, useState } from 'react'
import './Terms.css'
import { ClearButton } from './ClearButton'
import { Pagination } from './Pagination'

export function Terms ({ onPickTerm }) {
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

```

為 Terms.css 添加分頁 wrapper 的樣式：


```css
.terms__name:hover {
  background: radial-gradient(circle, rgba(196, 225, 255, 0.5), rgba(255, 255, 255, 0.3));
  color: var(--fg);
  border: none;
  transform: translateY(-1px);
}

.terms__pagination-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  gap: 16px;
  flex-wrap: wrap;
}

.terms__pagination-info {
  font-size: 13px;
  color: var(--fg);
}

.terms__pagination-info b {
  color: var(--fg-dark);
  font-weight: 600;
}

@media (max-width: 768px) {
```

重新讀取 Terms.css：


在 Terms.css 中添加分頁 wrapper 的樣式：


```css
.terms {
  width: 100%;
}

.terms__header {
  margin-bottom: 16px;
}

.terms__title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: var(--fg-dark);
}

.terms__controls {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  width: 100%;
  align-items: stretch;
}

.terms__input-wrapper {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
}

.terms__input {
  flex: 1;
  padding: 12px 40px 12px 16px;
  border: 2px solid var(--border);
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
  width: 100%;
  min-width: 0;
}

.terms__input:focus {
  outline: none;
  border-color: var(--fg-dark);
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
}

.terms__skeleton {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.terms__skeleton-row {
  height: 40px;
  background: var(--bg-light);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.terms__error {
  padding: 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-size: 13px;
}

.terms__list {
  margin-bottom: 16px;
}

.terms__container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
}

.terms__empty {
  padding: 24px;
  text-align: center;
  color: var(--muted);
  font-size: 14px;
}

.terms__row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}

.terms__name {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  color: var(--fg);
  text-decoration: none;
  border-radius: 6px;
  font-size: 13px;
  transition: all 0.15s ease;
  cursor: pointer;
  border: none;
  background: radial-gradient(circle, rgba(196, 225, 255, 0.4), rgba(255, 255, 255, 0.2));
  white-space: nowrap;
  flex-shrink: 0;
}

.terms__name:hover {
  background: radial-gradient(circle, rgba(196, 225, 255, 0.5), rgba(255, 255, 255, 0.3));
  color: var(--fg);
  border: none;
  transform: translateY(-1px);
}

.terms__pagination-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  gap: 16px;
  flex-wrap: wrap;
}

.terms__pagination-info {
  font-size: 13px;
  color: var(--fg);
}

.terms__pagination-info b {
  color: var(--fg-dark);
  font-weight: 600;
}

@media (max-width: 768px) {
  .terms__controls {
    flex-direction: column;
  }
}


```

檢查是否有錯誤：


已更新 Studies.jsx 和 Terms.jsx。變更如下：

## 更新內容

### Studies.jsx
1. 導入 `Pagination` 組件
2. 移除 `pageInput` 狀態及相關處理函數（`handlePageJump`、`handlePageInputKeyDown`、`handlePageInputBlur`）
3. Header 中的分頁：
   - 保留 "results" 顯示
   - 使用 `Pagination` 組件替換原本的分頁按鈕和輸入框
4. 底部的分頁：
   - 保留 "results" 顯示
   - 使用 `Pagination` 組件替換原本的分頁按鈕和輸入框

### Terms.jsx
1. 添加 `formatNumber` 函數用於格式化數字（千分位逗號）
2. 添加分頁 wrapper 和 results 顯示：
   - 顯示格式化的結果個數（例如：`1,234 results`）
   - 使用 `Pagination` 組件進行分頁

### Terms.css
1. 添加 `.terms__pagination-wrapper` 樣式
2. 添加 `.terms__pagination-info` 樣式（包含 `b` 標籤樣式）

現在兩個組件都使用相同的 `Pagination` 組件，格式為 `<< < page xx/xx > >>`，並且都保留了 results 個數顯示。

沒有錯誤，修改完成。

---

**User**

@Pagination.css @Pagination.jsx page的數字可以讓使用者手動輸入，然後不要有上下箭頭，隱藏起來

---

**Cursor**


更新 Pagination 組件，將頁碼改為可手動輸入，並隱藏數字輸入框的上下箭頭：


更新 Pagination 組件，讓頁碼可手動輸入，並隱藏上下箭頭：


```javascriptreact
import { useState, useEffect } from 'react'
import './Pagination.css'

/**
 * Pagination component - A reusable pagination component with format: << < page xx/xx > >>
 * 
 * @param {Object} props
 * @param {number} props.currentPage - Current page number (1-based)
 * @param {number} props.totalPages - Total number of pages
 * @param {Function} props.onPageChange - Callback function when page changes, receives new page number
 */
export function Pagination({ currentPage, totalPages, onPageChange }) {
  const [pageInput, setPageInput] = useState(String(currentPage))

  // Sync pageInput with currentPage
  useEffect(() => {
    setPageInput(String(currentPage))
  }, [currentPage])

  if (totalPages <= 1) return null

  const handleFirstPage = () => {
    if (currentPage > 1) {
      onPageChange(1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const handleLastPage = () => {
    if (currentPage < totalPages) {
      onPageChange(totalPages)
    }
  }

  const handlePageInputChange = (e) => {
    setPageInput(e.target.value)
  }

  const handlePageInputBlur = () => {
    const pageNum = parseInt(pageInput, 10)
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages && pageNum !== currentPage) {
      onPageChange(pageNum)
    } else {
      setPageInput(String(currentPage))
    }
  }

  const handlePageInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handlePageInputBlur()
      e.target.blur()
    }
  }

  return (
    <div className="pagination">
      <button
        disabled={currentPage <= 1}
        onClick={handleFirstPage}
        className="pagination__button"
        aria-label="First page"
      >
        &lt;&lt;
      </button>
      <button
        disabled={currentPage <= 1}
        onClick={handlePrevPage}
        className="pagination__button"
        aria-label="Previous page"
      >
        &lt;
      </button>
      <span className="pagination__info">
        page{' '}
        <input
          type="number"
          min="1"
          max={totalPages}
          value={pageInput}
          onChange={handlePageInputChange}
          onBlur={handlePageInputBlur}
          onKeyDown={handlePageInputKeyDown}
          className="pagination__page-input"
          aria-label="Current page"
        />
        /{totalPages}
      </span>
      <button
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className="pagination__button"
        aria-label="Next page"
      >
        &gt;
      </button>
      <button
        disabled={currentPage >= totalPages}
        onClick={handleLastPage}
        className="pagination__button"
        aria-label="Last page"
      >
        &gt;&gt;
      </button>
    </div>
  )
}


```

```css
.pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

.pagination__button {
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

.pagination__button:hover:not(:disabled) {
  background: var(--muted);
  transform: translateY(-1px);
}

.pagination__button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

.pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

.pagination__button {
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

.pagination__button:hover:not(:disabled) {
  background: var(--muted);
  transform: translateY(-1px);
}

.pagination__button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

.pagination__info {
  font-size: 13px;
  color: var(--fg);
  padding: 0 8px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 4px;
}

.pagination__page-input {
  width: 50px;
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: white;
  color: var(--fg);
  font-weight: 600;
  -moz-appearance: textfield;
}

.pagination__page-input::-webkit-outer-spin-button,
.pagination__page-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.pagination__page-input:focus {
  outline: none;
  background: var(--bg-light);
}



```

檢查 CSS 是否正確，並檢查是否有錯誤：


移除重複的 CSS 定義：


```css
.pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

.pagination__button {
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

.pagination__button:hover:not(:disabled) {
  background: var(--muted);
  transform: translateY(-1px);
}

.pagination__button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

.pagination__info {
  font-size: 13px;
  color: var(--fg);
  padding: 0 8px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 4px;
}

.pagination__page-input {
  width: 50px;
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: white;
  color: var(--fg);
  font-weight: 600;
  -moz-appearance: textfield;
}

.pagination__page-input::-webkit-outer-spin-button,
.pagination__page-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.pagination__page-input:focus {
  outline: none;
  background: var(--bg-light);
}


```

檢查是否有錯誤：


添加標準的 `appearance` 屬性以修正警告：


```css
.pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

.pagination__button {
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

.pagination__button:hover:not(:disabled) {
  background: var(--muted);
  transform: translateY(-1px);
}

.pagination__button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

.pagination__info {
  font-size: 13px;
  color: var(--fg);
  padding: 0 8px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 4px;
}

.pagination__page-input {
  width: 50px;
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: white;
  color: var(--fg);
  font-weight: 600;
  appearance: textfield;
  -moz-appearance: textfield;
}

.pagination__page-input::-webkit-outer-spin-button,
.pagination__page-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.pagination__page-input:focus {
  outline: none;
  background: var(--bg-light);
}


```

再次檢查是否還有錯誤：


已更新 Pagination 組件，現在頁碼可手動輸入，並隱藏了上下箭頭。

## 修改內容

### Pagination.jsx
1. 添加 `useState` 管理 `pageInput` 狀態
2. 添加 `useEffect` 同步 `pageInput` 與 `currentPage`
3. 將頁碼顯示改為可編輯的 `input`（`type="number"`）
4. 添加輸入處理函數：
   - `handlePageInputChange`：處理輸入變更
   - `handlePageInputBlur`：失去焦點時驗證並跳轉頁碼
   - `handlePageInputKeyDown`：按 Enter 時執行跳轉

### Pagination.css
1. 添加 `.pagination__page-input` 樣式：
   - 寬度 50px，居中對齊
   - 無邊框，圓角
   - 白色背景，聚焦時變為淺色背景
2. 隱藏數字輸入框的 spinner：
   - `appearance: textfield` 和 `-moz-appearance: textfield`（Firefox）
   - `::-webkit-outer-spin-button` 和 `::-webkit-inner-spin-button` 設為 `-webkit-appearance: none`（Chrome/Safari）

現在用戶可以：
- 直接在輸入框中輸入頁碼
- 按 Enter 或失去焦點時跳轉到指定頁碼
- 輸入無效時自動恢復為當前頁碼
- 看不到數字輸入框的上下箭頭

沒有錯誤，修改完成。

---

**User**

輸入匡裡面數字的字體改成@libre-baskerville 

---

**Cursor**


檢查專案中是否已定義 Libre Baskerville 字體，然後更新 Pagination 的輸入框字體：


字體已在全局定義。更新 Pagination.css，將輸入框字體設為 Libre Baskerville：


```css
.pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

.pagination__button {
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

.pagination__button:hover:not(:disabled) {
  background: var(--muted);
  transform: translateY(-1px);
}

.pagination__button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

.pagination__info {
  font-size: 13px;
  color: var(--fg);
  padding: 0 8px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 4px;
}

.pagination__page-input {
  width: 50px;
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: white;
  color: var(--fg);
  font-weight: 600;
  font-family: 'Libre Baskerville', serif;
  appearance: textfield;
  -moz-appearance: textfield;
}

.pagination__page-input::-webkit-outer-spin-button,
.pagination__page-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.pagination__page-input:focus {
  outline: none;
  background: var(--bg-light);
}


```

檢查是否有錯誤：


已更新 Pagination 組件的輸入框字體為 Libre Baskerville。

## 修改內容

### Pagination.css
- 在 `.pagination__page-input` 樣式中添加 `font-family: 'Libre Baskerville', serif;`

頁碼輸入框的數字現在使用 Libre Baskerville 字體顯示。字體已在 `index.css` 中定義，無需額外配置。

沒有錯誤，修改完成。

---

**User**

@NiiViewer.css @NiiViewer.jsx 裏面coordination input的字體也要改成@libre-baskerville 

---

**Cursor**


更新 NiiViewer.css，將座標輸入框的字體設為 Libre Baskerville：


```css
.nii-viewer {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nii-viewer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.nii-viewer__header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nii-viewer__advance-button {
  padding: 6px 12px;
  background: var(--bg-light);
  color: var(--fg);
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nii-viewer__advance-button:hover {
  background: var(--border);
}

.nii-viewer__title {
  font-weight: 700;
  font-size: 20px;
  color: var(--fg-dark);
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0;
}

.nii-viewer__input[type="range"] {
  width: 160px;
}

.nii-viewer__download-link {
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  color: var(--fg);
  background: #FFD2D2;
  text-decoration: none;
  transition: all 0.2s ease;
}

.nii-viewer__download-link:hover {
  background: #FF9797;
  color: var(--fg-dark);
}

.nii-viewer__section {
  border: none;
  border-radius: 12px;
  padding: 12px;
  font-size: 13px;
}

.nii-viewer__label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.nii-viewer__threshold-row {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 8px;
}

.nii-viewer__threshold-row .nii-viewer__label {
  margin-bottom: 0;
}

.nii-viewer__select,
.nii-viewer__input {
  padding: 6px 8px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  transition: all 0.2s ease;
}

.nii-viewer__select:focus,
.nii-viewer__input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
}

.nii-viewer__controls-row-top {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.nii-viewer__controls-row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nii-viewer__tip {
  margin-left: auto;
  font-size: 12px;
  color: var(--muted);
  font-style: italic;
}

.nii-viewer__coordinate-label {
  display: flex;
  align-items: center;
  font-size: 16px;
}

.nii-viewer__coordinate-label span {
  font-weight: 700;
  color: #000000;
  font-size: 20px;
}

.nii-viewer__coordinate-input {
  width: 80px;
  padding: 4px 8px;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  margin-left: 4px;
  background: white;
  cursor: text;
  font-family: 'Libre Baskerville', serif;
}

.nii-viewer__coordinate-input:focus {
  outline: none;
  border: 1px solid #333333;
  box-shadow: none;
}

.nii-viewer__grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, auto);
}

.nii-viewer__grid-download {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 8px;
}

.nii-viewer__skeleton-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, auto);
}

.nii-viewer__skeleton-item {
  height: 256px;
  animation: pulse 1.5s ease-in-out infinite;
  border-radius: 12px;
  border: none;
  background: var(--bg-light);
}

.nii-viewer__error {
  border-radius: 8px;
  border: none;
  background: #fee;
  padding: 12px;
  font-size: 13px;
  color: #c33;
}

.nii-viewer__slice-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nii-viewer__slice-label {
  font-size: 12px;
  color: var(--muted);
}

.nii-viewer__slice-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.nii-viewer__slice-input {
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: transparent;
  color: var(--fg);
  font-weight: 600;
  cursor: default;
}

.nii-viewer__slice-input:focus {
  outline: none;
  box-shadow: none;
}

.nii-viewer__canvas {
  width: 100%;
  height: 256px;
  border-radius: 12px;
  border: none;
  cursor: crosshair;
}

.nii-viewer__button {
  padding: 4px 8px;
  background: var(--fg-dark);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nii-viewer__button:hover {
  background: var(--muted);
}

.nii-viewer__button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.nii-viewer__mode-buttons {
  display: flex;
  gap: 8px;
}

.nii-viewer__mode-button {
  padding: 6px 12px;
  background: var(--bg-light);
  color: var(--fg);
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nii-viewer__mode-button:hover {
  background: var(--border);
}

.nii-viewer__mode-button--active {
  background: var(--fg-dark);
  color: white;
}

.nii-viewer__mode-button--active:hover {
  background: var(--muted);
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@media (max-width: 1023px) {
  .nii-viewer__grid,
  .nii-viewer__skeleton-grid {
    grid-template-columns: 1fr;
  }
}

```

檢查是否有錯誤：


已更新 NiiViewer 組件中座標輸入框的字體為 Libre Baskerville。

## 修改內容

### NiiViewer.css
- 在 `.nii-viewer__coordinate-input` 樣式中添加 `font-family: 'Libre Baskerville', serif;`

現在 XYZ 座標輸入框（`.nii-viewer__coordinate-input`）中的數字和文字都使用 Libre Baskerville 字體顯示。字體已在 `index.css` 中全局定義，無需額外配置。

沒有錯誤，修改完成。

---

**User**

然後coordination 數字的部分用#CE0000

---

**Cursor**


將座標輸入框的數字顏色改為 #CE0000：


```css
.nii-viewer {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nii-viewer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.nii-viewer__header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nii-viewer__advance-button {
  padding: 6px 12px;
  background: var(--bg-light);
  color: var(--fg);
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nii-viewer__advance-button:hover {
  background: var(--border);
}

.nii-viewer__title {
  font-weight: 700;
  font-size: 20px;
  color: var(--fg-dark);
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0;
}

.nii-viewer__input[type="range"] {
  width: 160px;
}

.nii-viewer__download-link {
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  color: var(--fg);
  background: #FFD2D2;
  text-decoration: none;
  transition: all 0.2s ease;
}

.nii-viewer__download-link:hover {
  background: #FF9797;
  color: var(--fg-dark);
}

.nii-viewer__section {
  border: none;
  border-radius: 12px;
  padding: 12px;
  font-size: 13px;
}

.nii-viewer__label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.nii-viewer__threshold-row {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 8px;
}

.nii-viewer__threshold-row .nii-viewer__label {
  margin-bottom: 0;
}

.nii-viewer__select,
.nii-viewer__input {
  padding: 6px 8px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  transition: all 0.2s ease;
}

.nii-viewer__select:focus,
.nii-viewer__input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
}

.nii-viewer__controls-row-top {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.nii-viewer__controls-row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nii-viewer__tip {
  margin-left: auto;
  font-size: 12px;
  color: var(--muted);
  font-style: italic;
}

.nii-viewer__coordinate-label {
  display: flex;
  align-items: center;
  font-size: 16px;
}

.nii-viewer__coordinate-label span {
  font-weight: 700;
  color: #000000;
  font-size: 20px;
}

.nii-viewer__coordinate-input {
  width: 80px;
  padding: 4px 8px;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  font-weight: 700;
  color: #CE0000;
  margin-left: 4px;
  background: white;
  cursor: text;
  font-family: 'Libre Baskerville', serif;
}

.nii-viewer__coordinate-input:focus {
  outline: none;
  border: 1px solid #333333;
  box-shadow: none;
}

.nii-viewer__grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, auto);
}

.nii-viewer__grid-download {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 8px;
}

.nii-viewer__skeleton-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, auto);
}

.nii-viewer__skeleton-item {
  height: 256px;
  animation: pulse 1.5s ease-in-out infinite;
  border-radius: 12px;
  border: none;
  background: var(--bg-light);
}

.nii-viewer__error {
  border-radius: 8px;
  border: none;
  background: #fee;
  padding: 12px;
  font-size: 13px;
  color: #c33;
}

.nii-viewer__slice-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nii-viewer__slice-label {
  font-size: 12px;
  color: var(--muted);
}

.nii-viewer__slice-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.nii-viewer__slice-input {
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: transparent;
  color: var(--fg);
  font-weight: 600;
  cursor: default;
}

.nii-viewer__slice-input:focus {
  outline: none;
  box-shadow: none;
}

.nii-viewer__canvas {
  width: 100%;
  height: 256px;
  border-radius: 12px;
  border: none;
  cursor: crosshair;
}

.nii-viewer__button {
  padding: 4px 8px;
  background: var(--fg-dark);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nii-viewer__button:hover {
  background: var(--muted);
}

.nii-viewer__button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.nii-viewer__mode-buttons {
  display: flex;
  gap: 8px;
}

.nii-viewer__mode-button {
  padding: 6px 12px;
  background: var(--bg-light);
  color: var(--fg);
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nii-viewer__mode-button:hover {
  background: var(--border);
}

.nii-viewer__mode-button--active {
  background: var(--fg-dark);
  color: white;
}

.nii-viewer__mode-button--active:hover {
  background: var(--muted);
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@media (max-width: 1023px) {
  .nii-viewer__grid,
  .nii-viewer__skeleton-grid {
    grid-template-columns: 1fr;
  }
}

```

檢查是否有錯誤：


已將座標輸入框的數字顏色改為 #CE0000（紅色）。

## 修改內容

### NiiViewer.css
- 將 `.nii-viewer__coordinate-input` 的 `color` 從 `#000000` 改為 `#CE0000`

現在 XYZ 座標輸入框中的數字顯示為紅色 (#CE0000)。

沒有錯誤，修改完成。

---

**User**

換成#EA0000	試試看

---

**Cursor**


將座標輸入框的顏色改為 #EA0000：


```css
.nii-viewer {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nii-viewer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.nii-viewer__header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nii-viewer__advance-button {
  padding: 6px 12px;
  background: var(--bg-light);
  color: var(--fg);
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nii-viewer__advance-button:hover {
  background: var(--border);
}

.nii-viewer__title {
  font-weight: 700;
  font-size: 20px;
  color: var(--fg-dark);
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0;
}

.nii-viewer__input[type="range"] {
  width: 160px;
}

.nii-viewer__download-link {
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  color: var(--fg);
  background: #FFD2D2;
  text-decoration: none;
  transition: all 0.2s ease;
}

.nii-viewer__download-link:hover {
  background: #FF9797;
  color: var(--fg-dark);
}

.nii-viewer__section {
  border: none;
  border-radius: 12px;
  padding: 12px;
  font-size: 13px;
}

.nii-viewer__label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.nii-viewer__threshold-row {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 8px;
}

.nii-viewer__threshold-row .nii-viewer__label {
  margin-bottom: 0;
}

.nii-viewer__select,
.nii-viewer__input {
  padding: 6px 8px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  transition: all 0.2s ease;
}

.nii-viewer__select:focus,
.nii-viewer__input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
}

.nii-viewer__controls-row-top {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.nii-viewer__controls-row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nii-viewer__tip {
  margin-left: auto;
  font-size: 12px;
  color: var(--muted);
  font-style: italic;
}

.nii-viewer__coordinate-label {
  display: flex;
  align-items: center;
  font-size: 16px;
}

.nii-viewer__coordinate-label span {
  font-weight: 700;
  color: #000000;
  font-size: 20px;
}

.nii-viewer__coordinate-input {
  width: 80px;
  padding: 4px 8px;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  font-weight: 700;
  color: #EA0000;
  margin-left: 4px;
  background: white;
  cursor: text;
  font-family: 'Libre Baskerville', serif;
}

.nii-viewer__coordinate-input:focus {
  outline: none;
  border: 1px solid #333333;
  box-shadow: none;
}

.nii-viewer__grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, auto);
}

.nii-viewer__grid-download {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 8px;
}

.nii-viewer__skeleton-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, auto);
}

.nii-viewer__skeleton-item {
  height: 256px;
  animation: pulse 1.5s ease-in-out infinite;
  border-radius: 12px;
  border: none;
  background: var(--bg-light);
}

.nii-viewer__error {
  border-radius: 8px;
  border: none;
  background: #fee;
  padding: 12px;
  font-size: 13px;
  color: #c33;
}

.nii-viewer__slice-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nii-viewer__slice-label {
  font-size: 12px;
  color: var(--muted);
}

.nii-viewer__slice-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.nii-viewer__slice-input {
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  background: transparent;
  color: var(--fg);
  font-weight: 600;
  cursor: default;
}

.nii-viewer__slice-input:focus {
  outline: none;
  box-shadow: none;
}

.nii-viewer__canvas {
  width: 100%;
  height: 256px;
  border-radius: 12px;
  border: none;
  cursor: crosshair;
}

.nii-viewer__button {
  padding: 4px 8px;
  background: var(--fg-dark);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nii-viewer__button:hover {
  background: var(--muted);
}

.nii-viewer__button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.nii-viewer__mode-buttons {
  display: flex;
  gap: 8px;
}

.nii-viewer__mode-button {
  padding: 6px 12px;
  background: var(--bg-light);
  color: var(--fg);
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nii-viewer__mode-button:hover {
  background: var(--border);
}

.nii-viewer__mode-button--active {
  background: var(--fg-dark);
  color: white;
}

.nii-viewer__mode-button--active:hover {
  background: var(--muted);
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@media (max-width: 1023px) {
  .nii-viewer__grid,
  .nii-viewer__skeleton-grid {
    grid-template-columns: 1fr;
  }
}

```

已將座標輸入框的數字顏色改為 #EA0000。

## 修改內容

### NiiViewer.css
- 將 `.nii-viewer__coordinate-input` 的 `color` 從 `#CE0000` 改為 `#EA0000`

現在 XYZ 座標輸入框中的數字顯示為 #EA0000。

沒有錯誤，修改完成。

---

**User**

這個專案裡面 Query Builder, NIfTI Viewer 可以左右移動調整大小的這個功能程式碼在哪

---

**Cursor**


查找可調整大小的功能程式碼：


查看相關的 CSS 文件：


可調整大小的功能程式碼位置如下：

## 主要實現代碼位置

### 1. **App.jsx**（主要邏輯）
- 位置：`src/App.jsx`
- 關鍵代碼：
  - 第 28-30 行：定義 `sizes` state 和 `MIN_PX` 常量
  - 第 32-57 行：`startDrag` 函數處理拖動調整大小的邏輯
  - 第 74-88 行：使用 `flexBasis` 和 `Resizer` 組件實現布局

```27:57:src/App.jsx
  // --- resizable panes state ---
  const gridRef = useRef(null)
  const [sizes, setSizes] = useState([50, 50]) // [middle, right] - removed left pane
  const MIN_PX = 240

  const startDrag = (which, e) => {
    e.preventDefault()
    const startX = e.clientX
    const rect = gridRef.current.getBoundingClientRect()
    const total = rect.width
    const curPx = sizes.map(p => (p / 100) * total)

    const onMouseMove = (ev) => {
      const dx = ev.clientX - startX
      if (which === 0) {
        let newMid = curPx[0] + dx
        let newRight = curPx[1] - dx
        if (newMid < MIN_PX) { newRight -= (MIN_PX - newMid); newMid = MIN_PX }
        if (newRight < MIN_PX) { newMid -= (MIN_PX - newRight); newRight = MIN_PX }
        const s1 = (newMid / total) * 100
        const s2 = (newRight / total) * 100
        setSizes([s1, Math.max(s2, 0)])
      }
    }
    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }
```

### 2. **Resizer.jsx**（拖動手柄組件）
- 位置：`src/components/Resizer.jsx`
- 功能：提供拖動手柄 UI

```1:11:src/components/Resizer.jsx
import './Resizer.css'

export function Resizer({ onMouseDown, ariaLabel }) {
  return (
    <div 
      className="resizer" 
      aria-label={ariaLabel}
      onMouseDown={onMouseDown}
    />
  )
}
```

### 3. **Resizer.css**（拖動手柄樣式）
- 位置：`src/components/Resizer.css`
- 功能：定義拖動手柄的視覺樣式

### 4. **App.css**（布局樣式）
- 位置：`src/App.css`
- 關鍵樣式：
  - `.app__grid`：使用 flexbox 布局
  - `.app__grid > .card`：設置最小寬度

## 工作原理

1. 初始狀態：`sizes` 設為 `[50, 50]`，左右各佔 50%
2. 拖動開始：點擊 `Resizer` 時觸發 `startDrag`
3. 拖動中：監聽 `mousemove`，計算新寬度
4. 限制：確保兩側都不小於 `MIN_PX`（240px）
5. 更新：更新 `sizes` state，觸發重新渲染

主要的調整大小邏輯在 `App.jsx` 的 `startDrag` 函數中。

```javascriptreact
  // --- resizable panes state ---
  const gridRef = useRef(null)
  const [sizes, setSizes] = useState([50, 50]) // [middle, right] - removed left pane
  const MIN_PX = 240

  const startDrag = (which, e) => {
    e.preventDefault()
    const startX = e.clientX
    const rect = gridRef.current.getBoundingClientRect()
    const total = rect.width
    const curPx = sizes.map(p => (p / 100) * total)

    const onMouseMove = (ev) => {
      const dx = ev.clientX - startX
      if (which === 0) {
        let newMid = curPx[0] + dx
        let newRight = curPx[1] - dx
        if (newMid < MIN_PX) { newRight -= (MIN_PX - newMid); newMid = MIN_PX }
        if (newRight < MIN_PX) { newMid -= (MIN_PX - newRight); newRight = MIN_PX }
        const s1 = (newMid / total) * 100
        const s2 = (newRight / total) * 100
        setSizes([s1, Math.max(s2, 0)])
      }
    }
    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }
```

```javascriptreact
import './Resizer.css'

export function Resizer({ onMouseDown, ariaLabel }) {
  return (
    <div 
      className="resizer" 
      aria-label={ariaLabel}
      onMouseDown={onMouseDown}
    />
  )
}
```

---

**User**

我想把這個功能改成左右的箭頭，按下向左的箭頭，右邊的NIfTI Viewer會滿版，按下向右的箭頭，左邊的Query Builder
會滿版，變成button的感覺，不需要拖曳

---

**Cursor**


將拖曳調整大小改為按鈕切換：修改 App.jsx 和 Resizer 組件。


將拖曳功能改為按鈕切換：


```javascriptreact
import { useCallback, useRef, useState } from 'react'
import { QueryBuilder } from './components/QueryBuilder'
import { Studies } from './components/Studies'
import { NiiViewer } from './components/NiiViewer'
import { LandingPage } from './components/LandingPage'
import { AppHeader } from './components/AppHeader'
import { Terms } from './components/Terms'
import { Card, CardTitle } from './components/Card'
import { Resizer } from './components/Resizer'
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')

  const handleStart = useCallback(() => {
    console.log('handleStart called, setting showLanding to false')
    setShowLanding(false)
    console.log('showLanding set to false, should render main app now')
  }, [])

  const handlePickTerm = useCallback((t) => {
    setQuery((q) => (q ? `${q} ${t}` : t))
  }, [setQuery])

  // --- panel visibility state ---
  const gridRef = useRef(null)
  const [panelMode, setPanelMode] = useState('both') // 'both', 'left', 'right'

  const handleLeftArrow = () => {
    // 按下左箭頭，右邊的 NIfTI Viewer 會滿版
    setPanelMode('right')
  }

  const handleRightArrow = () => {
    // 按下右箭頭，左邊的 Query Builder 會滿版
    setPanelMode('left')
  }

  const handleRestore = () => {
    // 恢復兩邊都顯示
    setPanelMode('both')
  }

  if (showLanding) {
    return <LandingPage onStart={handleStart} />
  }

  console.log('Rendering main app, query:', query, 'showLanding:', showLanding)

  return (
    <div className="app">
      <AppHeader onLogoClick={() => setShowLanding(true)} />
      
      <div className="app__terms-section">
        <Terms onPickTerm={handlePickTerm} />
      </div>

      <main className="app__grid" ref={gridRef}>
        <Card className="card--stack card--no-border" style={{ flexBasis: `${sizes[0]}%` }}>
          <CardTitle>Query Builder</CardTitle>
          <QueryBuilder query={query} setQuery={setQuery} />
          <CardTitle>Studies</CardTitle>
          <Studies query={query} />
        </Card>

        <Resizer 
          ariaLabel="Resize middle/right" 
          onMouseDown={(e) => startDrag(0, e)} 
        />

        <Card className="card--no-border" style={{ flexBasis: `${sizes[1]}%` }}>
          <NiiViewer query={query} />
        </Card>
      </main>
    </div>
  )
}

```

```javascriptreact
import { useCallback, useRef, useState } from 'react'
import { QueryBuilder } from './components/QueryBuilder'
import { Studies } from './components/Studies'
import { NiiViewer } from './components/NiiViewer'
import { LandingPage } from './components/LandingPage'
import { AppHeader } from './components/AppHeader'
import { Terms } from './components/Terms'
import { Card, CardTitle } from './components/Card'
import { Resizer } from './components/Resizer'
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')

  const handleStart = useCallback(() => {
    console.log('handleStart called, setting showLanding to false')
    setShowLanding(false)
    console.log('showLanding set to false, should render main app now')
  }, [])

  const handlePickTerm = useCallback((t) => {
    setQuery((q) => (q ? `${q} ${t}` : t))
  }, [setQuery])

  // --- panel visibility state ---
  const gridRef = useRef(null)
  const [panelMode, setPanelMode] = useState('both') // 'both', 'left', 'right'

  const handleLeftArrow = () => {
    // 按下左箭頭，右邊的 NIfTI Viewer 會滿版
    setPanelMode('right')
  }

  const handleRightArrow = () => {
    // 按下右箭頭，左邊的 Query Builder 會滿版
    setPanelMode('left')
  }

  const handleRestore = () => {
    // 恢復兩邊都顯示
    setPanelMode('both')
  }

  if (showLanding) {
    return <LandingPage onStart={handleStart} />
  }

  console.log('Rendering main app, query:', query, 'showLanding:', showLanding)

  return (
    <div className="app">
      <AppHeader onLogoClick={() => setShowLanding(true)} />
      
      <div className="app__terms-section">
        <Terms onPickTerm={handlePickTerm} />
      </div>

      <main className="app__grid" ref={gridRef}>
        {(panelMode === 'both' || panelMode === 'left') && (
          <Card className="card--stack card--no-border" style={{ display: panelMode === 'left' ? 'block' : 'flex', flex: panelMode === 'both' ? '1 1 0' : 'none', width: panelMode === 'left' ? '100%' : 'auto' }}>
            <CardTitle>Query Builder</CardTitle>
            <QueryBuilder query={query} setQuery={setQuery} />
            <CardTitle>Studies</CardTitle>
            <Studies query={query} />
          </Card>
        )}

        {panelMode === 'both' && (
          <Resizer 
            onLeftClick={handleLeftArrow}
            onRightClick={handleRightArrow}
          />
        )}

        {panelMode === 'left' && (
          <Resizer 
            onLeftClick={handleRestore}
            onRightClick={handleRightArrow}
            showLeftOnly={true}
          />
        )}

        {panelMode === 'right' && (
          <Resizer 
            onLeftClick={handleLeftArrow}
            onRightClick={handleRestore}
            showRightOnly={true}
          />
        )}

        {(panelMode === 'both' || panelMode === 'right') && (
          <Card className="card--no-border" style={{ display: panelMode === 'right' ? 'block' : 'flex', flex: panelMode === 'both' ? '1 1 0' : 'none', width: panelMode === 'right' ? '100%' : 'auto' }}>
            <NiiViewer query={query} />
          </Card>
        )}
      </main>
    </div>
  )
}

```

```javascriptreact
import './Resizer.css'

/**
 * Resizer component - Button controls for panel visibility
 * 
 * @param {Object} props
 * @param {Function} props.onLeftClick - Callback when left arrow is clicked
 * @param {Function} props.onRightClick - Callback when right arrow is clicked
 * @param {boolean} [props.showLeftOnly] - If true, only show left arrow (right panel is full)
 * @param {boolean} [props.showRightOnly] - If true, only show right arrow (left panel is full)
 */
export function Resizer({ onLeftClick, onRightClick, showLeftOnly = false, showRightOnly = false }) {
  return (
    <div className="resizer">
      {(!showRightOnly || showLeftOnly) && (
        <button
          className="resizer__button resizer__button--left"
          onClick={onLeftClick}
          aria-label="Show right panel full screen"
          title="Show NIfTI Viewer full screen"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      {(!showLeftOnly || showRightOnly) && (
        <button
          className="resizer__button resizer__button--right"
          onClick={onRightClick}
          aria-label="Show left panel full screen"
          title="Show Query Builder full screen"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  )
}


```

```css
.resizer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 4px;
  align-self: stretch;
  background: transparent;
  min-width: 40px;
}

.resizer__button {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  background: var(--bg-light);
  color: var(--fg);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  padding: 0;
}

.resizer__button:hover {
  background: var(--fg-dark);
  color: white;
  transform: scale(1.1);
}

.resizer__button:active {
  transform: scale(0.95);
}

.resizer__button svg {
  width: 100%;
  height: 100%;
}

@media (max-width: 1023px) {
  .resizer {
    display: none;
  }
}


```

檢查並修正邏輯：


修正邏輯：簡化 Resizer 組件，確保按鈕行為正確。


```javascriptreact
import { useCallback, useRef, useState } from 'react'
import { QueryBuilder } from './components/QueryBuilder'
import { Studies } from './components/Studies'
import { NiiViewer } from './components/NiiViewer'
import { LandingPage } from './components/LandingPage'
import { AppHeader } from './components/AppHeader'
import { Terms } from './components/Terms'
import { Card, CardTitle } from './components/Card'
import { Resizer } from './components/Resizer'
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')

  const handleStart = useCallback(() => {
    console.log('handleStart called, setting showLanding to false')
    setShowLanding(false)
    console.log('showLanding set to false, should render main app now')
  }, [])

  const handlePickTerm = useCallback((t) => {
    setQuery((q) => (q ? `${q} ${t}` : t))
  }, [setQuery])

  // --- panel visibility state ---
  const gridRef = useRef(null)
  const [panelMode, setPanelMode] = useState('both') // 'both', 'left', 'right'

  const handleLeftArrow = () => {
    // 按下左箭頭，右邊的 NIfTI Viewer 會滿版
    setPanelMode('right')
  }

  const handleRightArrow = () => {
    // 按下右箭頭，左邊的 Query Builder 會滿版
    setPanelMode('left')
  }

  const handleRestore = () => {
    // 恢復兩邊都顯示
    setPanelMode('both')
  }

  if (showLanding) {
    return <LandingPage onStart={handleStart} />
  }

  console.log('Rendering main app, query:', query, 'showLanding:', showLanding)

  return (
    <div className="app">
      <AppHeader onLogoClick={() => setShowLanding(true)} />
      
      <div className="app__terms-section">
        <Terms onPickTerm={handlePickTerm} />
      </div>

      <main className="app__grid" ref={gridRef}>
        {(panelMode === 'both' || panelMode === 'left') && (
          <Card className="card--stack card--no-border" style={{ 
            display: panelMode === 'left' ? 'block' : 'flex', 
            flex: panelMode === 'both' ? '1 1 0' : 'none', 
            width: panelMode === 'left' ? '100%' : 'auto',
            minWidth: panelMode === 'left' ? '100%' : '240px'
          }}>
            <CardTitle>Query Builder</CardTitle>
            <QueryBuilder query={query} setQuery={setQuery} />
            <CardTitle>Studies</CardTitle>
            <Studies query={query} />
          </Card>
        )}

        {panelMode === 'both' && (
          <Resizer 
            onLeftClick={handleLeftArrow}
            onRightClick={handleRightArrow}
          />
        )}

        {panelMode === 'left' && (
          <Resizer 
            onLeftClick={handleRestore}
            onRightClick={null}
            showLeftOnly={true}
          />
        )}

        {panelMode === 'right' && (
          <Resizer 
            onLeftClick={null}
            onRightClick={handleRestore}
            showRightOnly={true}
          />
        )}

        {(panelMode === 'both' || panelMode === 'right') && (
          <Card className="card--no-border" style={{ 
            display: panelMode === 'right' ? 'block' : 'flex', 
            flex: panelMode === 'both' ? '1 1 0' : 'none', 
            width: panelMode === 'right' ? '100%' : 'auto',
            minWidth: panelMode === 'right' ? '100%' : '240px'
          }}>
            <NiiViewer query={query} />
          </Card>
        )}
      </main>
    </div>
  )
}

```

```javascriptreact
import './Resizer.css'

/**
 * Resizer component - Button controls for panel visibility
 * 
 * @param {Object} props
 * @param {Function} props.onLeftClick - Callback when left arrow is clicked
 * @param {Function} props.onRightClick - Callback when right arrow is clicked
 * @param {boolean} [props.showLeftOnly] - If true, only show left arrow (right panel is full)
 * @param {boolean} [props.showRightOnly] - If true, only show right arrow (left panel is full)
 */
export function Resizer({ onLeftClick, onRightClick, showLeftOnly = false, showRightOnly = false }) {
  return (
    <div className="resizer">
      {(onLeftClick || showLeftOnly) && (
        <button
          className="resizer__button resizer__button--left"
          onClick={onLeftClick}
          aria-label="Show right panel full screen"
          title="Show NIfTI Viewer full screen"
          disabled={!onLeftClick}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      {(onRightClick || showRightOnly) && (
        <button
          className="resizer__button resizer__button--right"
          onClick={onRightClick}
          aria-label="Show left panel full screen"
          title="Show Query Builder full screen"
          disabled={!onRightClick}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="rou
```

```css
.resizer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 4px;
  align-self: stretch;
  background: transparent;
  min-width: 40px;
}

.resizer__button {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  background: var(--bg-light);
  color: var(--fg);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  padding: 0;
}

.resizer__button:hover:not(:disabled) {
  background: var(--fg-dark);
  color: white;
  transform: scale(1.1);
}

.resizer__button:active:not(:disabled) {
  transform: scale(0.95);
}

.resizer__button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.resizer__button svg {
  width: 100%;
  height: 100%;
}

@media (max-width: 1023px) {
  .resizer {
    display: none;
  }
}


```

修正 Resizer.jsx 的邏輯：


簡化 Resizer 組件邏輯：


```javascriptreact
import './Resizer.css'

/**
 * Resizer component - Button controls for panel visibility
 * 
 * @param {Object} props
 * @param {Function} props.onLeftClick - Callback when left arrow is clicked
 * @param {Function} props.onRightClick - Callback when right arrow is clicked
 * @param {boolean} [props.showLeftOnly] - If true, only show left arrow (right panel is full)
 * @param {boolean} [props.showRightOnly] - If true, only show right arrow (left panel is full)
 */
export function Resizer({ onLeftClick, onRightClick, showLeftOnly = false, showRightOnly = false }) {
  return (
    <div className="resizer">
      {onLeftClick && (
        <button
          className="resizer__button resizer__button--left"
          onClick={onLeftClick}
          aria-label="Show right panel full screen"
          title="Show NIfTI Viewer full screen"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      {onRightClick && (
        <button
          className="resizer__button resizer__button--right"
          onClick={onRightClick}
          aria-label="Show left panel full screen"
          title="Show Query Builder full screen"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  )
}


```

檢查並修正邏輯，確保按鈕行為正確：


簡化邏輯：總是顯示兩個按鈕，根據當前狀態改變行為。


```javascriptreact
import { useCallback, useRef, useState } from 'react'
import { QueryBuilder } from './components/QueryBuilder'
import { Studies } from './components/Studies'
import { NiiViewer } from './components/NiiViewer'
import { LandingPage } from './components/LandingPage'
import { AppHeader } from './components/AppHeader'
import { Terms } from './components/Terms'
import { Card, CardTitle } from './components/Card'
import { Resizer } from './components/Resizer'
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')

  const handleStart = useCallback(() => {
    console.log('handleStart called, setting showLanding to false')
    setShowLanding(false)
    console.log('showLanding set to false, should render main app now')
  }, [])

  const handlePickTerm = useCallback((t) => {
    setQuery((q) => (q ? `${q} ${t}` : t))
  }, [setQuery])

  // --- panel visibility state ---
  const gridRef = useRef(null)
  const [panelMode, setPanelMode] = useState('both') // 'both', 'left', 'right'

  const handleLeftArrow = () => {
    // 按下左箭頭，右邊的 NIfTI Viewer 會滿版
    if (panelMode === 'both' || panelMode === 'left') {
      setPanelMode('right')
    } else {
      // 如果已經是右邊滿版，點擊左箭頭恢復兩邊顯示
      setPanelMode('both')
    }
  }

  const handleRightArrow = () => {
    // 按下右箭頭，左邊的 Query Builder 會滿版
    if (panelMode === 'both' || panelMode === 'right') {
      setPanelMode('left')
    } else {
      // 如果已經是左邊滿版，點擊右箭頭恢復兩邊顯示
      setPanelMode('both')
    }
  }

  if (showLanding) {
    return <LandingPage onStart={handleStart} />
  }

  console.log('Rendering main app, query:', query, 'showLanding:', showLanding)

  return (
    <div className="app">
      <AppHeader onLogoClick={() => setShowLanding(true)} />
      
      <div className="app__terms-section">
        <Terms onPickTerm={handlePickTerm} />
      </div>

      <main className="app__grid" ref={gridRef}>
        {(panelMode === 'both' || panelMode === 'left') && (
          <Card className="card--stack card--no-border" style={{ 
            display: panelMode === 'left' ? 'block' : 'flex', 
            flex: panelMode === 'both' ? '1 1 0' : 'none', 
            width: panelMode === 'left' ? '100%' : 'auto',
            minWidth: panelMode === 'left' ? '100%' : '240px'
          }}>
            <CardTitle>Query Builder</CardTitle>
            <QueryBuilder query={query} setQuery={setQuery} />
            <CardTitle>Studies</CardTitle>
            <Studies query={query} />
          </Card>
        )}

        {panelMode === 'both' && (
          <Resizer 
            onLeftClick={handleLeftArrow}
            onRightClick={handleRightArrow}
          />
        )}

        {panelMode === 'left' && (
          <Resizer 
            onLeftClick={handleRestore}
            onRightClick={null}
            showLeftOnly={true}
          />
        )}

        {panelMode === 'right' && (
          <Resizer 
            onLeftClick={null}
            onRightClick={handleRestore}
            showRightOnly={true}
          />
        )}

        {(panelMode === 'both' || panelMode === 'right') && (
          <Card className="card--no-border" style={{ 
            display: panelMode === 'right' ? 'block' : 'flex', 
            flex: panelMode === 'both' ? '1 1 0' : 'none', 
            width: panelMode === 'right' ? '100%' : 'auto',
            minWidth: panelMode === 'right' ? '100%' : '240px'
          }}>
            <NiiViewer query={query} />
          </Card>
        )}
      </main>
    </div>
  )
}

```

```javascriptreact
import { useCallback, useRef, useState } from 'react'
import { QueryBuilder } from './components/QueryBuilder'
import { Studies } from './components/Studies'
import { NiiViewer } from './components/NiiViewer'
import { LandingPage } from './components/LandingPage'
import { AppHeader } from './components/AppHeader'
import { Terms } from './components/Terms'
import { Card, CardTitle } from './components/Card'
import { Resizer } from './components/Resizer'
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')

  const handleStart = useCallback(() => {
    console.log('handleStart called, setting showLanding to false')
    setShowLanding(false)
    console.log('showLanding set to false, should render main app now')
  }, [])

  const handlePickTerm = useCallback((t) => {
    setQuery((q) => (q ? `${q} ${t}` : t))
  }, [setQuery])

  // --- panel visibility state ---
  const gridRef = useRef(null)
  const [panelMode, setPanelMode] = useState('both') // 'both', 'left', 'right'

  const handleLeftArrow = () => {
    // 按下左箭頭，右邊的 NIfTI Viewer 會滿版
    if (panelMode === 'both' || panelMode === 'left') {
      setPanelMode('right')
    } else {
      // 如果已經是右邊滿版，點擊左箭頭恢復兩邊顯示
      setPanelMode('both')
    }
  }

  const handleRightArrow = () => {
    // 按下右箭頭，左邊的 Query Builder 會滿版
    if (panelMode === 'both' || panelMode === 'right') {
      setPanelMode('left')
    } else {
      // 如果已經是左邊滿版，點擊右箭頭恢復兩邊顯示
      setPanelMode('both')
    }
  }

  if (showLanding) {
    return <LandingPage onStart={handleStart} />
  }

  console.log('Rendering main app, query:', query, 'showLanding:', showLanding)

  return (
    <div className="app">
      <AppHeader onLogoClick={() => setShowLanding(true)} />
      
      <div className="app__terms-section">
        <Terms onPickTerm={handlePickTerm} />
      </div>

      <main className="app__grid" ref={gridRef}>
        {(panelMode === 'both' || panelMode === 'left') && (
          <Card className="card--stack card--no-border" style={{ 
            display: panelMode === 'left' ? 'block' : 'flex', 
            flex: panelMode === 'both' ? '1 1 0' : 'none', 
            width: panelMode === 'left' ? '100%' : 'auto',
            minWidth: panelMode === 'left' ? '100%' : '240px'
          }}>
            <CardTitle>Query Builder</CardTitle>
            <QueryBuilder query={query} setQuery={setQuery} />
            <CardTitle>Studies</CardTitle>
            <Studies query={query} />
          </Card>
        )}

        <Resizer 
          onLeftClick={handleLeftArrow}
          onRightClick={handleRightArrow}
        />

        {(panelMode === 'both' || panelMode === 'right') && (
          <Card className="card--no-border" style={{ 
            display: panelMode === 'right' ? 'block' : 'flex', 
            flex: panelMode === 'both' ? '1 1 0' : 'none', 
            width: panelMode === 'right' ? '100%' : 'auto',
            minWidth: panelMode === 'right' ? '100%' : '240px'
          }}>
            <NiiViewer query={query} />
          </Card>
        )}
      </main>
    </div>
  )
}

```

調整布局：當只顯示一邊時，Resizer 應顯示在邊緣。修正邏輯：


```javascriptreact
import { useCallback, useRef, useState } from 'react'
import { QueryBuilder } from './components/QueryBuilder'
import { Studies } from './components/Studies'
import { NiiViewer } from './components/NiiViewer'
import { LandingPage } from './components/LandingPage'
import { AppHeader } from './components/AppHeader'
import { Terms } from './components/Terms'
import { Card, CardTitle } from './components/Card'
import { Resizer } from './components/Resizer'
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')

  const handleStart = useCallback(() => {
    console.log('handleStart called, setting showLanding to false')
    setShowLanding(false)
    console.log('showLanding set to false, should render main app now')
  }, [])

  const handlePickTerm = useCallback((t) => {
    setQuery((q) => (q ? `${q} ${t}` : t))
  }, [setQuery])

  // --- panel visibility state ---
  const gridRef = useRef(null)
  const [panelMode, setPanelMode] = useState('both') // 'both', 'left', 'right'

  const handleLeftArrow = () => {
    // 按下左箭頭，右邊的 NIfTI Viewer 會滿版
    if (panelMode === 'both' || panelMode === 'left') {
      setPanelMode('right')
    } else {
      // 如果已經是右邊滿版，點擊左箭頭恢復兩邊顯示
      setPanelMode('both')
    }
  }

  const handleRightArrow = () => {
    // 按下右箭頭，左邊的 Query Builder 會滿版
    if (panelMode === 'both' || panelMode === 'right') {
      setPanelMode('left')
    } else {
      // 如果已經是左邊滿版，點擊右箭頭恢復兩邊顯示
      setPanelMode('both')
    }
  }

  if (showLanding) {
    return <LandingPage onStart={handleStart} />
  }

  console.log('Rendering main app, query:', query, 'showLanding:', showLanding)

  return (
    <div className="app">
      <AppHeader onLogoClick={() => setShowLanding(true)} />
      
      <div className="app__terms-section">
        <Terms onPickTerm={handlePickTerm} />
      </div>

      <main className="app__grid" ref={gridRef}>
        {(panelMode === 'both' || panelMode === 'left') && (
          <Card className="card--stack card--no-border" style={{ 
            display: panelMode === 'left' ? 'block' : 'flex', 
            flex: panelMode === 'both' ? '1 1 0' : 'none', 
            width: panelMode === 'left' ? '100%' : 'auto',
            minWidth: panelMode === 'left' ? '100%' : '240px'
          }}>
            <CardTitle>Query Builder</CardTitle>
            <QueryBuilder query={query} setQuery={setQuery} />
            <CardTitle>Studies</CardTitle>
            <Studies query={query} />
          </Card>
        )}

        {panelMode === 'both' && (
          <Resizer 
            onLeftClick={handleLeftArrow}
            onRightClick={handleRightArrow}
          />
        )}

        {panelMode === 'left' && (
          <Resizer 
            onLeftClick={handleLeftArrow}
            onRightClick={handleRightArrow}
            showLeftOnly={true}
          />
        )}

        {panelMode === 'right' && (
          <Resizer 
            onLeftClick={handleLeftArrow}
            onRightClick={handleRightArrow}
            showRightOnly={true}
          />
        )}

        {(panelMode === 'both' || panelMode === 'right') && (
          <Card className="card--no-border" style={{ 
            display: panelMode === 'right' ? 'block' : 'flex', 
            flex: panelMode === 'both' ? '1 1 0' : 'none', 
            width: panelMode === 'right' ? '100%' : 'auto',
            minWidth: panelMode === 'right' ? '100%' : '240px'
          }}>
            <NiiViewer query={query} />
          </Card>
        )}
      </main>
    </div>
  )
}

```

```javascriptreact
import './Resizer.css'

/**
 * Resizer component - Button controls for panel visibility
 * 
 * @param {Object} props
 * @param {Function} props.onLeftClick - Callback when left arrow is clicked
 * @param {Function} props.onRightClick - Callback when right arrow is clicked
 * @param {boolean} [props.showLeftOnly] - If true, only show left arrow (right panel is full)
 * @param {boolean} [props.showRightOnly] - If true, only show right arrow (left panel is full)
 */
export function Resizer({ onLeftClick, onRightClick, showLeftOnly = false, showRightOnly = false }) {
  return (
    <div className={`resizer ${showLeftOnly ? 'resizer--left-edge' : ''} ${showRightOnly ? 'resizer--right-edge' : ''}`}>
      {(!showRightOnly) && onLeftClick && (
        <button
          className="resizer__button resizer__button--left"
          onClick={onLeftClick}
          aria-label="Show right panel full screen"
          title="Show NIfTI Viewer full screen"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      {(!showLeftOnly) && onRightClick && (
        <button
          className="resizer__button resizer__button--right"
          onClick={onRightClick}
          aria-label="Show left panel full screen"
          title="Show Query Builder full screen"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  )
}


```

```css
.resizer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 4px;
  align-self: stretch;
  background: transparent;
  min-width: 40px;
}

.resizer--left-edge {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
}

.resizer--right-edge {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
}

.resizer__button {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  background: var(--bg-light);
  color: var(--fg);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  padding: 0;
}

.resizer__button:hover:not(:disabled) {
  background: var(--fg-dark);
  color: white;
  transform: scale(1.1);
}

.resizer__button:active:not(:disabled) {
  transform: scale(0.95);
}

.resizer__button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.resizer__button svg {
  width: 100%;
  height: 100%;
}

@media (max-width: 1023px) {
  .resizer {
    display: none;
  }
}


```

調整布局，避免絕對定位造成的問題：


調整布局，讓 Resizer 在單面板模式下正確顯示在邊緣：


```css
/* App.css - Black, White, Gray Theme */
:root {
  --bg: #fafafa;
  --bg-light: #f5f5f5;
  --fg: #111827;
  --fg-dark: #000000;
  --muted: #6b7280;
  --border: #e5e7eb;
  --radius: 14px;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

* { 
  box-sizing: border-box; 
}

html, body, #root { 
  height: 100%; 
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: 'Libre Baskerville', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  max-width: none;
  margin: 0;
  padding: 18px 0 18px 18px;
  min-height: 100vh;
  background: linear-gradient(to bottom, #fafafa 0%, #f5f5f5 100%);
  position: relative;
  z-index: 1;
}

.app__terms-section {
  margin-bottom: 18px;
  background: white;
  border-radius: var(--radius);
  padding: 16px 20px;
  box-shadow: var(--shadow-sm);
}

.app__grid { 
  display: flex; 
  gap: 0; 
  width: 100%; 
  animation: fadeIn 0.5s ease-out;
  position: relative;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.app__grid > .card { 
  flex: 1 1 0; 
  min-width: 240px; 
  overflow: auto; 
}

@media (max-width: 1023px) {
  .app { 
    padding: 12px; 
  }
  
  .app__grid { 
    flex-direction: column; 
  }
}

```

```css
.resizer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 4px;
  align-self: stretch;
  background: transparent;
  min-width: 40px;
}

.resizer--left-edge {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  pointer-events: none;
}

.resizer--left-edge .resizer__button {
  pointer-events: auto;
}

.resizer--right-edge {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  pointer-events: none;
}

.resizer--right-edge .resizer__button {
  pointer-events: auto;
}

.resizer__button {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  background: var(--bg-light);
  color: var(--fg);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  padding: 0;
}

.resizer__button:hover:not(:disabled) {
  background: var(--fg-dark);
  color: white;
  transform: scale(1.1);
}

.resizer__button:active:not(:disabled) {
  transform: scale(0.95);
}

.resizer__button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.resizer__button svg {
  width: 100%;
  height: 100%;
}

@media (max-width: 1023px) {
  .resizer {
    display: none;
  }
}


```

調整布局：當只顯示一邊時，Resizer 仍在 flex 布局中，不使用絕對定位：


```css
.resizer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 4px;
  align-self: stretch;
  background: transparent;
  min-width: 40px;
}

.resizer__button {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  background: var(--bg-light);
  color: var(--fg);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  padding: 0;
}

.resizer__button:hover:not(:disabled) {
  background: var(--fg-dark);
  color: white;
  transform: scale(1.1);
}

.resizer__button:active:not(:disabled) {
  transform: scale(0.95);
}

.resizer__button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.resizer__button svg {
  width: 100%;
  height: 100%;
}

@media (max-width: 1023px) {
  .resizer {
    display: none;
  }
}


```

```javascriptreact
import './Resizer.css'

/**
 * Resizer component - Button controls for panel visibility
 * 
 * @param {Object} props
 * @param {Function} props.onLeftClick - Callback when left arrow is clicked
 * @param {Function} props.onRightClick - Callback when right arrow is clicked
 * @param {boolean} [props.showLeftOnly] - If true, only show left arrow (right panel is full)
 * @param {boolean} [props.showRightOnly] - If true, only show right arrow (left panel is full)
 */
export function Resizer({ onLeftClick, onRightClick, showLeftOnly = false, showRightOnly = false }) {
  return (
    <div className="resizer">
      {(!showRightOnly) && onLeftClick && (
        <button
          className="resizer__button resizer__button--left"
          onClick={onLeftClick}
          aria-label="Show right panel full screen"
          title="Show NIfTI Viewer full screen"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      {(!showLeftOnly) && onRightClick && (
        <button
          className="resizer__button resizer__button--right"
          onClick={onRightClick}
          aria-label="Show left panel full screen"
          title="Show Query Builder full screen"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  )
}


```

檢查並修正邏輯，確保按鈕行為正確：


檢查是否有錯誤：


調整邏輯：當只顯示一邊時，也顯示兩個按鈕，讓用戶可以切換或恢復：


```javascriptreact
import { useCallback, useRef, useState } from 'react'
import { QueryBuilder } from './components/QueryBuilder'
import { Studies } from './components/Studies'
import { NiiViewer } from './components/NiiViewer'
import { LandingPage } from './components/LandingPage'
import { AppHeader } from './components/AppHeader'
import { Terms } from './components/Terms'
import { Card, CardTitle } from './components/Card'
import { Resizer } from './components/Resizer'
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')

  const handleStart = useCallback(() => {
    console.log('handleStart called, setting showLanding to false')
    setShowLanding(false)
    console.log('showLanding set to false, should render main app now')
  }, [])

  const handlePickTerm = useCallback((t) => {
    setQuery((q) => (q ? `${q} ${t}` : t))
  }, [setQuery])

  // --- panel visibility state ---
  const gridRef = useRef(null)
  const [panelMode, setPanelMode] = useState('both') // 'both', 'left', 'right'

  const handleLeftArrow = () => {
    // 按下左箭頭，右邊的 NIfTI Viewer 會滿版
    if (panelMode === 'both' || panelMode === 'left') {
      setPanelMode('right')
    } else {
      // 如果已經是右邊滿版，點擊左箭頭恢復兩邊顯示
      setPanelMode('both')
    }
  }

  const handleRightArrow = () => {
    // 按下右箭頭，左邊的 Query Builder 會滿版
    if (panelMode === 'both' || panelMode === 'right') {
      setPanelMode('left')
    } else {
      // 如果已經是左邊滿版，點擊右箭頭恢復兩邊顯示
      setPanelMode('both')
    }
  }

  if (showLanding) {
    return <LandingPage onStart={handleStart} />
  }

  console.log('Rendering main app, query:', query, 'showLanding:', showLanding)

  return (
    <div className="app">
      <AppHeader onLogoClick={() => setShowLanding(true)} />
      
      <div className="app__terms-section">
        <Terms onPickTerm={handlePickTerm} />
      </div>

      <main className="app__grid" ref={gridRef}>
        {(panelMode === 'both' || panelMode === 'left') && (
          <Card className="card--stack card--no-border" style={{ 
            display: panelMode === 'left' ? 'block' : 'flex', 
            flex: panelMode === 'both' ? '1 1 0' : 'none', 
            width: panelMode === 'left' ? '100%' : 'auto',
            minWidth: panelMode === 'left' ? '100%' : '240px'
          }}>
            <CardTitle>Query Builder</CardTitle>
            <QueryBuilder query={query} setQuery={setQuery} />
            <CardTitle>Studies</CardTitle>
            <Studies query={query} />
          </Card>
        )}

        {panelMode === 'both' && (
          <Resizer 
            onLeftClick={handleLeftArrow}
            onRightClick={handleRightArrow}
          />
        )}

        {panelMode === 'left' && (
          <Resizer 
            onLeftClick={handleLeftArrow}
            onRightClick={handleRightArrow}
          />
        )}

        {panelMode === 'right' && (
          <Resizer 
            onLeftClick={handleLeftArrow}
            onRightClick={handleRightArrow}
          />
        )}

        {(panelMode === 'both' || panelMode === 'right') && (
          <Card className="card--no-border" style={{ 
            display: panelMode === 'right' ? 'block' : 'flex', 
            flex: panelMode === 'both' ? '1 1 0' : 'none', 
            width: panelMode === 'right' ? '100%' : 'auto',
            minWidth: panelMode === 'right' ? '100%' : '240px'
          }}>
            <NiiViewer query={query} />
          </Card>
        )}
      </main>
    </div>
  )
}

```

檢查是否有錯誤：


已將拖曳調整大小改為按鈕切換。修改如下：

## 修改內容

### App.jsx
1. 移除拖曳邏輯：刪除 `startDrag`、`sizes` state 和 `MIN_PX`
2. 添加面板狀態管理：
   - `panelMode`：`'both'`（兩邊顯示）、`'left'`（左邊滿版）、`'right'`（右邊滿版）
3. 添加按鈕處理函數：
   - `handleLeftArrow`：按下左箭頭，右邊的 NIfTI Viewer 會滿版
   - `handleRightArrow`：按下右箭頭，左邊的 Query Builder 會滿版
   - 若已為滿版狀態，點擊對應箭頭會恢復兩邊顯示

### Resizer.jsx
1. 改為按鈕組件：從拖曳手柄改為左右箭頭按鈕
2. 添加 SVG 箭頭圖標
3. 根據 props 條件顯示按鈕

### Resizer.css
1. 改為按鈕樣式：圓角按鈕、hover 效果
2. 移除拖曳相關樣式

### App.css
1. 添加 `position: relative` 到 `.app__grid` 以支持絕對定位（如需要）

## 功能說明

- 兩邊都顯示時：顯示兩個箭頭按鈕
  - 左箭頭（←）：讓右邊 NIfTI Viewer 滿版
  - 右箭頭（→）：讓左邊 Query Builder 滿版

- 只顯示左邊時：兩個按鈕都可點擊
  - 左箭頭：切換到右邊滿版
  - 右箭頭：恢復兩邊顯示

- 只顯示右邊時：兩個按鈕都可點擊
  - 左箭頭：恢復兩邊顯示
  - 右箭頭：切換到左邊滿版

沒有錯誤，修改完成。現在可以用箭頭按鈕切換面板顯示，不需要拖曳。

---

**User**

@Resizer.css @Resizer.jsx 我覺得改完之後不好用所以改回來了，但我還是覺得原本拖曳的手感很差，可以讓他變得滑順嗎

---

**Cursor**


檢查目前的拖曳實現，優化拖曳體驗：


優化拖曳體驗，讓它更流暢：


```javascriptreact
import { useCallback, useRef, useState } from 'react'
import { QueryBuilder } from './components/QueryBuilder'
import { Studies } from './components/Studies'
import { NiiViewer } from './components/NiiViewer'
import { LandingPage } from './components/LandingPage'
import { AppHeader } from './components/AppHeader'
import { Terms } from './components/Terms'
import { Card, CardTitle } from './components/Card'
import { Resizer } from './components/Resizer'
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')

  const handleStart = useCallback(() => {
    console.log('handleStart called, setting showLanding to false')
    setShowLanding(false)
    console.log('showLanding set to false, should render main app now')
  }, [])

  const handlePickTerm = useCallback((t) => {
    setQuery((q) => (q ? `${q} ${t}` : t))
  }, [setQuery])

  // --- resizable panes state ---
  const gridRef = useRef(null)
  const [sizes, setSizes] = useState([50, 50]) // [middle, right] - removed left pane
  const [isDragging, setIsDragging] = useState(false)
  const MIN_PX = 240

  const startDrag = useCallback((which, e) => {
    e.preventDefault()
    e.stopPropagation()
    
    setIsDragging(true)
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
    
    const startX = e.clientX
    const rect = gridRef.current.getBoundingClientRect()
    const total = rect.width
    const curPx = sizes.map(p => (p / 100) * total)
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
  }, [sizes])

  if (showLanding) {
    return <LandingPage onStart={handleStart} />
  }

  console.log('Rendering main app, query:', query, 'showLanding:', showLanding)

  return (
    <div className="app">
      <AppHeader onLogoClick={() => setShowLanding(true)} />
      
      <div className="app__terms-section">
        <Terms onPickTerm={handlePickTerm} />
      </div>

      <main className="app__grid" ref={gridRef}>
        <Card className="card--stack card--no-border" style={{ flexBasis: `${sizes[0]}%` }}>
          <CardTitle>Query Builder</CardTitle>
          <QueryBuilder query={query} setQuery={setQuery} />
          <CardTitle>Studies</CardTitle>
          <Studies query={query} />
        </Card>

        <Resizer 
          ariaLabel="Resize middle/right" 
          onMouseDown={(e) => startDrag(0, e)} 
        />

        <Card className="card--no-border" style={{ flexBasis: `${sizes[1]}%` }}>
          <NiiViewer query={query} />
        </Card>
      </main>
    </div>
  )
}

```

```javascriptreact
import { useCallback, useRef, useState } from 'react'
import { QueryBuilder } from './components/QueryBuilder'
import { Studies } from './components/Studies'
import { NiiViewer } from './components/NiiViewer'
import { LandingPage } from './components/LandingPage'
import { AppHeader } from './components/AppHeader'
import { Terms } from './components/Terms'
import { Card, CardTitle } from './components/Card'
import { Resizer } from './components/Resizer'
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')

  const handleStart = useCallback(() => {
    console.log('handleStart called, setting showLanding to false')
    setShowLanding(false)
    console.log('showLanding set to false, should render main app now')
  }, [])

  const handlePickTerm = useCallback((t) => {
    setQuery((q) => (q ? `${q} ${t}` : t))
  }, [setQuery])

  // --- resizable panes state ---
  const gridRef = useRef(null)
  const [sizes, setSizes] = useState([50, 50]) // [middle, right] - removed left pane
  const [isDragging, setIsDragging] = useState(false)
  const MIN_PX = 240

  const startDrag = useCallback((which, e) => {
    e.preventDefault()
    e.stopPropagation()
    
    setIsDragging(true)
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
    
    const startX = e.clientX
    const rect = gridRef.current.getBoundingClientRect()
    const total = rect.width
    const curPx = sizes.map(p => (p / 100) * total)
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
  }, [sizes])

  if (showLanding) {
    return <LandingPage onStart={handleStart} />
  }

  console.log('Rendering main app, query:', query, 'showLanding:', showLanding)

  return (
    <div className="app">
      <AppHeader onLogoClick={() => setShowLanding(true)} />
      
      <div className="app__terms-section">
        <Terms onPickTerm={handlePickTerm} />
      </div>

      <main className="app__grid" ref={gridRef}>
        <Card className="card--stack card--no-border" style={{ flexBasis: `${sizes[0]}%` }}>
          <CardTitle>Query Builder</CardTitle>
          <QueryBuilder query={query} setQuery={setQuery} />
          <CardTitle>Studies</CardTitle>
          <Studies query={query} />
        </Card>

        <Resizer 
          ariaLabel="Resize middle/right" 
          onMouseDown={(e) => startDrag(0, e)}
          isDragging={isDragging}
        />

        <Card className="card--no-border" style={{ flexBasis: `${sizes[1]}%` }}>
          <NiiViewer query={query} />
        </Card>
      </main>
    </div>
  )
}

```

```javascriptreact
import './Resizer.css'

export function Resizer({ onMouseDown, ariaLabel, isDragging = false }) {
  return (
    <div 
      className={`resizer ${isDragging ? 'resizer--dragging' : ''}`}
      aria-label={ariaLabel}
      onMouseDown={onMouseDown}
    />
  )
}


```

```css
.resizer {
  width: 8px;
  cursor: col-resize;
  position: relative;
  user-select: none;
  touch-action: none;
  align-self: stretch;
  background: transparent;
  transition: background 0.15s ease;
  z-index: 10;
}

.resizer:hover {
  background: rgba(0, 0, 0, 0.05);
  width: 10px;
}

.resizer--dragging {
  background: rgba(0, 0, 0, 0.1);
  width: 10px;
}

.resizer::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  background: var(--border);
  transition: background 0.15s ease, width 0.15s ease;
}

.resizer:hover::after,
.resizer--dragging::after {
  background: var(--fg-dark);
  width: 3px;
}

@media (max-width: 1023px) {
  .resizer {
    display: none;
  }
}


```

為 Card 添加過渡效果，讓寬度變化更流暢：


優化拖曳邏輯，改進計算方式並確保響應更即時：


```javascriptreact
import { useCallback, useRef, useState } from 'react'
import { QueryBuilder } from './components/QueryBuilder'
import { Studies } from './components/Studies'
import { NiiViewer } from './components/NiiViewer'
import { LandingPage } from './components/LandingPage'
import { AppHeader } from './components/AppHeader'
import { Terms } from './components/Terms'
import { Card, CardTitle } from './components/Card'
import { Resizer } from './components/Resizer'
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')

  const handleStart = useCallback(() => {
    console.log('handleStart called, setting showLanding to false')
    setShowLanding(false)
    console.log('showLanding set to false, should render main app now')
  }, [])

  const handlePickTerm = useCallback((t) => {
    setQuery((q) => (q ? `${q} ${t}` : t))
  }, [setQuery])

  // --- resizable panes state ---
  const gridRef = useRef(null)
  const [sizes, setSizes] = useState([50, 50]) // [middle, right] - removed left pane
  const [isDragging, setIsDragging] = useState(false)
  const MIN_PX = 240

  const startDrag = useCallback((which, e) => {
    e.preventDefault()
    e.stopPropagation()
    
    setIsDragging(true)
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
    
    const startX = e.clientX
    const rect = gridRef.current.getBoundingClientRect()
    const total = rect.width
    const curPx = sizes.map(p => (p / 100) * total)
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
  }, [sizes])

  if (showLanding) {
    return <LandingPage onStart={handleStart} />
  }

  console.log('Rendering main app, query:', query, 'showLanding:', showLanding)

  return (
    <div className="app">
      <AppHeader onLogoClick={() => setShowLanding(true)} />
      
      <div className="app__terms-section">
        <Terms onPickTerm={handlePickTerm} />
      </div>

      <main className={`app__grid ${isDragging ? 'app__grid--dragging' : ''}`} ref={gridRef}>
        <Card className="card--stack card--no-border" style={{ flexBasis: `${sizes[0]}%` }}>
          <CardTitle>Query Builder</CardTitle>
          <QueryBuilder query={query} setQuery={setQuery} />
          <CardTitle>Studies</CardTitle>
          <Studies query={query} />
        </Card>

        <Resizer 
          ariaLabel="Resize middle/right" 
          onMouseDown={(e) => startDrag(0, e)}
          isDragging={isDragging}
        />

        <Card className="card--no-border" style={{ flexBasis: `${sizes[1]}%` }}>
          <NiiViewer query={query} />
        </Card>
      </main>
    </div>
  )
}

```

為 App.css 添加拖曳狀態樣式，禁用過渡效果以提升響應速度：


```css
/* App.css - Black, White, Gray Theme */
:root {
  --bg: #fafafa;
  --bg-light: #f5f5f5;
  --fg: #111827;
  --fg-dark: #000000;
  --muted: #6b7280;
  --border: #e5e7eb;
  --radius: 14px;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

* { 
  box-sizing: border-box; 
}

html, body, #root { 
  height: 100%; 
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: 'Libre Baskerville', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  max-width: none;
  margin: 0;
  padding: 18px 0 18px 18px;
  min-height: 100vh;
  background: linear-gradient(to bottom, #fafafa 0%, #f5f5f5 100%);
  position: relative;
  z-index: 1;
}

.app__terms-section {
  margin-bottom: 18px;
  background: white;
  border-radius: var(--radius);
  padding: 16px 20px;
  box-shadow: var(--shadow-sm);
}

.app__grid { 
  display: flex; 
  gap: 0; 
  width: 100%; 
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.app__grid > .card { 
  flex: 1 1 0; 
  min-width: 240px; 
  overflow: auto; 
}

.app__grid--dragging > .card {
  transition: none !important;
}

@media (max-width: 1023px) {
  .app { 
    padding: 12px; 
  }
  
  .app__grid { 
    flex-direction: column; 
  }
}

```

優化 `startDrag`，使用 ref 避免不必要的重新創建：


```javascriptreact
import { useCallback, useRef, useState } from 'react'
import { QueryBuilder } from './components/QueryBuilder'
import { Studies } from './components/Studies'
import { NiiViewer } from './components/NiiViewer'
import { LandingPage } from './components/LandingPage'
import { AppHeader } from './components/AppHeader'
import { Terms } from './components/Terms'
import { Card, CardTitle } from './components/Card'
import { Resizer } from './components/Resizer'
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')

  const handleStart = useCallback(() => {
    console.log('handleStart called, setting showLanding to false')
    setShowLanding(false)
    console.log('showLanding set to false, should render main app now')
  }, [])

  const handlePickTerm = useCallback((t) => {
    setQuery((q) => (q ? `${q} ${t}` : t))
  }, [setQuery])

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
      <AppHeader onLogoClick={() => setShowLanding(true)} />
      
      <div className="app__terms-section">
        <Terms onPickTerm={handlePickTerm} />
      </div>

      <main className={`app__grid ${isDragging ? 'app__grid--dragging' : ''}`} ref={gridRef}>
        <Card className="card--stack card--no-border" style={{ flexBasis: `${sizes[0]}%` }}>
          <CardTitle>Query Builder</CardTitle>
          <QueryBuilder query={query} setQuery={setQuery} />
          <CardTitle>Studies</CardTitle>
          <Studies query={query} />
        </Card>

        <Resizer 
          ariaLabel="Resize middle/right" 
          onMouseDown={(e) => startDrag(0, e)}
          isDragging={isDragging}
        />

        <Card className="card--no-border" style={{ flexBasis: `${sizes[1]}%` }}>
          <NiiViewer query={query} />
        </Card>
      </main>
    </div>
  )
}

```

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
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')

  const handleStart = useCallback(() => {
    console.log('handleStart called, setting showLanding to false')
    setShowLanding(false)
    console.log('showLanding set to false, should render main app now')
  }, [])

  const handlePickTerm = useCallback((t) => {
    setQuery((q) => (q ? `${q} ${t}` : t))
  }, [setQuery])

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
      <AppHeader onLogoClick={() => setShowLanding(true)} />
      
      <div className="app__terms-section">
        <Terms onPickTerm={handlePickTerm} />
      </div>

      <main className={`app__grid ${isDragging ? 'app__grid--dragging' : ''}`} ref={gridRef}>
        <Card className="card--stack card--no-border" style={{ flexBasis: `${sizes[0]}%` }}>
          <CardTitle>Query Builder</CardTitle>
          <QueryBuilder query={query} setQuery={setQuery} />
          <CardTitle>Studies</CardTitle>
          <Studies query={query} />
        </Card>

        <Resizer 
          ariaLabel="Resize middle/right" 
          onMouseDown={(e) => startDrag(0, e)}
          isDragging={isDragging}
        />

        <Card className="card--no-border" style={{ flexBasis: `${sizes[1]}%` }}>
          <NiiViewer query={query} />
        </Card>
      </main>
    </div>
  )
}

```

已優化拖曳體驗。主要改進如下：

## 優化內容

### 1. **使用 `requestAnimationFrame` 確保流暢動畫**
   - 將所有尺寸更新包裝在 `requestAnimationFrame` 中，確保與瀏覽器重繪同步
   - 使用 `cancelAnimationFrame` 避免重複請求

### 2. **優化事件處理**
   - 使用 `useCallback` 和 `useRef` 避免不必要的函數重新創建
   - 使用 `sizesRef` 存儲當前尺寸，避免閉包問題
   - 添加 `{ passive: false }` 以確保 `preventDefault` 生效

### 3. **改進計算邏輯**
   - 更精確的最小寬度檢查
   - 確保總和不超過 100%
   - 添加邊界檢查（0-100%）

### 4. **視覺反饋**
   - 拖曳時顯示 `isDragging` 狀態
   - 拖曳時改變游標為 `col-resize`
   - 拖曳時禁用文本選擇
   - Resizer 在拖曳時有視覺反饋（背景變深、寬度增加）

### 5. **禁用拖曳時的過渡效果**
   - 在 `.app__grid--dragging` 狀態下禁用 Card 的 transition
   - 確保拖曳時即時響應，無延遲

### 6. **CSS 優化**
   - Resizer 在 hover 和拖曳時有視覺反饋
   - 使用 `z-index` 確保 Resizer 在最上層
   - 優化過渡時間（0.15s）

拖曳體驗應更流暢、響應更快。

---

**User**

我覺得很棒 中間的線不要顯示 改成以這條線為中心開始擴散的#C4E1FF	

---

**Cursor**


移除中間的線，改為以中心擴散的 #C4E1FF 背景效果：


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
  background: #C4E1FF;
  width: 16px;
}

.resizer--dragging {
  background: #C4E1FF;
  width: 16px;
}

@media (max-width: 1023px) {
  .resizer {
    display: none;
  }
}


```

檢查是否有錯誤：


已更新 Resizer 樣式：

## 修改內容

### Resizer.css
1. 移除了中間的線：刪除所有 `::after` 偽元素相關的 CSS
2. 添加擴散效果：
   - 預設寬度：8px，背景透明
   - Hover/拖曳時：寬度擴展到 16px，背景色為 `#C4E1FF`
   - 使用 `margin: 0 -4px` 讓擴散效果從中心向兩邊擴展
3. 平滑過渡：添加 `transition` 讓寬度和背景色的變化更平滑

當滑鼠懸停或拖曳時，Resizer 會從中心向兩邊擴散顯示 `#C4E1FF` 背景色，不再顯示中間的線條。

---

**User**

顏色要漸層到白色

---

**Cursor**


將 Resizer 的背景色改為從中心 #C4E1FF 漸層到兩側白色：


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
  background: linear-gradient(to right, white, #C4E1FF, white);
  width: 16px;
}

.resizer--dragging {
  background: linear-gradient(to right, white, #C4E1FF, white);
  width: 16px;
}

@media (max-width: 1023px) {
  .resizer {
    display: none;
  }
}


```

調整漸層，讓中心更明顯、兩側更平滑過渡：


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
  background: linear-gradient(to right, white 0%, #C4E1FF 50%, white 100%);
  width: 16px;
}

.resizer--dragging {
  background: linear-gradient(to right, white 0%, #C4E1FF 50%, white 100%);
  width: 16px;
}

@media (max-width: 1023px) {
  .resizer {
    display: none;
  }
}


```

已將 Resizer 的背景改為漸層效果。

## 修改內容

### Resizer.css
- 將背景色改為漸層：`linear-gradient(to right, white 0%, #C4E1FF 50%, white 100%)`
  - 左側：白色
  - 中心：`#C4E1FF`
  - 右側：白色

當滑鼠懸停或拖曳時，Resizer 會顯示從中心 `#C4E1FF` 向兩側漸層到白色的效果，形成從中心擴散的視覺。

---

**User**

改成#D2E9FF	試試

---

**Cursor**


將漸層顏色改為 #D2E9FF：


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
  background: linear-gradient(to right, white 0%, #D2E9FF 50%, white 100%);
  width: 16px;
}

.resizer--dragging {
  background: linear-gradient(to right, white 0%, #D2E9FF 50%, white 100%);
  width: 16px;
}

@media (max-width: 1023px) {
  .resizer {
    display: none;
  }
}


```

已將漸層顏色改為 #D2E9FF。

## 修改內容

### Resizer.css
- 將漸層中心顏色從 `#C4E1FF` 改為 `#D2E9FF`
- 漸層效果：從白色到 `#D2E9FF` 再到白色

懸停或拖曳時，Resizer 會顯示從中心 `#D2E9FF` 向兩側漸層到白色的效果。

---

**User**

換成 #ECF5FF	

---

**Cursor**


將漸層顏色改為 #ECF5FF：


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
  background: linear-gradient(to right, white 0%, #ECF5FF 50%, white 100%);
  width: 16px;
}

.resizer--dragging {
  background: linear-gradient(to right, white 0%, #ECF5FF 50%, white 100%);
  width: 16px;
}

@media (max-width: 1023px) {
  .resizer {
    display: none;
  }
}


```

已將漸層顏色改為 #ECF5FF。

## 修改內容

### Resizer.css
- 將漸層中心顏色從 `#D2E9FF` 改為 `#ECF5FF`
- 漸層效果：從白色到 `#ECF5FF` 再到白色

現在當滑鼠懸停或拖曳時，Resizer 會顯示從中心 `#ECF5FF` 向兩側漸層到白色的效果。

---

**User**

Terms跟底下的Query Builder, NIfTI Viewer也新增可以上下調整的功能

---

**Cursor**


檢視當前結構，準備在 Terms 與下方區域之間新增可上下調整大小的功能：


查看 App.css 了解結構：


新增垂直調整功能，讓 Terms 與下方區域可上下調整：


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
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')

  const handleStart = useCallback(() => {
    console.log('handleStart called, setting showLanding to false')
    setShowLanding(false)
    console.log('showLanding set to false, should render main app now')
  }, [])

  const handlePickTerm = useCallback((t) => {
    setQuery((q) => (q ? `${q} ${t}` : t))
  }, [setQuery])

  // --- resizable panes state ---
  const gridRef = useRef(null)
  const containerRef = useRef(null)
  const [sizes, setSizes] = useState([50, 50]) // [middle, right] - removed left pane
  const [heightRatio, setHeightRatio] = useState(30) // Terms 區域高度百分比
  const [isDragging, setIsDragging] = useState(false)
  const [isDraggingVertical, setIsDraggingVertical] = useState(false)
  const sizesRef = useRef(sizes)
  const heightRatioRef = useRef(heightRatio)
  const MIN_PX = 240
  const MIN_HEIGHT_PX = 150

  // 同步 refs 與 state
  useEffect(() => {
    sizesRef.current = sizes
  }, [sizes])

  useEffect(() => {
    heightRatioRef.current = heightRatio
  }, [heightRatio])

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

  const startVerticalDrag = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    
    setIsDraggingVertical(true)
    document.body.style.cursor = 'row-resize'
    document.body.style.userSelect = 'none'
    
    const startY = e.clientY
    const rect = containerRef.current.getBoundingClientRect()
    const total = rect.height
    const curHeightRatio = heightRatioRef.current
    const curHeightPx = (curHeightRatio / 100) * total
    let rafId = null

    const onMouseMove = (ev) => {
      ev.preventDefault()
      
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      
      rafId = requestAnimationFrame(() => {
        const dy = ev.clientY - startY
        let newHeightPx = curHeightPx + dy
        
        // 確保最小高度
        if (newHeightPx < MIN_HEIGHT_PX) {
          newHeightPx = MIN_HEIGHT_PX
        }
        if (newHeightPx > total - MIN_HEIGHT_PX) {
          newHeightPx = total - MIN_HEIGHT_PX
        }
        
        const newRatio = (newHeightPx / total) * 100
        setHeightRatio(Math.max(10, Math.min(90, newRatio)))
      })
    }
    
    const onMouseUp = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      setIsDraggingVertical(false)
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
      <AppHeader onLogoClick={() => setShowLanding(true)} />
      
      <div className="app__terms-section">
        <Terms onPickTerm={handlePickTerm} />
      </div>

      <main className={`app__grid ${isDragging ? 'app__grid--dragging' : ''}`} ref={gridRef}>
        <Card className="card--stack card--no-border" style={{ flexBasis: `${sizes[0]}%` }}>
          <CardTitle>Query Builder</CardTitle>
          <QueryBuilder query={query} setQuery={setQuery} />
          <CardTitle>Studies</CardTitle>
          <Studies query={query} />
        </Card>

        <Resizer 
          ariaLabel="Resize middle/right" 
          onMouseDown={(e) => startDrag(0, e)}
          isDragging={isDragging}
        />

        <Card className="card--no-border" style={{ flexBasis: `${sizes[1]}%` }}>
          <NiiViewer query={query} />
        </Card>
      </main>
    </div>
  )
}

```

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
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')

  const handleStart = useCallback(() => {
    console.log('handleStart called, setting showLanding to false')
    setShowLanding(false)
    console.log('showLanding set to false, should render main app now')
  }, [])

  const handlePickTerm = useCallback((t) => {
    setQuery((q) => (q ? `${q} ${t}` : t))
  }, [setQuery])

  // --- resizable panes state ---
  const gridRef = useRef(null)
  const containerRef = useRef(null)
  const [sizes, setSizes] = useState([50, 50]) // [middle, right] - removed left pane
  const [heightRatio, setHeightRatio] = useState(30) // Terms 區域高度百分比
  const [isDragging, setIsDragging] = useState(false)
  const [isDraggingVertical, setIsDraggingVertical] = useState(false)
  const sizesRef = useRef(sizes)
  const heightRatioRef = useRef(heightRatio)
  const MIN_PX = 240
  const MIN_HEIGHT_PX = 150

  // 同步 refs 與 state
  useEffect(() => {
    sizesRef.current = sizes
  }, [sizes])

  useEffect(() => {
    heightRatioRef.current = heightRatio
  }, [heightRatio])

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

  const startVerticalDrag = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    
    setIsDraggingVertical(true)
    document.body.style.cursor = 'row-resize'
    document.body.style.userSelect = 'none'
    
    const startY = e.clientY
    const rect = containerRef.current.getBoundingClientRect()
    const total = rect.height
    const curHeightRatio = heightRatioRef.current
    const curHeightPx = (curHeightRatio / 100) * total
    let rafId = null

    const onMouseMove = (ev) => {
      ev.preventDefault()
      
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      
      rafId = requestAnimationFrame(() => {
        const dy = ev.clientY - startY
        let newHeightPx = curHeightPx + dy
        
        // 確保最小高度
        if (newHeightPx < MIN_HEIGHT_PX) {
          newHeightPx = MIN_HEIGHT_PX
        }
        if (newHeightPx > total - MIN_HEIGHT_PX) {
          newHeightPx = total - MIN_HEIGHT_PX
        }
        
        const newRatio = (newHeightPx / total) * 100
        setHeightRatio(Math.max(10, Math.min(90, newRatio)))
      })
    }
    
    const onMouseUp = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      setIsDraggingVertical(false)
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
    <div className="app" ref={containerRef}>
      <AppHeader onLogoClick={() => setShowLanding(true)} />
      
      <div 
        className={`app__terms-section ${isDraggingVertical ? 'app__terms-section--dragging' : ''}`}
        style={{ height: `${heightRatio}%`, minHeight: `${MIN_HEIGHT_PX}px`, maxHeight: '90%' }}
      >
        <Terms onPickTerm={handlePickTerm} />
      </div>

      <Resizer 
        ariaLabel="Resize terms/main content" 
        onMouseDown={startVerticalDrag}
        isDragging={isDraggingVertical}
        direction="vertical"
      />

      <main 
        className={`app__grid ${isDragging ? 'app__grid--dragging' : ''}`} 
        ref={gridRef}
        style={{ height: `${100 - heightRatio}%`, minHeight: `${MIN_HEIGHT_PX}px` }}
      >
        <Card className="card--stack card--no-border" style={{ flexBasis: `${sizes[0]}%` }}>
          <CardTitle>Query Builder</CardTitle>
          <QueryBuilder query={query} setQuery={setQuery} />
          <CardTitle>Studies</CardTitle>
          <Studies query={query} />
        </Card>

        <Resizer 
          ariaLabel="Resize middle/right" 
          onMouseDown={(e) => startDrag(0, e)}
          isDragging={isDragging}
          direction="horizontal"
        />

        <Card className="card--no-border" style={{ flexBasis: `${sizes[1]}%` }}>
          <NiiViewer query={query} />
        </Card>
      </main>
    </div>
  )
}

```

```javascriptreact
import './Resizer.css'

export function Resizer({ onMouseDown, ariaLabel, isDragging = false, direction = 'horizontal' }) {
  return (
    <div 
      className={`resizer resizer--${direction} ${isDragging ? 'resizer--dragging' : ''}`}
      aria-label={ariaLabel}
      onMouseDown={onMouseDown}
    />
  )
}


```

```css
.resizer {
  position: relative;
  user-select: none;
  touch-action: none;
  background: transparent;
  transition: background 0.2s ease;
  z-index: 10;
}

/* 水平方向（左右調整） */
.resizer--horizontal {
  width: 8px;
  cursor: col-resize;
  align-self: stretch;
  transition: background 0.2s ease, width 0.2s ease;
  margin: 0 -4px;
}

.resizer--horizontal:hover {
  background: linear-gradient(to right, white 0%, #ECF5FF 50%, white 100%);
  width: 16px;
}

.resizer--horizontal.resizer--dragging {
  background: linear-gradient(to right, white 0%, #ECF5FF 50%, white 100%);
  width: 16px;
}

/* 垂直方向（上下調整） */
.resizer--vertical {
  height: 8px;
  width: 100%;
  cursor: row-resize;
  transition: background 0.2s ease, height 0.2s ease;
  margin: -4px 0;
}

.resizer--vertical:hover {
  background: linear-gradient(to bottom, white 0%, #ECF5FF 50%, white 100%);
  height: 16px;
}

.resizer--vertical.resizer--dragging {
  background: linear-gradient(to bottom, white 0%, #ECF5FF 50%, white 100%);
  height: 16px;
}

@media (max-width: 1023px) {
  .resizer {
    display: none;
  }
}


```

```css
/* App.css - Black, White, Gray Theme */
:root {
  --bg: #fafafa;
  --bg-light: #f5f5f5;
  --fg: #111827;
  --fg-dark: #000000;
  --muted: #6b7280;
  --border: #e5e7eb;
  --radius: 14px;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

* { 
  box-sizing: border-box; 
}

html, body, #root { 
  height: 100%; 
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: 'Libre Baskerville', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  max-width: none;
  margin: 0;
  padding: 18px 0 18px 18px;
  min-height: 100vh;
  height: 100vh;
  background: linear-gradient(to bottom, #fafafa 0%, #f5f5f5 100%);
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.app__terms-section {
  background: white;
  border-radius: var(--radius);
  padding: 16px 20px;
  box-shadow: var(--shadow-sm);
  overflow: auto;
  transition: height 0.2s ease;
}

.app__terms-section--dragging {
  transition: none !important;
}

.app__grid { 
  display: flex; 
  gap: 0; 
  width: 100%; 
  animation: fadeIn 0.5s ease-out;
  overflow: hidden;
  flex: 1;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.app__grid > .card { 
  flex: 1 1 0; 
  min-width: 240px; 
  overflow: auto; 
}

.app__grid--dragging > .card {
  transition: none !important;
}

@media (max-width: 1023px) {
  .app { 
    padding: 12px; 
  }
  
  .app__grid { 
    flex-direction: column; 
  }
}

```

檢查是否需要調整 AppHeader 的佈局：


調整 AppHeader 的樣式，確保 flex 佈局正常工作：


```css
/* App.css - Black, White, Gray Theme */
:root {
  --bg: #fafafa;
  --bg-light: #f5f5f5;
  --fg: #111827;
  --fg-dark: #000000;
  --muted: #6b7280;
  --border: #e5e7eb;
  --radius: 14px;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

* { 
  box-sizing: border-box; 
}

html, body, #root { 
  height: 100%; 
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: 'Libre Baskerville', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  max-width: none;
  margin: 0;
  padding: 18px 0 18px 18px;
  min-height: 100vh;
  height: 100vh;
  background: linear-gradient(to bottom, #fafafa 0%, #f5f5f5 100%);
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.app-header {
  flex-shrink: 0;
}

.app__terms-section {
  background: white;
  border-radius: var(--radius);
  padding: 16px 20px;
  box-shadow: var(--shadow-sm);
  overflow: auto;
  transition: height 0.2s ease;
  flex-shrink: 0;
}

.app__terms-section--dragging {
  transition: none !important;
}

.app__grid { 
  display: flex; 
  gap: 0; 
  width: 100%; 
  animation: fadeIn 0.5s ease-out;
  overflow: hidden;
  flex: 1;
  min-height: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.app__grid > .card { 
  flex: 1 1 0; 
  min-width: 240px; 
  overflow: auto; 
}

.app__grid--dragging > .card {
  transition: none !important;
}

@media (max-width: 1023px) {
  .app { 
    padding: 12px; 
  }
  
  .app__grid { 
    flex-direction: column; 
  }
}

```

調整高度計算邏輯，確保正確計算可用高度：


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
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')

  const handleStart = useCallback(() => {
    console.log('handleStart called, setting showLanding to false')
    setShowLanding(false)
    console.log('showLanding set to false, should render main app now')
  }, [])

  const handlePickTerm = useCallback((t) => {
    setQuery((q) => (q ? `${q} ${t}` : t))
  }, [setQuery])

  // --- resizable panes state ---
  const gridRef = useRef(null)
  const containerRef = useRef(null)
  const [sizes, setSizes] = useState([50, 50]) // [middle, right] - removed left pane
  const [heightRatio, setHeightRatio] = useState(30) // Terms 區域高度百分比
  const [isDragging, setIsDragging] = useState(false)
  const [isDraggingVertical, setIsDraggingVertical] = useState(false)
  const sizesRef = useRef(sizes)
  const heightRatioRef = useRef(heightRatio)
  const MIN_PX = 240
  const MIN_HEIGHT_PX = 150

  // 同步 refs 與 state
  useEffect(() => {
    sizesRef.current = sizes
  }, [sizes])

  useEffect(() => {
    heightRatioRef.current = heightRatio
  }, [heightRatio])

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

  const startVerticalDrag = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    
    setIsDraggingVertical(true)
    document.body.style.cursor = 'row-resize'
    document.body.style.userSelect = 'none'
    
    const startY = e.clientY
    const rect = containerRef.current.getBoundingClientRect()
    const headerHeight = containerRef.current.querySelector('.app-header')?.getBoundingClientRect().height || 0
    const availableHeight = rect.height - headerHeight
    const curHeightRatio = heightRatioRef.current
    const curHeightPx = (curHeightRatio / 100) * availableHeight
    let rafId = null

    const onMouseMove = (ev) => {
      ev.preventDefault()
      
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      
      rafId = requestAnimationFrame(() => {
        const dy = ev.clientY - startY
        let newHeightPx = curHeightPx + dy
        
        // 確保最小高度
        if (newHeightPx < MIN_HEIGHT_PX) {
          newHeightPx = MIN_HEIGHT_PX
        }
        if (newHeightPx > availableHeight - MIN_HEIGHT_PX) {
          newHeightPx = availableHeight - MIN_HEIGHT_PX
        }
        
        const newRatio = (newHeightPx / availableHeight) * 100
        setHeightRatio(Math.max(10, Math.min(90, newRatio)))
      })
    }
    
    const onMouseUp = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      setIsDraggingVertical(false)
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
    <div className="app" ref={containerRef}>
      <AppHeader onLogoClick={() => setShowLanding(true)} />
      
      <div 
        className={`app__terms-section ${isDraggingVertical ? 'app__terms-section--dragging' : ''}`}
        style={{ height: `${heightRatio}%`, minHeight: `${MIN_HEIGHT_PX}px`, maxHeight: '90%' }}
      >
        <Terms onPickTerm={handlePickTerm} />
      </div>

      <Resizer 
        ariaLabel="Resize terms/main content" 
        onMouseDown={startVerticalDrag}
        isDragging={isDraggingVertical}
        direction="vertical"
      />

      <main 
        className={`app__grid ${isDragging ? 'app__grid--dragging' : ''}`} 
        ref={gridRef}
        style={{ height: `${100 - heightRatio}%`, minHeight: `${MIN_HEIGHT_PX}px` }}
      >
        <Card className="card--stack card--no-border" style={{ flexBasis: `${sizes[0]}%` }}>
          <CardTitle>Query Builder</CardTitle>
          <QueryBuilder query={query} setQuery={setQuery} />
          <CardTitle>Studies</CardTitle>
          <Studies query={query} />
        </Card>

        <Resizer 
          ariaLabel="Resize middle/right" 
          onMouseDown={(e) => startDrag(0, e)}
          isDragging={isDragging}
          direction="horizontal"
        />

        <Card className="card--no-border" style={{ flexBasis: `${sizes[1]}%` }}>
          <NiiViewer query={query} />
        </Card>
      </main>
    </div>
  )
}

```

改用 flex 佈局以更好地控制高度：


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
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')

  const handleStart = useCallback(() => {
    console.log('handleStart called, setting showLanding to false')
    setShowLanding(false)
    console.log('showLanding set to false, should render main app now')
  }, [])

  const handlePickTerm = useCallback((t) => {
    setQuery((q) => (q ? `${q} ${t}` : t))
  }, [setQuery])

  // --- resizable panes state ---
  const gridRef = useRef(null)
  const containerRef = useRef(null)
  const [sizes, setSizes] = useState([50, 50]) // [middle, right] - removed left pane
  const [heightRatio, setHeightRatio] = useState(30) // Terms 區域高度百分比
  const [isDragging, setIsDragging] = useState(false)
  const [isDraggingVertical, setIsDraggingVertical] = useState(false)
  const sizesRef = useRef(sizes)
  const heightRatioRef = useRef(heightRatio)
  const MIN_PX = 240
  const MIN_HEIGHT_PX = 150

  // 同步 refs 與 state
  useEffect(() => {
    sizesRef.current = sizes
  }, [sizes])

  useEffect(() => {
    heightRatioRef.current = heightRatio
  }, [heightRatio])

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

  const startVerticalDrag = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    
    setIsDraggingVertical(true)
    document.body.style.cursor = 'row-resize'
    document.body.style.userSelect = 'none'
    
    const startY = e.clientY
    const rect = containerRef.current.getBoundingClientRect()
    const headerHeight = containerRef.current.querySelector('.app-header')?.getBoundingClientRect().height || 0
    const availableHeight = rect.height - headerHeight
    const curHeightRatio = heightRatioRef.current
    const curHeightPx = (curHeightRatio / 100) * availableHeight
    let rafId = null

    const onMouseMove = (ev) => {
      ev.preventDefault()
      
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      
      rafId = requestAnimationFrame(() => {
        const dy = ev.clientY - startY
        let newHeightPx = curHeightPx + dy
        
        // 確保最小高度
        if (newHeightPx < MIN_HEIGHT_PX) {
          newHeightPx = MIN_HEIGHT_PX
        }
        if (newHeightPx > availableHeight - MIN_HEIGHT_PX) {
          newHeightPx = availableHeight - MIN_HEIGHT_PX
        }
        
        const newRatio = (newHeightPx / availableHeight) * 100
        setHeightRatio(Math.max(10, Math.min(90, newRatio)))
      })
    }
    
    const onMouseUp = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      setIsDraggingVertical(false)
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
    <div className="app" ref={containerRef}>
      <AppHeader onLogoClick={() => setShowLanding(true)} />
      
      <div 
        className={`app__terms-section ${isDraggingVertical ? 'app__terms-section--dragging' : ''}`}
        style={{ flex: `0 0 ${heightRatio}%`, minHeight: `${MIN_HEIGHT_PX}px`, maxHeight: '90%' }}
      >
        <Terms onPickTerm={handlePickTerm} />
      </div>

      <Resizer 
        ariaLabel="Resize terms/main content" 
        onMouseDown={startVerticalDrag}
        isDragging={isDraggingVertical}
        direction="vertical"
      />

      <main 
        className={`app__grid ${isDragging ? 'app__grid--dragging' : ''}`} 
        ref={gridRef}
        style={{ flex: `0 0 ${100 - heightRatio}%`, minHeight: `${MIN_HEIGHT_PX}px` }}
      >
        <Card className="card--stack card--no-border" style={{ flexBasis: `${sizes[0]}%` }}>
          <CardTitle>Query Builder</CardTitle>
          <QueryBuilder query={query} setQuery={setQuery} />
          <CardTitle>Studies</CardTitle>
          <Studies query={query} />
        </Card>

        <Resizer 
          ariaLabel="Resize middle/right" 
          onMouseDown={(e) => startDrag(0, e)}
          isDragging={isDragging}
          direction="horizontal"
        />

        <Card className="card--no-border" style={{ flexBasis: `${sizes[1]}%` }}>
          <NiiViewer query={query} />
        </Card>
      </main>
    </div>
  )
}

```

調整 CSS，移除不必要的 flex-shrink：


```css
/* App.css - Black, White, Gray Theme */
:root {
  --bg: #fafafa;
  --bg-light: #f5f5f5;
  --fg: #111827;
  --fg-dark: #000000;
  --muted: #6b7280;
  --border: #e5e7eb;
  --radius: 14px;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

* { 
  box-sizing: border-box; 
}

html, body, #root { 
  height: 100%; 
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: 'Libre Baskerville', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  max-width: none;
  margin: 0;
  padding: 18px 0 18px 18px;
  min-height: 100vh;
  height: 100vh;
  background: linear-gradient(to bottom, #fafafa 0%, #f5f5f5 100%);
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.app-header {
  flex-shrink: 0;
}

.app__terms-section {
  background: white;
  border-radius: var(--radius);
  padding: 16px 20px;
  box-shadow: var(--shadow-sm);
  overflow: auto;
  transition: flex 0.2s ease;
}

.app__terms-section--dragging {
  transition: none !important;
}

.app__grid { 
  display: flex; 
  gap: 0; 
  width: 100%; 
  animation: fadeIn 0.5s ease-out;
  overflow: hidden;
  flex: 1;
  min-height: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.app__grid > .card { 
  flex: 1 1 0; 
  min-width: 240px; 
  overflow: auto; 
}

.app__grid--dragging > .card {
  transition: none !important;
}

@media (max-width: 1023px) {
  .app { 
    padding: 12px; 
  }
  
  .app__grid { 
    flex-direction: column; 
  }
}

```

```css
/* App.css - Black, White, Gray Theme */
:root {
  --bg: #fafafa;
  --bg-light: #f5f5f5;
  --fg: #111827;
  --fg-dark: #000000;
  --muted: #6b7280;
  --border: #e5e7eb;
  --radius: 14px;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

* { 
  box-sizing: border-box; 
}

html, body, #root { 
  height: 100%; 
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: 'Libre Baskerville', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  max-width: none;
  margin: 0;
  padding: 18px 0 18px 18px;
  min-height: 100vh;
  height: 100vh;
  background: linear-gradient(to bottom, #fafafa 0%, #f5f5f5 100%);
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.app-header {
  flex-shrink: 0;
}

.app__terms-section {
  background: white;
  border-radius: var(--radius);
  padding: 16px 20px;
  box-shadow: var(--shadow-sm);
  overflow: auto;
  transition: flex 0.2s ease;
}

.app__terms-section--dragging {
  transition: none !important;
}

.app__grid { 
  display: flex; 
  gap: 0; 
  width: 100%; 
  animation: fadeIn 0.5s ease-out;
  overflow: hidden;
  min-height: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.app__grid > .card { 
  flex: 1 1 0; 
  min-width: 240px; 
  overflow: auto; 
}

.app__grid--dragging > .card {
  transition: none !important;
}

@media (max-width: 1023px) {
  .app { 
    padding: 12px; 
  }
  
  .app__grid { 
    flex-direction: column; 
  }
}

```

已新增垂直調整功能。修改摘要：

## 修改內容

### App.jsx
1. 新增垂直拖曳狀態：
   - `heightRatio`：Terms 區域高度百分比（預設 30%）
   - `isDraggingVertical`：垂直拖曳狀態
   - `heightRatioRef`：用於存儲當前高度比例

2. 新增 `startVerticalDrag` 函數：
   - 處理上下拖曳調整 Terms 與下方內容的高度
   - 使用 `requestAnimationFrame` 確保流暢
   - 確保最小高度限制（150px）

3. 調整佈局結構：
   - 將 `.app` 改為 flex 佈局（垂直方向）
   - Terms 區域使用 `flex: 0 0 ${heightRatio}%` 控制高度
   - 下方 main 區域使用 `flex: 0 0 ${100 - heightRatio}%` 控制高度
   - 在 Terms 和 main 之間添加垂直方向的 Resizer

### Resizer.jsx
- 新增 `direction` prop，支援 `'horizontal'` 和 `'vertical'`
- 根據方向添加對應的 CSS 類名

### Resizer.css
- 新增垂直方向樣式（`.resizer--vertical`）：
  - 高度 8px，寬度 100%
  - 游標為 `row-resize`
  - hover/拖曳時高度擴展到 16px
  - 漸層效果從上到下（`to bottom`）

### App.css
- 調整 `.app` 為 flex 佈局（`display: flex; flex-direction: column`）
- 設置 `height: 100vh` 和 `overflow: hidden` 確保正確的高度計算
- 添加 `flex-shrink: 0` 到 AppHeader
- 調整 Terms 和 Grid 的過渡效果

現在可以使用：
- 左右拖曳：調整 Query Builder 和 NIfTI Viewer 之間的寬度
- 上下拖曳：調整 Terms 和下方內容區域之間的高度

兩個方向的拖曳都使用相同的漸層效果（`#ECF5FF` 從中心擴散到白色）。

---

**User**

@components 新增一個component可以直接跳到頁面的最上、下方，材質樣式把<旋轉就好 顏色用漸層的#FFE66F	

---

**Cursor**


建立可跳至頁面頂部與底部的組件，使用旋轉的 `<` 符號，並套用 `#FFE66F` 漸層：


```javascriptreact
import { useState, useEffect } from 'react'
import './ScrollButtons.css'

/**
 * ScrollButtons component - Buttons to scroll to top and bottom of the page
 */
export function ScrollButtons() {
  const [showTop, setShowTop] = useState(false)
  const [showBottom, setShowBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // 當滾動超過一定距離時顯示向上按鈕
      setShowTop(scrollTop > 300)
      
      // 當未滾動到底部時顯示向下按鈕
      setShowBottom(scrollTop + windowHeight < documentHeight - 100)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初始檢查

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className="scroll-buttons">
      {showTop && (
        <button
          className="scroll-button scroll-button--top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <span className="scroll-button__arrow">&#60;</span>
        </button>
      )}
      {showBottom && (
        <button
          className="scroll-button scroll-button--bottom"
          onClick={scrollToBottom}
          aria-label="Scroll to bottom"
          title="Scroll to bottom"
        >
          <span className="scroll-button__arrow scroll-button__arrow--rotated">&#60;</span>
        </button>
      )}
    </div>
  )
}

```

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
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, #FFE66F 0%, #FFD700 100%);
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
  transform: rotate(-90deg);
  line-height: 1;
}

.scroll-button__arrow--rotated {
  transform: rotate(90deg);
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

檢查錯誤並調整樣式：


優化漸層效果，讓顏色更均勻：


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
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, #FFE66F 0%, #FFE66F 50%, #FFD700 100%);
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
  transform: rotate(-90deg);
  line-height: 1;
}

.scroll-button__arrow--rotated {
  transform: rotate(90deg);
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

在 App.jsx 中導入並使用 ScrollButtons 組件：


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
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')

  const handleStart = useCallback(() => {
    console.log('handleStart called, setting showLanding to false')
    setShowLanding(false)
    console.log('showLanding set to false, should render main app now')
  }, [])

  const handlePickTerm = useCallback((t) => {
    setQuery((q) => (q ? `${q} ${t}` : t))
  }, [setQuery])

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
      <AppHeader onLogoClick={() => setShowLanding(true)} />
      
      <div className="app__terms-section">
        <Terms onPickTerm={handlePickTerm} />
      </div>

      <main className={`app__grid ${isDragging ? 'app__grid--dragging' : ''}`} ref={gridRef}>
        <Card className="card--stack card--no-border" style={{ flexBasis: `${sizes[0]}%` }}>
          <CardTitle>Query Builder</CardTitle>
          <QueryBuilder query={query} setQuery={setQuery} />
          <CardTitle>Studies</CardTitle>
          <Studies query={query} />
        </Card>

        <Resizer 
          ariaLabel="Resize middle/right" 
          onMouseDown={(e) => startDrag(0, e)}
          isDragging={isDragging}
        />

        <Card className="card--no-border" style={{ flexBasis: `${sizes[1]}%` }}>
          <NiiViewer query={query} />
        </Card>
      </main>
    </div>
  )
}

```

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
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')

  const handleStart = useCallback(() => {
    console.log('handleStart called, setting showLanding to false')
    setShowLanding(false)
    console.log('showLanding set to false, should render main app now')
  }, [])

  const handlePickTerm = useCallback((t) => {
    setQuery((q) => (q ? `${q} ${t}` : t))
  }, [setQuery])

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
      <AppHeader onLogoClick={() => setShowLanding(true)} />
      
      <div className="app__terms-section">
        <Terms onPickTerm={handlePickTerm} />
      </div>

      <main className={`app__grid ${isDragging ? 'app__grid--dragging' : ''}`} ref={gridRef}>
        <Card className="card--stack card--no-border" style={{ flexBasis: `${sizes[0]}%` }}>
          <CardTitle>Query Builder</CardTitle>
          <QueryBuilder query={query} setQuery={setQuery} />
          <CardTitle>Studies</CardTitle>
          <Studies query={query} />
        </Card>

        <Resizer 
          ariaLabel="Resize middle/right" 
          onMouseDown={(e) => startDrag(0, e)}
          isDragging={isDragging}
        />

        <Card className="card--no-border" style={{ flexBasis: `${sizes[1]}%` }}>
          <NiiViewer query={query} />
        </Card>
      </main>
      <ScrollButtons />
    </div>
  )
}

```

已創建 ScrollButtons 組件。修改如下：

## 新增的文件

### ScrollButtons.jsx
- 組件功能：
  - 監聽滾動，自動顯示/隱藏按鈕
  - 向上按鈕：滾動超過 300px 時顯示
  - 向下按鈕：未滾動到底部時顯示
  - 點擊按鈕可平滑滾動到頁面頂部或底部

### ScrollButtons.css
- 樣式：
  - 固定定位在右下角
  - 圓形按鈕，使用漸層背景 `#FFE66F` 到 `#FFD700`
  - 使用 `<` 符號並旋轉：
    - 向上按鈕：旋轉 -90 度（向上）
    - 向下按鈕：旋轉 90 度（向下）
  - hover 效果：放大 1.1 倍
  - 響應式設計：小螢幕時調整尺寸

### App.jsx
- 導入並使用 ScrollButtons 組件

組件已完成並已整合到應用中。滾動頁面時，右下角會顯示向上/向下按鈕，點擊可平滑滾動到頁面頂部或底部。

---

**User**

符號相反了 然後顏色用漸層到白色、透明度50

---

**Cursor**


修正符號方向，並將顏色改為漸層到白色、透明度 50%：


修正符號方向，並將顏色改為漸層到白色、透明度 50%：


```javascriptreact
import { useState, useEffect } from 'react'
import './ScrollButtons.css'

/**
 * ScrollButtons component - Buttons to scroll to top and bottom of the page
 */
export function ScrollButtons() {
  const [showTop, setShowTop] = useState(false)
  const [showBottom, setShowBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // 當滾動超過一定距離時顯示向上按鈕
      setShowTop(scrollTop > 300)
      
      // 當未滾動到底部時顯示向下按鈕
      setShowBottom(scrollTop + windowHeight < documentHeight - 100)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初始檢查

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className="scroll-buttons">
      {showTop && (
        <button
          className="scroll-button scroll-button--top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <span className="scroll-button__arrow scroll-button__arrow--up">&#60;</span>
        </button>
      )}
      {showBottom && (
        <button
          className="scroll-button scroll-button--bottom"
          onClick={scrollToBottom}
          aria-label="Scroll to bottom"
          title="Scroll to bottom"
        >
          <span className="scroll-button__arrow scroll-button__arrow--down">&#60;</span>
        </button>
      )}
    </div>
  )
}


```

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
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, rgba(255, 230, 111, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%);
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

已修正符號方向和顏色樣式。

## 修改內容

### ScrollButtons.jsx
- 修正符號方向：
  - 向上按鈕：使用 `scroll-button__arrow--up` 類（旋轉 90 度，指向上）
  - 向下按鈕：使用 `scroll-button__arrow--down` 類（旋轉 -90 度，指向下）

### ScrollButtons.css
1. 修正旋轉方向：
   - `.scroll-button__arrow--up`：`rotate(90deg)`（向上）
   - `.scroll-button__arrow--down`：`rotate(-90deg)`（向下）

2. 更新顏色樣式：
   - 背景漸層：`linear-gradient(135deg, rgba(255, 230, 111, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)`
   - 從 `#FFE66F`（50% 透明度）漸層到白色（50% 透明度）

符號方向已修正，顏色改為從 `#FFE66F` 漸層到白色，兩個顏色都設為 50% 透明度。

---

**User**

改成正方形、#FFB5B5

---

**Cursor**


將按鈕改為正方形，顏色改為 #FFB5B5：


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
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, rgba(255, 181, 181, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%);
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

已將按鈕改為正方形，顏色改為 #FFB5B5。

## 修改內容

### ScrollButtons.css
1. 改為正方形：
   - 將 `border-radius` 從 `50%` 改為 `4px`（方形，帶小圓角）

2. 更新顏色：
   - 背景漸層：`linear-gradient(135deg, rgba(255, 181, 181, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)`
   - 從 `#FFB5B5`（50% 透明度）漸層到白色（50% 透明度）

按鈕現在是正方形，顏色為 `#FFB5B5` 漸層到白色。

---

**User**

不用有圓角

---

**Cursor**


移除按鈕的圓角：


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
  background: linear-gradient(135deg, rgba(255, 181, 181, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%);
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

已將 `border-radius` 改為 `0`，按鈕為完全正方形，沒有圓角。

## 修改內容

### ScrollButtons.css
- 將 `border-radius` 從 `4px` 改為 `0`
- 按鈕現在是完全的正方形，沒有任何圓角

按鈕現在是完全的正方形，顏色為 `#FFB5B5` 漸層到白色。

---

**User**

Terms, Query Builder, NIfTI Viewer 這三個大區塊的背景是圓角的方形 都改成不要圓角試試看

---

**Cursor**


檢查 Terms、Query Builder、NIfTI Viewer 的 CSS，移除圓角：


移除這些區塊的圓角：


```css
/* App.css - Black, White, Gray Theme */
:root {
  --bg: #fafafa;
  --bg-light: #f5f5f5;
  --fg: #111827;
  --fg-dark: #000000;
  --muted: #6b7280;
  --border: #e5e7eb;
  --radius: 14px;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

* { 
  box-sizing: border-box; 
}

html, body, #root { 
  height: 100%; 
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: 'Libre Baskerville', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  max-width: none;
  margin: 0;
  padding: 18px 0 18px 18px;
  min-height: 100vh;
  background: linear-gradient(to bottom, #fafafa 0%, #f5f5f5 100%);
  position: relative;
  z-index: 1;
}

.app__terms-section {
  margin-bottom: 18px;
  background: white;
  border-radius: 0;
  padding: 16px 20px;
  box-shadow: var(--shadow-sm);
}

.app__grid { 
  display: flex; 
  gap: 0; 
  width: 100%; 
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.app__grid > .card { 
  flex: 1 1 0; 
  min-width: 240px; 
  overflow: auto; 
}

.app__grid--dragging > .card {
  transition: none !important;
}

@media (max-width: 1023px) {
  .app { 
    padding: 12px; 
  }
  
  .app__grid { 
    flex-direction: column; 
  }
}

```

```css
.card {
  background: white;
  border: 1px solid var(--border);
  border-radius: 0;
  padding: 16px;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card--no-border {
  border: none;
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.card--stack {
  display: flex;
  flex-direction: column;
}

.card__title {
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 20px;
  color: var(--fg-dark);
  display: flex;
  align-items: center;
  gap: 8px;
}

.card--stack .query-builder + .card__title {
  margin-top: 32px;
}

.card__divider {
  height: 1px;
  background: linear-gradient(to right, transparent, var(--border), transparent);
  margin: 16px 0;
}


```

已移除三個大區塊的圓角。

## 修改內容

### App.css
- 將 `.app__terms-section` 的 `border-radius` 從 `var(--radius)` 改為 `0`
- Terms 區塊現在沒有圓角

### Card.css
- 將 `.card` 的 `border-radius` 從 `var(--radius)` 改為 `0`
- Query Builder 和 NIfTI Viewer 區塊（都使用 Card 組件）現在沒有圓角

現在 Terms、Query Builder、NIfTI Viewer 這三個大區塊都是完全沒有圓角的方形。

---

**User**

把這三個區塊的白色背景都刪除試試

---

**Cursor**


移除這三個區塊的白色背景：


```css
/* App.css - Black, White, Gray Theme */
:root {
  --bg: #fafafa;
  --bg-light: #f5f5f5;
  --fg: #111827;
  --fg-dark: #000000;
  --muted: #6b7280;
  --border: #e5e7eb;
  --radius: 14px;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

* { 
  box-sizing: border-box; 
}

html, body, #root { 
  height: 100%; 
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: 'Libre Baskerville', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  max-width: none;
  margin: 0;
  padding: 18px 0 18px 18px;
  min-height: 100vh;
  background: linear-gradient(to bottom, #fafafa 0%, #f5f5f5 100%);
  position: relative;
  z-index: 1;
}

.app__terms-section {
  margin-bottom: 18px;
  border-radius: 0;
  padding: 16px 20px;
  box-shadow: var(--shadow-sm);
}

.app__grid { 
  display: flex; 
  gap: 0; 
  width: 100%; 
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.app__grid > .card { 
  flex: 1 1 0; 
  min-width: 240px; 
  overflow: auto; 
}

.app__grid--dragging > .card {
  transition: none !important;
}

@media (max-width: 1023px) {
  .app { 
    padding: 12px; 
  }
  
  .app__grid { 
    flex-direction: column; 
  }
}

```

```css
.card {
  border: 1px solid var(--border);
  border-radius: 0;
  padding: 16px;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card--no-border {
  border: none;
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.card--stack {
  display: flex;
  flex-direction: column;
}

.card__title {
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 20px;
  color: var(--fg-dark);
  display: flex;
  align-items: center;
  gap: 8px;
}

.card--stack .query-builder + .card__title {
  margin-top: 32px;
}

.card__divider {
  height: 1px;
  background: linear-gradient(to right, transparent, var(--border), transparent);
  margin: 16px 0;
}


```

已移除三個區塊的白色背景。

## 修改內容

### App.css
- 移除 `.app__terms-section` 的 `background: white;`
- Terms 區塊現在沒有背景色，會顯示父容器的背景

### Card.css
- 移除 `.card` 的 `background: white;`
- Query Builder 和 NIfTI Viewer 區塊（都使用 Card 組件）現在沒有背景色，會顯示父容器的背景

現在 Terms、Query Builder、NIfTI Viewer 這三個大區塊都沒有白色背景，會顯示應用程式的漸層背景（`#fafafa` 到 `#f5f5f5`）。

---

**User**

@Resizer.css @Resizer.jsx 從藍色漸層到透明 而不是白色

---

**Cursor**


將 Resizer 的漸層從藍色改為漸層到透明，而非白色：


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
  background: linear-gradient(to right, transparent 0%, #ECF5FF 50%, transparent 100%);
  width: 16px;
}

.resizer--dragging {
  background: linear-gradient(to right, transparent 0%, #ECF5FF 50%, transparent 100%);
  width: 16px;
}

@media (max-width: 1023px) {
  .resizer {
    display: none;
  }
}


```

已將 Resizer 的漸層改為從藍色漸層到透明。

## 修改內容

### Resizer.css
- 將漸層顏色從 `white` 改為 `transparent`
- `.resizer:hover` 和 `.resizer--dragging` 的漸層：`linear-gradient(to right, transparent 0%, #ECF5FF 50%, transparent 100%)`
- 現在從中心 `#ECF5FF` 向兩側漸層到透明，而不是白色

當滑鼠懸停或拖曳時，Resizer 會顯示從中心藍色漸層到兩側透明的效果。

---

**User**

最上方的baner程式碼在哪

---

**Cursor**


搜尋最上方 banner 的程式碼位置：


最上方的 banner 程式碼在：

## 主要檔案位置

### 1. **AppHeader.jsx**
- 位置：`src/components/AppHeader.jsx`
- 功能：定義 header 的結構，包含 logo 和標題

### 2. **AppHeader.css**
- 位置：`src/components/AppHeader.css`
- 功能：定義 header 的樣式

### 3. **在 App.jsx 中使用**
- 位置：`src/App.jsx` 第 119 行
- 使用方式：`<AppHeader onLogoClick={() => setShowLanding(true)} />`

## 結構說明

AppHeader 包含：
- Logo 圖片（`app-header__logo`）
- 標題文字（`app-header__title`）："LoTUS-BF"
- 副標題（`app-header__subtitle`）："Location-or-Term Unified Search for Brain Functions"

如需修改 banner，請編輯這兩個檔案。

---

**User**

@AppHeader.css @AppHeader.jsx 改成無圓角，然後就算頁面滾動也要固定在最上方

---

**Cursor**


移除 AppHeader 的圓角，並固定在頁面頂部：


```css
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--border);
  background: white;
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

調整 App.css，為固定 header 添加頂部間距，避免內容被遮擋：


```css
/* App.css - Black, White, Gray Theme */
:root {
  --bg: #fafafa;
  --bg-light: #f5f5f5;
  --fg: #111827;
  --fg-dark: #000000;
  --muted: #6b7280;
  --border: #e5e7eb;
  --radius: 14px;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

* { 
  box-sizing: border-box; 
}

html, body, #root { 
  height: 100%; 
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: 'Libre Baskerville', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  max-width: none;
  margin: 0;
  padding: 18px 0 18px 18px;
  padding-top: 100px;
  min-height: 100vh;
  background: linear-gradient(to bottom, #fafafa 0%, #f5f5f5 100%);
  position: relative;
  z-index: 1;
}

.app__terms-section {
  margin-bottom: 18px;
  border-radius: 0;
  padding: 16px 20px;
  box-shadow: var(--shadow-sm);
}

.app__grid { 
  display: flex; 
  gap: 0; 
  width: 100%; 
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.app__grid > .card { 
  flex: 1 1 0; 
  min-width: 240px; 
  overflow: auto; 
}

.app__grid--dragging > .card {
  transition: none !important;
}

@media (max-width: 1023px) {
  .app { 
    padding: 12px; 
  }
  
  .app__grid { 
    flex-direction: column; 
  }
}

```

調整 padding-top，確保內容不被固定的 header 遮擋：


已將 AppHeader 改為無圓角並固定在頂部。修改如下：

## 修改內容

### AppHeader.css
1. 移除圓角：
   - 將 `border-radius` 從 `var(--radius)` 改為 `0`

2. 固定定位：
   - 添加 `position: fixed`
   - 添加 `top: 0`、`left: 0`、`right: 0` 讓 header 固定在頂部
   - 添加 `z-index: 1000` 確保在其他元素之上

### App.css
- 添加 `padding-top: 100px` 到 `.app`，避免內容被固定的 header 遮擋

現在 AppHeader 會：
- 沒有圓角（完全方形）
- 固定在頁面最上方，即使頁面滾動也會保持在頂部
- 內容區域有足夠的 padding-top，不會被 header 遮擋

修改完成。

---

**User**

baner 背景顏色改成 #B8B8DC	

---

**Cursor**


將 banner 的背景顏色改為 #B8B8DC：


```css
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--border);
  background: #B8B8DC;
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

已將 banner 的背景顏色改為 #B8B8DC。

## 修改內容

### AppHeader.css
- 將 `.app-header` 的 `background` 從 `white` 改為 `#B8B8DC`

現在 AppHeader 的背景顏色為 `#B8B8DC`（淡紫色）。

---

**User**

改成 #C7C7E2	然後漸層到然後漸層到白色

---

**Cursor**


將 banner 的背景改為從 #C7C7E2 漸層到白色：


```css
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--border);
  background: linear-gradient(to bottom, #C7C7E2 0%, white 100%);
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

已將 banner 的背景顏色改為從 #C7C7E2 漸層到白色。

## 修改內容

### AppHeader.css
- 將 `.app-header` 的 `background` 改為 `linear-gradient(to bottom, #C7C7E2 0%, white 100%)`
- 漸層方向：從上到下（`to bottom`），從 `#C7C7E2` 漸層到白色

現在 AppHeader 的背景會顯示從 `#C7C7E2` 漸層到白色的效果。

---

**User**

不要漸層試試看

---

**Cursor**


移除漸層，改為純色背景：


```css
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--border);
  background: #C7C7E2;
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

已移除漸層，改為純色背景。

## 修改內容

### AppHeader.css
- 將 `.app-header` 的 `background` 從 `linear-gradient(to bottom, #C7C7E2 0%, white 100%)` 改為 `#C7C7E2`

現在 AppHeader 的背景為純色 `#C7C7E2`，沒有漸層效果。

---

**User**

還是漸層好了

---

**Cursor**


恢復漸層效果，從 #C7C7E2 漸層到白色：


```css
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--border);
  background: linear-gradient(to bottom, #C7C7E2 0%, white 100%);
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

已恢復漸層效果。

## 修改內容

### AppHeader.css
- 將 `.app-header` 的 `background` 改回 `linear-gradient(to bottom, #C7C7E2 0%, white 100%)`

現在 AppHeader 的背景會顯示從 `#C7C7E2` 漸層到白色的效果。

---

**User**

不要漸層好了

---

**Cursor**


移除漸層，改為純色背景：


```css
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--border);
  background: #C7C7E2;
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

已移除漸層，改為純色背景。

## 修改內容

### AppHeader.css
- 將 `.app-header` 的 `background` 從 `linear-gradient(to bottom, #C7C7E2 0%, white 100%)` 改為 `#C7C7E2`

現在 AppHeader 的背景為純色 `#C7C7E2`，沒有漸層效果。

---

**User**

用#D2E9FF	

---

**Cursor**


將背景顏色改為 #D2E9FF：


```css
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--border);
  background: #D2E9FF;
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

已將背景顏色改為 #D2E9FF。

## 修改內容

### AppHeader.css
- 將 `.app-header` 的 `background` 從 `#C7C7E2` 改為 `#D2E9FF`

現在 AppHeader 的背景顏色為 `#D2E9FF`。

---

**User**

用回紫色好了

---

**Cursor**


將背景顏色改回紫色（#C7C7E2）：


```css
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--border);
  background: #C7C7E2;
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

已將背景顏色改回紫色 `#C7C7E2`。

## 修改內容

### AppHeader.css
- 將 `.app-header` 的 `background` 從 `#D2E9FF` 改為 `#C7C7E2`

現在 AppHeader 的背景顏色為 `#C7C7E2`。

---

**User**

@Terms.css @Terms.jsx terms每個詞彙的背景顏色改成#E0E0E0

---

**Cursor**


將每個詞彙的背景顏色改為 #E0E0E0：


```css
.terms {
  width: 100%;
}

.terms__header {
  margin-bottom: 16px;
}

.terms__title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: var(--fg-dark);
}

.terms__controls {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  width: 100%;
  align-items: stretch;
}

.terms__input-wrapper {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
}

.terms__input {
  flex: 1;
  padding: 12px 40px 12px 16px;
  border: 2px solid var(--border);
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
  width: 100%;
  min-width: 0;
}

.terms__input:focus {
  outline: none;
  border-color: var(--fg-dark);
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
}

.terms__skeleton {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.terms__skeleton-row {
  height: 40px;
  background: var(--bg-light);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.terms__error {
  padding: 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-size: 13px;
}

.terms__list {
  margin-bottom: 16px;
}

.terms__container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
}

.terms__empty {
  padding: 24px;
  text-align: center;
  color: var(--muted);
  font-size: 14px;
}

.terms__row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}

.terms__name {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  color: var(--fg);
  text-decoration: none;
  border-radius: 6px;
  font-size: 13px;
  transition: all 0.15s ease;
  cursor: pointer;
  border: none;
  background: #E0E0E0;
  white-space: nowrap;
  flex-shrink: 0;
}

.terms__name:hover {
  background: #E0E0E0;
  color: var(--fg);
  border: none;
  transform: translateY(-1px);
}

.terms__pagination-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  gap: 16px;
  flex-wrap: wrap;
}

.terms__pagination-info {
  font-size: 13px;
  color: var(--fg);
}

.terms__pagination-info b {
  color: var(--fg-dark);
  font-weight: 600;
}

@media (max-width: 768px) {
  .terms__controls {
    flex-direction: column;
  }
}


```

已將每個詞彙的背景顏色改為 #E0E0E0。

## 修改內容

### Terms.css
- 將 `.terms__name` 的 `background` 從漸層改為 `#E0E0E0`
- 將 `.terms__name:hover` 的 `background` 也改為 `#E0E0E0`（保持 hover 時顏色一致）

現在 Terms 組件中的每個詞彙都有 `#E0E0E0` 的背景顏色，不再是漸層效果。

---

**User**

要漸層

---

**Cursor**


將詞彙背景改為漸層，從 #E0E0E0 漸層到白色：


```css
.terms {
  width: 100%;
}

.terms__header {
  margin-bottom: 16px;
}

.terms__title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: var(--fg-dark);
}

.terms__controls {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  width: 100%;
  align-items: stretch;
}

.terms__input-wrapper {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
}

.terms__input {
  flex: 1;
  padding: 12px 40px 12px 16px;
  border: 2px solid var(--border);
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
  width: 100%;
  min-width: 0;
}

.terms__input:focus {
  outline: none;
  border-color: var(--fg-dark);
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
}

.terms__skeleton {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.terms__skeleton-row {
  height: 40px;
  background: var(--bg-light);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.terms__error {
  padding: 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-size: 13px;
}

.terms__list {
  margin-bottom: 16px;
}

.terms__container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
}

.terms__empty {
  padding: 24px;
  text-align: center;
  color: var(--muted);
  font-size: 14px;
}

.terms__row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}

.terms__name {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  color: var(--fg);
  text-decoration: none;
  border-radius: 6px;
  font-size: 13px;
  transition: all 0.15s ease;
  cursor: pointer;
  border: none;
  background: radial-gradient(circle, #E0E0E0 0%, rgba(255, 255, 255, 0.5) 100%);
  white-space: nowrap;
  flex-shrink: 0;
}

.terms__name:hover {
  background: radial-gradient(circle, #E0E0E0 0%, rgba(255, 255, 255, 0.7) 100%);
  color: var(--fg);
  border: none;
  transform: translateY(-1px);
}

.terms__pagination-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  gap: 16px;
  flex-wrap: wrap;
}

.terms__pagination-info {
  font-size: 13px;
  color: var(--fg);
}

.terms__pagination-info b {
  color: var(--fg-dark);
  font-weight: 600;
}

@media (max-width: 768px) {
  .terms__controls {
    flex-direction: column;
  }
}


```

---

**User**

漸層到透明

---

**Cursor**


將漸層改為從 #E0E0E0 漸層到透明：


```css
.terms {
  width: 100%;
}

.terms__header {
  margin-bottom: 16px;
}

.terms__title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: var(--fg-dark);
}

.terms__controls {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  width: 100%;
  align-items: stretch;
}

.terms__input-wrapper {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
}

.terms__input {
  flex: 1;
  padding: 12px 40px 12px 16px;
  border: 2px solid var(--border);
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
  width: 100%;
  min-width: 0;
}

.terms__input:focus {
  outline: none;
  border-color: var(--fg-dark);
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
}

.terms__skeleton {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.terms__skeleton-row {
  height: 40px;
  background: var(--bg-light);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.terms__error {
  padding: 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-size: 13px;
}

.terms__list {
  margin-bottom: 16px;
}

.terms__container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
}

.terms__empty {
  padding: 24px;
  text-align: center;
  color: var(--muted);
  font-size: 14px;
}

.terms__row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}

.terms__name {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  color: var(--fg);
  text-decoration: none;
  border-radius: 6px;
  font-size: 13px;
  transition: all 0.15s ease;
  cursor: pointer;
  border: none;
  background: radial-gradient(circle, #E0E0E0 0%, transparent 100%);
  white-space: nowrap;
  flex-shrink: 0;
}

.terms__name:hover {
  background: radial-gradient(circle, #E0E0E0 0%, transparent 100%);
  color: var(--fg);
  border: none;
  transform: translateY(-1px);
}

.terms__pagination-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  gap: 16px;
  flex-wrap: wrap;
}

.terms__pagination-info {
  font-size: 13px;
  color: var(--fg);
}

.terms__pagination-info b {
  color: var(--fg-dark);
  font-weight: 600;
}

@media (max-width: 768px) {
  .terms__controls {
    flex-direction: column;
  }
}


```

已將漸層改為從 #E0E0E0 漸層到透明。

## 修改內容

### Terms.css
- 將 `.terms__name` 的 `background` 改為 `radial-gradient(circle, #E0E0E0 0%, transparent 100%)`
- 將 `.terms__name:hover` 的 `background` 也改為相同的漸層效果

現在每個詞彙的背景會從中心 `#E0E0E0` 漸層到邊緣透明。

---

**User**

我希望按start或是左上角回到首頁的圖標之後所有東西都要回到預設狀態 比如說所有欄位要清空、NIfTI Viewer的座標都回歸000等

---

**Cursor**


檢查代碼結構，實現點擊 Start 或 logo 時重置所有狀態：


檢查需要重置的組件狀態：


修改 App.jsx，加入重置功能：點擊 Start 或 logo 時重置所有狀態。


修改 App.jsx，加入重置功能：


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
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')

  const handleStart = useCallback(() => {
    console.log('handleStart called, setting showLanding to false')
    setShowLanding(false)
    console.log('showLanding set to false, should render main app now')
  }, [])

  const handlePickTerm = useCallback((t) => {
    setQuery((q) => (q ? `${q} ${t}` : t))
  }, [setQuery])

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
        <Terms key={`terms-${resetKey}`} onPickTerm={handlePickTerm} />
      </div>

      <main className={`app__grid ${isDragging ? 'app__grid--dragging' : ''}`} ref={gridRef}>
        <Card className="card--stack card--no-border" style={{ flexBasis: `${sizes[0]}%` }}>
          <CardTitle>Query Builder</CardTitle>
          <QueryBuilder key={`querybuilder-${resetKey}`} query={query} setQuery={setQuery} />
          <CardTitle>Studies</CardTitle>
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
    </div>
  )
}

```

添加重置邏輯：


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
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')
  const [resetKey, setResetKey] = useState(0) // 用於重置組件狀態

  const handleStart = useCallback(() => {
    console.log('handleStart called, setting showLanding to false')
    setShowLanding(false)
    console.log('showLanding set to false, should render main app now')
  }, [])

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
        <Terms key={`terms-${resetKey}`} onPickTerm={handlePickTerm} />
      </div>

      <main className={`app__grid ${isDragging ? 'app__grid--dragging' : ''}`} ref={gridRef}>
        <Card className="card--stack card--no-border" style={{ flexBasis: `${sizes[0]}%` }}>
          <CardTitle>Query Builder</CardTitle>
          <QueryBuilder key={`querybuilder-${resetKey}`} query={query} setQuery={setQuery} />
          <CardTitle>Studies</CardTitle>
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
    </div>
  )
}

```

修改 handleStart，確保 Start 也會重置狀態：


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
import { useUrlQueryState } from './hooks/useUrlQueryState'
import './App.css'

export default function App () {
  const [showLanding, setShowLanding] = useState(true)
  const [query, setQuery] = useUrlQueryState('q')
  const [resetKey, setResetKey] = useState(0) // 用於重置組件狀態

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
        <Terms key={`terms-${resetKey}`} onPickTerm={handlePickTerm} />
      </div>

      <main className={`app__grid ${isDragging ? 'app__grid--dragging' : ''}`} ref={gridRef}>
        <Card className="card--stack card--no-border" style={{ flexBasis: `${sizes[0]}%` }}>
          <CardTitle>Query Builder</CardTitle>
          <QueryBuilder key={`querybuilder-${resetKey}`} query={query} setQuery={setQuery} />
          <CardTitle>Studies</CardTitle>
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
    </div>
  )
}

```

檢查 NIfTI Viewer 是否需要在 query 清空時重置座標。查看相關邏輯：


已實現重置功能。驗證代碼是否正確：


已實現重置功能。修改摘要：

## 修改內容

### App.jsx

1. 新增 `resetKey` state：
   - 用於強制重新渲染組件，重置所有內部狀態

2. 修改 `handleStart` 函數：
   - 清空 query（`setQuery('')`）
   - 重置面板大小（`setSizes([50, 50])`）
   - 遞增 `resetKey` 以強制重新渲染組件
   - 關閉 landing page

3. 新增 `handleLogoClick` 函數：
   - 執行與 `handleStart` 相同的重置操作
   - 顯示 landing page（`setShowLanding(true)`）

4. 為組件添加 `key` prop：
   - `Terms`、`QueryBuilder`、`Studies`、`NiiViewer` 都使用 `resetKey` 作為 key 的一部分
   - 當 `resetKey` 改變時，React 會卸載並重新掛載這些組件，從而重置所有內部狀態

## 重置的狀態

當點擊 Start 或左上角的 logo 時，以下狀態會被重置：

1. Query Builder：搜尋欄位清空
2. Terms：搜尋欄位清空、分頁重置為第 1 頁
3. Studies：分頁重置為第 1 頁、頁面大小重置、年份篩選重置
4. NIfTI Viewer：座標重置為 000（中間值）、所有參數重置為預設值
5. 面板大小：重置為 50/50

所有狀態都會回到預設值。

---

**User**

NIfTI Viewer看起來沒有變成000

---

**Cursor**


檢查 NIfTI Viewer 的座標重置邏輯，確保在重置時座標正確設為 000：


檢查座標轉換函數，確認如何將座標設為 000：


修改 NIfTI Viewer：當沒有 query 時，將座標重置為 000（而非中間值）。檢查如何計算對應於座標 0,0,0 的索引：


```javascriptreact

// 顯示設定：讓 x>0 出現在畫面右側（右腦在右）
const X_RIGHT_ON_SCREEN_RIGHT = true;

import { useEffect, useMemo, useRef, useState } from 'react'
import './NiiViewer.css'
import * as nifti from 'nifti-reader-js'

const MNI_BG_URL = 'static/mni_2mm.nii.gz'

// Detect MNI152 2mm template dims & spacing (91x109x91, 2mm iso)
function isStandardMNI2mm(dims, voxelMM) {
  const okDims = Array.isArray(dims) && dims[0]===91 && dims[1]===109 && dims[2]===91;
  const okSp   = voxelMM && Math.abs(voxelMM[0]-2)<1e-3 && Math.abs(voxelMM[1]-2)<1e-3 && Math.abs(voxelMM[2]-2)<1e-3;
  return okDims && okSp;
}
// Standard MNI152 2mm affine (voxel i,j,k -> MNI mm):
// x = -2*i + 90;  y = 2*j - 126;  z = 2*k - 72
const MNI2MM = { x0: 90, y0: -126, z0: -72, vx: 2, vy: 2, vz: 2 };

export function NiiViewer({ query }) {
  const [loadingBG, setLoadingBG] = useState(false)
  const [loadingMap, setLoadingMap] = useState(false)
  const [errBG, setErrBG] = useState('')
  const [errMap, setErrMap] = useState('')

  // backend params (map generation)
  const [voxel, setVoxel] = useState(2.0)
  const [fwhm, setFwhm] = useState(10.0)
  const [kernel, setKernel] = useState('gauss')
  const [r, setR] = useState(6.0)

  // overlay controls
  const [overlayAlpha, setOverlayAlpha] = useState(0.5)
  const [posOnly, setPosOnly] = useState(true)
  const [useAbs, setUseAbs] = useState(false)
  const [thrMode, setThrMode] = useState('pctl') // default: Percentile (per request)
  const [pctl, setPctl] = useState(95)
  const [thrValue, setThrValue] = useState(0.05)     // used when mode === 'value'

  // volumes
  const bgRef  = useRef(null)   // { data, dims:[nx,ny,nz], voxelMM:[vx,vy,vz], min, max }
  const mapRef = useRef(null)   // { data, dims:[nx,ny,nz], voxelMM:[vx,vy,vz], min, max }
  const getVoxelMM = () => {
    const vm = bgRef.current?.voxelMM ?? mapRef.current?.voxelMM ?? [1,1,1]
    return { x: vm[0], y: vm[1], z: vm[2] }
  }
  const [dims, setDims] = useState([0,0,0]) // canvas dims (prefer BG; overlay only if same dims)

  // slice indices (voxel coordinates in [0..N-1])
  const [ix, setIx] = useState(0) // sagittal (X)
  const [iy, setIy] = useState(0) // coronal  (Y)
  const [iz, setIz] = useState(0) // axial    (Z)

  // track if crosshairs are locked (fixed) for each axis
  const [lockedAxes, setLockedAxes] = useState({ x: false, y: false, z: false })

  // show/hide advanced controls
  const [showAdvanced, setShowAdvanced] = useState(false)

  // input values for slice indices (for editing below images)
  const [ixInput, setIxInput] = useState('0')
  const [iyInput, setIyInput] = useState('0')
  const [izInput, setIzInput] = useState('0')

  // Neurosynth-style displayed coords: signed, centered at middle voxel
  const [cx, setCx] = useState('0')
  const [cy, setCy] = useState('0')
  const [cz, setCz] = useState('0')

  const canvases = [useRef(null), useRef(null), useRef(null)]

  const mapUrl = useMemo(() => {
    if (!query) return ''
    const u = new URL(`/query/${encodeURIComponent(query)}/nii`, window.location.origin)
    u.searchParams.set('voxel', String(voxel))
    u.searchParams.set('fwhm', String(fwhm))
    u.searchParams.set('kernel', String(kernel))
    u.searchParams.set('r', String(r))
    return u.pathname + u.search
  }, [query, voxel, fwhm, kernel, r])

  // ---------- utils ----------
  function asTypedArray (header, buffer) {
    switch (header.datatypeCode) {
      case nifti.NIFTI1.TYPE_INT8:    return new Int8Array(buffer)
      case nifti.NIFTI1.TYPE_UINT8:   return new Uint8Array(buffer)
      case nifti.NIFTI1.TYPE_INT16:   return new Int16Array(buffer)
      case nifti.NIFTI1.TYPE_UINT16:  return new Uint16Array(buffer)
      case nifti.NIFTI1.TYPE_INT32:   return new Int32Array(buffer)
      case nifti.NIFTI1.TYPE_UINT32:  return new Uint32Array(buffer)
      case nifti.NIFTI1.TYPE_FLOAT32: return new Float32Array(buffer)
      case nifti.NIFTI1.TYPE_FLOAT64: return new Float64Array(buffer)
      default: return new Float32Array(buffer)
    }
  }
  function minmax (arr) {
    let mn =  Infinity, mx = -Infinity
    for (let i = 0; i < arr.length; i++) {
      const v = arr[i]
      if (v < mn) mn = v
      if (v > mx) mx = v
    }
    return [mn, mx]
  }
  function percentile(arr, p, step=Math.ceil(arr.length/200000)) {
    if (!arr.length) return 0
    const samp = []
    for (let i=0; i<arr.length; i+=step) samp.push(arr[i])
    samp.sort((a,b)=>a-b)
    const k = Math.floor((p/100) * (samp.length - 1))
    return samp[Math.max(0, Math.min(samp.length-1, k))]
  }
  async function loadNifti(url) {
    const res = await fetch(url)
    if (!res.ok) {
      const t = await res.text().catch(()=> '')
      throw new Error(`GET ${url} → ${res.status} ${t}`)
    }
    let ab = await res.arrayBuffer()
    if (nifti.isCompressed(ab)) ab = nifti.decompress(ab)
    if (!nifti.isNIFTI(ab)) throw new Error('not a NIfTI file')
    const header = nifti.readHeader(ab)
    const image  = nifti.readImage(header, ab)
    const ta     = asTypedArray(header, image)
    let f32
    if (ta instanceof Float32Array) f32 = ta
    else if (ta instanceof Float64Array) f32 = Float32Array.from(ta)
    else {
      const [mn, mx] = minmax(ta)
      const range = (mx - mn) || 1
      f32 = new Float32Array(ta.length)
      for (let i=0;i<ta.length;i++) f32[i] = (ta[i] - mn) / range
    }
    const nx = header.dims[1] | 0
    const ny = header.dims[2] | 0
    const nz = header.dims[3] | 0
    if (!nx || !ny || !nz) throw new Error('invalid dims')
    const [mn, mx] = minmax(f32)
    const vx = Math.abs(header.pixDims?.[1] ?? 1)
    const vy = Math.abs(header.pixDims?.[2] ?? 1)
    const vz = Math.abs(header.pixDims?.[3] ?? 1)
    return { data: f32, dims:[nx,ny,nz], voxelMM:[vx,vy,vz], min: mn, max: mx }
  }

  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v))

  // helpers: convert between index [0..N-1] and neurosynth-style signed coord centered at mid voxel
  // Display conventions to match Neurosynth-like UI:
  //  - X: right-positive
  //  - Y: anterior-positive (but screen vertical is flipped), so invert sign
  //  - Z: superior-positive (also vertical), invert sign
  const AXIS_SIGN = { x: -1, y: 1, z: 1 } // X is neg for index<->coord mapping only when not using standard MNI affine
  const idx2coord = (i, n, axis) => {
    const [nx, ny, nz] = dims;
    const { x: vx, y: vy, z: vz } = getVoxelMM();
    const isStd = isStandardMNI2mm([nx, ny, nz], [vx, vy, vz]);
    if (isStd) {
      if (axis === 'x') return (-MNI2MM.vx * i + MNI2MM.x0);
      if (axis === 'y') return ( MNI2MM.vy * i + MNI2MM.y0);
      if (axis === 'z') return ( MNI2MM.vz * i + MNI2MM.z0);
    }
    const mmPerVoxel = axis === 'x' ? vx : axis === 'y' ? vy : vz;
    return AXIS_SIGN[axis] * (i - Math.floor(n/2)) * mmPerVoxel;
  }
const coord2idx = (c_mm, n, axis) => {
    const [nx, ny, nz] = dims;
    const { x: vx, y: vy, z: vz } = getVoxelMM();
    const isStd = isStandardMNI2mm([nx, ny, nz], [vx, vy, vz]);
    if (isStd) {
      let v;
      if (axis === 'x') v = ( (MNI2MM.x0 - c_mm) / MNI2MM.vx );
      else if (axis === 'y') v = ( (c_mm - MNI2MM.y0) / MNI2MM.vy );
      else v = ( (c_mm - MNI2MM.z0) / MNI2MM.vz );
      const idx = Math.round(v);
      return Math.max(0, Math.min(n-1, idx));
    }
    const mmPerVoxel = axis === 'x' ? vx : axis === 'y' ? vy : vz;
    const sign = AXIS_SIGN[axis];
    const v = (sign * (c_mm / mmPerVoxel)) + Math.floor(n/2);
    const idx = Math.round(v);
    return Math.max(0, Math.min(n-1, idx));
  }
  // load background on mount
  useEffect(() => {
    let alive = true
    setLoadingBG(true); setErrBG('')
    ;(async () => {
      try {
        const bg = await loadNifti(MNI_BG_URL)
        if (!alive) return
        bgRef.current = bg
        // Always prefer BG dims for the canvas
        setDims(bg.dims)
        const [nx,ny,nz] = bg.dims
        // Set coordinates to 0,0,0 instead of middle
        const { x: vx, y: vy, z: vz } = getVoxelMM()
        const isStd = isStandardMNI2mm([nx, ny, nz], [vx, vy, vz])
        if (isStd) {
          // For standard MNI, calculate indices for coordinates 0,0,0
          const ix0 = coord2idx(0, nx, 'x')
          const iy0 = coord2idx(0, ny, 'y')
          const iz0 = coord2idx(0, nz, 'z')
          setIx(ix0); setIy(iy0); setIz(iz0)
        } else {
          // For non-standard, use middle voxel (which should be close to 0,0,0)
          const mx = Math.floor(nx/2), my = Math.floor(ny/2), mz = Math.floor(nz/2)
          setIx(mx); setIy(my); setIz(mz)
        }
      } catch (e) {
        if (!alive) return
        setErrBG(e?.message || String(e))
        bgRef.current = null
      } finally {
        if (!alive) return
        setLoadingBG(false)
      }
    })()
    return () => { alive = false }
  }, [])

  
  // keep thrValue within current map range when map changes
  useEffect(() => {
    const mn = mapRef.current?.min ?? 0
    const mx = mapRef.current?.max ?? 1
    if (thrValue < mn || thrValue > mx) {
      setThrValue(Math.min(mx, Math.max(mn, thrValue)))
    }
  }, [mapRef.current, dims])

  // ensure thrValue defaults to 0.05 when switching to value mode
  useEffect(() => {
    if (thrMode === 'value' && thrValue === 0) {
      setThrValue(0.05)
    }
  }, [thrMode])

// load meta-analytic map when query/params change
  useEffect(() => {
    if (!mapUrl) { mapRef.current = null; return }
    let alive = true
    setLoadingMap(true); setErrMap('')
    ;(async () => {
      try {
        const mv = await loadNifti(mapUrl)
        if (!alive) return
        mapRef.current = mv
        if (!bgRef.current) {
          setDims(mv.dims)
          const [nx,ny,nz] = mv.dims
          const mx = Math.floor(nx/2), my = Math.floor(ny/2), mz = Math.floor(nz/2)
          setIx(mx); setIy(my); setIz(mz)
        }
      } catch (e) {
        if (!alive) return
        setErrMap(e?.message || String(e))
        mapRef.current = null
      } finally {
        if (!alive) return
        setLoadingMap(false)
      }
    })()
    return () => { alive = false }
  }, [mapUrl])

  const mapThreshold = useMemo(() => {
    const mv = mapRef.current
    if (!mv) return null
    if (thrMode === 'value') return Number(thrValue) || 0
    return percentile(mv.data, Math.max(0, Math.min(100, Number(pctl) || 95)))
  }, [thrMode, thrValue, pctl, mapRef.current])

  // draw one slice (upright orientation via vertical flip)
  function drawSlice (canvas, axis /* 'z' | 'y' | 'x' */, index) {
    const [nx, ny, nz] = dims
    
    // 若要讓 x>0 出現在畫面右側，就在取樣時把 X 軸做水平翻轉
    const sx = (x) => (X_RIGHT_ON_SCREEN_RIGHT ? (nx - 1 - x) : x);
    const bg  = bgRef.current
    const map = mapRef.current

    const dimsStr = dims.join('x')
    const bgOK  = !!(bg  && bg.dims.join('x')  === dimsStr)
    const mapOK = !!(map && map.dims.join('x') === dimsStr)

    let w=0, h=0, getBG=null, getMap=null
    if (axis === 'z') { w = nx; h = ny; if (bgOK)  getBG  = (x,y)=> bg.data[sx(x) + y*nx + index*nx*ny]; if (mapOK) getMap = (x,y)=> map.data[sx(x) + y*nx + index*nx*ny] }
    if (axis === 'y') { w = nx; h = nz; if (bgOK)  getBG  = (x,y)=> bg.data[sx(x) + index*nx + y*nx*ny]; if (mapOK) getMap = (x,y)=> map.data[sx(x) + index*nx + y*nx*ny] }
    if (axis === 'x') { w = ny; h = nz; if (bgOK)  getBG  = (x,y)=> bg.data[index + x*nx + y*nx*ny]; if (mapOK) getMap = (x,y)=> map.data[index + x*nx + y*nx*ny] }

    canvas.width = w; canvas.height = h
    const ctx = canvas.getContext('2d', { willReadFrequently: false })
    const img = ctx.createImageData(w, h)

    const alpha = Math.max(0, Math.min(1, overlayAlpha))
    const R = 255, G = 0, B = 0
    const thr = mapThreshold

    // background normalization based on its own min/max
    const bgMin = bg?.min ?? 0
    const bgMax = bg?.max ?? 1
    const bgRange = (bgMax - bgMin) || 1

    let p = 0
    for (let yy=0; yy<h; yy++) {
      const srcY = h - 1 - yy // flip vertically
      for (let xx=0; xx<w; xx++) {
        // For Sagittal (X) view, flip horizontally
        const srcX = (axis === 'x') ? (w - 1 - xx) : xx
        // draw background
        let gray = 0
        if (getBG) {
          const vbg = getBG(srcX, srcY)
          let g = (vbg - bgMin) / bgRange
          if (g < 0) g = 0
          if (g > 1) g = 1
          gray = (g * 255) | 0
        }
        img.data[p    ] = gray
        img.data[p + 1] = gray
        img.data[p + 2] = gray
        img.data[p + 3] = 255

        // overlay map
        if (getMap) {
          let mv = getMap(srcX, srcY)
          const raw = mv
          if (useAbs) mv = Math.abs(mv)
          let pass = (thr == null) ? (mv > 0) : (mv >= thr)
          if (posOnly && raw <= 0) pass = false
          if (pass) {
            img.data[p    ] = ((1 - alpha) * img.data[p]     + alpha * R) | 0
            img.data[p + 1] = ((1 - alpha) * img.data[p + 1] + alpha * G) | 0
            img.data[p + 2] = ((1 - alpha) * img.data[p + 2] + alpha * B) | 0
          }
        }
        p += 4
      }
    }
    ctx.putImageData(img, 0, 0)

    // draw green crosshairs
    ctx.save()
    ctx.strokeStyle = '#00ff00'
    ctx.lineWidth = 1
    let cx = 0, cy = 0
    if (axis === 'z') { // plane: X by Y
      cx = Math.max(0, Math.min(w-1, (X_RIGHT_ON_SCREEN_RIGHT ? (w - 1 - ix) : ix)))
      cy = Math.max(0, Math.min(h-1, iy))
    } else if (axis === 'y') { // plane: X by Z
      cx = Math.max(0, Math.min(w-1, (X_RIGHT_ON_SCREEN_RIGHT ? (w - 1 - ix) : ix)))
      cy = Math.max(0, Math.min(h-1, iz))
    } else { // axis === 'x' (plane: Y by Z)
      cx = Math.max(0, Math.min(w-1, w - 1 - iy)) // Flip horizontally for Sagittal view
      cy = Math.max(0, Math.min(h-1, iz))
    }
    const screenY = h - 1 - cy // account for vertical flip used when drawing
    // vertical line
    ctx.beginPath(); ctx.moveTo(cx + 0.5, 0); ctx.lineTo(cx + 0.5, h); ctx.stroke()
    // horizontal line
    ctx.beginPath(); ctx.moveTo(0, screenY + 0.5); ctx.lineTo(w, screenY + 0.5); ctx.stroke()
    ctx.restore()
  }

  // click-to-move crosshairs and lock them
  function onCanvasClick (e, axis) {
    const canvas = e.currentTarget
    const rect = canvas.getBoundingClientRect()
    const x = Math.floor((e.clientX - rect.left) * canvas.width / rect.width)
    const y = Math.floor((e.clientY - rect.top) * canvas.height / rect.height)
    const srcY = canvas.height - 1 - y // invert because we draw with vertical flip
    const [nx,ny,nz] = dims
    
    const toIdxX = (screenX) => (X_RIGHT_ON_SCREEN_RIGHT ? (nx - 1 - screenX) : screenX);
    if (axis === 'z') { 
      const xi = toIdxX(x)
      setIx(xi)
      setIy(srcY)
    }
    else if (axis === 'y') { 
      const xi = toIdxX(x)
      setIx(xi)
      setIz(srcY)
    }
    else { 
      // axis === 'x' (Sagittal): flip horizontally because image is flipped
      const flippedX = canvas.width - 1 - x
      setIy(flippedX)
      setIz(srcY)
    }
    
    // Lock this axis
    setLockedAxes(prev => ({ ...prev, [axis]: true }))
  }

  // mouse move to adjust crosshairs (only if not locked)
  function onCanvasMouseMove (e, axis) {
    if (lockedAxes[axis]) return // Skip if locked
    
    const canvas = e.currentTarget
    const rect = canvas.getBoundingClientRect()
    const x = Math.floor((e.clientX - rect.left) * canvas.width / rect.width)
    const y = Math.floor((e.clientY - rect.top) * canvas.height / rect.height)
    const srcY = canvas.height - 1 - y // invert because we draw with vertical flip
    const [nx,ny,nz] = dims
    
    const toIdxX = (screenX) => (X_RIGHT_ON_SCREEN_RIGHT ? (nx - 1 - screenX) : screenX);
    if (axis === 'z') { 
      const xi = toIdxX(x)
      setIx(xi)
      setIy(srcY)
    }
    else if (axis === 'y') { 
      const xi = toIdxX(x)
      setIx(xi)
      setIz(srcY)
    }
    else { 
      // axis === 'x' (Sagittal): flip horizontally because image is flipped
      const flippedX = canvas.width - 1 - x
      setIy(flippedX)
      setIz(srcY)
    }
  }

  // unlock crosshairs when mouse enters canvas
  function onCanvasMouseEnter (e, axis) {
    setLockedAxes(prev => ({ ...prev, [axis]: false }))
  }

  // keep display coords in sync when ix/iy/iz/dims change (e.g., after loads)
  useEffect(() => {
    const [nx,ny,nz] = dims
    if (!nx) return
    
    // Ensure refs are loaded before calculating coordinates
    const bgLoaded = bgRef.current !== null
    const mapLoaded = mapRef.current !== null
    if (!bgLoaded && !mapLoaded) return
    
    // Calculate coordinates using current indices
    setCx(String(idx2coord(ix, nx, 'x')))
    setCy(String(idx2coord(iy, ny, 'y')))
    setCz(String(idx2coord(iz, nz, 'z')))
    // Sync input values
    setIxInput(String(ix))
    setIyInput(String(iy))
    setIzInput(String(iz))
  }, [ix,iy,iz,dims, loadingBG, loadingMap])

  // commit handlers: parse signed integer, map to index, clamp to volume
  const commitCoord = (axis) => {
    const [nx,ny,nz] = dims
    let vStr = axis==='x' ? cx : axis==='y' ? cy : cz
    // allow empty / '-' temporary states
    if (vStr === '' || vStr === '-' ) return
    const parsed = parseFloat(vStr)
    if (Number.isNaN(parsed)) return
    if (axis==='x') setIx(coord2idx(parsed, nx, 'x'))
    if (axis==='y') setIy(coord2idx(parsed, ny, 'y'))
    if (axis==='z') setIz(coord2idx(parsed, nz, 'z'))
  }

  // commit handlers for slice index inputs (below images)
  const commitSliceIndex = (axis) => {
    const [nx,ny,nz] = dims
    let vStr = axis==='x' ? ixInput : axis==='y' ? iyInput : izInput
    const max = axis==='x' ? nx-1 : axis==='y' ? ny-1 : nz-1
    // allow empty temporary states
    if (vStr === '' || vStr === '-' ) return
    const parsed = parseInt(vStr, 10)
    if (Number.isNaN(parsed)) return
    const clamped = Math.max(0, Math.min(max, parsed))
    if (axis==='x') {
      setIx(clamped)
      setIxInput(String(clamped))
    }
    if (axis==='y') {
      setIy(clamped)
      setIyInput(String(clamped))
    }
    if (axis==='z') {
      setIz(clamped)
      setIzInput(String(clamped))
    }
  }

  // Handle input change and update in real-time if valid
  const handleSliceInputChange = (axis, value) => {
    const [nx,ny,nz] = dims
    const max = axis==='x' ? nx-1 : axis==='y' ? ny-1 : nz-1
    
    if (axis==='x') {
      setIxInput(value)
      const parsed = parseInt(value, 10)
      if (!Number.isNaN(parsed) && value !== '' && value !== '-') {
        const clamped = Math.max(0, Math.min(max, parsed))
        setIx(clamped)
      }
    }
    if (axis==='y') {
      setIyInput(value)
      const parsed = parseInt(value, 10)
      if (!Number.isNaN(parsed) && value !== '' && value !== '-') {
        const clamped = Math.max(0, Math.min(max, parsed))
        setIy(clamped)
      }
    }
    if (axis==='z') {
      setIzInput(value)
      const parsed = parseInt(value, 10)
      if (!Number.isNaN(parsed) && value !== '' && value !== '-') {
        const clamped = Math.max(0, Math.min(max, parsed))
        setIz(clamped)
      }
    }
  }

  // redraw on state changes
  useEffect(() => {
    const [nx, ny, nz] = dims
    if (!nx) return
    const c0 = canvases[0].current, c1 = canvases[1].current, c2 = canvases[2].current
    if (c0 && iz >=0 && iz < nz) drawSlice(c0, 'z', iz)
    if (c1 && iy >=0 && iy < ny) drawSlice(c1, 'y', iy)
    if (c2 && ix >=0 && ix < nx) drawSlice(c2, 'x', ix)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dims, ix, iy, iz,
    overlayAlpha, posOnly, useAbs, thrMode, pctl, thrValue,
    loadingBG, loadingMap, errBG, errMap, query
  ])

  const [nx, ny, nz] = dims

  // slice configs (labels only; numbers removed)
  const sliceConfigs = [
    { key: 'y', name: 'Coronal',  axisLabel: 'Y', index: iy, setIndex: setIy, max: Math.max(0, ny-1), canvasRef: canvases[1], coordValue: cy },
    { key: 'x', name: 'Sagittal', axisLabel: 'X', index: ix, setIndex: setIx, max: Math.max(0, nx-1), canvasRef: canvases[2], coordValue: cx },
    { key: 'z', name: 'Axial',    axisLabel: 'Z', index: iz, setIndex: setIz, max: Math.max(0, nz-1), canvasRef: canvases[0], coordValue: cz },
  ]

  return (
    <div className="nii-viewer">
      <div className="nii-viewer__header">
        <div className="nii-viewer__title">NIfTI Viewer</div>
        <div className="nii-viewer__header-actions">
          {query && (
            <a 
              href={mapUrl} 
              className="nii-viewer__download-link"
              download
            >
              Download map
            </a>
          )}
          <button
            className="nii-viewer__advance-button"
            onClick={() => setShowAdvanced(!showAdvanced)}
          >
            Advance
          </button>
        </div>
      </div>

      {/* --- Control Panel: All controls in one section --- */}
      <div className="nii-viewer__section">
        {/* Row 1: Threshold mode + Threshold/Percentile + Gaussian FWHM + Overlay alpha */}
        {showAdvanced && (
          <div className="nii-viewer__controls-row-top">
            <div className="nii-viewer__label">
              <span>Threshold mode</span>
              <div className="nii-viewer__mode-buttons">
                <button
                  className={`nii-viewer__mode-button ${thrMode === 'value' ? 'nii-viewer__mode-button--active' : ''}`}
                  onClick={() => setThrMode('value')}
                >
                  Value
                </button>
                <button
                  className={`nii-viewer__mode-button ${thrMode === 'pctl' ? 'nii-viewer__mode-button--active' : ''}`}
                  onClick={() => setThrMode('pctl')}
                >
                  Percentile
                </button>
              </div>
            </div>
            {thrMode === 'value' ? (
              <label className="nii-viewer__label">
                <span>Threshold</span>
                <input 
                  type="number" 
                  step="0.01" 
                  value={thrValue} 
                  onChange={e=>setThrValue(Number(e.target.value))} 
                  className="nii-viewer__input"
                  style={{ width: '112px' }}
                />
              </label>
            ) : (
              <label className="nii-viewer__label">
                <span>Percentile</span>
                <input 
                  type="number" 
                  min={50} 
                  max={99.9} 
                  step={0.5} 
                  value={pctl} 
                  onChange={e=>setPctl(Number(e.target.value)||95)} 
                  className="nii-viewer__input"
                  style={{ width: '96px' }}
                />
              </label>
            )}
            <label className="nii-viewer__label">
              <span>Gaussian FWHM:</span>
              <input 
                type="number" 
                step="0.5" 
                value={fwhm} 
                onChange={e=>setFwhm(Number(e.target.value)||0)} 
                className="nii-viewer__input"
                style={{ width: '112px' }}
              />
            </label>
            <label className="nii-viewer__label">
              <span>Overlay alpha</span>
              <input 
                type="range" 
                min={0} 
                max={1} 
                step={0.05} 
                value={overlayAlpha} 
                onChange={e=>setOverlayAlpha(Number(e.target.value))} 
                className="nii-viewer__input"
                style={{ width: '160px' }}
              />
            </label>
          </div>
        )}

        {/* Row 2: Coordinate inputs */}
        <div className="nii-viewer__controls-row">
          <label className="nii-viewer__coordinate-label">
            <span>X:</span>
            <input
              type="text" 
              inputMode="decimal" 
              pattern="-?[0-9]*([.][0-9]+)?"
              className="nii-viewer__coordinate-input"
              value={cx}
              onChange={e=>setCx(e.target.value)}
              onBlur={()=>commitCoord('x')}
              onKeyDown={e=>{ if(e.key==='Enter'){ commitCoord('x'); e.target.blur() } }}
              aria-label="X coordinate (centered)"
            />
          </label>
          <label className="nii-viewer__coordinate-label">
            <span>Y:</span>
            <input
              type="text" 
              inputMode="decimal" 
              pattern="-?[0-9]*([.][0-9]+)?"
              className="nii-viewer__coordinate-input"
              value={cy}
              onChange={e=>setCy(e.target.value)}
              onBlur={()=>commitCoord('y')}
              onKeyDown={e=>{ if(e.key==='Enter'){ commitCoord('y'); e.target.blur() } }}
              aria-label="Y coordinate (centered)"
            />
          </label>
          <label className="nii-viewer__coordinate-label">
            <span>Z:</span>
            <input
              type="text" 
              inputMode="decimal" 
              pattern="-?[0-9]*([.][0-9]+)?"
              className="nii-viewer__coordinate-input"
              value={cz}
              onChange={e=>setCz(e.target.value)}
              onBlur={()=>commitCoord('z')}
              onKeyDown={e=>{ if(e.key==='Enter'){ commitCoord('z'); e.target.blur() } }}
              aria-label="Z coordinate (centered)"
            />
          </label>
          <span className="nii-viewer__tip">Tip: Click to lock the cross.</span>
        </div>
      </div>

      {/* --- Brain views --- */}
      {(loadingBG || loadingMap) && (
        <div className="nii-viewer__skeleton-grid">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="nii-viewer__skeleton-item" />
          ))}
          <div></div>
        </div>
      )}
      {(errBG || errMap) && (
        <div className="nii-viewer__error">
          {errBG && <div>Background: {errBG}</div>}
          {errMap && <div>Map: {errMap}</div>}
        </div>
      )}

      {!!nx && (
        <div className="nii-viewer__grid">
          {sliceConfigs.map(({ key, name, axisLabel, index, setIndex, max, canvasRef, coordValue }) => (
            <div key={key} className="nii-viewer__slice-container">
              <div className="nii-viewer__slice-label">{name} ({axisLabel})</div>
              <canvas 
                ref={canvasRef} 
                className="nii-viewer__canvas"
                onClick={(e)=>onCanvasClick(e, key)}
                onMouseMove={(e)=>onCanvasMouseMove(e, key)}
                onMouseEnter={(e)=>onCanvasMouseEnter(e, key)}
              />
              <div className="nii-viewer__slice-controls">
                <button
                  disabled={index <= 0}
                  onClick={() => setIndex(Math.max(0, index - 1))}
                  className="nii-viewer__button"
                >
                  −
                </button>
                <input
                  type="text"
                  value={coordValue}
                  readOnly
                  className="nii-viewer__slice-input"
                  style={{ minWidth: '6ch', textAlign: 'center', fontSize: '13px' }}
                />
                <button
                  disabled={index >= max}
                  onClick={() => setIndex(Math.min(max, index + 1))}
                  className="nii-viewer__button"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

```

修正：`getVoxelMM` 依賴 `bgRef.current`，但此時尚未設置。改用背景的 `voxelMM`：


```javascriptreact

// 顯示設定：讓 x>0 出現在畫面右側（右腦在右）
const X_RIGHT_ON_SCREEN_RIGHT = true;

import { useEffect, useMemo, useRef, useState } from 'react'
import './NiiViewer.css'
import * as nifti from 'nifti-reader-js'

const MNI_BG_URL = 'static/mni_2mm.nii.gz'

// Detect MNI152 2mm template dims & spacing (91x109x91, 2mm iso)
function isStandardMNI2mm(dims, voxelMM) {
  const okDims = Array.isArray(dims) && dims[0]===91 && dims[1]===109 && dims[2]===91;
  const okSp   = voxelMM && Math.abs(voxelMM[0]-2)<1e-3 && Math.abs(voxelMM[1]-2)<1e-3 && Math.abs(voxelMM[2]-2)<1e-3;
  return okDims && okSp;
}
// Standard MNI152 2mm affine (voxel i,j,k -> MNI mm):
// x = -2*i + 90;  y = 2*j - 126;  z = 2*k - 72
const MNI2MM = { x0: 90, y0: -126, z0: -72, vx: 2, vy: 2, vz: 2 };

export function NiiViewer({ query }) {
  const [loadingBG, setLoadingBG] = useState(false)
  const [loadingMap, setLoadingMap] = useState(false)
  const [errBG, setErrBG] = useState('')
  const [errMap, setErrMap] = useState('')

  // backend params (map generation)
  const [voxel, setVoxel] = useState(2.0)
  const [fwhm, setFwhm] = useState(10.0)
  const [kernel, setKernel] = useState('gauss')
  const [r, setR] = useState(6.0)

  // overlay controls
  const [overlayAlpha, setOverlayAlpha] = useState(0.5)
  const [posOnly, setPosOnly] = useState(true)
  const [useAbs, setUseAbs] = useState(false)
  const [thrMode, setThrMode] = useState('pctl') // default: Percentile (per request)
  const [pctl, setPctl] = useState(95)
  const [thrValue, setThrValue] = useState(0.05)     // used when mode === 'value'

  // volumes
  const bgRef  = useRef(null)   // { data, dims:[nx,ny,nz], voxelMM:[vx,vy,vz], min, max }
  const mapRef = useRef(null)   // { data, dims:[nx,ny,nz], voxelMM:[vx,vy,vz], min, max }
  const getVoxelMM = () => {
    const vm = bgRef.current?.voxelMM ?? mapRef.current?.voxelMM ?? [1,1,1]
    return { x: vm[0], y: vm[1], z: vm[2] }
  }
  const [dims, setDims] = useState([0,0,0]) // canvas dims (prefer BG; overlay only if same dims)

  // slice indices (voxel coordinates in [0..N-1])
  const [ix, setIx] = useState(0) // sagittal (X)
  const [iy, setIy] = useState(0) // coronal  (Y)
  const [iz, setIz] = useState(0) // axial    (Z)

  // track if crosshairs are locked (fixed) for each axis
  const [lockedAxes, setLockedAxes] = useState({ x: false, y: false, z: false })

  // show/hide advanced controls
  const [showAdvanced, setShowAdvanced] = useState(false)

  // input values for slice indices (for editing below images)
  const [ixInput, setIxInput] = useState('0')
  const [iyInput, setIyInput] = useState('0')
  const [izInput, setIzInput] = useState('0')

  // Neurosynth-style displayed coords: signed, centered at middle voxel
  const [cx, setCx] = useState('0')
  const [cy, setCy] = useState('0')
  const [cz, setCz] = useState('0')

  const canvases = [useRef(null), useRef(null), useRef(null)]

  const mapUrl = useMemo(() => {
    if (!query) return ''
    const u = new URL(`/query/${encodeURIComponent(query)}/nii`, window.location.origin)
    u.searchParams.set('voxel', String(voxel))
    u.searchParams.set('fwhm', String(fwhm))
    u.searchParams.set('kernel', String(kernel))
    u.searchParams.set('r', String(r))
    return u.pathname + u.search
  }, [query, voxel, fwhm, kernel, r])

  // ---------- utils ----------
  function asTypedArray (header, buffer) {
    switch (header.datatypeCode) {
      case nifti.NIFTI1.TYPE_INT8:    return new Int8Array(buffer)
      case nifti.NIFTI1.TYPE_UINT8:   return new Uint8Array(buffer)
      case nifti.NIFTI1.TYPE_INT16:   return new Int16Array(buffer)
      case nifti.NIFTI1.TYPE_UINT16:  return new Uint16Array(buffer)
      case nifti.NIFTI1.TYPE_INT32:   return new Int32Array(buffer)
      case nifti.NIFTI1.TYPE_UINT32:  return new Uint32Array(buffer)
      case nifti.NIFTI1.TYPE_FLOAT32: return new Float32Array(buffer)
      case nifti.NIFTI1.TYPE_FLOAT64: return new Float64Array(buffer)
      default: return new Float32Array(buffer)
    }
  }
  function minmax (arr) {
    let mn =  Infinity, mx = -Infinity
    for (let i = 0; i < arr.length; i++) {
      const v = arr[i]
      if (v < mn) mn = v
      if (v > mx) mx = v
    }
    return [mn, mx]
  }
  function percentile(arr, p, step=Math.ceil(arr.length/200000)) {
    if (!arr.length) return 0
    const samp = []
    for (let i=0; i<arr.length; i+=step) samp.push(arr[i])
    samp.sort((a,b)=>a-b)
    const k = Math.floor((p/100) * (samp.length - 1))
    return samp[Math.max(0, Math.min(samp.length-1, k))]
  }
  async function loadNifti(url) {
    const res = await fetch(url)
    if (!res.ok) {
      const t = await res.text().catch(()=> '')
      throw new Error(`GET ${url} → ${res.status} ${t}`)
    }
    let ab = await res.arrayBuffer()
    if (nifti.isCompressed(ab)) ab = nifti.decompress(ab)
    if (!nifti.isNIFTI(ab)) throw new Error('not a NIfTI file')
    const header = nifti.readHeader(ab)
    const image  = nifti.readImage(header, ab)
    const ta     = asTypedArray(header, image)
    let f32
    if (ta instanceof Float32Array) f32 = ta
    else if (ta instanceof Float64Array) f32 = Float32Array.from(ta)
    else {
      const [mn, mx] = minmax(ta)
      const range = (mx - mn) || 1
      f32 = new Float32Array(ta.length)
      for (let i=0;i<ta.length;i++) f32[i] = (ta[i] - mn) / range
    }
    const nx = header.dims[1] | 0
    const ny = header.dims[2] | 0
    const nz = header.dims[3] | 0
    if (!nx || !ny || !nz) throw new Error('invalid dims')
    const [mn, mx] = minmax(f32)
    const vx = Math.abs(header.pixDims?.[1] ?? 1)
    const vy = Math.abs(header.pixDims?.[2] ?? 1)
    const vz = Math.abs(header.pixDims?.[3] ?? 1)
    return { data: f32, dims:[nx,ny,nz], voxelMM:[vx,vy,vz], min: mn, max: mx }
  }

  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v))

  // helpers: convert between index [0..N-1] and neurosynth-style signed coord centered at mid voxel
  // Display conventions to match Neurosynth-like UI:
  //  - X: right-positive
  //  - Y: anterior-positive (but screen vertical is flipped), so invert sign
  //  - Z: superior-positive (also vertical), invert sign
  const AXIS_SIGN = { x: -1, y: 1, z: 1 } // X is neg for index<->coord mapping only when not using standard MNI affine
  const idx2coord = (i, n, axis) => {
    const [nx, ny, nz] = dims;
    const { x: vx, y: vy, z: vz } = getVoxelMM();
    const isStd = isStandardMNI2mm([nx, ny, nz], [vx, vy, vz]);
    if (isStd) {
      if (axis === 'x') return (-MNI2MM.vx * i + MNI2MM.x0);
      if (axis === 'y') return ( MNI2MM.vy * i + MNI2MM.y0);
      if (axis === 'z') return ( MNI2MM.vz * i + MNI2MM.z0);
    }
    const mmPerVoxel = axis === 'x' ? vx : axis === 'y' ? vy : vz;
    return AXIS_SIGN[axis] * (i - Math.floor(n/2)) * mmPerVoxel;
  }
const coord2idx = (c_mm, n, axis) => {
    const [nx, ny, nz] = dims;
    const { x: vx, y: vy, z: vz } = getVoxelMM();
    const isStd = isStandardMNI2mm([nx, ny, nz], [vx, vy, vz]);
    if (isStd) {
      let v;
      if (axis === 'x') v = ( (MNI2MM.x0 - c_mm) / MNI2MM.vx );
      else if (axis === 'y') v = ( (c_mm - MNI2MM.y0) / MNI2MM.vy );
      else v = ( (c_mm - MNI2MM.z0) / MNI2MM.vz );
      const idx = Math.round(v);
      return Math.max(0, Math.min(n-1, idx));
    }
    const mmPerVoxel = axis === 'x' ? vx : axis === 'y' ? vy : vz;
    const sign = AXIS_SIGN[axis];
    const v = (sign * (c_mm / mmPerVoxel)) + Math.floor(n/2);
    const idx = Math.round(v);
    return Math.max(0, Math.min(n-1, idx));
  }
  // load background on mount
  useEffect(() => {
    let alive = true
    setLoadingBG(true); setErrBG('')
    ;(async () => {
      try {
        const bg = await loadNifti(MNI_BG_URL)
        if (!alive) return
        bgRef.current = bg
        // Always prefer BG dims for the canvas
        setDims(bg.dims)
        const [nx,ny,nz] = bg.dims
        const [vx, vy, vz] = bg.voxelMM
        // Set coordinates to 0,0,0 instead of middle
        const isStd = isStandardMNI2mm([nx, ny, nz], [vx, vy, vz])
        if (isStd) {
          // For standard MNI, calculate indices for coordinates 0,0,0
          // x = -2*i + 90, so when x=0: i = 45
          // y = 2*j - 126, so when y=0: j = 63
          // z = 2*k - 72, so when z=0: k = 36
          const ix0 = Math.round((MNI2MM.x0 - 0) / MNI2MM.vx)
          const iy0 = Math.round((0 - MNI2MM.y0) / MNI2MM.vy)
          const iz0 = Math.round((0 - MNI2MM.z0) / MNI2MM.vz)
          setIx(Math.max(0, Math.min(nx-1, ix0)))
          setIy(Math.max(0, Math.min(ny-1, iy0)))
          setIz(Math.max(0, Math.min(nz-1, iz0)))
        } else {
          // For non-standard, use middle voxel (which should be close to 0,0,0)
          const mx = Math.floor(nx/2), my = Math.floor(ny/2), mz = Math.floor(nz/2)
          setIx(mx); setIy(my); setIz(mz)
        }
      } catch (e) {
        if (!alive) return
        setErrBG(e?.message || String(e))
        bgRef.current = null
      } finally {
        if (!alive) return
        setLoadingBG(false)
      }
    })()
    return () => { alive = false }
  }, [])

  
  // keep thrValue within current map range when map changes
  useEffect(() => {
    const mn = mapRef.current?.min ?? 0
    const mx = mapRef.current?.max ?? 1
    if (thrValue < mn || thrValue > mx) {
      setThrValue(Math.min(mx, Math.max(mn, thrValue)))
    }
  }, [mapRef.current, dims])

  // ensure thrValue defaults to 0.05 when switching to value mode
  useEffect(() => {
    if (thrMode === 'value' && thrValue === 0) {
      setThrValue(0.05)
    }
  }, [thrMode])

// load meta-analytic map when query/params change
  useEffect(() => {
    if (!mapUrl) { mapRef.current = null; return }
    let alive = true
    setLoadingMap(true); setErrMap('')
    ;(async () => {
      try {
        const mv = await loadNifti(mapUrl)
        if (!alive) return
        mapRef.current = mv
        if (!bgRef.current) {
          setDims(mv.dims)
          const [nx,ny,nz] = mv.dims
          const mx = Math.floor(nx/2), my = Math.floor(ny/2), mz = Math.floor(nz/2)
          setIx(mx); setIy(my); setIz(mz)
        }
      } catch (e) {
        if (!alive) return
        setErrMap(e?.message || String(e))
        mapRef.current = null
      } finally {
        if (!alive) return
        setLoadingMap(false)
      }
    })()
    return () => { alive = false }
  }, [mapUrl])

  const mapThreshold = useMemo(() => {
    const mv = mapRef.current
    if (!mv) return null
    if (thrMode === 'value') return Number(thrValue) || 0
    return percentile(mv.data, Math.max(0, Math.min(100, Number(pctl) || 95)))
  }, [thrMode, thrValue, pctl, mapRef.current])

  // draw one slice (upright orientation via vertical flip)
  function drawSlice (canvas, axis /* 'z' | 'y' | 'x' */, index) {
    const [nx, ny, nz] = dims
    
    // 若要讓 x>0 出現在畫面右側，就在取樣時把 X 軸做水平翻轉
    const sx = (x) => (X_RIGHT_ON_SCREEN_RIGHT ? (nx - 1 - x) : x);
    const bg  = bgRef.current
    const map = mapRef.current

    const dimsStr = dims.join('x')
    const bgOK  = !!(bg  && bg.dims.join('x')  === dimsStr)
    const mapOK = !!(map && map.dims.join('x') === dimsStr)

    let w=0, h=0, getBG=null, getMap=null
    if (axis === 'z') { w = nx; h = ny; if (bgOK)  getBG  = (x,y)=> bg.data[sx(x) + y*nx + index*nx*ny]; if (mapOK) getMap = (x,y)=> map.data[sx(x) + y*nx + index*nx*ny] }
    if (axis === 'y') { w = nx; h = nz; if (bgOK)  getBG  = (x,y)=> bg.data[sx(x) + index*nx + y*nx*ny]; if (mapOK) getMap = (x,y)=> map.data[sx(x) + index*nx + y*nx*ny] }
    if (axis === 'x') { w = ny; h = nz; if (bgOK)  getBG  = (x,y)=> bg.data[index + x*nx + y*nx*ny]; if (mapOK) getMap = (x,y)=> map.data[index + x*nx + y*nx*ny] }

    canvas.width = w; canvas.height = h
    const ctx = canvas.getContext('2d', { willReadFrequently: false })
    const img = ctx.createImageData(w, h)

    const alpha = Math.max(0, Math.min(1, overlayAlpha))
    const R = 255, G = 0, B = 0
    const thr = mapThreshold

    // background normalization based on its own min/max
    const bgMin = bg?.min ?? 0
    const bgMax = bg?.max ?? 1
    const bgRange = (bgMax - bgMin) || 1

    let p = 0
    for (let yy=0; yy<h; yy++) {
      const srcY = h - 1 - yy // flip vertically
      for (let xx=0; xx<w; xx++) {
        // For Sagittal (X) view, flip horizontally
        const srcX = (axis === 'x') ? (w - 1 - xx) : xx
        // draw background
        let gray = 0
        if (getBG) {
          const vbg = getBG(srcX, srcY)
          let g = (vbg - bgMin) / bgRange
          if (g < 0) g = 0
          if (g > 1) g = 1
          gray = (g * 255) | 0
        }
        img.data[p    ] = gray
        img.data[p + 1] = gray
        img.data[p + 2] = gray
        img.data[p + 3] = 255

        // overlay map
        if (getMap) {
          let mv = getMap(srcX, srcY)
          const raw = mv
          if (useAbs) mv = Math.abs(mv)
          let pass = (thr == null) ? (mv > 0) : (mv >= thr)
          if (posOnly && raw <= 0) pass = false
          if (pass) {
            img.data[p    ] = ((1 - alpha) * img.data[p]     + alpha * R) | 0
            img.data[p + 1] = ((1 - alpha) * img.data[p + 1] + alpha * G) | 0
            img.data[p + 2] = ((1 - alpha) * img.data[p + 2] + alpha * B) | 0
          }
        }
        p += 4
      }
    }
    ctx.putImageData(img, 0, 0)

    // draw green crosshairs
    ctx.save()
    ctx.strokeStyle = '#00ff00'
    ctx.lineWidth = 1
    let cx = 0, cy = 0
    if (axis === 'z') { // plane: X by Y
      cx = Math.max(0, Math.min(w-1, (X_RIGHT_ON_SCREEN_RIGHT ? (w - 1 - ix) : ix)))
      cy = Math.max(0, Math.min(h-1, iy))
    } else if (axis === 'y') { // plane: X by Z
      cx = Math.max(0, Math.min(w-1, (X_RIGHT_ON_SCREEN_RIGHT ? (w - 1 - ix) : ix)))
      cy = Math.max(0, Math.min(h-1, iz))
    } else { // axis === 'x' (plane: Y by Z)
      cx = Math.max(0, Math.min(w-1, w - 1 - iy)) // Flip horizontally for Sagittal view
      cy = Math.max(0, Math.min(h-1, iz))
    }
    const screenY = h - 1 - cy // account for vertical flip used when drawing
    // vertical line
    ctx.beginPath(); ctx.moveTo(cx + 0.5, 0); ctx.lineTo(cx + 0.5, h); ctx.stroke()
    // horizontal line
    ctx.beginPath(); ctx.moveTo(0, screenY + 0.5); ctx.lineTo(w, screenY + 0.5); ctx.stroke()
    ctx.restore()
  }

  // click-to-move crosshairs and lock them
  function onCanvasClick (e, axis) {
    const canvas = e.currentTarget
    const rect = canvas.getBoundingClientRect()
    const x = Math.floor((e.clientX - rect.left) * canvas.width / rect.width)
    const y = Math.floor((e.clientY - rect.top) * canvas.height / rect.height)
    const srcY = canvas.height - 1 - y // invert because we draw with vertical flip
    const [nx,ny,nz] = dims
    
    const toIdxX = (screenX) => (X_RIGHT_ON_SCREEN_RIGHT ? (nx - 1 - screenX) : screenX);
    if (axis === 'z') { 
      const xi = toIdxX(x)
      setIx(xi)
      setIy(srcY)
    }
    else if (axis === 'y') { 
      const xi = toIdxX(x)
      setIx(xi)
      setIz(srcY)
    }
    else { 
      // axis === 'x' (Sagittal): flip horizontally because image is flipped
      const flippedX = canvas.width - 1 - x
      setIy(flippedX)
      setIz(srcY)
    }
    
    // Lock this axis
    setLockedAxes(prev => ({ ...prev, [axis]: true }))
  }

  // mouse move to adjust crosshairs (only if not locked)
  function onCanvasMouseMove (e, axis) {
    if (lockedAxes[axis]) return // Skip if locked
    
    const canvas = e.currentTarget
    const rect = canvas.getBoundingClientRect()
    const x = Math.floor((e.clientX - rect.left) * canvas.width / rect.width)
    const y = Math.floor((e.clientY - rect.top) * canvas.height / rect.height)
    const srcY = canvas.height - 1 - y // invert because we draw with vertical flip
    const [nx,ny,nz] = dims
    
    const toIdxX = (screenX) => (X_RIGHT_ON_SCREEN_RIGHT ? (nx - 1 - screenX) : screenX);
    if (axis === 'z') { 
      const xi = toIdxX(x)
      setIx(xi)
      setIy(srcY)
    }
    else if (axis === 'y') { 
      const xi = toIdxX(x)
      setIx(xi)
      setIz(srcY)
    }
    else { 
      // axis === 'x' (Sagittal): flip horizontally because image is flipped
      const flippedX = canvas.width - 1 - x
      setIy(flippedX)
      setIz(srcY)
    }
  }

  // unlock crosshairs when mouse enters canvas
  function onCanvasMouseEnter (e, axis) {
    setLockedAxes(prev => ({ ...prev, [axis]: false }))
  }

  // keep display coords in sync when ix/iy/iz/dims change (e.g., after loads)
  useEffect(() => {
    const [nx,ny,nz] = dims
    if (!nx) return
    
    // Ensure refs are loaded before calculating coordinates
    const bgLoaded = bgRef.current !== null
    const mapLoaded = mapRef.current !== null
    if (!bgLoaded && !mapLoaded) return
    
    // Calculate coordinates using current indices
    setCx(String(idx2coord(ix, nx, 'x')))
    setCy(String(idx2coord(iy, ny, 'y')))
    setCz(String(idx2coord(iz, nz, 'z')))
    // Sync input values
    setIxInput(String(ix))
    setIyInput(String(iy))
    setIzInput(String(iz))
  }, [ix,iy,iz,dims, loadingBG, loadingMap])

  // commit handlers: parse signed integer, map to index, clamp to volume
  const commitCoord = (axis) => {
    const [nx,ny,nz] = dims
    let vStr = axis==='x' ? cx : axis==='y' ? cy : cz
    // allow empty / '-' temporary states
    if (vStr === '' || vStr === '-' ) return
    const parsed = parseFloat(vStr)
    if (Number.isNaN(parsed)) return
    if (axis==='x') setIx(coord2idx(parsed, nx, 'x'))
    if (axis==='y') setIy(coord2idx(parsed, ny, 'y'))
    if (axis==='z') setIz(coord2idx(parsed, nz, 'z'))
  }

  // commit handlers for slice index inputs (below images)
  const commitSliceIndex = (axis) => {
    const [nx,ny,nz] = dims
    let vStr = axis==='x' ? ixInput : axis==='y' ? iyInput : izInput
    const max = axis==='x' ? nx-1 : axis==='y' ? ny-1 : nz-1
    // allow empty temporary states
    if (vStr === '' || vStr === '-' ) return
    const parsed = parseInt(vStr, 10)
    if (Number.isNaN(parsed)) return
    const clamped = Math.max(0, Math.min(max, parsed))
    if (axis==='x') {
      setIx(clamped)
      setIxInput(String(clamped))
    }
    if (axis==='y') {
      setIy(clamped)
      setIyInput(String(clamped))
    }
    if (axis==='z') {
      setIz(clamped)
      setIzInput(String(clamped))
    }
  }

  // Handle input change and update in real-time if valid
  const handleSliceInputChange = (axis, value) => {
    const [nx,ny,nz] = dims
    const max = axis==='x' ? nx-1 : axis==='y' ? ny-1 : nz-1
    
    if (axis==='x') {
      setIxInput(value)
      const parsed = parseInt(value, 10)
      if (!Number.isNaN(parsed) && value !== '' && value !== '-') {
        const clamped = Math.max(0, Math.min(max, parsed))
        setIx(clamped)
      }
    }
    if (axis==='y') {
      setIyInput(value)
      const parsed = parseInt(value, 10)
      if (!Number.isNaN(parsed) && value !== '' && value !== '-') {
        const clamped = Math.max(0, Math.min(max, parsed))
        setIy(clamped)
      }
    }
    if (axis==='z') {
      setIzInput(value)
      const parsed = parseInt(value, 10)
      if (!Number.isNaN(parsed) && value !== '' && value !== '-') {
        const clamped = Math.max(0, Math.min(max, parsed))
        setIz(clamped)
      }
    }
  }

  // redraw on state changes
  useEffect(() => {
    const [nx, ny, nz] = dims
    if (!nx) return
    const c0 = canvases[0].current, c1 = canvases[1].current, c2 = canvases[2].current
    if (c0 && iz >=0 && iz < nz) drawSlice(c0, 'z', iz)
    if (c1 && iy >=0 && iy < ny) drawSlice(c1, 'y', iy)
    if (c2 && ix >=0 && ix < nx) drawSlice(c2, 'x', ix)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dims, ix, iy, iz,
    overlayAlpha, posOnly, useAbs, thrMode, pctl, thrValue,
    loadingBG, loadingMap, errBG, errMap, query
  ])

  const [nx, ny, nz] = dims

  // slice configs (labels only; numbers removed)
  const sliceConfigs = [
    { key: 'y', name: 'Coronal',  axisLabel: 'Y', index: iy, setIndex: setIy, max: Math.max(0, ny-1), canvasRef: canvases[1], coordValue: cy },
    { key: 'x', name: 'Sagittal', axisLabel: 'X', index: ix, setIndex: setIx, max: Math.max(0, nx-1), canvasRef: canvases[2], coordValue: cx },
    { key: 'z', name: 'Axial',    axisLabel: 'Z', index: iz, setIndex: setIz, max: Math.max(0, nz-1), canvasRef: canvases[0], coordValue: cz },
  ]

  return (
    <div className="nii-viewer">
      <div className="nii-viewer__header">
        <div className="nii-viewer__title">NIfTI Viewer</div>
        <div className="nii-viewer__header-actions">
          {query && (
            <a 
              href={mapUrl} 
              className="nii-viewer__download-link"
              download
            >
              Download map
            </a>
          )}
          <button
            className="nii-viewer__advance-button"
            onClick={() => setShowAdvanced(!showAdvanced)}
          >
            Advance
          </button>
        </div>
      </div>

      {/* --- Control Panel: All controls in one section --- */}
      <div className="nii-viewer__section">
        {/* Row 1: Threshold mode + Threshold/Percentile + Gaussian FWHM + Overlay alpha */}
        {showAdvanced && (
          <div className="nii-viewer__controls-row-top">
            <div className="nii-viewer__label">
              <span>Threshold mode</span>
              <div className="nii-viewer__mode-buttons">
                <button
                  className={`nii-viewer__mode-button ${thrMode === 'value' ? 'nii-viewer__mode-button--active' : ''}`}
                  onClick={() => setThrMode('value')}
                >
                  Value
                </button>
                <button
                  className={`nii-viewer__mode-button ${thrMode === 'pctl' ? 'nii-viewer__mode-button--active' : ''}`}
                  onClick={() => setThrMode('pctl')}
                >
                  Percentile
                </button>
              </div>
            </div>
            {thrMode === 'value' ? (
              <label className="nii-viewer__label">
                <span>Threshold</span>
                <input 
                  type="number" 
                  step="0.01" 
                  value={thrValue} 
                  onChange={e=>setThrValue(Number(e.target.value))} 
                  className="nii-viewer__input"
                  style={{ width: '112px' }}
                />
              </label>
            ) : (
              <label className="nii-viewer__label">
                <span>Percentile</span>
                <input 
                  type="number" 
                  min={50} 
                  max={99.9} 
                  step={0.5} 
                  value={pctl} 
                  onChange={e=>setPctl(Number(e.target.value)||95)} 
                  className="nii-viewer__input"
                  style={{ width: '96px' }}
                />
              </label>
            )}
            <label className="nii-viewer__label">
              <span>Gaussian FWHM:</span>
              <input 
                type="number" 
                step="0.5" 
                value={fwhm} 
                onChange={e=>setFwhm(Number(e.target.value)||0)} 
                className="nii-viewer__input"
                style={{ width: '112px' }}
              />
            </label>
            <label className="nii-viewer__label">
              <span>Overlay alpha</span>
              <input 
                type="range" 
                min={0} 
                max={1} 
                step={0.05} 
                value={overlayAlpha} 
                onChange={e=>setOverlayAlpha(Number(e.target.value))} 
                className="nii-viewer__input"
                style={{ width: '160px' }}
              />
            </label>
          </div>
        )}

        {/* Row 2: Coordinate inputs */}
        <div className="nii-viewer__controls-row">
          <label className="nii-viewer__coordinate-label">
            <span>X:</span>
            <input
              type="text" 
              inputMode="decimal" 
              pattern="-?[0-9]*([.][0-9]+)?"
              className="nii-viewer__coordinate-input"
              value={cx}
              onChange={e=>setCx(e.target.value)}
              onBlur={()=>commitCoord('x')}
              onKeyDown={e=>{ if(e.key==='Enter'){ commitCoord('x'); e.target.blur() } }}
              aria-label="X coordinate (centered)"
            />
          </label>
          <label className="nii-viewer__coordinate-label">
            <span>Y:</span>
            <input
              type="text" 
              inputMode="decimal" 
              pattern="-?[0-9]*([.][0-9]+)?"
              className="nii-viewer__coordinate-input"
              value={cy}
              onChange={e=>setCy(e.target.value)}
              onBlur={()=>commitCoord('y')}
              onKeyDown={e=>{ if(e.key==='Enter'){ commitCoord('y'); e.target.blur() } }}
              aria-label="Y coordinate (centered)"
            />
          </label>
          <label className="nii-viewer__coordinate-label">
            <span>Z:</span>
            <input
              type="text" 
              inputMode="decimal" 
              pattern="-?[0-9]*([.][0-9]+)?"
              className="nii-viewer__coordinate-input"
              value={cz}
              onChange={e=>setCz(e.target.value)}
              onBlur={()=>commitCoord('z')}
              onKeyDown={e=>{ if(e.key==='Enter'){ commitCoord('z'); e.target.blur() } }}
              aria-label="Z coordinate (centered)"
            />
          </label>
          <span className="nii-viewer__tip">Tip: Click to lock the cross.</span>
        </div>
      </div>

      {/* --- Brain views --- */}
      {(loadingBG || loadingMap) && (
        <div className="nii-viewer__skeleton-grid">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="nii-viewer__skeleton-item" />
          ))}
          <div></div>
        </div>
      )}
      {(errBG || errMap) && (
        <div className="nii-viewer__error">
          {errBG && <div>Background: {errBG}</div>}
          {errMap && <div>Map: {errMap}</div>}
        </div>
      )}

      {!!nx && (
        <div className="nii-viewer__grid">
          {sliceConfigs.map(({ key, name, axisLabel, index, setIndex, max, canvasRef, coordValue }) => (
            <div key={key} className="nii-viewer__slice-container">
              <div className="nii-viewer__slice-label">{name} ({axisLabel})</div>
              <canvas 
                ref={canvasRef} 
                className="nii-viewer__canvas"
                onClick={(e)=>onCanvasClick(e, key)}
                onMouseMove={(e)=>onCanvasMouseMove(e, key)}
                onMouseEnter={(e)=>onCanvasMouseEnter(e, key)}
              />
              <div className="nii-viewer__slice-controls">
                <button
                  disabled={index <= 0}
                  onClick={() => setIndex(Math.max(0, index - 1))}
                  className="nii-viewer__button"
                >
                  −
                </button>
                <input
                  type="text"
                  value={coordValue}
                  readOnly
                  className="nii-viewer__slice-input"
                  style={{ minWidth: '6ch', textAlign: 'center', fontSize: '13px' }}
                />
                <button
                  disabled={index >= max}
                  onClick={() => setIndex(Math.min(max, index + 1))}
                  className="nii-viewer__button"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

```

更新 map 載入邏輯，當沒有背景時也將座標設為 000：


```javascriptreact

// 顯示設定：讓 x>0 出現在畫面右側（右腦在右）
const X_RIGHT_ON_SCREEN_RIGHT = true;

import { useEffect, useMemo, useRef, useState } from 'react'
import './NiiViewer.css'
import * as nifti from 'nifti-reader-js'

const MNI_BG_URL = 'static/mni_2mm.nii.gz'

// Detect MNI152 2mm template dims & spacing (91x109x91, 2mm iso)
function isStandardMNI2mm(dims, voxelMM) {
  const okDims = Array.isArray(dims) && dims[0]===91 && dims[1]===109 && dims[2]===91;
  const okSp   = voxelMM && Math.abs(voxelMM[0]-2)<1e-3 && Math.abs(voxelMM[1]-2)<1e-3 && Math.abs(voxelMM[2]-2)<1e-3;
  return okDims && okSp;
}
// Standard MNI152 2mm affine (voxel i,j,k -> MNI mm):
// x = -2*i + 90;  y = 2*j - 126;  z = 2*k - 72
const MNI2MM = { x0: 90, y0: -126, z0: -72, vx: 2, vy: 2, vz: 2 };

export function NiiViewer({ query }) {
  const [loadingBG, setLoadingBG] = useState(false)
  const [loadingMap, setLoadingMap] = useState(false)
  const [errBG, setErrBG] = useState('')
  const [errMap, setErrMap] = useState('')

  // backend params (map generation)
  const [voxel, setVoxel] = useState(2.0)
  const [fwhm, setFwhm] = useState(10.0)
  const [kernel, setKernel] = useState('gauss')
  const [r, setR] = useState(6.0)

  // overlay controls
  const [overlayAlpha, setOverlayAlpha] = useState(0.5)
  const [posOnly, setPosOnly] = useState(true)
  const [useAbs, setUseAbs] = useState(false)
  const [thrMode, setThrMode] = useState('pctl') // default: Percentile (per request)
  const [pctl, setPctl] = useState(95)
  const [thrValue, setThrValue] = useState(0.05)     // used when mode === 'value'

  // volumes
  const bgRef  = useRef(null)   // { data, dims:[nx,ny,nz], voxelMM:[vx,vy,vz], min, max }
  const mapRef = useRef(null)   // { data, dims:[nx,ny,nz], voxelMM:[vx,vy,vz], min, max }
  const getVoxelMM = () => {
    const vm = bgRef.current?.voxelMM ?? mapRef.current?.voxelMM ?? [1,1,1]
    return { x: vm[0], y: vm[1], z: vm[2] }
  }
  const [dims, setDims] = useState([0,0,0]) // canvas dims (prefer BG; overlay only if same dims)

  // slice indices (voxel coordinates in [0..N-1])
  const [ix, setIx] = useState(0) // sagittal (X)
  const [iy, setIy] = useState(0) // coronal  (Y)
  const [iz, setIz] = useState(0) // axial    (Z)

  // track if crosshairs are locked (fixed) for each axis
  const [lockedAxes, setLockedAxes] = useState({ x: false, y: false, z: false })

  // show/hide advanced controls
  const [showAdvanced, setShowAdvanced] = useState(false)

  // input values for slice indices (for editing below images)
  const [ixInput, setIxInput] = useState('0')
  const [iyInput, setIyInput] = useState('0')
  const [izInput, setIzInput] = useState('0')

  // Neurosynth-style displayed coords: signed, centered at middle voxel
  const [cx, setCx] = useState('0')
  const [cy, setCy] = useState('0')
  const [cz, setCz] = useState('0')

  const canvases = [useRef(null), useRef(null), useRef(null)]

  const mapUrl = useMemo(() => {
    if (!query) return ''
    const u = new URL(`/query/${encodeURIComponent(query)}/nii`, window.location.origin)
    u.searchParams.set('voxel', String(voxel))
    u.searchParams.set('fwhm', String(fwhm))
    u.searchParams.set('kernel', String(kernel))
    u.searchParams.set('r', String(r))
    return u.pathname + u.search
  }, [query, voxel, fwhm, kernel, r])

  // ---------- utils ----------
  function asTypedArray (header, buffer) {
    switch (header.datatypeCode) {
      case nifti.NIFTI1.TYPE_INT8:    return new Int8Array(buffer)
      case nifti.NIFTI1.TYPE_UINT8:   return new Uint8Array(buffer)
      case nifti.NIFTI1.TYPE_INT16:   return new Int16Array(buffer)
      case nifti.NIFTI1.TYPE_UINT16:  return new Uint16Array(buffer)
      case nifti.NIFTI1.TYPE_INT32:   return new Int32Array(buffer)
      case nifti.NIFTI1.TYPE_UINT32:  return new Uint32Array(buffer)
      case nifti.NIFTI1.TYPE_FLOAT32: return new Float32Array(buffer)
      case nifti.NIFTI1.TYPE_FLOAT64: return new Float64Array(buffer)
      default: return new Float32Array(buffer)
    }
  }
  function minmax (arr) {
    let mn =  Infinity, mx = -Infinity
    for (let i = 0; i < arr.length; i++) {
      const v = arr[i]
      if (v < mn) mn = v
      if (v > mx) mx = v
    }
    return [mn, mx]
  }
  function percentile(arr, p, step=Math.ceil(arr.length/200000)) {
    if (!arr.length) return 0
    const samp = []
    for (let i=0; i<arr.length; i+=step) samp.push(arr[i])
    samp.sort((a,b)=>a-b)
    const k = Math.floor((p/100) * (samp.length - 1))
    return samp[Math.max(0, Math.min(samp.length-1, k))]
  }
  async function loadNifti(url) {
    const res = await fetch(url)
    if (!res.ok) {
      const t = await res.text().catch(()=> '')
      throw new Error(`GET ${url} → ${res.status} ${t}`)
    }
    let ab = await res.arrayBuffer()
    if (nifti.isCompressed(ab)) ab = nifti.decompress(ab)
    if (!nifti.isNIFTI(ab)) throw new Error('not a NIfTI file')
    const header = nifti.readHeader(ab)
    const image  = nifti.readImage(header, ab)
    const ta     = asTypedArray(header, image)
    let f32
    if (ta instanceof Float32Array) f32 = ta
    else if (ta instanceof Float64Array) f32 = Float32Array.from(ta)
    else {
      const [mn, mx] = minmax(ta)
      const range = (mx - mn) || 1
      f32 = new Float32Array(ta.length)
      for (let i=0;i<ta.length;i++) f32[i] = (ta[i] - mn) / range
    }
    const nx = header.dims[1] | 0
    const ny = header.dims[2] | 0
    const nz = header.dims[3] | 0
    if (!nx || !ny || !nz) throw new Error('invalid dims')
    const [mn, mx] = minmax(f32)
    const vx = Math.abs(header.pixDims?.[1] ?? 1)
    const vy = Math.abs(header.pixDims?.[2] ?? 1)
    const vz = Math.abs(header.pixDims?.[3] ?? 1)
    return { data: f32, dims:[nx,ny,nz], voxelMM:[vx,vy,vz], min: mn, max: mx }
  }

  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v))

  // helpers: convert between index [0..N-1] and neurosynth-style signed coord centered at mid voxel
  // Display conventions to match Neurosynth-like UI:
  //  - X: right-positive
  //  - Y: anterior-positive (but screen vertical is flipped), so invert sign
  //  - Z: superior-positive (also vertical), invert sign
  const AXIS_SIGN = { x: -1, y: 1, z: 1 } // X is neg for index<->coord mapping only when not using standard MNI affine
  const idx2coord = (i, n, axis) => {
    const [nx, ny, nz] = dims;
    const { x: vx, y: vy, z: vz } = getVoxelMM();
    const isStd = isStandardMNI2mm([nx, ny, nz], [vx, vy, vz]);
    if (isStd) {
      if (axis === 'x') return (-MNI2MM.vx * i + MNI2MM.x0);
      if (axis === 'y') return ( MNI2MM.vy * i + MNI2MM.y0);
      if (axis === 'z') return ( MNI2MM.vz * i + MNI2MM.z0);
    }
    const mmPerVoxel = axis === 'x' ? vx : axis === 'y' ? vy : vz;
    return AXIS_SIGN[axis] * (i - Math.floor(n/2)) * mmPerVoxel;
  }
const coord2idx = (c_mm, n, axis) => {
    const [nx, ny, nz] = dims;
    const { x: vx, y: vy, z: vz } = getVoxelMM();
    const isStd = isStandardMNI2mm([nx, ny, nz], [vx, vy, vz]);
    if (isStd) {
      let v;
      if (axis === 'x') v = ( (MNI2MM.x0 - c_mm) / MNI2MM.vx );
      else if (axis === 'y') v = ( (c_mm - MNI2MM.y0) / MNI2MM.vy );
      else v = ( (c_mm - MNI2MM.z0) / MNI2MM.vz );
      const idx = Math.round(v);
      return Math.max(0, Math.min(n-1, idx));
    }
    const mmPerVoxel = axis === 'x' ? vx : axis === 'y' ? vy : vz;
    const sign = AXIS_SIGN[axis];
    const v = (sign * (c_mm / mmPerVoxel)) + Math.floor(n/2);
    const idx = Math.round(v);
    return Math.max(0, Math.min(n-1, idx));
  }
  // load background on mount
  useEffect(() => {
    let alive = true
    setLoadingBG(true); setErrBG('')
    ;(async () => {
      try {
        const bg = await loadNifti(MNI_BG_URL)
        if (!alive) return
        bgRef.current = bg
        // Always prefer BG dims for the canvas
        setDims(bg.dims)
        const [nx,ny,nz] = bg.dims
        const [vx, vy, vz] = bg.voxelMM
        // Set coordinates to 0,0,0 instead of middle
        const isStd = isStandardMNI2mm([nx, ny, nz], [vx, vy, vz])
        if (isStd) {
          // For standard MNI, calculate indices for coordinates 0,0,0
          // x = -2*i + 90, so when x=0: i = 45
          // y = 2*j - 126, so when y=0: j = 63
          // z = 2*k - 72, so when z=0: k = 36
          const ix0 = Math.round((MNI2MM.x0 - 0) / MNI2MM.vx)
          const iy0 = Math.round((0 - MNI2MM.y0) / MNI2MM.vy)
          const iz0 = Math.round((0 - MNI2MM.z0) / MNI2MM.vz)
          setIx(Math.max(0, Math.min(nx-1, ix0)))
          setIy(Math.max(0, Math.min(ny-1, iy0)))
          setIz(Math.max(0, Math.min(nz-1, iz0)))
        } else {
          // For non-standard, use middle voxel (which should be close to 0,0,0)
          const mx = Math.floor(nx/2), my = Math.floor(ny/2), mz = Math.floor(nz/2)
          setIx(mx); setIy(my); setIz(mz)
        }
      } catch (e) {
        if (!alive) return
        setErrBG(e?.message || String(e))
        bgRef.current = null
      } finally {
        if (!alive) return
        setLoadingBG(false)
      }
    })()
    return () => { alive = false }
  }, [])

  
  // keep thrValue within current map range when map changes
  useEffect(() => {
    const mn = mapRef.current?.min ?? 0
    const mx = mapRef.current?.max ?? 1
    if (thrValue < mn || thrValue > mx) {
      setThrValue(Math.min(mx, Math.max(mn, thrValue)))
    }
  }, [mapRef.current, dims])

  // ensure thrValue defaults to 0.05 when switching to value mode
  useEffect(() => {
    if (thrMode === 'value' && thrValue === 0) {
      setThrValue(0.05)
    }
  }, [thrMode])

// load meta-analytic map when query/params change
  useEffect(() => {
    if (!mapUrl) { mapRef.current = null; return }
    let alive = true
    setLoadingMap(true); setErrMap('')
    ;(async () => {
      try {
        const mv = await loadNifti(mapUrl)
        if (!alive) return
        mapRef.current = mv
        if (!bgRef.current) {
          setDims(mv.dims)
          const [nx,ny,nz] = mv.dims
          const [vx, vy, vz] = mv.voxelMM
          // Set coordinates to 0,0,0 instead of middle
          const isStd = isStandardMNI2mm([nx, ny, nz], [vx, vy, vz])
          if (isStd) {
            // For standard MNI, calculate indices for coordinates 0,0,0
            const ix0 = Math.round((MNI2MM.x0 - 0) / MNI2MM.vx)
            const iy0 = Math.round((0 - MNI2MM.y0) / MNI2MM.vy)
            const iz0 = Math.round((0 - MNI2MM.z0) / MNI2MM.vz)
            setIx(Math.max(0, Math.min(nx-1, ix0)))
            setIy(Math.max(0, Math.min(ny-1, iy0)))
            setIz(Math.max(0, Math.min(nz-1, iz0)))
          } else {
            const mx = Math.floor(nx/2), my = Math.floor(ny/2), mz = Math.floor(nz/2)
            setIx(mx); setIy(my); setIz(mz)
          }
        }
      } catch (e) {
        if (!alive) return
        setErrMap(e?.message || String(e))
        mapRef.current = null
      } finally {
        if (!alive) return
        setLoadingMap(false)
      }
    })()
    return () => { alive = false }
  }, [mapUrl])

  const mapThreshold = useMemo(() => {
    const mv = mapRef.current
    if (!mv) return null
    if (thrMode === 'value') return Number(thrValue) || 0
    return percentile(mv.data, Math.max(0, Math.min(100, Number(pctl) || 95)))
  }, [thrMode, thrValue, pctl, mapRef.current])

  // draw one slice (upright orientation via vertical flip)
  function drawSlice (canvas, axis /* 'z' | 'y' | 'x' */, index) {
    const [nx, ny, nz] = dims
    
    // 若要讓 x>0 出現在畫面右側，就在取樣時把 X 軸做水平翻轉
    const sx = (x) => (X_RIGHT_ON_SCREEN_RIGHT ? (nx - 1 - x) : x);
    const bg  = bgRef.current
    const map = mapRef.current

    const dimsStr = dims.join('x')
    const bgOK  = !!(bg  && bg.dims.join('x')  === dimsStr)
    const mapOK = !!(map && map.dims.join('x') === dimsStr)

    let w=0, h=0, getBG=null, getMap=null
    if (axis === 'z') { w = nx; h = ny; if (bgOK)  getBG  = (x,y)=> bg.data[sx(x) + y*nx + index*nx*ny]; if (mapOK) getMap = (x,y)=> map.data[sx(x) + y*nx + index*nx*ny] }
    if (axis === 'y') { w = nx; h = nz; if (bgOK)  getBG  = (x,y)=> bg.data[sx(x) + index*nx + y*nx*ny]; if (mapOK) getMap = (x,y)=> map.data[sx(x) + index*nx + y*nx*ny] }
    if (axis === 'x') { w = ny; h = nz; if (bgOK)  getBG  = (x,y)=> bg.data[index + x*nx + y*nx*ny]; if (mapOK) getMap = (x,y)=> map.data[index + x*nx + y*nx*ny] }

    canvas.width = w; canvas.height = h
    const ctx = canvas.getContext('2d', { willReadFrequently: false })
    const img = ctx.createImageData(w, h)

    const alpha = Math.max(0, Math.min(1, overlayAlpha))
    const R = 255, G = 0, B = 0
    const thr = mapThreshold

    // background normalization based on its own min/max
    const bgMin = bg?.min ?? 0
    const bgMax = bg?.max ?? 1
    const bgRange = (bgMax - bgMin) || 1

    let p = 0
    for (let yy=0; yy<h; yy++) {
      const srcY = h - 1 - yy // flip vertically
      for (let xx=0; xx<w; xx++) {
        // For Sagittal (X) view, flip horizontally
        const srcX = (axis === 'x') ? (w - 1 - xx) : xx
        // draw background
        let gray = 0
        if (getBG) {
          const vbg = getBG(srcX, srcY)
          let g = (vbg - bgMin) / bgRange
          if (g < 0) g = 0
          if (g > 1) g = 1
          gray = (g * 255) | 0
        }
        img.data[p    ] = gray
        img.data[p + 1] = gray
        img.data[p + 2] = gray
        img.data[p + 3] = 255

        // overlay map
        if (getMap) {
          let mv = getMap(srcX, srcY)
          const raw = mv
          if (useAbs) mv = Math.abs(mv)
          let pass = (thr == null) ? (mv > 0) : (mv >= thr)
          if (posOnly && raw <= 0) pass = false
          if (pass) {
            img.data[p    ] = ((1 - alpha) * img.data[p]     + alpha * R) | 0
            img.data[p + 1] = ((1 - alpha) * img.data[p + 1] + alpha * G) | 0
            img.data[p + 2] = ((1 - alpha) * img.data[p + 2] + alpha * B) | 0
          }
        }
        p += 4
      }
    }
    ctx.putImageData(img, 0, 0)

    // draw green crosshairs
    ctx.save()
    ctx.strokeStyle = '#00ff00'
    ctx.lineWidth = 1
    let cx = 0, cy = 0
    if (axis === 'z') { // plane: X by Y
      cx = Math.max(0, Math.min(w-1, (X_RIGHT_ON_SCREEN_RIGHT ? (w - 1 - ix) : ix)))
      cy = Math.max(0, Math.min(h-1, iy))
    } else if (axis === 'y') { // plane: X by Z
      cx = Math.max(0, Math.min(w-1, (X_RIGHT_ON_SCREEN_RIGHT ? (w - 1 - ix) : ix)))
      cy = Math.max(0, Math.min(h-1, iz))
    } else { // axis === 'x' (plane: Y by Z)
      cx = Math.max(0, Math.min(w-1, w - 1 - iy)) // Flip horizontally for Sagittal view
      cy = Math.max(0, Math.min(h-1, iz))
    }
    const screenY = h - 1 - cy // account for vertical flip used when drawing
    // vertical line
    ctx.beginPath(); ctx.moveTo(cx + 0.5, 0); ctx.lineTo(cx + 0.5, h); ctx.stroke()
    // horizontal line
    ctx.beginPath(); ctx.moveTo(0, screenY + 0.5); ctx.lineTo(w, screenY + 0.5); ctx.stroke()
    ctx.restore()
  }

  // click-to-move crosshairs and lock them
  function onCanvasClick (e, axis) {
    const canvas = e.currentTarget
    const rect = canvas.getBoundingClientRect()
    const x = Math.floor((e.clientX - rect.left) * canvas.width / rect.width)
    const y = Math.floor((e.clientY - rect.top) * canvas.height / rect.height)
    const srcY = canvas.height - 1 - y // invert because we draw with vertical flip
    const [nx,ny,nz] = dims
    
    const toIdxX = (screenX) => (X_RIGHT_ON_SCREEN_RIGHT ? (nx - 1 - screenX) : screenX);
    if (axis === 'z') { 
      const xi = toIdxX(x)
      setIx(xi)
      setIy(srcY)
    }
    else if (axis === 'y') { 
      const xi = toIdxX(x)
      setIx(xi)
      setIz(srcY)
    }
    else { 
      // axis === 'x' (Sagittal): flip horizontally because image is flipped
      const flippedX = canvas.width - 1 - x
      setIy(flippedX)
      setIz(srcY)
    }
    
    // Lock this axis
    setLockedAxes(prev => ({ ...prev, [axis]: true }))
  }

  // mouse move to adjust crosshairs (only if not locked)
  function onCanvasMouseMove (e, axis) {
    if (lockedAxes[axis]) return // Skip if locked
    
    const canvas = e.currentTarget
    const rect = canvas.getBoundingClientRect()
    const x = Math.floor((e.clientX - rect.left) * canvas.width / rect.width)
    const y = Math.floor((e.clientY - rect.top) * canvas.height / rect.height)
    const srcY = canvas.height - 1 - y // invert because we draw with vertical flip
    const [nx,ny,nz] = dims
    
    const toIdxX = (screenX) => (X_RIGHT_ON_SCREEN_RIGHT ? (nx - 1 - screenX) : screenX);
    if (axis === 'z') { 
      const xi = toIdxX(x)
      setIx(xi)
      setIy(srcY)
    }
    else if (axis === 'y') { 
      const xi = toIdxX(x)
      setIx(xi)
      setIz(srcY)
    }
    else { 
      // axis === 'x' (Sagittal): flip horizontally because image is flipped
      const flippedX = canvas.width - 1 - x
      setIy(flippedX)
      setIz(srcY)
    }
  }

  // unlock crosshairs when mouse enters canvas
  function onCanvasMouseEnter (e, axis) {
    setLockedAxes(prev => ({ ...prev, [axis]: false }))
  }

  // keep display coords in sync when ix/iy/iz/dims change (e.g., after loads)
  useEffect(() => {
    const [nx,ny,nz] = dims
    if (!nx) return
    
    // Ensure refs are loaded before calculating coordinates
    const bgLoaded = bgRef.current !== null
    const mapLoaded = mapRef.current !== null
    if (!bgLoaded && !mapLoaded) return
    
    // Calculate coordinates using current indices
    setCx(String(idx2coord(ix, nx, 'x')))
    setCy(String(idx2coord(iy, ny, 'y')))
    setCz(String(idx2coord(iz, nz, 'z')))
    // Sync input values
    setIxInput(String(ix))
    setIyInput(String(iy))
    setIzInput(String(iz))
  }, [ix,iy,iz,dims, loadingBG, loadingMap])

  // commit handlers: parse signed integer, map to index, clamp to volume
  const commitCoord = (axis) => {
    const [nx,ny,nz] = dims
    let vStr = axis==='x' ? cx : axis==='y' ? cy : cz
    // allow empty / '-' temporary states
    if (vStr === '' || vStr === '-' ) return
    const parsed = parseFloat(vStr)
    if (Number.isNaN(parsed)) return
    if (axis==='x') setIx(coord2idx(parsed, nx, 'x'))
    if (axis==='y') setIy(coord2idx(parsed, ny, 'y'))
    if (axis==='z') setIz(coord2idx(parsed, nz, 'z'))
  }

  // commit handlers for slice index inputs (below images)
  const commitSliceIndex = (axis) => {
    const [nx,ny,nz] = dims
    let vStr = axis==='x' ? ixInput : axis==='y' ? iyInput : izInput
    const max = axis==='x' ? nx-1 : axis==='y' ? ny-1 : nz-1
    // allow empty temporary states
    if (vStr === '' || vStr === '-' ) return
    const parsed = parseInt(vStr, 10)
    if (Number.isNaN(parsed)) return
    const clamped = Math.max(0, Math.min(max, parsed))
    if (axis==='x') {
      setIx(clamped)
      setIxInput(String(clamped))
    }
    if (axis==='y') {
      setIy(clamped)
      setIyInput(String(clamped))
    }
    if (axis==='z') {
      setIz(clamped)
      setIzInput(String(clamped))
    }
  }

  // Handle input change and update in real-time if valid
  const handleSliceInputChange = (axis, value) => {
    const [nx,ny,nz] = dims
    const max = axis==='x' ? nx-1 : axis==='y' ? ny-1 : nz-1
    
    if (axis==='x') {
      setIxInput(value)
      const parsed = parseInt(value, 10)
      if (!Number.isNaN(parsed) && value !== '' && value !== '-') {
        const clamped = Math.max(0, Math.min(max, parsed))
        setIx(clamped)
      }
    }
    if (axis==='y') {
      setIyInput(value)
      const parsed = parseInt(value, 10)
      if (!Number.isNaN(parsed) && value !== '' && value !== '-') {
        const clamped = Math.max(0, Math.min(max, parsed))
        setIy(clamped)
      }
    }
    if (axis==='z') {
      setIzInput(value)
      const parsed = parseInt(value, 10)
      if (!Number.isNaN(parsed) && value !== '' && value !== '-') {
        const clamped = Math.max(0, Math.min(max, parsed))
        setIz(clamped)
      }
    }
  }

  // redraw on state changes
  useEffect(() => {
    const [nx, ny, nz] = dims
    if (!nx) return
    const c0 = canvases[0].current, c1 = canvases[1].current, c2 = canvases[2].current
    if (c0 && iz >=0 && iz < nz) drawSlice(c0, 'z', iz)
    if (c1 && iy >=0 && iy < ny) drawSlice(c1, 'y', iy)
    if (c2 && ix >=0 && ix < nx) drawSlice(c2, 'x', ix)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dims, ix, iy, iz,
    overlayAlpha, posOnly, useAbs, thrMode, pctl, thrValue,
    loadingBG, loadingMap, errBG, errMap, query
  ])

  const [nx, ny, nz] = dims

  // slice configs (labels only; numbers removed)
  const sliceConfigs = [
    { key: 'y', name: 'Coronal',  axisLabel: 'Y', index: iy, setIndex: setIy, max: Math.max(0, ny-1), canvasRef: canvases[1], coordValue: cy },
    { key: 'x', name: 'Sagittal', axisLabel: 'X', index: ix, setIndex: setIx, max: Math.max(0, nx-1), canvasRef: canvases[2], coordValue: cx },
    { key: 'z', name: 'Axial',    axisLabel: 'Z', index: iz, setIndex: setIz, max: Math.max(0, nz-1), canvasRef: canvases[0], coordValue: cz },
  ]

  return (
    <div className="nii-viewer">
      <div className="nii-viewer__header">
        <div className="nii-viewer__title">NIfTI Viewer</div>
        <div className="nii-viewer__header-actions">
          {query && (
            <a 
              href={mapUrl} 
              className="nii-viewer__download-link"
              download
            >
              Download map
            </a>
          )}
          <button
            className="nii-viewer__advance-button"
            onClick={() => setShowAdvanced(!showAdvanced)}
          >
            Advance
          </button>
        </div>
      </div>

      {/* --- Control Panel: All controls in one section --- */}
      <div className="nii-viewer__section">
        {/* Row 1: Threshold mode + Threshold/Percentile + Gaussian FWHM + Overlay alpha */}
        {showAdvanced && (
          <div className="nii-viewer__controls-row-top">
            <div className="nii-viewer__label">
              <span>Threshold mode</span>
              <div className="nii-viewer__mode-buttons">
                <button
                  className={`nii-viewer__mode-button ${thrMode === 'value' ? 'nii-viewer__mode-button--active' : ''}`}
                  onClick={() => setThrMode('value')}
                >
                  Value
                </button>
                <button
                  className={`nii-viewer__mode-button ${thrMode === 'pctl' ? 'nii-viewer__mode-button--active' : ''}`}
                  onClick={() => setThrMode('pctl')}
                >
                  Percentile
                </button>
              </div>
            </div>
            {thrMode === 'value' ? (
              <label className="nii-viewer__label">
                <span>Threshold</span>
                <input 
                  type="number" 
                  step="0.01" 
                  value={thrValue} 
                  onChange={e=>setThrValue(Number(e.target.value))} 
                  className="nii-viewer__input"
                  style={{ width: '112px' }}
                />
              </label>
            ) : (
              <label className="nii-viewer__label">
                <span>Percentile</span>
                <input 
                  type="number" 
                  min={50} 
                  max={99.9} 
                  step={0.5} 
                  value={pctl} 
                  onChange={e=>setPctl(Number(e.target.value)||95)} 
                  className="nii-viewer__input"
                  style={{ width: '96px' }}
                />
              </label>
            )}
            <label className="nii-viewer__label">
              <span>Gaussian FWHM:</span>
              <input 
                type="number" 
                step="0.5" 
                value={fwhm} 
                onChange={e=>setFwhm(Number(e.target.value)||0)} 
                className="nii-viewer__input"
                style={{ width: '112px' }}
              />
            </label>
            <label className="nii-viewer__label">
              <span>Overlay alpha</span>
              <input 
                type="range" 
                min={0} 
                max={1} 
                step={0.05} 
                value={overlayAlpha} 
                onChange={e=>setOverlayAlpha(Number(e.target.value))} 
                className="nii-viewer__input"
                style={{ width: '160px' }}
              />
            </label>
          </div>
        )}

        {/* Row 2: Coordinate inputs */}
        <div className="nii-viewer__controls-row">
          <label className="nii-viewer__coordinate-label">
            <span>X:</span>
            <input
              type="text" 
              inputMode="decimal" 
              pattern="-?[0-9]*([.][0-9]+)?"
              className="nii-viewer__coordinate-input"
              value={cx}
              onChange={e=>setCx(e.target.value)}
              onBlur={()=>commitCoord('x')}
              onKeyDown={e=>{ if(e.key==='Enter'){ commitCoord('x'); e.target.blur() } }}
              aria-label="X coordinate (centered)"
            />
          </label>
          <label className="nii-viewer__coordinate-label">
            <span>Y:</span>
            <input
              type="text" 
              inputMode="decimal" 
              pattern="-?[0-9]*([.][0-9]+)?"
              className="nii-viewer__coordinate-input"
              value={cy}
              onChange={e=>setCy(e.target.value)}
              onBlur={()=>commitCoord('y')}
              onKeyDown={e=>{ if(e.key==='Enter'){ commitCoord('y'); e.target.blur() } }}
              aria-label="Y coordinate (centered)"
            />
          </label>
          <label className="nii-viewer__coordinate-label">
            <span>Z:</span>
            <input
              type="text" 
              inputMode="decimal" 
              pattern="-?[0-9]*([.][0-9]+)?"
              className="nii-viewer__coordinate-input"
              value={cz}
              onChange={e=>setCz(e.target.value)}
              onBlur={()=>commitCoord('z')}
              onKeyDown={e=>{ if(e.key==='Enter'){ commitCoord('z'); e.target.blur() } }}
              aria-label="Z coordinate (centered)"
            />
          </label>
          <span className="nii-viewer__tip">Tip: Click to lock the cross.</span>
        </div>
      </div>

      {/* --- Brain views --- */}
      {(loadingBG || loadingMap) && (
        <div className="nii-viewer__skeleton-grid">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="nii-viewer__skeleton-item" />
          ))}
          <div></div>
        </div>
      )}
      {(errBG || errMap) && (
        <div className="nii-viewer__error">
          {errBG && <div>Background: {errBG}</div>}
          {errMap && <div>Map: {errMap}</div>}
        </div>
      )}

      {!!nx && (
        <div className="nii-viewer__grid">
          {sliceConfigs.map(({ key, name, axisLabel, index, setIndex, max, canvasRef, coordValue }) => (
            <div key={key} className="nii-viewer__slice-container">
              <div className="nii-viewer__slice-label">{name} ({axisLabel})</div>
              <canvas 
                ref={canvasRef} 
                className="nii-viewer__canvas"
                onClick={(e)=>onCanvasClick(e, key)}
                onMouseMove={(e)=>onCanvasMouseMove(e, key)}
                onMouseEnter={(e)=>onCanvasMouseEnter(e, key)}
              />
              <div className="nii-viewer__slice-controls">
                <button
                  disabled={index <= 0}
                  onClick={() => setIndex(Math.max(0, index - 1))}
                  className="nii-viewer__button"
                >
                  −
                </button>
                <input
                  type="text"
                  value={coordValue}
                  readOnly
                  className="nii-viewer__slice-input"
                  style={{ minWidth: '6ch', textAlign: 'center', fontSize: '13px' }}
                />
                <button
                  disabled={index >= max}
                  onClick={() => setIndex(Math.min(max, index + 1))}
                  className="nii-viewer__button"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

```

添加當 query 清空時重置座標的邏輯：


```javascriptreact

// 顯示設定：讓 x>0 出現在畫面右側（右腦在右）
const X_RIGHT_ON_SCREEN_RIGHT = true;

import { useEffect, useMemo, useRef, useState } from 'react'
import './NiiViewer.css'
import * as nifti from 'nifti-reader-js'

const MNI_BG_URL = 'static/mni_2mm.nii.gz'

// Detect MNI152 2mm template dims & spacing (91x109x91, 2mm iso)
function isStandardMNI2mm(dims, voxelMM) {
  const okDims = Array.isArray(dims) && dims[0]===91 && dims[1]===109 && dims[2]===91;
  const okSp   = voxelMM && Math.abs(voxelMM[0]-2)<1e-3 && Math.abs(voxelMM[1]-2)<1e-3 && Math.abs(voxelMM[2]-2)<1e-3;
  return okDims && okSp;
}
// Standard MNI152 2mm affine (voxel i,j,k -> MNI mm):
// x = -2*i + 90;  y = 2*j - 126;  z = 2*k - 72
const MNI2MM = { x0: 90, y0: -126, z0: -72, vx: 2, vy: 2, vz: 2 };

export function NiiViewer({ query }) {
  const [loadingBG, setLoadingBG] = useState(false)
  const [loadingMap, setLoadingMap] = useState(false)
  const [errBG, setErrBG] = useState('')
  const [errMap, setErrMap] = useState('')

  // backend params (map generation)
  const [voxel, setVoxel] = useState(2.0)
  const [fwhm, setFwhm] = useState(10.0)
  const [kernel, setKernel] = useState('gauss')
  const [r, setR] = useState(6.0)

  // overlay controls
  const [overlayAlpha, setOverlayAlpha] = useState(0.5)
  const [posOnly, setPosOnly] = useState(true)
  const [useAbs, setUseAbs] = useState(false)
  const [thrMode, setThrMode] = useState('pctl') // default: Percentile (per request)
  const [pctl, setPctl] = useState(95)
  const [thrValue, setThrValue] = useState(0.05)     // used when mode === 'value'

  // volumes
  const bgRef  = useRef(null)   // { data, dims:[nx,ny,nz], voxelMM:[vx,vy,vz], min, max }
  const mapRef = useRef(null)   // { data, dims:[nx,ny,nz], voxelMM:[vx,vy,vz], min, max }
  const getVoxelMM = () => {
    const vm = bgRef.current?.voxelMM ?? mapRef.current?.voxelMM ?? [1,1,1]
    return { x: vm[0], y: vm[1], z: vm[2] }
  }
  const [dims, setDims] = useState([0,0,0]) // canvas dims (prefer BG; overlay only if same dims)

  // slice indices (voxel coordinates in [0..N-1])
  const [ix, setIx] = useState(0) // sagittal (X)
  const [iy, setIy] = useState(0) // coronal  (Y)
  const [iz, setIz] = useState(0) // axial    (Z)

  // track if crosshairs are locked (fixed) for each axis
  const [lockedAxes, setLockedAxes] = useState({ x: false, y: false, z: false })

  // show/hide advanced controls
  const [showAdvanced, setShowAdvanced] = useState(false)

  // input values for slice indices (for editing below images)
  const [ixInput, setIxInput] = useState('0')
  const [iyInput, setIyInput] = useState('0')
  const [izInput, setIzInput] = useState('0')

  // Neurosynth-style displayed coords: signed, centered at middle voxel
  const [cx, setCx] = useState('0')
  const [cy, setCy] = useState('0')
  const [cz, setCz] = useState('0')

  const canvases = [useRef(null), useRef(null), useRef(null)]

  const mapUrl = useMemo(() => {
    if (!query) return ''
    const u = new URL(`/query/${encodeURIComponent(query)}/nii`, window.location.origin)
    u.searchParams.set('voxel', String(voxel))
    u.searchParams.set('fwhm', String(fwhm))
    u.searchParams.set('kernel', String(kernel))
    u.searchParams.set('r', String(r))
    return u.pathname + u.search
  }, [query, voxel, fwhm, kernel, r])

  // ---------- utils ----------
  function asTypedArray (header, buffer) {
    switch (header.datatypeCode) {
      case nifti.NIFTI1.TYPE_INT8:    return new Int8Array(buffer)
      case nifti.NIFTI1.TYPE_UINT8:   return new Uint8Array(buffer)
      case nifti.NIFTI1.TYPE_INT16:   return new Int16Array(buffer)
      case nifti.NIFTI1.TYPE_UINT16:  return new Uint16Array(buffer)
      case nifti.NIFTI1.TYPE_INT32:   return new Int32Array(buffer)
      case nifti.NIFTI1.TYPE_UINT32:  return new Uint32Array(buffer)
      case nifti.NIFTI1.TYPE_FLOAT32: return new Float32Array(buffer)
      case nifti.NIFTI1.TYPE_FLOAT64: return new Float64Array(buffer)
      default: return new Float32Array(buffer)
    }
  }
  function minmax (arr) {
    let mn =  Infinity, mx = -Infinity
    for (let i = 0; i < arr.length; i++) {
      const v = arr[i]
      if (v < mn) mn = v
      if (v > mx) mx = v
    }
    return [mn, mx]
  }
  function percentile(arr, p, step=Math.ceil(arr.length/200000)) {
    if (!arr.length) return 0
    const samp = []
    for (let i=0; i<arr.length; i+=step) samp.push(arr[i])
    samp.sort((a,b)=>a-b)
    const k = Math.floor((p/100) * (samp.length - 1))
    return samp[Math.max(0, Math.min(samp.length-1, k))]
  }
  async function loadNifti(url) {
    const res = await fetch(url)
    if (!res.ok) {
      const t = await res.text().catch(()=> '')
      throw new Error(`GET ${url} → ${res.status} ${t}`)
    }
    let ab = await res.arrayBuffer()
    if (nifti.isCompressed(ab)) ab = nifti.decompress(ab)
    if (!nifti.isNIFTI(ab)) throw new Error('not a NIfTI file')
    const header = nifti.readHeader(ab)
    const image  = nifti.readImage(header, ab)
    const ta     = asTypedArray(header, image)
    let f32
    if (ta instanceof Float32Array) f32 = ta
    else if (ta instanceof Float64Array) f32 = Float32Array.from(ta)
    else {
      const [mn, mx] = minmax(ta)
      const range = (mx - mn) || 1
      f32 = new Float32Array(ta.length)
      for (let i=0;i<ta.length;i++) f32[i] = (ta[i] - mn) / range
    }
    const nx = header.dims[1] | 0
    const ny = header.dims[2] | 0
    const nz = header.dims[3] | 0
    if (!nx || !ny || !nz) throw new Error('invalid dims')
    const [mn, mx] = minmax(f32)
    const vx = Math.abs(header.pixDims?.[1] ?? 1)
    const vy = Math.abs(header.pixDims?.[2] ?? 1)
    const vz = Math.abs(header.pixDims?.[3] ?? 1)
    return { data: f32, dims:[nx,ny,nz], voxelMM:[vx,vy,vz], min: mn, max: mx }
  }

  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v))

  // helpers: convert between index [0..N-1] and neurosynth-style signed coord centered at mid voxel
  // Display conventions to match Neurosynth-like UI:
  //  - X: right-positive
  //  - Y: anterior-positive (but screen vertical is flipped), so invert sign
  //  - Z: superior-positive (also vertical), invert sign
  const AXIS_SIGN = { x: -1, y: 1, z: 1 } // X is neg for index<->coord mapping only when not using standard MNI affine
  const idx2coord = (i, n, axis) => {
    const [nx, ny, nz] = dims;
    const { x: vx, y: vy, z: vz } = getVoxelMM();
    const isStd = isStandardMNI2mm([nx, ny, nz], [vx, vy, vz]);
    if (isStd) {
      if (axis === 'x') return (-MNI2MM.vx * i + MNI2MM.x0);
      if (axis === 'y') return ( MNI2MM.vy * i + MNI2MM.y0);
      if (axis === 'z') return ( MNI2MM.vz * i + MNI2MM.z0);
    }
    const mmPerVoxel = axis === 'x' ? vx : axis === 'y' ? vy : vz;
    return AXIS_SIGN[axis] * (i - Math.floor(n/2)) * mmPerVoxel;
  }
const coord2idx = (c_mm, n, axis) => {
    const [nx, ny, nz] = dims;
    const { x: vx, y: vy, z: vz } = getVoxelMM();
    const isStd = isStandardMNI2mm([nx, ny, nz], [vx, vy, vz]);
    if (isStd) {
      let v;
      if (axis === 'x') v = ( (MNI2MM.x0 - c_mm) / MNI2MM.vx );
      else if (axis === 'y') v = ( (c_mm - MNI2MM.y0) / MNI2MM.vy );
      else v = ( (c_mm - MNI2MM.z0) / MNI2MM.vz );
      const idx = Math.round(v);
      return Math.max(0, Math.min(n-1, idx));
    }
    const mmPerVoxel = axis === 'x' ? vx : axis === 'y' ? vy : vz;
    const sign = AXIS_SIGN[axis];
    const v = (sign * (c_mm / mmPerVoxel)) + Math.floor(n/2);
    const idx = Math.round(v);
    return Math.max(0, Math.min(n-1, idx));
  }
  // load background on mount
  useEffect(() => {
    let alive = true
    setLoadingBG(true); setErrBG('')
    ;(async () => {
      try {
        const bg = await loadNifti(MNI_BG_URL)
        if (!alive) return
        bgRef.current = bg
        // Always prefer BG dims for the canvas
        setDims(bg.dims)
        const [nx,ny,nz] = bg.dims
        const [vx, vy, vz] = bg.voxelMM
        // Set coordinates to 0,0,0 instead of middle
        const isStd = isStandardMNI2mm([nx, ny, nz], [vx, vy, vz])
        if (isStd) {
          // For standard MNI, calculate indices for coordinates 0,0,0
          // x = -2*i + 90, so when x=0: i = 45
          // y = 2*j - 126, so when y=0: j = 63
          // z = 2*k - 72, so when z=0: k = 36
          const ix0 = Math.round((MNI2MM.x0 - 0) / MNI2MM.vx)
          const iy0 = Math.round((0 - MNI2MM.y0) / MNI2MM.vy)
          const iz0 = Math.round((0 - MNI2MM.z0) / MNI2MM.vz)
          setIx(Math.max(0, Math.min(nx-1, ix0)))
          setIy(Math.max(0, Math.min(ny-1, iy0)))
          setIz(Math.max(0, Math.min(nz-1, iz0)))
        } else {
          // For non-standard, use middle voxel (which should be close to 0,0,0)
          const mx = Math.floor(nx/2), my = Math.floor(ny/2), mz = Math.floor(nz/2)
          setIx(mx); setIy(my); setIz(mz)
        }
      } catch (e) {
        if (!alive) return
        setErrBG(e?.message || String(e))
        bgRef.current = null
      } finally {
        if (!alive) return
        setLoadingBG(false)
      }
    })()
    return () => { alive = false }
  }, [])

  
  // keep thrValue within current map range when map changes
  useEffect(() => {
    const mn = mapRef.current?.min ?? 0
    const mx = mapRef.current?.max ?? 1
    if (thrValue < mn || thrValue > mx) {
      setThrValue(Math.min(mx, Math.max(mn, thrValue)))
    }
  }, [mapRef.current, dims])

  // ensure thrValue defaults to 0.05 when switching to value mode
  useEffect(() => {
    if (thrMode === 'value' && thrValue === 0) {
      setThrValue(0.05)
    }
  }, [thrMode])

// load meta-analytic map when query/params change
  useEffect(() => {
    if (!mapUrl) { mapRef.current = null; return }
    let alive = true
    setLoadingMap(true); setErrMap('')
    ;(async () => {
      try {
        const mv = await loadNifti(mapUrl)
        if (!alive) return
        mapRef.current = mv
        if (!bgRef.current) {
          setDims(mv.dims)
          const [nx,ny,nz] = mv.dims
          const [vx, vy, vz] = mv.voxelMM
          // Set coordinates to 0,0,0 instead of middle
          const isStd = isStandardMNI2mm([nx, ny, nz], [vx, vy, vz])
          if (isStd) {
            // For standard MNI, calculate indices for coordinates 0,0,0
            const ix0 = Math.round((MNI2MM.x0 - 0) / MNI2MM.vx)
            const iy0 = Math.round((0 - MNI2MM.y0) / MNI2MM.vy)
            const iz0 = Math.round((0 - MNI2MM.z0) / MNI2MM.vz)
            setIx(Math.max(0, Math.min(nx-1, ix0)))
            setIy(Math.max(0, Math.min(ny-1, iy0)))
            setIz(Math.max(0, Math.min(nz-1, iz0)))
          } else {
            const mx = Math.floor(nx/2), my = Math.floor(ny/2), mz = Math.floor(nz/2)
            setIx(mx); setIy(my); setIz(mz)
          }
        }
      } catch (e) {
        if (!alive) return
        setErrMap(e?.message || String(e))
        mapRef.current = null
      } finally {
        if (!alive) return
        setLoadingMap(false)
      }
    })()
    return () => { alive = false }
  }, [mapUrl])

  const mapThreshold = useMemo(() => {
    const mv = mapRef.current
    if (!mv) return null
    if (thrMode === 'value') return Number(thrValue) || 0
    return percentile(mv.data, Math.max(0, Math.min(100, Number(pctl) || 95)))
  }, [thrMode, thrValue, pctl, mapRef.current])

  // draw one slice (upright orientation via vertical flip)
  function drawSlice (canvas, axis /* 'z' | 'y' | 'x' */, index) {
    const [nx, ny, nz] = dims
    
    // 若要讓 x>0 出現在畫面右側，就在取樣時把 X 軸做水平翻轉
    const sx = (x) => (X_RIGHT_ON_SCREEN_RIGHT ? (nx - 1 - x) : x);
    const bg  = bgRef.current
    const map = mapRef.current

    const dimsStr = dims.join('x')
    const bgOK  = !!(bg  && bg.dims.join('x')  === dimsStr)
    const mapOK = !!(map && map.dims.join('x') === dimsStr)

    let w=0, h=0, getBG=null, getMap=null
    if (axis === 'z') { w = nx; h = ny; if (bgOK)  getBG  = (x,y)=> bg.data[sx(x) + y*nx + index*nx*ny]; if (mapOK) getMap = (x,y)=> map.data[sx(x) + y*nx + index*nx*ny] }
    if (axis === 'y') { w = nx; h = nz; if (bgOK)  getBG  = (x,y)=> bg.data[sx(x) + index*nx + y*nx*ny]; if (mapOK) getMap = (x,y)=> map.data[sx(x) + index*nx + y*nx*ny] }
    if (axis === 'x') { w = ny; h = nz; if (bgOK)  getBG  = (x,y)=> bg.data[index + x*nx + y*nx*ny]; if (mapOK) getMap = (x,y)=> map.data[index + x*nx + y*nx*ny] }

    canvas.width = w; canvas.height = h
    const ctx = canvas.getContext('2d', { willReadFrequently: false })
    const img = ctx.createImageData(w, h)

    const alpha = Math.max(0, Math.min(1, overlayAlpha))
    const R = 255, G = 0, B = 0
    const thr = mapThreshold

    // background normalization based on its own min/max
    const bgMin = bg?.min ?? 0
    const bgMax = bg?.max ?? 1
    const bgRange = (bgMax - bgMin) || 1

    let p = 0
    for (let yy=0; yy<h; yy++) {
      const srcY = h - 1 - yy // flip vertically
      for (let xx=0; xx<w; xx++) {
        // For Sagittal (X) view, flip horizontally
        const srcX = (axis === 'x') ? (w - 1 - xx) : xx
        // draw background
        let gray = 0
        if (getBG) {
          const vbg = getBG(srcX, srcY)
          let g = (vbg - bgMin) / bgRange
          if (g < 0) g = 0
          if (g > 1) g = 1
          gray = (g * 255) | 0
        }
        img.data[p    ] = gray
        img.data[p + 1] = gray
        img.data[p + 2] = gray
        img.data[p + 3] = 255

        // overlay map
        if (getMap) {
          let mv = getMap(srcX, srcY)
          const raw = mv
          if (useAbs) mv = Math.abs(mv)
          let pass = (thr == null) ? (mv > 0) : (mv >= thr)
          if (posOnly && raw <= 0) pass = false
          if (pass) {
            img.data[p    ] = ((1 - alpha) * img.data[p]     + alpha * R) | 0
            img.data[p + 1] = ((1 - alpha) * img.data[p + 1] + alpha * G) | 0
            img.data[p + 2] = ((1 - alpha) * img.data[p + 2] + alpha * B) | 0
          }
        }
        p += 4
      }
    }
    ctx.putImageData(img, 0, 0)

    // draw green crosshairs
    ctx.save()
    ctx.strokeStyle = '#00ff00'
    ctx.lineWidth = 1
    let cx = 0, cy = 0
    if (axis === 'z') { // plane: X by Y
      cx = Math.max(0, Math.min(w-1, (X_RIGHT_ON_SCREEN_RIGHT ? (w - 1 - ix) : ix)))
      cy = Math.max(0, Math.min(h-1, iy))
    } else if (axis === 'y') { // plane: X by Z
      cx = Math.max(0, Math.min(w-1, (X_RIGHT_ON_SCREEN_RIGHT ? (w - 1 - ix) : ix)))
      cy = Math.max(0, Math.min(h-1, iz))
    } else { // axis === 'x' (plane: Y by Z)
      cx = Math.max(0, Math.min(w-1, w - 1 - iy)) // Flip horizontally for Sagittal view
      cy = Math.max(0, Math.min(h-1, iz))
    }
    const screenY = h - 1 - cy // account for vertical flip used when drawing
    // vertical line
    ctx.beginPath(); ctx.moveTo(cx + 0.5, 0); ctx.lineTo(cx + 0.5, h); ctx.stroke()
    // horizontal line
    ctx.beginPath(); ctx.moveTo(0, screenY + 0.5); ctx.lineTo(w, screenY + 0.5); ctx.stroke()
    ctx.restore()
  }

  // click-to-move crosshairs and lock them
  function onCanvasClick (e, axis) {
    const canvas = e.currentTarget
    const rect = canvas.getBoundingClientRect()
    const x = Math.floor((e.clientX - rect.left) * canvas.width / rect.width)
    const y = Math.floor((e.clientY - rect.top) * canvas.height / rect.height)
    const srcY = canvas.height - 1 - y // invert because we draw with vertical flip
    const [nx,ny,nz] = dims
    
    const toIdxX = (screenX) => (X_RIGHT_ON_SCREEN_RIGHT ? (nx - 1 - screenX) : screenX);
    if (axis === 'z') { 
      const xi = toIdxX(x)
      setIx(xi)
      setIy(srcY)
    }
    else if (axis === 'y') { 
      const xi = toIdxX(x)
      setIx(xi)
      setIz(srcY)
    }
    else { 
      // axis === 'x' (Sagittal): flip horizontally because image is flipped
      const flippedX = canvas.width - 1 - x
      setIy(flippedX)
      setIz(srcY)
    }
    
    // Lock this axis
    setLockedAxes(prev => ({ ...prev, [axis]: true }))
  }

  // mouse move to adjust crosshairs (only if not locked)
  function onCanvasMouseMove (e, axis) {
    if (lockedAxes[axis]) return // Skip if locked
    
    const canvas = e.currentTarget
    const rect = canvas.getBoundingClientRect()
    const x = Math.floor((e.clientX - rect.left) * canvas.width / rect.width)
    const y = Math.floor((e.clientY - rect.top) * canvas.height / rect.height)
    const srcY = canvas.height - 1 - y // invert because we draw with vertical flip
    const [nx,ny,nz] = dims
    
    const toIdxX = (screenX) => (X_RIGHT_ON_SCREEN_RIGHT ? (nx - 1 - screenX) : screenX);
    if (axis === 'z') { 
      const xi = toIdxX(x)
      setIx(xi)
      setIy(srcY)
    }
    else if (axis === 'y') { 
      const xi = toIdxX(x)
      setIx(xi)
      setIz(srcY)
    }
    else { 
      // axis === 'x' (Sagittal): flip horizontally because image is flipped
      const flippedX = canvas.width - 1 - x
      setIy(flippedX)
      setIz(srcY)
    }
  }

  // unlock crosshairs when mouse enters canvas
  function onCanvasMouseEnter (e, axis) {
    setLockedAxes(prev => ({ ...prev, [axis]: false }))
  }

  // Reset coordinates to 0,0,0 when query is cleared
  useEffect(() => {
    if (!query && dims[0] > 0) {
      const [nx, ny, nz] = dims
      const bg = bgRef.current
      if (bg) {
        const [vx, vy, vz] = bg.voxelMM
        const isStd = isStandardMNI2mm([nx, ny, nz], [vx, vy, vz])
        if (isStd) {
          // For standard MNI, calculate indices for coordinates 0,0,0
          const ix0 = Math.round((MNI2MM.x0 - 0) / MNI2MM.vx)
          const iy0 = Math.round((0 - MNI2MM.y0) / MNI2MM.vy)
          const iz0 = Math.round((0 - MNI2MM.z0) / MNI2MM.vz)
          setIx(Math.max(0, Math.min(nx-1, ix0)))
          setIy(Math.max(0, Math.min(ny-1, iy0)))
          setIz(Math.max(0, Math.min(nz-1, iz0)))
        } else {
          const mx = Math.floor(nx/2), my = Math.floor(ny/2), mz = Math.floor(nz/2)
          setIx(mx); setIy(my); setIz(mz)
        }
      }
    }
  }, [query, dims])

  // keep display coords in sync when ix/iy/iz/dims change (e.g., after loads)
  useEffect(() => {
    const [nx,ny,nz] = dims
    if (!nx) return
    
    // Ensure refs are loaded before calculating coordinates
    const bgLoaded = bgRef.current !== null
    const mapLoaded = mapRef.current !== null
    if (!bgLoaded && !mapLoaded) return
    
    // Calculate coordinates using current indices
    setCx(String(idx2coord(ix, nx, 'x')))
    setCy(String(idx2coord(iy, ny, 'y')))
    setCz(String(idx2coord(iz, nz, 'z')))
    // Sync input values
    setIxInput(String(ix))
    setIyInput(String(iy))
    setIzInput(String(iz))
  }, [ix,iy,iz,dims, loadingBG, loadingMap])

  // commit handlers: parse signed integer, map to index, clamp to volume
  const commitCoord = (axis) => {
    const [nx,ny,nz] = dims
    let vStr = axis==='x' ? cx : axis==='y' ? cy : cz
    // allow empty / '-' temporary states
    if (vStr === '' || vStr === '-' ) return
    const parsed = parseFloat(vStr)
    if (Number.isNaN(parsed)) return
    if (axis==='x') setIx(coord2idx(parsed, nx, 'x'))
    if (axis==='y') setIy(coord2idx(parsed, ny, 'y'))
    if (axis==='z') setIz(coord2idx(parsed, nz, 'z'))
  }

  // commit handlers for slice index inputs (below images)
  const commitSliceIndex = (axis) => {
    const [nx,ny,nz] = dims
    let vStr = axis==='x' ? ixInput : axis==='y' ? iyInput : izInput
    const max = axis==='x' ? nx-1 : axis==='y' ? ny-1 : nz-1
    // allow empty temporary states
    if (vStr === '' || vStr === '-' ) return
    const parsed = parseInt(vStr, 10)
    if (Number.isNaN(parsed)) return
    const clamped = Math.max(0, Math.min(max, parsed))
    if (axis==='x') {
      setIx(clamped)
      setIxInput(String(clamped))
    }
    if (axis==='y') {
      setIy(clamped)
      setIyInput(String(clamped))
    }
    if (axis==='z') {
      setIz(clamped)
      setIzInput(String(clamped))
    }
  }

  // Handle input change and update in real-time if valid
  const handleSliceInputChange = (axis, value) => {
    const [nx,ny,nz] = dims
    const max = axis==='x' ? nx-1 : axis==='y' ? ny-1 : nz-1
    
    if (axis==='x') {
      setIxInput(value)
      const parsed = parseInt(value, 10)
      if (!Number.isNaN(parsed) && value !== '' && value !== '-') {
        const clamped = Math.max(0, Math.min(max, parsed))
        setIx(clamped)
      }
    }
    if (axis==='y') {
      setIyInput(value)
      const parsed = parseInt(value, 10)
      if (!Number.isNaN(parsed) && value !== '' && value !== '-') {
        const clamped = Math.max(0, Math.min(max, parsed))
        setIy(clamped)
      }
    }
    if (axis==='z') {
      setIzInput(value)
      const parsed = parseInt(value, 10)
      if (!Number.isNaN(parsed) && value !== '' && value !== '-') {
        const clamped = Math.max(0, Math.min(max, parsed))
        setIz(clamped)
      }
    }
  }

  // redraw on state changes
  useEffect(() => {
    const [nx, ny, nz] = dims
    if (!nx) return
    const c0 = canvases[0].current, c1 = canvases[1].current, c2 = canvases[2].current
    if (c0 && iz >=0 && iz < nz) drawSlice(c0, 'z', iz)
    if (c1 && iy >=0 && iy < ny) drawSlice(c1, 'y', iy)
    if (c2 && ix >=0 && ix < nx) drawSlice(c2, 'x', ix)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dims, ix, iy, iz,
    overlayAlpha, posOnly, useAbs, thrMode, pctl, thrValue,
    loadingBG, loadingMap, errBG, errMap, query
  ])

  const [nx, ny, nz] = dims

  // slice configs (labels only; numbers removed)
  const sliceConfigs = [
    { key: 'y', name: 'Coronal',  axisLabel: 'Y', index: iy, setIndex: setIy, max: Math.max(0, ny-1), canvasRef: canvases[1], coordValue: cy },
    { key: 'x', name: 'Sagittal', axisLabel: 'X', index: ix, setIndex: setIx, max: Math.max(0, nx-1), canvasRef: canvases[2], coordValue: cx },
    { key: 'z', name: 'Axial',    axisLabel: 'Z', index: iz, setIndex: setIz, max: Math.max(0, nz-1), canvasRef: canvases[0], coordValue: cz },
  ]

  return (
    <div className="nii-viewer">
      <div className="nii-viewer__header">
        <div className="nii-viewer__title">NIfTI Viewer</div>
        <div className="nii-viewer__header-actions">
          {query && (
            <a 
              href={mapUrl} 
              className="nii-viewer__download-link"
              download
            >
              Download map
            </a>
          )}
          <button
            className="nii-viewer__advance-button"
            onClick={() => setShowAdvanced(!showAdvanced)}
          >
            Advance
          </button>
        </div>
      </div>

      {/* --- Control Panel: All controls in one section --- */}
      <div className="nii-viewer__section">
        {/* Row 1: Threshold mode + Threshold/Percentile + Gaussian FWHM + Overlay alpha */}
        {showAdvanced && (
          <div className="nii-viewer__controls-row-top">
            <div className="nii-viewer__label">
              <span>Threshold mode</span>
              <div className="nii-viewer__mode-buttons">
                <button
                  className={`nii-viewer__mode-button ${thrMode === 'value' ? 'nii-viewer__mode-button--active' : ''}`}
                  onClick={() => setThrMode('value')}
                >
                  Value
                </button>
                <button
                  className={`nii-viewer__mode-button ${thrMode === 'pctl' ? 'nii-viewer__mode-button--active' : ''}`}
                  onClick={() => setThrMode('pctl')}
                >
                  Percentile
                </button>
              </div>
            </div>
            {thrMode === 'value' ? (
              <label className="nii-viewer__label">
                <span>Threshold</span>
                <input 
                  type="number" 
                  step="0.01" 
                  value={thrValue} 
                  onChange={e=>setThrValue(Number(e.target.value))} 
                  className="nii-viewer__input"
                  style={{ width: '112px' }}
                />
              </label>
            ) : (
              <label className="nii-viewer__label">
                <span>Percentile</span>
                <input 
                  type="number" 
                  min={50} 
                  max={99.9} 
                  step={0.5} 
                  value={pctl} 
                  onChange={e=>setPctl(Number(e.target.value)||95)} 
                  className="nii-viewer__input"
                  style={{ width: '96px' }}
                />
              </label>
            )}
            <label className="nii-viewer__label">
              <span>Gaussian FWHM:</span>
              <input 
                type="number" 
                step="0.5" 
                value={fwhm} 
                onChange={e=>setFwhm(Number(e.target.value)||0)} 
                className="nii-viewer__input"
                style={{ width: '112px' }}
              />
            </label>
            <label className="nii-viewer__label">
              <span>Overlay alpha</span>
              <input 
                type="range" 
                min={0} 
                max={1} 
                step={0.05} 
                value={overlayAlpha} 
                onChange={e=>setOverlayAlpha(Number(e.target.value))} 
                className="nii-viewer__input"
                style={{ width: '160px' }}
              />
            </label>
          </div>
        )}

        {/* Row 2: Coordinate inputs */}
        <div className="nii-viewer__controls-row">
          <label className="nii-viewer__coordinate-label">
            <span>X:</span>
            <input
              type="text" 
              inputMode="decimal" 
              pattern="-?[0-9]*([.][0-9]+)?"
              className="nii-viewer__coordinate-input"
              value={cx}
              onChange={e=>setCx(e.target.value)}
              onBlur={()=>commitCoord('x')}
              onKeyDown={e=>{ if(e.key==='Enter'){ commitCoord('x'); e.target.blur() } }}
              aria-label="X coordinate (centered)"
            />
          </label>
          <label className="nii-viewer__coordinate-label">
            <span>Y:</span>
            <input
              type="text" 
              inputMode="decimal" 
              pattern="-?[0-9]*([.][0-9]+)?"
              className="nii-viewer__coordinate-input"
              value={cy}
              onChange={e=>setCy(e.target.value)}
              onBlur={()=>commitCoord('y')}
              onKeyDown={e=>{ if(e.key==='Enter'){ commitCoord('y'); e.target.blur() } }}
              aria-label="Y coordinate (centered)"
            />
          </label>
          <label className="nii-viewer__coordinate-label">
            <span>Z:</span>
            <input
              type="text" 
              inputMode="decimal" 
              pattern="-?[0-9]*([.][0-9]+)?"
              className="nii-viewer__coordinate-input"
              value={cz}
              onChange={e=>setCz(e.target.value)}
              onBlur={()=>commitCoord('z')}
              onKeyDown={e=>{ if(e.key==='Enter'){ commitCoord('z'); e.target.blur() } }}
              aria-label="Z coordinate (centered)"
            />
          </label>
          <span className="nii-viewer__tip">Tip: Click to lock the cross.</span>
        </div>
      </div>

      {/* --- Brain views --- */}
      {(loadingBG || loadingMap) && (
        <div className="nii-viewer__skeleton-grid">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="nii-viewer__skeleton-item" />
          ))}
          <div></div>
        </div>
      )}
      {(errBG || errMap) && (
        <div className="nii-viewer__error">
          {errBG && <div>Background: {errBG}</div>}
          {errMap && <div>Map: {errMap}</div>}
        </div>
      )}

      {!!nx && (
        <div className="nii-viewer__grid">
          {sliceConfigs.map(({ key, name, axisLabel, index, setIndex, max, canvasRef, coordValue }) => (
            <div key={key} className="nii-viewer__slice-container">
              <div className="nii-viewer__slice-label">{name} ({axisLabel})</div>
              <canvas 
                ref={canvasRef} 
                className="nii-viewer__canvas"
                onClick={(e)=>onCanvasClick(e, key)}
                onMouseMove={(e)=>onCanvasMouseMove(e, key)}
                onMouseEnter={(e)=>onCanvasMouseEnter(e, key)}
              />
              <div className="nii-viewer__slice-controls">
                <button
                  disabled={index <= 0}
                  onClick={() => setIndex(Math.max(0, index - 1))}
                  className="nii-viewer__button"
                >
                  −
                </button>
                <input
                  type="text"
                  value={coordValue}
                  readOnly
                  className="nii-viewer__slice-input"
                  style={{ minWidth: '6ch', textAlign: 'center', fontSize: '13px' }}
                />
                <button
                  disabled={index >= max}
                  onClick={() => setIndex(Math.min(max, index + 1))}
                  className="nii-viewer__button"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

```

已修改 NIfTI Viewer，確保重置時座標顯示為 000。

## 修改內容

### NiiViewer.jsx

1. **背景載入時設置座標為 0,0,0**：
   - 使用標準 MNI 2mm 模板時，計算對應於座標 0,0,0 的索引
   - 使用公式：`ix = (90 - 0) / 2 = 45`, `iy = (0 - (-126)) / 2 = 63`, `iz = (0 - (-72)) / 2 = 36`

2. **Map 載入時也設置為 0,0,0**：
   - 若沒有背景圖，載入 map 時也設置為 0,0,0 對應的索引

3. **添加 query 清空時的座標重置**：
   - 新增 `useEffect`：當 `query` 為空且 `dims` 已設置時，自動重置座標為 0,0,0

現在當點擊 Start 或 logo 時：
- 組件會通過 `key` prop 重新掛載
- 背景載入時會設置座標為 0,0,0 對應的索引
- 如果 query 被清空，也會觸發座標重置

NIfTI Viewer 的座標現在會正確重置為 000。

---

**User**

@Logo.css @Logo.jsx 幫我新增一個彩蛋功能是logo的圖標點擊下去會放超級大

---

**Cursor**


為 Logo 添加點擊放大彩蛋功能：


```javascriptreact
import { useState } from 'react'
import './Logo.css'

export function Logo({ onClick, className = '' }) {
  const [isExploded, setIsExploded] = useState(false)

  const handleClick = (e) => {
    // 觸發彩蛋效果
    setIsExploded(true)
    
    // 恢復正常大小
    setTimeout(() => {
      setIsExploded(false)
    }, 1000)

    // 執行原有的 onClick 回調
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <div className={`logo-container ${className} ${isExploded ? 'logo-container--exploded' : ''}`}>
      <img 
        src="/logo.svg" 
        alt="LoTUS Logo" 
        className={`logo ${isExploded ? 'logo--exploded' : ''}`}
        onClick={handleClick}
        onError={(e) => {
          console.error('Failed to load logo.svg from /logo.svg, trying /lotus-bf/logo.svg')
          e.target.src = '/lotus-bf/logo.svg'
        }}
      />
    </div>
  )
}


```

```css
.logo-container {
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
}

.logo-container:hover {
  transform: scale(1.1) rotate(5deg);
}

.logo-container--exploded {
  z-index: 9999;
}

.logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease, filter 0.3s ease;
}

.logo:hover {
  filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.2));
}

.logo--exploded {
  animation: explode 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  transform-origin: center center;
}

@keyframes explode {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(15);
  }
  100% {
    transform: scale(1);
  }
}

/* Landing page specific positioning */
.logo-container.logo--landing {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}

.logo-container.logo--landing.logo-container--exploded {
  z-index: 9999;
}

/* Responsive design */
@media (max-width: 768px) {
  .logo {
    width: 60px;
    height: 60px;
  }
}


```

已為 Logo 新增彩蛋功能。修改如下：

## 修改內容

### Logo.jsx
1. **新增狀態管理**：
   - 使用 `useState` 管理 `isExploded` 狀態，追蹤是否正在執行爆炸動畫

2. **新增點擊處理函數**：
   - `handleClick` 函數：
     - 設置 `isExploded` 為 `true` 觸發動畫
     - 1 秒後恢復正常狀態
     - 執行原有的 `onClick` 回調

3. **添加 CSS 類名**：
   - 根據 `isExploded` 狀態動態添加 `logo-container--exploded` 和 `logo--exploded` 類名

### Logo.css
1. **新增爆炸動畫**：
   - `@keyframes explode` 動畫：
     - 0%：原始大小
     - 50%：放大到 15 倍
     - 100%：恢復原始大小
   - 使用 `cubic-bezier(0.34, 1.56, 0.64, 1)` 緩動函數，產生彈跳效果

2. **樣式調整**：
   - 添加 `logo-container--exploded` 類，設置 `z-index: 9999` 確保動畫時在最上層
   - 添加 `logo--exploded` 類應用動畫
   - 設置 `transform-origin: center center` 確保從中心放大

現在點擊 logo 時會：
- 在 0.5 秒內放大到 15 倍
- 然後恢復到原始大小
- 動畫持續 1 秒
- 原有的 `onClick` 功能仍會正常執行

彩蛋功能已完成。

---

**User**

我好像沒有看到這個功能

---

**Cursor**


檢查 Logo 組件在哪些地方被使用，確認彩蛋功能是否正確應用：


AppHeader 使用的是 `<img>` 而非 Logo 組件。改為使用 Logo 組件：


```javascriptreact
import './AppHeader.css'
import { Logo } from './Logo'

export function AppHeader({ onLogoClick }) {
  return (
    <header className="app-header">
      <div className="app-header__content">
        <Logo onClick={onLogoClick} />
        <div className="app-header__text">
          <h1 className="app-header__title">LoTUS-BF</h1>
          <div className="app-header__subtitle">
            Location-or-Term Unified Search for Brain Functions
          </div>
        </div>
      </div>
    </header>
  )
}


```

調整 Logo 組件在 AppHeader 中的樣式，使其與原設計一致：


```css
.logo-container {
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
  display: inline-block;
}

.logo-container:hover {
  transform: scale(1.1) rotate(5deg);
}

.logo-container--exploded {
  z-index: 9999;
}

.logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease, filter 0.3s ease;
  display: block;
}

.logo:hover {
  filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.2));
}

.logo--exploded {
  animation: explode 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  transform-origin: center center;
}

@keyframes explode {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(15);
  }
  100% {
    transform: scale(1);
  }
}

/* Landing page specific positioning */
.logo-container.logo--landing {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}

.logo-container.logo--landing.logo-container--exploded {
  z-index: 9999;
}

/* Responsive design */
@media (max-width: 768px) {
  .logo {
    width: 60px;
    height: 60px;
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
  background: #C7C7E2;
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

/* Style Logo component in AppHeader */
.app-header__content .logo-container .logo {
  width: 50px;
  height: 50px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.app-header__content .logo-container:hover .logo {
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

調整動畫，確保在 AppHeader 中也能正確顯示：


```css
.logo-container {
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
  display: inline-block;
}

.logo-container:hover {
  transform: scale(1.1) rotate(5deg);
}

.logo-container--exploded {
  z-index: 9999;
}

.logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease, filter 0.3s ease;
  display: block;
}

.logo:hover {
  filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.2));
}

.logo--exploded {
  animation: explode 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards !important;
  transform-origin: center center;
  position: relative;
  z-index: 9999;
}

@keyframes explode {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(15);
  }
  100% {
    transform: scale(1);
  }
}

/* Landing page specific positioning */
.logo-container.logo--landing {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}

.logo-container.logo--landing.logo-container--exploded {
  z-index: 9999;
}

/* Responsive design */
@media (max-width: 768px) {
  .logo {
    width: 60px;
    height: 60px;
  }
}


```

```css
.logo-container {
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
  display: inline-block;
}

.logo-container:hover {
  transform: scale(1.1) rotate(5deg);
}

.logo-container--exploded {
  z-index: 9999;
}

.logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease, filter 0.3s ease;
  display: block;
}

.logo:hover {
  filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.2));
}

.logo--exploded {
  animation: explode 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards !important;
  transform-origin: center center;
  position: relative;
  z-index: 9999;
}

@keyframes explode {
  0% {
    transform: scale(1) !important;
  }
  50% {
    transform: scale(15) !important;
  }
  100% {
    transform: scale(1) !important;
  }
}

/* Landing page specific positioning */
.logo-container.logo--landing {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}

.logo-container.logo--landing.logo-container--exploded {
  z-index: 9999;
}

/* Responsive design */
@media (max-width: 768px) {
  .logo {
    width: 60px;
    height: 60px;
  }
}


```

已修復彩蛋功能。變更如下：

## 修改內容

### AppHeader.jsx
- 將 `<img>` 標籤替換為 `Logo` 組件
- 導入並使用 `Logo` 組件以應用彩蛋功能

### AppHeader.css
- 移除 `.app-header__logo` 樣式（因為現在使用 Logo 組件）
- 添加針對 AppHeader 中 Logo 組件的樣式，保持 50x50px 大小

### Logo.css
- 在動畫中添加 `!important` 確保動畫能正確執行
- 調整 `logo--exploded` 類的 z-index，確保動畫時在最上層
- 添加 `display: inline-block` 和 `display: block` 確保正確顯示

現在點擊 logo（無論在 AppHeader 還是在 Landing Page）時：
- 會觸發爆炸動畫
- Logo 會在 0.5 秒內放大到 15 倍
- 然後恢復到原始大小
- 動畫持續 1 秒

請點擊 logo 測試，應能看到放大效果。

---

**User**

@Terms.css @Terms.jsx 我要新增一個彩蛋做成component 當使用者在terms搜尋欄位搜尋 LoTUS-BF並按下enter時 畫面要跳出滿版的@LoTUS.png 並下落下粉紅色的粒子特效

---

**Cursor**


檢查 Terms 組件結構，準備新增彩蛋功能：當搜尋「LoTUS-BF」並按下 Enter 時，顯示全螢幕 LoTUS.png 與粉紅色粒子下落特效。


```javascriptreact
import { useEffect, useRef, useState } from 'react'
import './EasterEgg.css'

export function EasterEgg({ onClose }) {
  const canvasRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 150

    // 創建粉紅色粒子
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height, // 從上方開始
        size: Math.random() * 8 + 4,
        speedY: Math.random() * 3 + 2,
        speedX: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.8 + 0.2,
        hue: Math.random() * 40 + 320, // 粉紅色範圍 (320-360)
        saturation: Math.random() * 30 + 50, // 50-80%
        lightness: Math.random() * 20 + 60, // 60-80%
      })
    }

    function animate() {
      if (!isVisible) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 更新和繪製粒子
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        
        // 更新位置
        p.y += p.speedY
        p.x += p.speedX

        // 如果粒子超出底部，重新從頂部開始
        if (p.y > canvas.height) {
          p.y = -p.size
          p.x = Math.random() * canvas.width
        }

        // 繪製粒子
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, ${p.opacity})`
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // 處理視窗大小變化
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [isVisible])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      if (onClose) onClose()
    }, 300)
  }

  return (
    <div className={`easter-egg ${isVisible ? 'easter-egg--visible' : 'easter-egg--hidden'}`}>
      <canvas ref={canvasRef} className="easter-egg__canvas" />
      <div className="easter-egg__content">
        <img 
          src="/LoTUS.png" 
          alt="LoTUS" 
          className="easter-egg__image"
          onError={(e) => {
            console.error('Failed to load LoTUS.png')
          }}
        />
        <button 
          className="easter-egg__close"
          onClick={handleClose}
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  )
}

```

```css
.easter-egg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.easter-egg--visible {
  opacity: 1;
  pointer-events: all;
}

.easter-egg--hidden {
  opacity: 0;
  pointer-events: none;
}

.easter-egg__canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.easter-egg__content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.easter-egg__image {
  max-width: 90vw;
  max-height: 90vh;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));
  animation: floatIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes floatIn {
  0% {
    transform: scale(0.5) translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.easter-egg__close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  font-size: 32px;
  font-weight: 300;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 3;
}

.easter-egg__close:hover {
  background: white;
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}

.easter-egg__close:active {
  transform: scale(0.95);
}

```

在 Terms.jsx 中添加 Enter 鍵監聽，並在 App.jsx 中整合彩蛋組件：


```javascriptreact
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

```

```javascriptreact
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

```

在 App.jsx 中整合彩蛋組件：


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
        <Terms key={`terms-${resetKey}`} onPickTerm={handlePickTerm} />
      </div>

      <main className={`app__grid ${isDragging ? 'app__grid--dragging' : ''}`} ref={gridRef}>
        <Card className="card--stack card--no-border" style={{ flexBasis: `${sizes[0]}%` }}>
          <CardTitle>Query Builder</CardTitle>
          <QueryBuilder key={`querybuilder-${resetKey}`} query={query} setQuery={setQuery} />
          <CardTitle>Studies</CardTitle>
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
    </div>
  )
}

```

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
        <Terms key={`terms-${resetKey}`} onPickTerm={handlePickTerm} />
      </div>

      <main className={`app__grid ${isDragging ? 'app__grid--dragging' : ''}`} ref={gridRef}>
        <Card className="card--stack card--no-border" style={{ flexBasis: `${sizes[0]}%` }}>
          <CardTitle>Query Builder</CardTitle>
          <QueryBuilder key={`querybuilder-${resetKey}`} query={query} setQuery={setQuery} />
          <CardTitle>Studies</CardTitle>
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
    </div>
  )
}

```

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
          <CardTitle>Studies</CardTitle>
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

檢查並優化 EasterEgg 組件，確保粒子效果正確運作：


```javascriptreact
import { useEffect, useRef, useState } from 'react'
import './EasterEgg.css'

export function EasterEgg({ onClose }) {
  const canvasRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)
  const animationRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !isVisible) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 150

    // 創建粉紅色粒子
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: -Math.random() * canvas.height, // 從上方開始
        size: Math.random() * 8 + 4,
        speedY: Math.random() * 3 + 2,
        speedX: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.8 + 0.2,
        hue: Math.random() * 40 + 320, // 粉紅色範圍 (320-360)
        saturation: Math.random() * 30 + 50, // 50-80%
        lightness: Math.random() * 20 + 60, // 60-80%
      })
    }

    particlesRef.current = particles

    function animate() {
      if (!isVisible) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 更新和繪製粒子
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        
        // 更新位置
        p.y += p.speedY
        p.x += p.speedX

        // 如果粒子超出底部，重新從頂部開始
        if (p.y > canvas.height) {
          p.y = -p.size
          p.x = Math.random() * canvas.width
        }

        // 繪製粒子
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, ${p.opacity})`
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // 處理視窗大小變化
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [isVisible])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      if (onClose) onClose()
    }, 300)
  }

  return (
    <div className={`easter-egg ${isVisible ? 'easter-egg--visible' : 'easter-egg--hidden'}`}>
      <canvas ref={canvasRef} className="easter-egg__canvas" />
      <div className="easter-egg__content">
        <img 
          src="/LoTUS.png" 
          alt="LoTUS" 
          className="easter-egg__image"
          onError={(e) => {
            console.error('Failed to load LoTUS.png')
          }}
        />
        <button 
          className="easter-egg__close"
          onClick={handleClose}
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  )
}


```

已新增彩蛋功能。修改如下：

## 新增的文件

### EasterEgg.jsx
- 彩蛋組件功能：
  - 顯示滿版的 LoTUS.png 圖片
  - 使用 Canvas 繪製粉紅色粒子特效（從上往下掉落）
  - 圖片有淡入動畫效果
  - 右上角有關閉按鈕（×）
  - 支援響應式設計，自動適應視窗大小

### EasterEgg.css
- 樣式設計：
  - 固定定位，覆蓋整個視窗（z-index: 10000）
  - 圖片居中顯示，最大尺寸為 90vw/90vh
  - 粒子動畫背景（Canvas）
  - 淡入淡出過渡效果
  - 關閉按鈕樣式

## 修改的文件

### Terms.jsx
- 新增 `onEasterEgg` prop
- 在搜尋欄位添加 `onKeyDown` 事件監聽
- 當輸入 "LoTUS-BF"（不區分大小寫）並按下 Enter 時，觸發彩蛋

### App.jsx
- 導入 `EasterEgg` 組件
- 新增 `showEasterEgg` 狀態管理
- 新增 `handleEasterEgg` 和 `handleCloseEasterEgg` 函數
- 將 `onEasterEgg` prop 傳遞給 `Terms` 組件
- 條件渲染 `EasterEgg` 組件

現在當使用者在 Terms 搜尋欄位輸入 "LoTUS-BF" 並按下 Enter 時，會：
1. 顯示滿版的 LoTUS.png 圖片
2. 背景有粉紅色粒子從上往下掉落
3. 可以點擊右上角的 × 關閉彩蛋

彩蛋功能已完成。

---

**User**

圖片沒有正常顯示@LoTUS.png 

---

**Cursor**


檢查圖片路徑與組件設置，確認圖片顯示問題：


圖片存在於 public 目錄。檢查並優化圖片顯示，確保載入正確：


```javascriptreact
import { useEffect, useRef, useState } from 'react'
import './EasterEgg.css'

export function EasterEgg({ onClose }) {
  const canvasRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)
  const animationRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !isVisible) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 150

    // 創建粉紅色粒子
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: -Math.random() * canvas.height, // 從上方開始
        size: Math.random() * 8 + 4,
        speedY: Math.random() * 3 + 2,
        speedX: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.8 + 0.2,
        hue: Math.random() * 40 + 320, // 粉紅色範圍 (320-360)
        saturation: Math.random() * 30 + 50, // 50-80%
        lightness: Math.random() * 20 + 60, // 60-80%
      })
    }

    particlesRef.current = particles

    function animate() {
      if (!isVisible) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 更新和繪製粒子
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        
        // 更新位置
        p.y += p.speedY
        p.x += p.speedX

        // 如果粒子超出底部，重新從頂部開始
        if (p.y > canvas.height) {
          p.y = -p.size
          p.x = Math.random() * canvas.width
        }

        // 繪製粒子
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, ${p.opacity})`
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // 處理視窗大小變化
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [isVisible])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      if (onClose) onClose()
    }, 300)
  }

  return (
    <div className={`easter-egg ${isVisible ? 'easter-egg--visible' : 'easter-egg--hidden'}`}>
      <canvas ref={canvasRef} className="easter-egg__canvas" />
      <div className="easter-egg__content">
        <img 
          src="/LoTUS.png" 
          alt="LoTUS" 
          className={`easter-egg__image ${imageLoaded ? 'easter-egg__image--loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            console.error('Failed to load LoTUS.png from /LoTUS.png, trying /lotus-bf/LoTUS.png')
            e.target.src = '/lotus-bf/LoTUS.png'
          }}
        />
        <button 
          className="easter-egg__close"
          onClick={handleClose}
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  )
}


```

```css
.easter-egg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  background: rgba(0, 0, 0, 0.8);
}

.easter-egg--visible {
  opacity: 1;
  pointer-events: all;
}

.easter-egg--hidden {
  opacity: 0;
  pointer-events: none;
}

.easter-egg__canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.easter-egg__content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.easter-egg__image {
  max-width: 90vw;
  max-height: 90vh;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5));
  animation: floatIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  display: block;
  opacity: 0;
}

.easter-egg__image--loaded {
  opacity: 1;
}

@keyframes floatIn {
  0% {
    transform: scale(0.5) translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.easter-egg__close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  font-size: 32px;
  font-weight: 300;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 3;
  line-height: 1;
}

.easter-egg__close:hover {
  background: white;
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}

.easter-egg__close:active {
  transform: scale(0.95);
}


```

已更新圖片顯示相關設置。修改如下：

## 修改內容

### EasterEgg.jsx
1. 新增圖片載入狀態：
   - 新增 `imageLoaded` 狀態追蹤圖片是否載入
   - 使用 `onLoad` 事件設置載入狀態
   - 根據載入狀態動態添加 CSS 類名

2. 改進錯誤處理：
   - 如果 `/LoTUS.png` 載入失敗，嘗試 `/lotus-bf/LoTUS.png`
   - 添加更詳細的錯誤日誌

### EasterEgg.css
1. 添加背景色：
   - 添加 `background: rgba(0, 0, 0, 0.8)` 讓組件可見

2. 改進圖片顯示：
   - 設置 `display: block` 確保圖片正確顯示
   - 初始 `opacity: 0`，載入後改為 `opacity: 1`
   - 添加 `.easter-egg__image--loaded` 類用於載入後顯示

3. 改進關閉按鈕：
   - 添加 `line-height: 1` 確保 × 符號垂直居中

圖片應可正常顯示。確認：
- 圖片檔案位於 `/public/LoTUS.png`
- 路徑正確（`/LoTUS.png`）

若仍無法顯示，請檢查瀏覽器控制台是否有錯誤訊息，或確認圖片檔案是否存在。

---

**User**

改成漸入建出顯示 然後總共三秒就自動關閉 不需要按叉叉

---

**Cursor**


調整為漸入漸出顯示，3 秒後自動關閉，並移除關閉按鈕：


```javascriptreact
import { useEffect, useRef, useState } from 'react'
import './EasterEgg.css'

export function EasterEgg({ onClose }) {
  const canvasRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)
  const animationRef = useRef(null)
  const particlesRef = useRef([])

  // 3秒後自動關閉
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        if (onClose) onClose()
      }, 500) // 等待淡出動畫完成
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !isVisible) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 150

    // 創建粉紅色粒子
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: -Math.random() * canvas.height, // 從上方開始
        size: Math.random() * 8 + 4,
        speedY: Math.random() * 3 + 2,
        speedX: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.8 + 0.2,
        hue: Math.random() * 40 + 320, // 粉紅色範圍 (320-360)
        saturation: Math.random() * 30 + 50, // 50-80%
        lightness: Math.random() * 20 + 60, // 60-80%
      })
    }

    particlesRef.current = particles

    function animate() {
      if (!isVisible) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 更新和繪製粒子
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        
        // 更新位置
        p.y += p.speedY
        p.x += p.speedX

        // 如果粒子超出底部，重新從頂部開始
        if (p.y > canvas.height) {
          p.y = -p.size
          p.x = Math.random() * canvas.width
        }

        // 繪製粒子
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, ${p.opacity})`
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // 處理視窗大小變化
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [isVisible])

  return (
    <div className={`easter-egg ${isVisible ? 'easter-egg--visible' : 'easter-egg--hidden'}`}>
      <canvas ref={canvasRef} className="easter-egg__canvas" />
      <div className="easter-egg__content">
        <img 
          src="/LoTUS.png" 
          alt="LoTUS" 
          className={`easter-egg__image ${imageLoaded ? 'easter-egg__image--loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            console.error('Failed to load LoTUS.png from /LoTUS.png, trying /lotus-bf/LoTUS.png')
            e.target.src = '/lotus-bf/LoTUS.png'
          }}
        />
      </div>
    </div>
  )
}


```

```css
.easter-egg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease-in-out;
  background: rgba(0, 0, 0, 0.8);
}

.easter-egg--visible {
  opacity: 1;
  pointer-events: all;
}

.easter-egg--hidden {
  opacity: 0;
  pointer-events: none;
}

.easter-egg__canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.easter-egg__content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.easter-egg__image {
  max-width: 90vw;
  max-height: 90vh;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5));
  display: block;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.easter-egg__image--loaded {
  opacity: 1;
  transform: scale(1);
  animation: fadeInOut 3s ease-in-out forwards;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  15% {
    opacity: 1;
    transform: scale(1);
  }
  85% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}


```

已更新彩蛋功能。修改如下：

## 修改內容

### EasterEgg.jsx
1. 移除關閉按鈕：刪除關閉按鈕及其相關處理函數
2. 添加自動關閉邏輯：
   - 使用 `useEffect` 設置 3 秒計時器
   - 3 秒後設置 `isVisible` 為 `false`
   - 等待淡出動畫（0.5 秒）後調用 `onClose`

### EasterEgg.css
1. 改進漸入漸出動畫：
   - 添加 `fadeInOut` 動畫（3 秒）
   - 0-15%：漸入（opacity 0→1，scale 0.8→1）
   - 15-85%：保持顯示
   - 85-100%：漸出（opacity 1→0，scale 1→0.8）
2. 移除關閉按鈕樣式：刪除所有 `.easter-egg__close` 相關樣式
3. 調整過渡效果：
   - 將過渡時間從 0.3s 改為 0.5s
   - 使用 `ease-in-out` 緩動函數

現在當使用者在 Terms 搜尋欄位輸入 "LoTUS-BF" 並按下 Enter 時：
1. 彩蛋會漸入顯示（約 0.45 秒）
2. 顯示滿版的 LoTUS.png 圖片
3. 背景有粉紅色粒子從上往下掉落
4. 圖片會保持顯示約 2.1 秒
5. 然後漸出（約 0.45 秒）
6. 總共 3 秒後自動關閉，無需點擊關閉按鈕

彩蛋現在會自動漸入漸出並在 3 秒後關閉。

