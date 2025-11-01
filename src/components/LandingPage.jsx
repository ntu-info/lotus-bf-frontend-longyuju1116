import { useEffect, useRef } from 'react'
import './LandingPage.css'
import { Logo } from './Logo'
import { ScrollDownButton } from './ScrollDownButton'

export function LandingPage({ onStart, onScrollDown }) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  const handleClick = (e) => {
    e.stopPropagation()
    console.log('LandingPage click handler called', { onStart, type: typeof onStart })
    if (typeof onStart === 'function') {
      try {
        onStart()
      } catch (error) {
        console.error('Error calling onStart:', error)
      }
    } else {
      console.error('onStart is not a function!', onStart)
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 120 // Increased from 50

    // Create geometric particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.2,
        shape: Math.random() > 0.5 ? 'circle' : 'square',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        hue: Math.random() * 60 + 200 // Gradient from dark gray to black (200-260 on HSL)
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connecting lines with gradient
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 150) {
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            )
            const alpha = 0.2 * (1 - distance / 150)
            gradient.addColorStop(0, `rgba(0, 0, 0, ${alpha})`)
            gradient.addColorStop(1, `rgba(50, 50, 50, ${alpha})`)
            
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      // Update and draw particles with gradient
      particles.forEach(particle => {
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.rotation += particle.rotationSpeed

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.save()
        ctx.translate(particle.x, particle.y)
        ctx.rotate(particle.rotation)
        ctx.globalAlpha = particle.opacity
        
        // Create radial gradient for each particle
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size)
        const hue = particle.hue
        gradient.addColorStop(0, `hsla(${hue}, 30%, 20%, ${particle.opacity})`)
        gradient.addColorStop(0.5, `hsla(${hue}, 20%, 15%, ${particle.opacity * 0.8})`)
        gradient.addColorStop(1, `hsla(${hue}, 10%, 5%, ${particle.opacity * 0.5})`)
        ctx.fillStyle = gradient

        if (particle.shape === 'circle') {
          ctx.beginPath()
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2)
          ctx.fill()
        } else {
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2)
        }

        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div className="landing-page">
      <canvas ref={canvasRef} className="landing-page__canvas" />
      
      <Logo onClick={handleClick} className="logo--landing" />
      
      <div className="landing-page__content">
        <div className="landing-page__title-container">
          <h1 className="landing-page__title">
            LoTUS-BF
          </h1>
          <p className="landing-page__subtitle">
            Location-or-Term Unified Search for Brain Functions
          </p>
        </div>

        <button 
          className="landing-page__start-button"
          onClick={handleClick}
        >
          <span className="landing-page__start-text">Start</span>
          <svg 
            className="landing-page__start-arrow" 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none"
          >
            <path 
              d="M7 4L13 10L7 16" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {onScrollDown && (
        <ScrollDownButton onClick={onScrollDown} />
      )}
    </div>
  )
}
