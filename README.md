# 🚀 Medium Blog Clone

A sleek Medium-like blogging platform with a modern twist! Built with cutting-edge technologies for a smooth user experience.

## Features

- **Create and manage blogs:** Effortlessly write and publish your posts.
- **View all and individual posts:** Browse through a collection or read specific articles.
- **User authentication:** Secure login and signup with JWT.
- **Minimal and stylish design:** Enhanced UI with Tailwind CSS and skeleton loaders.

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **TypeScript & Zod:** Type inference for shared types. [npm package here](https://www.npmjs.com/package/@pankajkumardev/medium-common)
- **Backend:** Serverless with Cloudflare Workers, Hono framework
- **Database:** PostgreSQL with Prisma ORM

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/medium-clone.git
   cd medium-clone
   npm install
   DATABASE_URL=your_postgres_connection_string
   JWT_SECRET=your_jwt_secret
   npm run dev
  
