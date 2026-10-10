import { useEffect, useRef, useState } from 'react'

export default function ArtworkInfo({ artwork }) {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    function closeOutside(event) {
      if (!rootRef.current?.contains(event.target)) setIsOpen(false)
    }
    function closeOnEscape(event) {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('click', closeOutside)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('click', closeOutside)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  return (
    <aside
      className="artwork-info"
      ref={rootRef}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse' && window.matchMedia('(any-hover: hover)').matches) setIsOpen(true)
      }}
      onPointerLeave={(event) => {
        if (event.pointerType !== 'mouse') return
        const focused = document.activeElement
        if (!rootRef.current?.contains(focused) || !focused.matches(':focus-visible')) setIsOpen(false)
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false)
      }}
    >
      <button
        className="artwork-info-trigger"
        type="button"
        aria-label="查看背景画介绍"
        aria-expanded={isOpen}
        aria-controls="artwork-info-panel"
        onClick={() => setIsOpen((open) => !open)}
        onFocus={(event) => {
          if (event.currentTarget.matches(':focus-visible')) setIsOpen(true)
        }}
      >
        <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <path d="M4 5L24 4L25 23L3 24Z" />
          <path d="M6 20L12 13L17 18L21 14L23 20" />
          <circle cx="19" cy="10" r="2" />
        </svg>
      </button>
      <div className="artwork-info-popover" id="artwork-info-panel" hidden={!isOpen}>
        <section className="artwork-info-paper" aria-label={`${artwork.title}介绍`}>
          <h2>{artwork.title}</h2>
          <p className="artwork-info-artist">{artwork.artist}</p>
          <p className="artwork-info-description">{artwork.description}</p>
          <a href={artwork.source} target="_blank" rel="noopener noreferrer">原作出处 <span aria-hidden="true">↗</span></a>
        </section>
      </div>
    </aside>
  )
}
