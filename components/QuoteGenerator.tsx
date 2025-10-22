'use client'

import { useState, useEffect } from 'react'
import { Quote, QuoteCategory } from '@/types'
import { getRandomQuote } from '@/lib/utils'
import QuoteCard from '@/components/QuoteCard'
import CategoryFilter from '@/components/CategoryFilter'

interface QuoteGeneratorProps {
  quotes: Quote[]
}

export default function QuoteGenerator({ quotes }: QuoteGeneratorProps) {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<QuoteCategory | 'all'>('all')
  const [isAnimating, setIsAnimating] = useState(false)
  
  // Initialize with random quote on mount
  useEffect(() => {
    if (quotes && quotes.length > 0) {
      const randomQuote = getRandomQuote(quotes)
      setCurrentQuote(randomQuote)
    }
  }, [quotes])
  
  // Handle new quote generation
  const handleNewQuote = () => {
    setIsAnimating(true)
    
    setTimeout(() => {
      const filteredQuotes = selectedCategory === 'all' 
        ? quotes 
        : quotes.filter(q => q.metadata?.category === selectedCategory)
      
      const newQuote = getRandomQuote(filteredQuotes)
      setCurrentQuote(newQuote)
      setIsAnimating(false)
    }, 300)
  }
  
  // Handle category change
  const handleCategoryChange = (category: QuoteCategory | 'all') => {
    setSelectedCategory(category)
    setIsAnimating(true)
    
    setTimeout(() => {
      const filteredQuotes = category === 'all' 
        ? quotes 
        : quotes.filter(q => q.metadata?.category === category)
      
      const newQuote = getRandomQuote(filteredQuotes)
      setCurrentQuote(newQuote)
      setIsAnimating(false)
    }, 300)
  }
  
  if (!quotes || quotes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No quotes available. Add some quotes to your Cosmic bucket to get started!</p>
      </div>
    )
  }
  
  return (
    <div className="space-y-8">
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {currentQuote && <QuoteCard quote={currentQuote} />}
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={handleNewQuote}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
        >
          Get New Quote
        </button>
      </div>
    </div>
  )
}