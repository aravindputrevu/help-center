# Help Center Framework

A flexible and customizable framework for creating beautiful help centers and knowledge bases, powered by Next.js.

## Features

- 🚀 Quick setup with CLI tool
- 📝 Markdown-based content
- 🎨 Customizable themes
- 🔍 Built-in search
- 📱 Mobile-responsive
- 🌐 SEO-friendly
- 🔄 Easy deployment to any domain

## Quick Start

```bash
# Create a new help center
npx help-center-framework create my-help-center

# Navigate to the project
cd my-help-center

# Start the development server
npm run dev
```

## Project Structure

```
my-help-center/
├── content/
│   ├── docs/
│   ├── api/
│   └── faq/
├── public/
│   └── img/
├── styles/
├── help-center.config.js
└── package.json
```

## Configuration

Customize your help center by editing `help-center.config.js`:

```javascript
module.exports = {
  title: 'My Help Center',
  description: 'Documentation and Support',
  // ... other configuration options
};
```

## Writing Content

Create your content in Markdown format in the `content` directory:

```markdown
---
title: Getting Started
description: Learn how to use our product
---

# Getting Started

Welcome to our product! This guide will help you get started...
```

## Deployment

1. Build your help center:
```bash
npm run build
```

2. Deploy to your domain:
```bash
npm run deploy
```

## Customization

### Themes

The framework comes with built-in themes that you can customize:

1. Default theme
2. Dark theme
3. Custom themes (create your own)

### Custom Components

Create custom React components in the `components` directory to extend functionality.

## Contributing

We welcome contributions! Please see our contributing guidelines for more details.

## License

MIT License - feel free to use this framework for your projects.