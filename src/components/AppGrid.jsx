import './AppGrid.css'

export function AppGrid({ children, gridRef }) {
  return (
    <main className="app-grid" ref={gridRef}>
      {children}
    </main>
  )
}

