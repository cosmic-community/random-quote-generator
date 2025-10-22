import Header from '@/components/Header'
import FavoritesList from '@/components/FavoritesList'

export const metadata = {
  title: 'My Favorite Quotes - Random Quote Generator',
  description: 'View and manage your saved favorite quotes.',
}

export default function FavoritesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              My Favorite Quotes
            </h1>
            <p className="text-lg text-gray-600">
              Your collection of inspiring quotes
            </p>
          </div>
          
          <FavoritesList />
        </div>
      </main>
    </div>
  )
}