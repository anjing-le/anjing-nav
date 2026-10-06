import assert from 'node:assert/strict'
import test from 'node:test'
import {
  classifySiteTarget,
  openSelectedSites,
  selectionForDoubleClick,
  toggleSiteSelection,
} from './navigation.js'

test('preview classification exposes the same normalized destination and blocked target kinds', () => {
  assert.deepEqual(classifySiteTarget({ domain: 'anjing.cc' }), {
    kind: 'url', url: 'https://anjing.cc/',
  })
  assert.deepEqual(classifySiteTarget({ url: 'http://ANJING.CC:80/notes' }), {
    kind: 'url', url: 'http://anjing.cc/notes',
  })
  assert.deepEqual(classifySiteTarget({ domain: 'foo.example.' }), { kind: 'mock', url: null })
  assert.deepEqual(classifySiteTarget({ mock: true, domain: 'anjing.cc' }), { kind: 'mock', url: null })
  assert.deepEqual(classifySiteTarget({ url: 'javascript:alert(1)' }), { kind: 'invalid', url: null })
})

test('single clicks immediately toggle membership without mutating the previous selection', () => {
  const original = new Set(['personal-a'])
  const added = toggleSiteSelection(original, 'tools-b')
  assert.deepEqual([...added], ['personal-a', 'tools-b'])
  assert.deepEqual([...original], ['personal-a'])
  assert.deepEqual([...toggleSiteSelection(added, 'personal-a')], ['tools-b'])
})

test('a double click preserves an already-selected target from before its first click', () => {
  const before = new Set(['personal-a', 'tools-b'])
  const afterFirstClick = toggleSiteSelection(before, 'personal-a')
  assert.deepEqual([...afterFirstClick], ['tools-b'])
  const batch = selectionForDoubleClick(before, 'personal-a')
  assert.deepEqual([...batch], ['personal-a', 'tools-b'])
  assert.notStrictEqual(batch, before)
  assert.deepEqual([...before], ['personal-a', 'tools-b'])
})

test('a double click adds a previously-unselected target and retains cross-category choices', () => {
  const before = new Set(['personal-a', 'tools-b'])
  assert.deepEqual(
    [...selectionForDoubleClick(before, 'work-c')],
    ['personal-a', 'tools-b', 'work-c'],
  )
  assert.deepEqual([...selectionForDoubleClick(new Set(), 'wander-d')], ['wander-d'])
  assert.deepEqual([...before], ['personal-a', 'tools-b'])
})

test('batch requests run synchronously, deduplicate normalized URLs, and use safe new-tab arguments', () => {
  const sites = [
    { id: 'personal', url: 'https://ANJING.CC:443/' },
    { id: 'same-url', domain: 'anjing.cc' },
    { id: 'tools', url: 'http://tools.anjing.cc/test', domain: 'ignored.example' },
    { id: 'work', domain: 'work.anjing.cc' },
    { id: 'not-selected', domain: 'not-selected.anjing.cc' },
  ]
  const selected = new Set(['personal', 'same-url', 'tools', 'work'])
  const calls = []
  let returned = false
  const result = openSelectedSites(sites, selected, (...args) => {
    assert.equal(returned, false)
    calls.push(args)
  })
  returned = true
  assert.deepEqual(calls, [
    ['https://anjing.cc/', '_blank', 'noopener,noreferrer'],
    ['http://tools.anjing.cc/test', '_blank', 'noopener,noreferrer'],
    ['https://work.anjing.cc/', '_blank', 'noopener,noreferrer'],
  ])
  assert.deepEqual(result, {
    selectedCount: 4, requestedCount: 3, mockCount: 0, invalidCount: 0, failedCount: 0,
  })
})

test('mock records and reserved example hosts are never sent to the browser', () => {
  const sites = [
    { id: 'explicit', mock: true, url: 'https://anjing.cc/' },
    { id: 'bare-example', url: 'https://EXAMPLE/' },
    { id: 'sub-example', domain: 'foo.example' },
    { id: 'trailing-dot', url: 'https://FOO.EXAMPLE./' },
    { id: 'repeated-dot', url: 'https://foo.example.../' },
  ]
  const result = openSelectedSites(sites, new Set(sites.map((site) => site.id)), () => {
    assert.fail('a mock URL must never be requested')
  })
  assert.deepEqual(result, {
    selectedCount: 5, requestedCount: 0, mockCount: 5, invalidCount: 0, failedCount: 0,
  })
})

test('unsupported protocols, missing addresses, and malformed explicit URLs are rejected', () => {
  const sites = [
    { id: 'script', url: 'javascript:alert(1)' },
    { id: 'data', url: 'data:text/html,hello' },
    { id: 'file', url: 'file:///tmp/test.html' },
    { id: 'ftp', url: 'ftp://anjing.cc/' },
    { id: 'missing' },
    { id: 'bad-host', url: 'https://[invalid' },
    { id: 'invalid-priority', url: 'not a URL', domain: 'anjing.cc' },
    { id: 'empty-priority', url: '', domain: 'anjing.cc' },
  ]
  const result = openSelectedSites(sites, new Set(sites.map((site) => site.id)), () => {
    assert.fail('an invalid URL must never be requested')
  })
  assert.deepEqual(result, {
    selectedCount: 8, requestedCount: 0, mockCount: 0, invalidCount: 8, failedCount: 0,
  })
})

test('null returns count only as requests and do not imply opening success or failure', () => {
  const result = openSelectedSites([{ id: 'site', domain: 'anjing.cc' }], new Set(['site']), () => null)
  assert.deepEqual(result, {
    selectedCount: 1, requestedCount: 1, mockCount: 0, invalidCount: 0, failedCount: 0,
  })
})

test('a thrown request is counted and does not stop the following selected URL', () => {
  const sites = [
    { id: 'first', domain: 'first.anjing.cc' },
    { id: 'second', domain: 'second.anjing.cc' },
  ]
  const calls = []
  const result = openSelectedSites(sites, new Set(['first', 'second']), (url) => {
    calls.push(url)
    if (url === 'https://first.anjing.cc/') throw new Error('request failed')
    return null
  })
  assert.deepEqual(calls, ['https://first.anjing.cc/', 'https://second.anjing.cc/'])
  assert.deepEqual(result, {
    selectedCount: 2, requestedCount: 1, mockCount: 0, invalidCount: 0, failedCount: 1,
  })
})

test('empty selection makes no browser requests', () => {
  const result = openSelectedSites([{ id: 'site', domain: 'anjing.cc' }], new Set(), () => {
    assert.fail('nothing is selected')
  })
  assert.deepEqual(result, {
    selectedCount: 0, requestedCount: 0, mockCount: 0, invalidCount: 0, failedCount: 0,
  })
})
