'use client'

import { useState, useEffect } from 'react'
import { FavoriteQuote } from '@/types'
import { getFavorites, removeFavorite, getCategoryColor } from '@/lib/utils'
import SocialShare from '@/components/SocialShare'

export default function FavoritesList() {
  const [favorites, setFavorites] = useState<FavoriteQuote[]>([])
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    setFavorites(getFavorites())
  }, [])
  
  const handleRemove = (quoteId: string) => {
    removeFavorite(quoteId)
    setFavorites(getFavorites())
  }
  
  if (!mounted) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Loading favorites...</p>
      </div>
    )
  }
  
  if (favorites.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
        <div className="text-6xl mb-4">⭐</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">No favorites yet</h3>
        <p className="text-gray-600 mb-6">
          Start adding quotes to your favorites by clicking the star icon on any quote
        </p>
        <a
          href="/"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Discover Quotes
        </a>
      </div>
    )
  }
  
  return (
    <div className="space-y-6">
      {favorites.map((favorite) => (
        <div
          key={favorite.id}
          className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in"
        >
          <div className="flex justify-between items-start mb-6">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(favorite.category)}`}>
              {favorite.category.charAt(0).toUpperCase() + favorite.category.slice(1)}
            </span>
            
            <button
              onClick={() => handleRemove(favorite.id)}
              className="text-2xl text-yellow-500 hover:text-gray-400 transition-all transform hover:scale-110"
              aria-label="Remove from favorites"
            >
              ★
            </button>
          </div>
          
          <blockquote className="mb-6">
            <p className="text-xl md:text-2xl font-serif text-gray-800 leading-relaxed mb-4">
              "{favorite.quote_text}"
            </p>
            <footer className="text-lg text-gray-600">
              — {favorite.author}
            </footer>
          </blockquote>
          
          <SocialShare 
            quoteText={favorite.quote_text}
            author={favorite.author}
          />
        </div>
      ))}
    </div>
  )
}