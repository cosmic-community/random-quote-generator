import { getAllQuotes } from '@/lib/cosmic'
import { Quote } from '@/types'
import QuoteGenerator from '@/components/QuoteGenerator'
import Header from '@/components/Header'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function HomePage() {
  const quotes = await getAllQuotes() as Quote[]
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Random Quote Generator
            </h1>
            <p className="text-xl text-gray-600">
              Discover inspiration, wisdom, and motivation with every click
            </p>
          </div>
          
          <QuoteGenerator quotes={quotes} />
        </div>
      </main>
    </div>
  )
}