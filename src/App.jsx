import { useEffect, useRef, useState } from 'react'
import { categories } from './data.js'
import ArtworkInfo from './ArtworkInfo.jsx'
import { openSelectedSites, selectionForDoubleClick, toggleSiteSelection } from './navigation.js'

const allSites = categories.flatMap((category) =>
  category.sites.map((site) => ({ ...site, categoryId: category.id })),
)
const siteById = new Map(allSites.map((site) => [site.id, site]))

export default function App({ artwork }) {
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [selectedIds, setSelectedIds] = useState(() => new Set())
  const selectionRef = useRef(new Set())
  const clickGestureRef = useRef(null)
  const selectionListRef = useRef(null)
  const categoryButtonsRef = useRef(new Map())
  const previousSelectionSizeRef = useRef(0)
  const selectedSites = [...selectedIds].map((id) => siteById.get(id)).filter(Boolean)

  useEffect(() => {
    if (selectedIds.size > previousSelectionSizeRef.current) {
      const list = selectionListRef.current
      if (list) list.scrollLeft = list.scrollWidth
    }
    previousSelectionSizeRef.current = selectedIds.size
  }, [selectedIds])

  function updateSelection(nextSelection) {
    selectionRef.current = nextSelection
    setSelectedIds(nextSelection)
  }

  function openSelection(ids) {
    if (!ids.size) return
    const orderedSites = [...ids].map((id) => siteById.get(id)).filter(Boolean)
    // Keep the requests synchronous with the user's double-click or Enter.
    openSelectedSites(orderedSites, ids, window.open.bind(window))
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.isComposing) return
      if (event.key === 'Escape') {
        event.preventDefault()
        updateSelection(new Set())
        clickGestureRef.current = null
        return
      }
      if (event.key !== 'Enter' || event.ctrlKey || event.metaKey || event.altKey) return
      const target = event.target
      if (target instanceof Element && target.closest('input, textarea, select, [contenteditable="true"], .artwork-info')) return
      if (!selectionRef.current.size) return
      event.preventDefault()
      if (!event.repeat) openSelection(selectionRef.current)
    }

    function handleBlankClick(event) {
      if (!(event.target instanceof Element)) return
      if (event.target.closest('button, a, input, textarea, select, summary, [role="button"], [role="link"], [contenteditable="true"], .selection-chip, .artwork-info')) return
      updateSelection(new Set())
      clickGestureRef.current = null
      setExpandedCategory(null)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('click', handleBlankClick)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('click', handleBlankClick)
    }
  }, [])

  function handleSiteClick(event, site) {
    if (event.detail > 1) return
    const before = selectionRef.current
    clickGestureRef.current = { siteId: site.id, before: new Set(before) }
    updateSelection(toggleSiteSelection(before, site.id))
  }

  function handleSiteDoubleClick(event, site) {
    event.preventDefault()
    const gesture = clickGestureRef.current
    const before = gesture?.siteId === site.id ? gesture.before : selectionRef.current
    const selection = selectionForDoubleClick(before, site.id)
    updateSelection(selection)
    clickGestureRef.current = null
    openSelection(selection)
  }

  function removeSelectedSite(id) {
    const next = new Set(selectionRef.current)
    next.delete(id)
    updateSelection(next)
    clickGestureRef.current = null
  }

  function handleCategoryKeyDown(event, index) {
    let nextIndex
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % categories.length
    else if (event.key === 'ArrowLeft') nextIndex = (index + categories.length - 1) % categories.length
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = categories.length - 1
    else return
    event.preventDefault()
    categoryButtonsRef.current.get(categories[nextIndex].id)?.focus()
  }

  function handleCategoryHover(event, categoryId) {
    if (event.pointerType !== 'mouse' || !window.matchMedia('(any-hover: hover)').matches) return
    setExpandedCategory((current) => current === categoryId ? current : categoryId)
  }

  function handleCategoryClick(event, categoryId) {
    // Hover already opens mouse targets; the following click should keep them open.
    if (event.nativeEvent.pointerType === 'mouse' && window.matchMedia('(any-hover: hover)').matches) {
      setExpandedCategory(categoryId)
      return
    }
    setExpandedCategory((current) => current === categoryId ? null : categoryId)
  }

  return (
    <main className="page" aria-label="安静导航">
      <ArtworkInfo artwork={artwork} />
      <div className="navigation">
        <section
          className="selection-tray"
          aria-label="待打开的网站"
          aria-hidden={selectedSites.length === 0}
          data-empty={selectedSites.length === 0}
        >
          <ul className="selection-list" ref={selectionListRef}>
            {selectedSites.map((site) => (
              <li className={`selection-chip ${site.categoryId}`} key={site.id}>
                <button
                  className="selection-preview"
                  type="button"
                  aria-label={`${site.name}，双击或回车打开已选网站`}
                  title={site.url || `https://${site.domain}`}
                  onDoubleClick={() => openSelection(selectionRef.current)}
                >
                  <span className="selection-name">{site.name}</span>
                </button>
                <button
                  className="selection-remove"
                  type="button"
                  aria-label={`取消选择${site.name}`}
                  onClick={() => removeSelectedSite(site.id)}
                >×</button>
              </li>
            ))}
          </ul>
        </section>

        <section className="category-grid" aria-label="网站分类" data-expanded={expandedCategory !== null}>
          {categories.map((category, index) => {
            const isOpen = expandedCategory === category.id
            const contentId = `category-${category.id}-content`

            return (
              <article
                className={`category-card ${category.id}`}
                key={category.id}
                data-open={isOpen}
              >
                <button
                  className="category-trigger"
                  type="button"
                  aria-label={category.title}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  ref={(button) => {
                    if (button) categoryButtonsRef.current.set(category.id, button)
                    else categoryButtonsRef.current.delete(category.id)
                  }}
                  onPointerMove={(event) => handleCategoryHover(event, category.id)}
                  onClick={(event) => handleCategoryClick(event, category.id)}
                  onKeyDown={(event) => handleCategoryKeyDown(event, index)}
                >
                  <img
                    className="category-illustration"
                    src={category.illustration}
                    alt=""
                    width="640"
                    height="640"
                    decoding="async"
                  />
                </button>

                <div className="category-content" id={contentId} hidden={!isOpen}>
                  <ul className="site-list">
                    {category.sites.map((site) => (
                      <li key={site.id}>
                        <button
                          className="site-item"
                          type="button"
                          aria-pressed={selectedIds.has(site.id)}
                          title={site.url || `https://${site.domain}`}
                          onClick={(event) => handleSiteClick(event, site)}
                          onDoubleClick={(event) => handleSiteDoubleClick(event, site)}
                        >
                          <span className="site-name">{site.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </section>
      </div>
    </main>
  )
}
