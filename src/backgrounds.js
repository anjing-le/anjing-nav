const backgrounds = ['starry-sky', 'water-lilies', 'great-wave', 'quiet-mountain']
const storageKey = 'anjing-nav:last-background'

// Choose once before React renders; selecting sites never changes the background.
export function applyPageBackground() {
  let previous
  try {
    previous = window.localStorage.getItem(storageKey)
  } catch {
    // The page still works when browser storage is unavailable.
  }

  const candidates = backgrounds.filter((name) => name !== previous)
  const chosen = candidates[Math.floor(Math.random() * candidates.length)]
  document.documentElement.style.setProperty('--page-art', `url("/backgrounds/${chosen}-v2.webp")`)

  try {
    window.localStorage.setItem(storageKey, chosen)
  } catch {
    // Storage is only used to avoid consecutive repeats.
  }
}
