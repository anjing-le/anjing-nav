import { useEffect, useRef, useState } from 'react'
import { categories } from './data.js'

export default function App() {
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [pinnedCategory, setPinnedCategory] = useState(null)
  const [selectedSite, setSelectedSite] = useState(null)
  const triggerRefs = useRef({})

  useEffect(() => {
    if (expandedCategory === null) return

    function handleEscape(event) {
      if (event.key !== 'Escape') return
      event.preventDefault()
      const trigger = triggerRefs.current[expandedCategory]
      setExpandedCategory(null)
      setPinnedCategory(null)
      setSelectedSite(null)
      trigger?.focus()
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [expandedCategory])

  function openCategory(id, pin = false) {
    if (expandedCategory !== id) setSelectedSite(null)
    setExpandedCategory(id)
    setPinnedCategory(pin ? id : null)
  }

  function closeCategory() {
    setExpandedCategory(null)
    setPinnedCategory(null)
    setSelectedSite(null)
  }

  function toggleCategory(id) {
    if (expandedCategory === id && pinnedCategory === id) {
      closeCategory()
    } else {
      openCategory(id, true)
    }
  }

  return (
    <main className="page" aria-label="安静导航">
      <section className="category-grid" aria-label="网站分类">
        {categories.map((category) => {
          const isOpen = expandedCategory === category.id
          const activeSite = isOpen
            ? category.sites.find((site) => site.id === selectedSite)
            : null
          const contentId = `category-${category.id}-content`

          return (
            <article
              className={`category-card ${category.id}`}
              key={category.id}
              data-open={isOpen}
              onPointerEnter={(event) => {
                if (event.pointerType === 'mouse' && expandedCategory !== category.id) {
                  const focusedList = document.activeElement?.closest('.site-list')
                  if (focusedList && !event.currentTarget.contains(focusedList)) return
                  openCategory(category.id)
                }
              }}
              onPointerLeave={(event) => {
                if (
                  event.pointerType === 'mouse'
                  && expandedCategory === category.id
                  && pinnedCategory !== category.id
                  && !event.currentTarget.contains(document.activeElement)
                ) {
                  closeCategory()
                }
              }}
            >
              <button
                className="category-trigger"
                type="button"
                ref={(element) => { triggerRefs.current[category.id] = element }}
                aria-label={category.title}
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggleCategory(category.id)}
              >
                <span className="category-number" aria-hidden="true">{category.number}</span>
                <img
                  className="category-illustration"
                  src={category.illustration}
                  alt=""
                  width="640"
                  height="640"
                  decoding="async"
                />
                <div className="card-heading">
                  <h2>{category.title}</h2>
                  <span className="card-count">{category.sites.length} 个网站</span>
                </div>
                <p className="category-subtitle">{category.subtitle}</p>
                <span className="marker-arrow" aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>

              <div className="category-content" id={contentId} hidden={!isOpen}>
                <ul className="site-list">
                  {category.sites.map((site) => (
                    <li key={site.id}>
                      <button
                        className="site-item"
                        type="button"
                        aria-pressed={selectedSite === site.id}
                        onPointerEnter={(event) => {
                          if (event.pointerType === 'mouse') setSelectedSite(site.id)
                        }}
                        onFocus={() => setSelectedSite(site.id)}
                        onClick={() => {
                          setSelectedSite(site.id)
                          setPinnedCategory(category.id)
                        }}
                      >
                        <span className="site-mark" aria-hidden="true">{site.mark}</span>
                        <span className="site-copy">
                          <span className="site-name">{site.name}</span>
                          <span className="site-domain">{site.domain}</span>
                          <span className="site-description">{site.description}</span>
                        </span>
                        <span className="site-indicator" aria-hidden="true">↗</span>
                      </button>
                    </li>
                  ))}
                </ul>
                {activeSite ? (
                  <div className="selected-site-detail">
                    <p>{activeSite.description}</p>
                    <span className="mock-label">示例网址 · 暂不可打开</span>
                  </div>
                ) : (
                  <p className="detail-placeholder">先放一些示例，之后换成你常去的网站。</p>
                )}
              </div>
            </article>
          )
        })}
      </section>

    </main>
  )
}
