# Frontend Web App - Next.js

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, responsive web application built with **Next.js 15** and **React 19**, featuring server actions, Tailwind CSS styling, and seamless integration with the NestJS backend API.

## 🚀 Features

- **App Router**: Latest Next.js App Router for optimal performance
- **Server Actions**: Server-side data mutations with React Server Components
- **Type Safety**: Full TypeScript integration with shared type definitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: Reusable UI components with consistent styling
- **API Integration**: Direct communication with NestJS backend
- **Docker Support**: Containerized deployment ready

## 📁 Project Structure

```
apps/web/
├── app/                       # Next.js App Router
│   ├── layout.tsx             # Root layout component
│   ├── page.tsx               # Home page
│   ├── globals.css            # Global styles
│   ├── fonts/                 # Custom fonts
│   └── libs/                  # Utility functions
├── components/                # Reusable UI components
│   ├── button.tsx             # Button component
│   ├── input.tsx              # Input component
│   ├── product-form.tsx       # Product creation form
│   └── products.tsx           # Product list component
├── actions/                   # Server actions
│   └── create-product.ts      # Product creation action
├── public/                    # Static assets
├── Dockerfile                 # Container configuration
└── package.json               # Dependencies and scripts
```

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with App Router
- **UI Library**: [React 19](https://react.dev/) - User interface library
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- **Forms**: React Server Actions for data handling
- **Icons**: Custom SVG icons

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+
- pnpm

### Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 🎨 UI Components

### Available Components

- **Button**: Customizable button with variants
- **Input**: Form input with validation
- **ProductForm**: Product creation/editing form
- **Products**: Product listing with CRUD operations

### Styling Approach

- Utility-first with Tailwind CSS
- Consistent design tokens
- Responsive breakpoints
- Dark mode ready

## 🧪 Development

```bash
# Run linting
pnpm lint

# Type checking
pnpm check-types

# Format code
pnpm format
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
pnpm build
# Use Vercel CLI or connect GitHub repo
```

### Docker

```bash
# Build image
docker build -t nextjs-frontend .

# Run container
docker run -p 3000:3000 nextjs-frontend
```
