# Waitress Rating App

A mobile-first web application that allows diners to quickly rate their server's performance at restaurants using a simple, streamlined rating system. The app focuses on providing immediate feedback to help improve service quality.

## Features

- **Simple 1-5 Star Rating System**: Quick and easy server performance ratings
- **Restaurant Lookup**: Find restaurants by location
- **Anonymous Ratings**: Submit feedback without revealing your identity
- **Server Profiles**: View basic server profile pages with rating history
- **Personal Rating History**: Track your previous ratings and dining experiences

## Tech Stack

- **Frontend**: Next.js 15 with App Router
- **Authentication**: Supabase Auth
- **Database**: PostgreSQL (via Supabase)
- **Styling**: Tailwind CSS
- **TypeScript**: Full type safety throughout the application

## Getting Started

### Prerequisites

- Node.js 18+ 
- A Supabase project

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd waitress-rating
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Fill in your Supabase credentials in `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon/public key
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key

4. Run the database migrations:
```bash
# Run the SQL migration in your Supabase SQL editor
# File: supabase/migrations/001_initial.sql
```

5. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Database Schema

The application uses the following main tables:

- **restaurants**: Store restaurant information (name, address, contact details)
- **servers**: Store server information linked to restaurants
- **ratings**: Store user ratings for servers (1-5 stars, anonymous option)

## Project Structure

```
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── dashboard/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   └── supabase/
│       ├── client.ts
│       └── server.ts
├── supabase/
│   └── migrations/
└── middleware.ts
```

## Success Metrics

- Number of ratings submitted per day
- User retention rate after first rating
- Restaurant adoption rate

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is private and proprietary.