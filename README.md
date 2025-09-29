# Pimjo - E-commerce Dashboard

Pimjo is a modern, full-featured e-commerce admin dashboard built with Next.js and Tailwind CSS. It provides a clean interface to monitor sales, manage orders, and view customer demographics.

## Features

- **Interactive Dashboard:** At-a-glance metrics for customers, orders, and revenue with beautiful charts powered by Recharts. Switch Light and Dark Mode .
- **Authentication:** Secure login and registration functionality using NextAuth.js.
- **Add To Cart:** Product Add To Cart and save the product in local storage.
- **Responsive Design:** A seamless experience across all devices, from mobile to desktop.
- **Client & Dashboard Layouts:** Separate, optimized layouts for the public-facing pages and the secure dashboard area.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (using App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **Charting:** [Recharts](https://recharts.org/)
- **UI Components:** Built with React and custom UI components for a consistent look and feel.

## Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/) (v18 or later recommended)
- [pnpm](https://pnpm.io/installation) (as indicated by `pnpm-lock.yaml`)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mostafizar-rahman/pimjo
   ```
2. Navigate to the project directory:
   ```sh
   cd pimjo
   ```
3. Install the dependencies:
   ```sh
   pnpm install
   ```

### Running the Development Server

To start the development server (with Turbopack for high-speed development):
```sh
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Demo Credentials

You can use the following credentials to log in and explore the dashboard:

- **Email:** `admin@example.com`
- **Password:** `admin123`

## Available Scripts

In the project directory, you can run:

- `pnpm dev`: Runs the app in development mode with Turbopack.
- `pnpm build`: Builds the application for production usage with Turbopack.
- `pnpm start`: Starts a Next.js production server.

## Deployment

This application is configured for easy deployment on [Vercel](https://vercel.com/), the platform from the creators of Next.js.

To deploy, ensure you have set up the necessary environment variables (e.g., for NextAuth.js and database connections) in your Vercel project settings.
