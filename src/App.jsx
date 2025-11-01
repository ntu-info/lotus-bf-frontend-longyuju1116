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
