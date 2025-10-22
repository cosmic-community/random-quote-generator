import { Quote, FavoriteQuote } from '@/types'

// Get random quote from array
export function getRandomQuote(quotes: Quote[]): Quote | null {
  if (!quotes || quotes.length === 0) {
    return null
  }
  const randomIndex = Math.floor(Math.random() * quotes.length)
  return quotes[randomIndex] || null
}

// Category color mapping
export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    motivation: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    life: 'bg-purple-100 text-purple-800',
    wisdom: 'bg-yellow-100 text-yellow-800',
    happiness: 'bg-pink-100 text-pink-800',
    inspiration: 'bg-indigo-100 text-indigo-800',
  }
  return colors[category] || 'bg-gray-100 text-gray-800'
}

// Social share URLs
export function getTwitterShareUrl(quote: string, author: string): string {
  const text = `"${quote}" - ${author}`
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
}

export function getFacebookShareUrl(): string {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`
}

export function getLinkedInShareUrl(): string {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`
}

// Favorites management (local storage)
export function getFavorites(): FavoriteQuote[] {
  if (typeof window === 'undefined') return []
  
  try {
    const favorites = localStorage.getItem('quote-favorites')
    return favorites ? JSON.parse(favorites) : []
  } catch (error) {
    console.error('Error reading favorites:', error)
    return []
  }
}

export function saveFavorite(quote: Quote): void {
  const favorites = getFavorites()
  const newFavorite: FavoriteQuote = {
    id: quote.id,
    quote_text: quote.metadata.quote_text,
    author: quote.metadata.author,
    category: quote.metadata.category,
    savedAt: new Date().toISOString(),
  }
  
  // Check if already favorited
  const exists = favorites.some(fav => fav.id === quote.id)
  if (!exists) {
    favorites.push(newFavorite)
    localStorage.setItem('quote-favorites', JSON.stringify(favorites))
  }
}

export function removeFavorite(quoteId: string): void {
  const favorites = getFavorites()
  const updated = favorites.filter(fav => fav.id !== quoteId)
  localStorage.setItem('quote-favorites', JSON.stringify(updated))
}

export function isFavorite(quoteId: string): boolean {
  const favorites = getFavorites()
  return favorites.some(fav => fav.id === quoteId)
}