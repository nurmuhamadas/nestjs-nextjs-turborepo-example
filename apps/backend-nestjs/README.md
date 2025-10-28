# Backend API - NestJS

[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

A robust RESTful API backend built with **NestJS** framework, featuring modular architecture, comprehensive testing, and seamless integration with the monorepo ecosystem.

## 🚀 Features

- **Modular Architecture**: Clean separation of concerns with feature-based modules
- **Type Safety**: Full TypeScript implementation with shared type definitions
- **Testing**: Comprehensive unit and e2e test coverage with Jest
- **Validation**: Built-in request validation and error handling
- **Documentation**: Auto-generated API documentation ready
- **Docker Support**: Containerized deployment with optimized Dockerfile

## 📁 Project Structure

```
apps/backend-nestjs/
├── src/
│   ├── app.module.ts          # Root application module
│   ├── main.ts                # Application entry point
│   └── products/              # Product management feature
│       ├── products.controller.ts
│       ├── products.service.ts
│       ├── products.module.ts
│       ├── products.controller.spec.ts
│       └── products.service.spec.ts
├── test/                      # End-to-end tests
├── Dockerfile                 # Container configuration
└── package.json               # Dependencies and scripts
```

## 🛠️ Technology Stack

- **Framework**: [NestJS](https://nestjs.com/) - Progressive Node.js framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- **Testing**: [Jest](https://jestjs.io/) - JavaScript testing framework
- **Linting**: ESLint with shared monorepo configuration
- **Build Tool**: SWC for fast compilation

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

# Run tests
pnpm test

# Build for production
pnpm build
```

## 🚀 API Endpoints

### Products

- `GET /products` - Retrieve all products
- `POST /products` - Create a new product
- `GET /products/:id` - Get product by ID
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product

## 🧪 Testing

```bash
# Run unit tests
pnpm test

# Run e2e tests
pnpm test:e2e

# Generate test coverage
pnpm test:cov
```

## 🚀 Deployment

### Local Production

```bash
pnpm build
pnpm start:prod
```

### Docker

```bash
# Build image
docker build -t nestjs-backend .

# Run container
docker run -p 3000:3000 nestjs-backend
```
