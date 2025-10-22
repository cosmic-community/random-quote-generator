import { QuoteCategory } from '@/types'

interface CategoryFilterProps {
  selectedCategory: QuoteCategory | 'all'
  onCategoryChange: (category: QuoteCategory | 'all') => void
}

const categories: Array<{ value: QuoteCategory | 'all'; label: string }> = [
  { value: 'all', label: 'All Categories' },
  { value: 'motivation', label: 'Motivation' },
  { value: 'success', label: 'Success' },
  { value: 'life', label: 'Life' },
  { value: 'wisdom', label: 'Wisdom' },
  { value: 'happiness', label: 'Happiness' },
  { value: 'inspiration', label: 'Inspiration' },
]

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Category</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => onCategoryChange(category.value)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === category.value
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  )
}