import { useEffect, useRef, useState } from 'react'
import { categories } from './data.js'
import {
  classifySiteTarget,
  openSelectedSites,
  selectionForDoubleClick,
  toggleSiteSelection,
} from './navigation.js'

const allSites = categories.flatMap((category) =>
  category.sites.map((site) => ({ ...site, categoryId: category.id })),
)

function openingMessage(result) {
  const messages = []
  if (result.requestedCount) messages.push(`已请求打开 ${result.requestedCount} 个网站。`)
  if (result.mockCount) messages.push(`${result.mockCount} 个示例网址暂不可打开。`)
  if (result.invalidCount) messages.push(`${result.invalidCount} 个网址无效。`)
  if (result.failedCount) messages.push(`${result.failedCount} 个打开请求失败。`)
  if (result.requestedCount > 1) messages.push('若新标签被拦截，请允许本站弹出窗口后重试。')
  return messages.join(' ')
}

export default function App() {
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [pinnedCategory, setPinnedCategory] = useState(null)
  const [previewSite, setPreviewSite] = useState(null)
  const [selectedIds, setSelectedIds] = useState(() => new Set())
  const [feedback, setFeedback] = useState(null)
  const expandedRef = useRef(null)
  const selectionRef = useRef(new Set())
  const clickGestureRef = useRef(null)

  function updateSelection(nextSelection) {
    selectionRef.current = nextSelection
    setSelectedIds(nextSelection)
  }

  function openCategory(id, pin = false) {
    if (expandedRef.current !== id) setPreviewSite(null)
    expandedRef.current = id
    setExpandedCategory(id)
    setPinnedCategory(pin ? id : null)
  }

  function closeCategory() {
    expandedRef.current = null
    setExpandedCategory(null)
    setPinnedCategory(null)
    setPreviewSite(null)
  }

  function toggleCategory(id) {
    if (expandedCategory === id && pinnedCategory === id) closeCategory()
    else openCategory(id, true)
  }

  function openSelection(ids, categoryId = expandedRef.current) {
    if (!ids.size) return
    const anchor = categoryId ?? allSites.find((site) => ids.has(site.id))?.categoryId
    // Keep all calls in the original click/key event, before any async work.
    const result = openSelectedSites(allSites, ids, window.open.bind(window))
    if (anchor) {
      openCategory(anchor, true)
      setFeedback({ categoryId: anchor, message: openingMessage(result) })
    }
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.isComposing) return
      if (event.key === 'Escape') {
        event.preventDefault()
        updateSelection(new Set())
        clickGestureRef.current = null
        setFeedback(null)
        return
      }
      if (event.key !== 'Enter' || event.ctrlKey || event.metaKey || event.altKey) return
      const target = event.target
      if (target instanceof Element && target.closest('input, textarea, select, [contenteditable="true"]')) return
      if (!selectionRef.current.size) return
      event.preventDefault()
      if (!event.repeat) openSelection(selectionRef.current)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  function handleSiteClick(event, site, categoryId) {
    if (event.detail > 1) return
    const before = selectionRef.current
    clickGestureRef.current = { siteId: site.id, before: new Set(before) }
    updateSelection(toggleSiteSelection(before, site.id))
    setPreviewSite(site.id)
    setFeedback(null)
    setPinnedCategory(categoryId)
  }

  function handleSiteDoubleClick(event, site, categoryId) {
    event.preventDefault()
    const gesture = clickGestureRef.current
    const before = gesture?.siteId === site.id ? gesture.before : selectionRef.current
    const selection = selectionForDoubleClick(before, site.id)
    updateSelection(selection)
    clickGestureRef.current = null
    openSelection(selection, categoryId)
  }

  return (
    <main className="page" aria-label="安静导航">
      <section className="category-grid" aria-label="网站分类">
        {categories.map((category) => {
          const isOpen = expandedCategory === category.id
          const activeSite = isOpen ? category.sites.find((site) => site.id === previewSite) : null
          const activeTarget = activeSite ? classifySiteTarget(activeSite) : null
          const selectedCount = category.sites.filter((site) => selectedIds.has(site.id)).length
          const contentId = `category-${category.id}-content`
          const countId = `category-${category.id}-count`
          const openingFeedback = isOpen && feedback?.categoryId === category.id ? feedback.message : null

          return (
            <article
              className={`category-card ${category.id}`}
              key={category.id}
              data-open={isOpen}
              onPointerEnter={(event) => {
                if (event.pointerType === 'mouse' && expandedRef.current !== category.id) {
                  openCategory(category.id)
                }
              }}
              onPointerLeave={(event) => {
                if (
                  event.pointerType === 'mouse'
                  && expandedRef.current === category.id
                  && pinnedCategory !== category.id
                  && !event.currentTarget.contains(document.activeElement)
                ) closeCategory()
              }}
            >
              <button
                className="category-trigger"
                type="button"
                aria-label={category.title}
                aria-describedby={countId}
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
                  <span className="card-count" id={countId} data-selected={selectedCount > 0}>
                    {selectedCount ? `${selectedCount} / ${category.sites.length} 已选` : `${category.sites.length} 个网站`}
                  </span>
                </div>
                <p className="category-subtitle">{category.subtitle}</p>
                <span className="marker-arrow" aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>

              <div className="category-content" id={contentId} hidden={!isOpen}>
                <ul className="site-list">
                  {category.sites.map((site) => {
                    const isSelected = selectedIds.has(site.id)
                    return (
                      <li key={site.id}>
                        <button
                          className="site-item"
                          type="button"
                          aria-pressed={isSelected}
                          onPointerEnter={(event) => {
                            if (event.pointerType === 'mouse') setPreviewSite(site.id)
                          }}
                          onFocus={() => setPreviewSite(site.id)}
                          onClick={(event) => handleSiteClick(event, site, category.id)}
                          onDoubleClick={(event) => handleSiteDoubleClick(event, site, category.id)}
                        >
                          <span className="site-mark" aria-hidden="true">{site.mark}</span>
                          <span className="site-copy">
                            <span className="site-name">{site.name}</span>
                            <span className="site-domain">{site.domain}</span>
                            <span className="site-description">{site.description}</span>
                          </span>
                          <span className="site-indicator" aria-hidden="true">{isSelected ? '✓' : '↗'}</span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
                {openingFeedback ? (
                  <p className="open-feedback" role="status">{openingFeedback}</p>
                ) : activeSite ? (
                  <div className="site-detail">
                    <p>{activeSite.description}</p>
                    {activeTarget.kind !== 'url' && (
                      <span className="mock-label">
                        {activeTarget.kind === 'mock' ? '示例网址 · 暂不可打开' : '网址无效 · 暂不可打开'}
                      </span>
                    )}
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
