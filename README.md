# Random Quote Generator

![App Preview](https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=300&fit=crop&auto=format)

A beautiful and interactive random quote generator built with Next.js 15 and Cosmic CMS. Discover inspiring quotes across multiple categories, save your favorites, and share wisdom with the world.

## Features

- 🎲 **Random Quote Generation** - Get fresh quotes with smooth fade-in animations
- 📚 **Multiple Categories** - Browse quotes from Motivation, Success, Life, Wisdom, Happiness, and Inspiration
- ⭐ **Favorites System** - Save and manage your favorite quotes with persistent storage
- 🔗 **Social Sharing** - Share quotes directly to Twitter, Facebook, and LinkedIn
- 📱 **Fully Responsive** - Beautiful experience on all devices
- 🎨 **Modern UI** - Clean, minimalist design with smooth animations
- ⚡ **Fast Performance** - Built with Next.js 15 Server Components for optimal speed

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68f855e80f05f1f3d1209216&clone_repository=68f86e230f05f1f3d12094ee)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from existing content structure

### Code Generation Prompt

> Create a random quote generator with categories, favorites, and social sharing features

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Cosmic SDK** - Official SDK for Cosmic integration

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket
- Cosmic bucket with quotes content

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Random Quotes

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all quotes
const { objects: quotes } = await cosmic.objects
  .find({ type: 'quotes' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Get quotes by category
const { objects: categoryQuotes } = await cosmic.objects
  .find({ 
    type: 'quotes',
    'metadata.category': 'motivation'
  })
  .props(['id', 'title', 'metadata'])
  .depth(1)
```

### Quote Data Structure

```typescript
interface Quote {
  id: string
  title: string
  slug: string
  metadata: {
    quote_text: string
    author: string
    category: 'motivation' | 'success' | 'life' | 'wisdom' | 'happiness' | 'inspiration'
    source?: string
  }
}
```

## Cosmic CMS Integration

This app uses Cosmic CMS to manage quote content. The content model includes:

- **Quote Text** - The inspirational quote content
- **Author** - Quote attribution
- **Category** - Thematic classification (select-dropdown)
- **Source** - Optional reference or book title

All content is managed through the Cosmic dashboard and fetched using the Cosmic SDK with proper TypeScript types.

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Click the "Deploy" button above
2. Connect your repository
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Environment Variables

Set these in your hosting platform:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key

## Features in Detail

### Random Quote Generation
- Click "New Quote" to fetch a random quote with smooth fade-in animation
- Filter by category to get quotes from specific themes
- Efficient random selection algorithm

### Favorites System
- Click the star icon to save quotes to favorites
- Favorites persist in browser local storage
- View all favorites in a dedicated section
- Remove quotes from favorites easily

### Social Sharing
- Share to Twitter with pre-formatted text
- Share to Facebook with quote and author
- Share to LinkedIn for professional networks
- One-click sharing with proper URL encoding

### Category System
- 6 pre-defined categories for organization
- Color-coded category badges
- Filter quotes by category
- Category-specific random quote generation

<!-- README_END -->