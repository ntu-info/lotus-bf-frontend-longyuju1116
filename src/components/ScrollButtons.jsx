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

