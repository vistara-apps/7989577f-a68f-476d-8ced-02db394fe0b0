# AdGenie Remix - Base Mini App

A Next.js Base Mini App that automatically generates diverse ad variations from a single product image using AI.

## Features

- **Automated Ad Variation Generation**: Upload one product image and generate 3-5 distinct ad variations
- **Platform-Specific Optimization**: Tailored ad copy for TikTok, Instagram, and Facebook
- **Real-time Preview**: See generated variations with platform-specific styling
- **Performance Metrics**: Mock analytics showing engagement data
- **Beautiful UI**: Glass morphism design with smooth animations

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animation**: Framer Motion
- **AI**: OpenAI API (via OpenRouter)
- **Web3**: OnchainKit for Base integration
- **State Management**: React Hooks + TanStack Query

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local` and fill in your API keys:
   - OpenAI API Key (for OpenRouter)
   - OnchainKit API Key
   - Pinata API Keys (for IPFS storage)
   - Supabase credentials (for database)

4. Run the development server: `npm run dev`

## Environment Variables

```bash
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_onchainkit_api_key_here
OPENAI_API_KEY=your_openai_api_key_here
PINATA_API_KEY=your_pinata_api_key_here
PINATA_SECRET_KEY=your_pinata_secret_key_here
SUPABASE_URL=your_supabase_url_here
SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## Usage

1. Upload a product image using the drag-and-drop uploader
2. Enter a product description
3. Select target platforms (TikTok, Instagram, Facebook)
4. Click "Generate Ad Variations" to create AI-powered variations
5. Review generated variations with platform-specific copy
6. Select variations to post (future feature)

## Architecture

- **Frontend**: React components with TypeScript
- **Backend**: Next.js API routes
- **AI Integration**: OpenRouter with Gemini 2.0 Flash model
- **Styling**: Custom design system with CSS variables
- **Animation**: Smooth transitions and micro-interactions

## Future Enhancements

- Direct posting to social media accounts
- Real performance tracking integration
- Image variation generation (not just copy)
- Payment integration for credit system
- Advanced analytics dashboard
