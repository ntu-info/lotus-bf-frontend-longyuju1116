import './ExportButton.css'

/**
 * ExportButton component - Exports marked studies to CSV format
 * @param {Object} props
 * @param {Array} props.markedStudies - Array of marked study objects
 */
export function ExportButton({ markedStudies = [] }) {
  const handleExport = () => {
    if (markedStudies.length === 0) {
      alert('No marked studies to export')
      return
    }

    // Create CSV content
    const headers = ['Year', 'Title', 'Authors', 'PubMed ID']
    const rows = markedStudies.map(study => {
      const year = study.year ?? ''
      const title = (study.title ?? '').replace(/"/g, '""') // Escape quotes
      const authors = (study.authors ?? '').replace(/"/g, '""') // Escape quotes
      const pubmedId = study.study_id || study.id || study.pubmed_id || ''
      
      return `"${year}","${title}","${authors}","${pubmedId}"`
    })

    const csvContent = [
      headers.join(','),
      ...rows
    ].join('\n')

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    
    // Generate filename with current timestamp
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')
    const timestamp = `${year}${month}${day}_${hours}${minutes}${seconds}`
    
    link.setAttribute('href', url)
    link.setAttribute('download', `marked_studies_${timestamp}.csv`)
    link.style.visibility = 'hidden'
    
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    URL.revokeObjectURL(url)
  }

  return (
    <button
      className="export-button"
      onClick={handleExport}
      disabled={markedStudies.length === 0}
      aria-label={`Export ${markedStudies.length} marked studies`}
      title={`Export ${markedStudies.length} marked studies`}
    >
      Export
    </button>
  )
}

