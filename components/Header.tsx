import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">"</span>
            </div>
            <span className="text-xl font-bold text-gray-900">QuoteGen</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link href="/favorites" className="text-gray-600 hover:text-gray-900 font-medium">
              Favorites
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}