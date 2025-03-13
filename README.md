# InfluAgent Landing Page

InfluAgent is a landing page project for an AI-powered social media growth assistant. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **State Management**: React Hooks
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Icons**: Lucide React

## Features

- Responsive Design
- Dark Mode Support
- Modern UI Components
- Performance Optimized
- SEO Friendly
- Accessibility Support

## Project Structure

```plaintext
influagent-landing/
├── app/                    # Next.js application directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── components/            # React components
│   ├── ui/               # UI base components
│   ├── features.tsx      # Features showcase component
│   ├── hero.tsx          # Homepage Hero section
│   ├── pricing.tsx       # Pricing plans component
│   ├── team.tsx          # Team introduction component
│   └── testimonial.tsx   # User testimonials component
├── hooks/                # Custom Hooks
├── lib/                  # Utility functions
└── public/              # Static assets
```

## Main Components

- **Hero**: Main website showcase area
- **Features**: Product features display
- **DashboardPreview**: Dashboard preview
- **Pricing**: Pricing plans
- **Testimonial**: User testimonials
- **Team**: Team introduction
- **FAQ**: Frequently asked questions
- **CTA**: Call to action

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd influagent-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Start production server:
```bash
npm start
```

## Requirements

- Node.js 18.0 or higher
- npm or yarn

## Configuration Files

- **next.config.mjs**: Next.js configuration with image optimization and experimental features
- **tailwind.config.js**: Tailwind CSS configuration with theme and animation settings
- **postcss.config.mjs**: PostCSS configuration
- **tsconfig.json**: TypeScript configuration

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Contact

- Project Maintainer: Tempest
- Email: tar118@pitt.edu

## More Features TODO List
- Integrate with Supabase to insert Waitlist info into database [DONE]