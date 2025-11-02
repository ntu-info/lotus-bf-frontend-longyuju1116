import { useEffect, useRef } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import './ImageCarousel.css'
import { ScrollUpButton } from './ScrollUpButton'

/**
 * ImageCarousel component - Displays images in a marquee-style carousel using Splide
 * All images are 20% size and scroll from left to right continuously
 * 
 * @param {Object} props
 * @param {Function} props.onScrollUp - Callback function when scrolling up (optional)
 */
export function ImageCarousel({ onScrollUp }) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  
  // Load all images from /demo folder
  // Use BASE_URL from Vite config, fallback to empty string for root
  const baseUrl = import.meta.env.BASE_URL || ''
  const images = []
  for (let i = 0; i <= 8; i++) {
    // Ensure baseUrl ends with / and path doesn't start with /
    const cleanBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'
    const cleanPath = `demo/${i}.jpg`.replace(/^\//, '')
    images.push(`${cleanBase}${cleanPath}`)
  }

  const handleScrollUpClick = () => {
    if (onScrollUp) {
      onScrollUp()
    }
  }

  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 120

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

  const splideOptions = {
    type: 'loop',
    perPage: 5,
    perMove: 1,
    autoplay: true,
    interval: 2000,
    speed: 2000,
    gap: '3vw',
    arrows: false,
    pagination: false,
    pauseOnHover: false,
    resetProgress: false,
    width: '100%',
    height: '100%',
    direction: 'ltr',
    easing: 'linear',
    rewind: false,
    rewindSpeed: 1000,
    waitForTransition: false,
    updateOnMove: true,
  }

  return (
    <div className="image-carousel">
      <canvas ref={canvasRef} className="image-carousel__canvas" />
      
      <div className="image-carousel__title">
        "Brand A Brain with a easy way."
      </div>
      <div className="image-carousel__container">
        <Splide options={splideOptions} className="image-carousel__splide">
          {images.map((src, index) => (
            <SplideSlide key={index}>
              <div className="image-carousel__item">
                <img
                  src={src}
                  alt={`Demo ${index + 1}`}
                  className="image-carousel__image"
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      
      {onScrollUp && (
        <ScrollUpButton onClick={handleScrollUpClick} />
      )}
    </div>
  )
}

