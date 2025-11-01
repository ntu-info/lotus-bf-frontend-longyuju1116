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

