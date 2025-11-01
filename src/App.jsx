import { useCallback, useRef, useState, useEffect } from 'react'
import { QueryBuilder } from './components/QueryBuilder'
import { Studies } from './components/Studies'
import { NiiViewer } from './components/NiiViewer'
import { LandingPage } from './components/LandingPage'
import { VideoPage } from './components/VideoPage'
import { ImageCarousel } from './components/ImageCarousel'
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
  const landingPageRef = useRef(null)
  const videoPageRef = useRef(null)

  const carouselRef = useRef(null)
  // 【新增】全局滾動到底部
  const scrollToBottom = useCallback(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return
    }
    // 計算最大可滾動的位置：整個文件高度 - 視窗高度
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight
    window.scrollTo({
      top: maxScrollTop,
      behavior: 'smooth'
    })
  }, [])

  // 【新增】全局滾動到頂部
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  
  const handleScrollDown = useCallback(() => {
    console.log('handleScrollDown called')
    if (videoPageRef.current) {
      videoPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      const targetY = window.innerHeight
      console.log('Scrolling to:', targetY)
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      })
    }
  }, [])

  const handleScrollUp = useCallback(() => {
    console.log('handleScrollUp called')
    if (landingPageRef.current) {
      landingPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }, [])

  const handleScrollToCarousel = useCallback(() => {
    console.log('handleScrollToCarousel called')
    if (carouselRef.current) {
      carouselRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      const targetY = window.innerHeight * 2
      console.log('Scrolling to carousel:', targetY)
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      })
    }
  }, [])

  const handleScrollUpFromCarousel = useCallback(() => {
    console.log('handleScrollUpFromCarousel called')
    if (videoPageRef.current) {
      videoPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      const targetY = window.innerHeight
      console.log('Scrolling to video page:', targetY)
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      })
    }
  }, [])

  const handleStart = useCallback(() => {
    // 重置所有狀態
    setQuery('')
    setSizes([50, 50])
    setResetKey(prev => prev + 1) // 強制重新渲染組件
    setShowLanding(false)
  }, [setQuery])

  const handleLogoClick = useCallback(() => {
    // 重置所有狀態並滾動到頂部
    setQuery('')
    setSizes([50, 50])
    setResetKey(prev => prev + 1) // 強制重新渲染組件
    setShowLanding(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
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

  // Enable scrolling when showing landing/video pages
  useEffect(() => {
    if (showLanding) {
      // Ensure body and html allow vertical scrolling but prevent horizontal scrolling
      document.body.style.overflowY = 'auto'
      document.body.style.overflowX = 'hidden'
      document.documentElement.style.overflowY = 'auto'
      document.documentElement.style.overflowX = 'hidden'
    } else {
      document.body.style.overflowY = ''
      document.body.style.overflowX = ''
      document.documentElement.style.overflowY = ''
      document.documentElement.style.overflowX = ''
    }
    
    return () => {
      document.body.style.overflowY = ''
      document.body.style.overflowX = ''
      document.documentElement.style.overflowY = ''
      document.documentElement.style.overflowX = ''
    }
  }, [showLanding])

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

  if (!showLanding) {
    console.log('Rendering main app, query:', query, 'showLanding:', showLanding)
  }

    return (
    <>
      {showLanding ? (
      <>
        <div ref={landingPageRef} style={{ height: '100vh' }}>
          <LandingPage onStart={handleStart} onScrollDown={handleScrollDown} />
        </div>
        <div ref={videoPageRef} style={{ height: '100vh' }}>
          <VideoPage onScrollUp={handleScrollUp} onScrollDown={handleScrollToCarousel} />
        </div>
        <div ref={carouselRef} style={{ height: '100vh' }}>
          <ImageCarousel onScrollUp={handleScrollUpFromCarousel} />
        </div>
        <div style={{ width: '100%', height: '100px', background: '#000000' }} />
      </>
      ) : (
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
          {showEasterEgg && <EasterEgg onClose={handleCloseEasterEgg} />}
        </div>
      )}
      <ScrollButtons onScrollToTop={scrollToTop} onScrollToBottom={scrollToBottom} />
    </>
  )
}
