import { useState, useEffect } from 'react'
import './Pagination.css'

/**
 * Pagination component - A reusable pagination component with format: << < page xx/xx > >>
 * 
 * @param {Object} props
 * @param {number} props.currentPage - Current page number (1-based)
 * @param {number} props.totalPages - Total number of pages
 * @param {Function} props.onPageChange - Callback function when page changes, receives new page number
 */
export function Pagination({ currentPage, totalPages, onPageChange }) {
  const [pageInput, setPageInput] = useState(String(currentPage))

  // Sync pageInput with currentPage
  useEffect(() => {
    setPageInput(String(currentPage))
  }, [currentPage])

  if (totalPages <= 1) return null

  const handleFirstPage = () => {
    if (currentPage > 1) {
      onPageChange(1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const handleLastPage = () => {
    if (currentPage < totalPages) {
      onPageChange(totalPages)
    }
  }

  const handlePageInputChange = (e) => {
    setPageInput(e.target.value)
  }

  const handlePageInputBlur = () => {
    const pageNum = parseInt(pageInput, 10)
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages && pageNum !== currentPage) {
      onPageChange(pageNum)
    } else {
      setPageInput(String(currentPage))
    }
  }

  const handlePageInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handlePageInputBlur()
      e.target.blur()
    }
  }

  return (
    <div className="pagination">
      <button
        disabled={currentPage <= 1}
        onClick={handleFirstPage}
        className="pagination__button"
        aria-label="First page"
      >
        &lt;&lt;
      </button>
      <button
        disabled={currentPage <= 1}
        onClick={handlePrevPage}
        className="pagination__button"
        aria-label="Previous page"
      >
        &lt;
      </button>
      <span className="pagination__info">
        page{' '}
        <input
          type="number"
          min="1"
          max={totalPages}
          value={pageInput}
          onChange={handlePageInputChange}
          onBlur={handlePageInputBlur}
          onKeyDown={handlePageInputKeyDown}
          className="pagination__page-input"
          aria-label="Current page"
        />
        /{totalPages}
      </span>
      <button
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className="pagination__button"
        aria-label="Next page"
      >
        &gt;
      </button>
      <button
        disabled={currentPage >= totalPages}
        onClick={handleLastPage}
        className="pagination__button"
        aria-label="Last page"
      >
        &gt;&gt;
      </button>
    </div>
  )
}

