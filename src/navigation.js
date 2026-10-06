export function toggleSiteSelection(selection, id) {
  const next = new Set(selection)
  if (next.has(id)) next.delete(id)
  else next.add(id)
  return next
}

export function selectionForDoubleClick(beforeSelection, id) {
  const next = new Set(beforeSelection)
  next.add(id)
  return next
}

export function classifySiteTarget(site) {
  if (site.mock === true) return { kind: 'mock', url: null }

  let url
  try {
    const address = site.url ?? (
      typeof site.domain === 'string' && site.domain.trim()
        ? `https://${site.domain.trim()}`
        : ''
    )
    url = new URL(address)
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      return { kind: 'invalid', url: null }
    }
  } catch {
    return { kind: 'invalid', url: null }
  }

  const hostname = url.hostname.toLowerCase().replace(/\.+$/, '')
  if (hostname === 'example' || hostname.endsWith('.example')) {
    return { kind: 'mock', url: null }
  }
  return { kind: 'url', url: url.href }
}

export function openSelectedSites(allSites, selectedIds, openWindow) {
  const result = {
    selectedCount: selectedIds.size,
    requestedCount: 0,
    mockCount: 0,
    invalidCount: 0,
    failedCount: 0,
  }
  const requestedUrls = new Set()

  for (const site of allSites) {
    if (!selectedIds.has(site.id)) continue
    const target = classifySiteTarget(site)
    if (target.kind === 'mock') {
      result.mockCount += 1
      continue
    }
    if (target.kind === 'invalid') {
      result.invalidCount += 1
      continue
    }
    if (requestedUrls.has(target.url)) continue
    requestedUrls.add(target.url)

    try {
      // Keep every request in the original user event; browsers may still block it.
      openWindow(target.url, '_blank', 'noopener,noreferrer')
      result.requestedCount += 1
    } catch {
      result.failedCount += 1
    }
  }

  return result
}
