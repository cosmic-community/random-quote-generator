// Base Cosmic object interface
export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

// Quote category types
export type QuoteCategory = 'motivation' | 'success' | 'life' | 'wisdom' | 'happiness' | 'inspiration'

// Quote object type
export interface Quote extends CosmicObject {
  type: 'quotes'
  metadata: {
    quote_text: string
    author: string
    category: QuoteCategory
    source?: string
  }
}

// API response types
export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit: number
  skip: number
}

// Type guard for Quote
export function isQuote(obj: CosmicObject): obj is Quote {
  return obj.type === 'quotes'
}

// Favorite quote structure for local storage
export interface FavoriteQuote {
  id: string
  quote_text: string
  author: string
  category: QuoteCategory
  savedAt: string
}