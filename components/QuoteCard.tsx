'use client'

import { useState, useEffect } from 'react'
import { Quote } from '@/types'
import { getCategoryColor, saveFavorite, removeFavorite, isFavorite } from '@/lib/utils'
import SocialShare from '@/components/SocialShare'

interface QuoteCardProps {
  quote: Quote
}

export default function QuoteCard({ quote }: QuoteCardProps) {
  const [favorited, setFavorited] = useState(false)
  
  useEffect(() => {
    setFavorited(isFavorite(quote.id))
  }, [quote.id])
  
  const handleFavoriteToggle = () => {
    if (favorited) {
      removeFavorite(quote.id)
      setFavorited(false)
    } else {
      saveFavorite(quote)
      setFavorited(true)
    }
  }
  
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in">
      <div className="flex justify-between items-start mb-6">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(quote.metadata.category)}`}>
          {quote.metadata.category.charAt(0).toUpperCase() + quote.metadata.category.slice(1)}
        </span>
        
        <button
          onClick={handleFavoriteToggle}
          className={`text-2xl transition-all transform hover:scale-110 ${
            favorited ? 'text-yellow-500' : 'text-gray-300 hover:text-yellow-400'
          }`}
          aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          {favorited ? '★' : '☆'}
        </button>
      </div>
      
      <blockquote className="mb-6">
        <p className="text-2xl md:text-3xl font-serif text-gray-800 leading-relaxed mb-4">
          "{quote.metadata.quote_text}"
        </p>
        <footer className="text-lg text-gray-600">
          — {quote.metadata.author}
          {quote.metadata.source && (
            <span className="text-gray-400"> • {quote.metadata.source}</span>
          )}
        </footer>
      </blockquote>
      
      <SocialShare 
        quoteText={quote.metadata.quote_text}
        author={quote.metadata.author}
      />
    </div>
  )
}