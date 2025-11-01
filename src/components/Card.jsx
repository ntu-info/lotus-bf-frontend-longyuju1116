import './Card.css'

export function Card({ children, className = '', style = {} }) {
  return (
    <section className={`card ${className}`} style={style}>
      {children}
    </section>
  )
}

export function CardTitle({ children }) {
  return <div className="card__title">{children}</div>
}

export function CardDivider() {
  return <div className="card__divider" />
}

