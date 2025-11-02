import { useEffect, useRef, useState } from 'react'
import './VideoPage.css'
import { ScrollUpButton } from './ScrollUpButton'
import { ScrollDownButton } from './ScrollDownButton'

/**
 * VideoPage component - A fullscreen video player that loops the ad.mp4 video
 * 
 * @param {Object} props
 * @param {Function} props.onScrollUp - Callback function when scrolling up (optional)
 * @param {Function} props.onScrollDown - Callback function when scrolling down (optional)
 */
export function VideoPage({ onScrollUp, onScrollDown }) {
  const videoRef = useRef(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [needsUserInteraction, setNeedsUserInteraction] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Reset video state
    video.pause()
    video.currentTime = 0
    
    // Set video properties
    video.loop = true
    video.muted = true // Mute by default for autoplay compatibility
    video.playsInline = true

    // Handle video load errors
    const handleError = (e) => {
      console.error('Video loading error:', e)
      console.error('Video error details:', {
        code: video.error?.code,
        message: video.error?.message,
        src: video.src,
        currentSrc: video.currentSrc,
        networkState: video.networkState,
        readyState: video.readyState
      })
      setError(`無法載入影片: ${video.error?.message || '未知錯誤'}`)
      setIsLoading(false)
    }

    // Handle video loaded successfully
    const handleLoadedMetadata = () => {
      console.log('Video metadata loaded:', {
        duration: video.duration,
        videoWidth: video.videoWidth,
        videoHeight: video.videoHeight,
        src: video.src,
        currentSrc: video.currentSrc
      })
      setIsLoading(false)
      setError(null)
    }

    // Handle video can play
    const handleCanPlay = () => {
      console.log('Video can play')
      video.play().catch(error => {
        console.warn('Video autoplay failed:', error)
        // Check if it's an autoplay policy error
        if (error.name === 'NotAllowedError' || error.message.includes('not allowed')) {
          setNeedsUserInteraction(true)
          setError(null) // Don't show error, just show play button
        } else {
          setError(`自動播放失敗: ${error.message}`)
        }
      })
    }

    // Handle video end to ensure looping
    const handleEnded = () => {
      video.currentTime = 0
      video.play().catch(err => console.warn('Video replay failed:', err))
    }

    // Handle loadstart
    const handleLoadStart = () => {
      console.log('Video load started')
      setIsLoading(true)
    }

    video.addEventListener('error', handleError)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('ended', handleEnded)
    video.addEventListener('loadstart', handleLoadStart)

    // Load the video
    video.load()

    // Try to play after a short delay
    const playTimeout = setTimeout(() => {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn('Video autoplay failed:', error)
          // Check if it's an autoplay policy error
          if (error.name === 'NotAllowedError' || error.message.includes('not allowed')) {
            setNeedsUserInteraction(true)
            setError(null) // Don't show error, just show play button
          } else {
            setError(`自動播放失敗: ${error.message}`)
          }
        })
      }
    }, 100)

    return () => {
      clearTimeout(playTimeout)
      video.removeEventListener('error', handleError)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('loadstart', handleLoadStart)
    }
  }, [])

  const handleScrollUpClick = () => {
    if (onScrollUp) {
      onScrollUp()
    }
  }

  const handleScrollDownClick = () => {
    if (onScrollDown) {
      onScrollDown()
    }
  }

  const handlePlayClick = async () => {
    const video = videoRef.current
    if (!video) return

    try {
      await video.play()
      setNeedsUserInteraction(false)
      setError(null)
    } catch (error) {
      console.error('Manual play failed:', error)
      setError(`播放失敗: ${error.message}`)
    }
  }

  return (
    <div className="video-page">
      <video
        ref={videoRef}
        className="video-page__video"
        src={`${import.meta.env.BASE_URL || ''}ad.mp4`}
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        Your browser does not support the video tag.
      </video>
      {needsUserInteraction && (
        <div className="video-page__play-overlay" onClick={handlePlayClick}>
          <button className="video-page__play-button" aria-label="播放影片">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="38" fill="rgba(255, 255, 255, 0.9)" stroke="rgba(0, 0, 0, 0.2)" strokeWidth="2"/>
              <path d="M32 24L56 40L32 56V24Z" fill="#000000"/>
            </svg>
            <p className="video-page__play-text">點擊播放</p>
          </button>
        </div>
      )}
      {isLoading && !needsUserInteraction && (
        <div className="video-page__loading">載入中...</div>
      )}
      {error && (
        <div className="video-page__error">
          {error}
          <div style={{ marginTop: '10px', fontSize: '14px', opacity: 0.8 }}>
            請檢查瀏覽器是否支援 .mp4 格式
          </div>
        </div>
      )}
      {onScrollUp && (
        <ScrollUpButton onClick={handleScrollUpClick} />
      )}
      {onScrollDown && (
        <ScrollDownButton onClick={handleScrollDownClick} />
      )}
    </div>
  )
}

