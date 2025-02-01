# Personal Website

My personal website built with Next.js 15.

## Overview

- / -> Home
- /about -> About
- /projects -> Projects
- /bookmarks -> Bookmarks
- /bookmarks/[slug] -> Static pre-rendered bookmarks pages using [Raindrop.io](https://raindrop.io).

## Tech Stack

This project uses the following technologies and libraries:

### Framework & Core

- **Next.js 15** – React-based full-stack framework
- **React 19** – JavaScript library for building user interfaces

### Styling & UI

- **Tailwind CSS** – Utility-first CSS framework
- **shadcn/ui** – UI components based on Radix UI
- **Lucide React** – Modern and customizable icon set
- **@tabler/icons-react** – Lightweight and beautiful icons
- **Tailwind Merge** – To merge Tailwind CSS classes

### State Management & Forms

- **React Hook Form** – Performance centered form management
- **Zod** – TypeScript-first validation and schema definition library
- **@hookform/resolvers** – Validation integration for React Hook Form

### UI Components & Animations

- **Radix UI** – Accessible and flexible UI components (e.g., @radix-ui/react-dialog, @radix-ui/react-toast, @radix-ui/react-progress, etc.)
- **Vaul** – A beautiful and animated sub-component built on Radix UI
- **Sonner** – Modern and stylish notification/toast component

### Networking & API

- **Resend** – Modern API for email delivery
- **React Tweet** – Component to embed tweets
- **React Phone Number Input** – Component for phone number input

### Deployment & Performance

- **Vercel** – Hosting optimized for Next.js
- **@vercel/analytics** – Vercel Analytics integration
- **@vercel/speed-insights** – Performance and speed insights

### Development & Tooling

- **TypeScript** – Type-safe JavaScript
- **ESLint** – Code quality checking
- **PostCSS** – CSS processing
- **Clsx** – Conditional class merging
- **Class Variance Authority (CVA)** – For managing component variants

## Running Locally

1. Clone the project:

```bash
git clone https://github.com/anilsoylu/anilsoylu.dev.git
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env` file in the root of the project and add the following variables:

```bash
NEXT_PUBLIC_RAINDROP_ACCESS_TOKEN=your_raindrop_token
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email@example.com
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Live Demo

[https://anilsoylu.dev](https://anilsoylu.dev)

## Repo Activity

![Alt](https://repobeats.axiom.co/api/embed/b14afe513957d0935ca1019094ca2f5c62d1dc80.svg "Repobeats analytics image")

## 📝 License

MIT

---

Developed with ❤️ by [Anıl Soylu](https://github.com/anilsoylu)
