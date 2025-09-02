# NASA Management Client

![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)
![Non-Commercial](https://img.shields.io/badge/Use-Non--Commercial-red)
![Fork Friendly](https://img.shields.io/badge/Fork-Friendly-green)
![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

A comprehensive management application for NASA operations, built with Next.js 15 and modern web technologies. This application provides tools for managing employees, fleet operations, documentation, and various business processes.

## 🚀 Features

### Core Modules
- **Dashboard** - Overview and analytics for key metrics
- **Employee Management** - Complete HR system with role management and follow-up tracking
- **Fleet Management** - Vehicle tracking, maintenance, and assignment system
- **Documentation** - Centralized knowledge base for different departments
- **Agenda** - Travel and event scheduling system

### Key Capabilities
- **Multi-version Support** - Switch between different NASA project versions (pre-alpha, alpha, pre-beta)
- **Responsive Design** - Optimized for desktop and mobile devices
- **Dark/Light Theme** - Built-in theme switching with system preference detection
- **Data Tables** - Advanced data visualization with sorting, filtering, and pagination
- **Sidebar Navigation** - Collapsible sidebar with organized menu structure
- **Financial Tools** - Built-in calculators for financial balance, bonuses, and stock management

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Icons**: Lucide React
- **Animations**: Motion library
- **Fonts**: Geist Sans & Geist Mono
- **3D Graphics**: OGL (WebGL library)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nasa-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Structure

```
nasa-client/
├── app/                          # Next.js App Router
│   ├── (app-pages)/             # Main application pages
│   │   ├── dashboard/           # Dashboard module
│   │   ├── employees/           # Employee management
│   │   │   ├── roles/          # Role management
│   │   │   └── follow-up/      # Employee follow-up
│   │   └── fleet/              # Fleet management
│   ├── modules/                 # Shared modules
│   │   ├── shared/             # Common components & services
│   │   │   ├── components/     # Reusable UI components
│   │   │   ├── shadcn/         # UI component library
│   │   │   └── services/       # HTTP and API services
│   │   └── Home/               # Home page components
│   └── globals.css             # Global styles
├── public/                      # Static assets
│   ├── fonts/                  # Custom fonts (Nasalization)
│   ├── logo/                   # NASA logos and branding
│   └── avatars/                # User avatars
└── lib/                        # Utility functions
```

## 🎯 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 🎨 UI Components

The application uses a custom component library built on top of Radix UI primitives:

- **Data Tables** - Advanced table components with sorting and filtering
- **Sidebar** - Collapsible navigation sidebar
- **Theme Toggle** - Dark/light mode switching
- **Avatar** - User profile images
- **Cards** - Content containers
- **Buttons** - Interactive elements
- **Inputs** - Form controls
- **Tooltips** - Contextual information

## 🔧 Configuration

### Environment Setup
The application is configured to work out of the box with default settings. For production deployment, you may need to configure:

- Environment variables for API endpoints
- Database connections
- Authentication providers
- File upload configurations

### Theme Configuration
The application supports both light and dark themes with automatic system preference detection. Themes can be customized in the `globals.css` file.

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)
The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is licensed under the GPL v3 License - see the [LICENSE](LICENSE) file for details.

**Note**: This software is intended for non-commercial use only.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions, please refer to the documentation or create an issue in the repository.

## 🔮 Roadmap

- [ ] Complete employee management features
- [ ] Fleet tracking and maintenance system
- [ ] Advanced reporting and analytics
- [ ] Mobile application
- [ ] API integration
- [ ] User authentication and authorization
- [ ] Real-time notifications
- [ ] Advanced search functionality

---

Built with ❤️ for NASA operations management.
