# Agape Labs Ltd Website

This is the official landing page for Agape Labs Ltd, built with Next.js and TailwindCSS.

## Project Overview

- **Business Name**: Agape Labs Ltd
- **Primary Purpose**: Business Landing Page
- **Target Audience**: Professional Clientele

## Technical Stack

- Framework: Next.js (App Router)
- Styling: TailwindCSS
- Deployment: GitHub Pages
- Responsive Design: Mobile, tablet, desktop

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/AgapeLabsWeb.git
   cd AgapeLabsWeb
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Image Setup

Before deployment, you'll need to add the following images to the `public/images` directory:

- `agape-labs-logo.png` - Main logo in black
- `agape-labs-logo-white.png` - White version of the logo for dark backgrounds
- `hero-image.jpg` - Hero section background image

## Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions. 

1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy the website
3. The deployed site will be available at `https://yourusername.github.io/AgapeLabsWeb/`

## Project Structure

```
agapelabs-web/
├── app/                  # Next.js app directory
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Home page component
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── home/             # Home page specific components
│   │   ├── Hero.tsx      # Hero section component
│   │   └── Features.tsx  # Features section component
│   └── layout/           # Layout components
│       ├── Header.tsx    # Header component
│       └── Footer.tsx    # Footer component
├── public/               # Static assets
│   └── images/           # Image assets
├── .github/              # GitHub configuration
│   └── workflows/        # GitHub Actions workflows
│       └── deploy.yml    # Deployment workflow
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # TailwindCSS configuration
└── README.md             # Project documentation
```

## Performance Optimization

- Image optimization via Next.js Image component
- Code splitting and lazy loading
- TailwindCSS for minimal CSS footprint
- Static site generation for fast loading

## Accessibility

This project aims to comply with WCAG guidelines by:

- Using semantic HTML5
- Ensuring proper color contrast
- Adding appropriate aria attributes
- Making the site fully keyboard navigable

## License

[MIT](https://choosealicense.com/licenses/mit/)
