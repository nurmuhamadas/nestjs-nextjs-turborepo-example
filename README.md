# NestJS + Next.js Monorepo with Turborepo

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/yourusername/nestjs-nextjs-tuborepo/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)

A modern, scalable full-stack monorepo showcasing the integration of **NestJS** backend with **Next.js** frontend, leveraging **Turborepo** for efficient build orchestration and shared tooling. This project demonstrates best practices in monorepo management, type safety, and cross-application development.

## 🚀 Project Overview

This monorepo serves as a comprehensive example of building a full-stack application with modern JavaScript/TypeScript technologies. It features a RESTful API backend built with NestJS and a responsive web frontend using Next.js, all managed within a single repository for streamlined development and deployment.

**Key Technologies:**

- **Backend:** NestJS, Node.js, Express
- **Frontend:** Next.js, React, Tailwind CSS
- **Build Tool:** Turborepo
- **Language:** TypeScript
- **Package Manager:** pnpm
- **Linting/Formatting:** ESLint, Prettier

**Goals:**

- Demonstrate monorepo architecture for scalable development
- Showcase type-safe communication between frontend and backend
- Provide a foundation for rapid prototyping and production-ready applications
- Highlight efficient CI/CD workflows with Turborepo

## 📁 Project Structure

```
nestjs-nextjs-tuborepo/
├── apps/
│   ├── backend-nestjs/          # NestJS API server
│   │   ├── src/
│   │   │   ├── products/        # Product management module
│   │   │   └── main.ts          # Application entry point
│   │   └── Dockerfile           # Containerization
│   └── web/                     # Next.js frontend application
│       ├── app/                 # App Router pages and components
│       ├── components/          # Reusable UI components
│       └── public/              # Static assets
├── packages/
│   ├── eslint-config/           # Shared ESLint configurations
│   ├── typescript-config/       # Shared TypeScript configurations
│   └── types/                   # Shared TypeScript types and interfaces
├── turbo.json                   # Turborepo configuration
├── pnpm-workspace.yaml          # pnpm workspace configuration
└── package.json                 # Root package.json with workspace scripts
```

### Applications

- **`apps/backend-nestjs`**: RESTful API built with NestJS, featuring product management endpoints
- **`apps/web`**: Modern React application with Next.js App Router, Tailwind CSS styling, and server actions

### Shared Packages

- **`packages/types`**: Centralized TypeScript definitions for type safety across apps
- **`packages/eslint-config`**: Consistent code quality rules for all packages
- **`packages/typescript-config`**: Standardized TypeScript compiler options

## 🛠️ Common Packages Creation

Shared packages in this monorepo are developed with a focus on reusability and maintainability:

### Development Workflow

1. **Local Development**: Use `pnpm dev` for watch mode compilation
2. **Building**: Run `pnpm build` to compile TypeScript to JavaScript
3. **Versioning**: Semantic versioning with automated changelog generation
4. **Publishing**: Internal publishing to workspace registry for cross-package dependencies

### Key Practices

- **Type Safety**: All packages export TypeScript definitions for IDE support
- **Dependency Management**: Workspace protocol (`workspace:*`) for internal dependencies
- **Build Orchestration**: Turborepo handles dependency graphs and parallel builds
- **Cross-Package Imports**: Seamless importing of shared utilities and types

## 💡 Monorepo Benefits & Best Practices

### Advantages

- **Code Sharing**: Eliminate duplication with shared packages and utilities
- **Atomic Changes**: Single commit for changes across multiple applications
- **Consistent Tooling**: Unified ESLint, Prettier, and TypeScript configurations
- **Efficient CI/CD**: Parallel builds and intelligent caching with Turborepo

### Implemented Best Practices

- **Workspace Dependencies**: Use `workspace:*` for internal package references
- **Task Dependencies**: Turborepo ensures proper build order with `dependsOn`
- **Caching Strategy**: Remote caching for faster CI builds
- **Type Safety**: Shared types prevent runtime errors across applications

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+
- pnpm 9.0.0+

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/nestjs-nextjs-tuborepo.git
cd nestjs-nextjs-tuborepo

# Install dependencies
pnpm install

# Start development servers
pnpm dev
```

### Development Commands

```bash
# Build all applications and packages
pnpm build

# Run linting across the monorepo
pnpm lint

# Format code with Prettier
pnpm format

# Type checking
pnpm check-types

# Run tests
pnpm test
```

### Individual App Development

```bash
# Backend development
cd apps/backend-nestjs
pnpm dev

# Frontend development
cd apps/web
pnpm dev
```

## 🚀 Deployment

### Backend (NestJS)

```bash
cd apps/backend-nestjs
pnpm build
pnpm start:prod
```

### Frontend (Next.js)

```bash
cd apps/web
pnpm build
pnpm start
```

### Docker Support

Both applications include Dockerfiles for containerized deployment.

### Development Guidelines

- Follow TypeScript best practices
- Maintain consistent code style with ESLint and Prettier
- Add tests for new features
- Update documentation as needed

## 📞 Contact

**Your Name**

- GitHub: [@nurmuhamadas](https://github.com/nurmuhamadas)
- LinkedIn: [Nur Muhamad Ash Shidiqi](https://linkedin.com/in/nurmuhamadas)
- Medium: [Beyond Dev](https://blog.beyonddev.id)
- Email: nurmuhamad.a.13@gmail.com

---

_Built with ❤️ using NestJS, Next.js, and Turborepo_
