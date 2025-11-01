import './ScrollButtons.css'

/**
 * ScrollButtons component - persistent scroll controls for entire app
 */
export function ScrollButtons() {
  const getScrollRoot = () => {
    if (typeof document === 'undefined') {
      return null
    }
    return document.scrollingElement ?? document.documentElement ?? document.body
  }

  const smoothScroll = (top) => {
    if (typeof window === 'undefined') {
      return
    }

    window.requestAnimationFrame(() => {
      window.scrollTo({
        top,
        behavior: 'smooth'
      })

      if (typeof document !== 'undefined') {
        if (document.body) {
          document.body.scrollTop = top
        }
        if (document.documentElement) {
          document.documentElement.scrollTop = top
        }
      }
    })
  }

  const scrollToTop = () => {
    smoothScroll(0)
  }

  const scrollToBottom = () => {
    const scrollRoot = getScrollRoot()
    if (!scrollRoot || typeof window === 'undefined') {
      return
    }

    const viewportHeight = window.innerHeight || scrollRoot.clientHeight
    const currentScroll = scrollRoot.scrollTop ?? window.pageYOffset ?? document.documentElement?.scrollTop ?? 0
    const maxScrollTop = Math.max(0, scrollRoot.scrollHeight - viewportHeight)
    const nextScroll = Math.min(currentScroll + viewportHeight, maxScrollTop)

    smoothScroll(nextScroll)
  }

  return (
    <div className="scroll-buttons">

      <button
        className="scroll-button scroll-button--bottom"
        type="button"
        onClick={scrollToBottom}
        aria-label="Scroll to bottom"
        title="Scroll to bottom"
      >
        <span className="scroll-button__arrow scroll-button__arrow--down">&#60;</span>
      </button>
    </div>
  )
}

