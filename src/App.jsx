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
