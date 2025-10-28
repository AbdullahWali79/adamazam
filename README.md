# Adam Azam Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Supabase. Features a black background with white text, mobile-responsive design, and a blog system with admin panel.

## Features

- **Modern Design**: Black background with white text and clean typography
- **Mobile Responsive**: Optimized for all device sizes
- **Blog System**: Dynamic blog posts with Supabase integration
- **Admin Panel**: Password-protected blog creation system
- **SEO Optimized**: Meta tags and structured content
- **TypeScript**: Full type safety throughout the application

## Pages

- **Home**: Welcome page with featured content
- **About The Book**: Book details and information
- **About The Author**: Author biography and achievements
- **Blog**: List of all blog posts with grid layout
- **Blog Post**: Individual blog post pages
- **Add Blog**: Admin panel for creating new blog posts (password protected)
- **Contact Us**: Contact form and information

## Tech Stack

- React 18
- TypeScript
- React Router DOM
- Supabase (Database & Authentication)
- CSS3 (Custom styling)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to the SQL Editor in your Supabase dashboard
3. Run the SQL commands from `supabase-schema.sql` to create the required tables
4. Get your project URL and anon key from the API settings

### 3. Environment Configuration

1. Copy `env.example` to `.env`
2. Add your Supabase credentials:

```env
REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the Application

```bash
npm start
```

The application will open at `http://localhost:3000`

## Admin Panel

- Access the admin panel at `/blogs/addblogs`
- Default password is set in the database (check `supabase-schema.sql`)
- Change the password by updating the `admin_passwords` table in Supabase

## Database Schema

### Blogs Table
- `id`: UUID primary key
- `title`: Blog post title
- `content`: Full blog content (HTML supported)
- `excerpt`: Short description
- `image_url`: Featured image URL
- `slug`: URL-friendly version of title
- `seo_title`: SEO optimized title
- `seo_description`: Meta description
- `created_at`: Creation timestamp
- `updated_at`: Last update timestamp

### Admin Passwords Table
- `id`: UUID primary key
- `password`: Admin access password
- `created_at`: Creation timestamp

## Customization

### Images
Replace the placeholder image URLs in the components with your actual images:
- Logo: Update in `src/pages/Home.tsx`
- Book Image: Update in `src/pages/Home.tsx` and `src/pages/AboutBook.tsx`
- Author Image: Update in `src/pages/AboutAuthor.tsx`
- Blog Images: Add via the admin panel

### Styling
All styles are in individual CSS files for each component. The main theme uses:
- Background: `#000000` (Black)
- Text: `#ffffff` (White)
- Accent: `#cccccc` (Light Gray)
- Cards: `#111111` (Dark Gray)

## Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy the `build` folder to your hosting service
3. Make sure to set the environment variables in your hosting platform

## License

This project is private and proprietary.

