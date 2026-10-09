// Turns a file name from content.json into a usable URL.
// "photo.jpg" -> file in the public/ folder; "https://..." -> used as is.
export const asset = (path) => {
  if (!path) return ''
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}

// First and last name initials, e.g. "Venkata Sai Kandipati" -> "VK"
export const initials = (name = '') => {
  const words = name.split(/\s+/).filter(Boolean)
  if (words.length === 0) return ''
  const first = words[0][0]
  const last = words.length > 1 ? words[words.length - 1][0] : ''
  return (first + last).toUpperCase()
}
