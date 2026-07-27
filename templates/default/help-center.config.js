module.exports = {
  title: 'My Help Center',
  description: 'Documentation and Support',
  theme: 'default',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  navbar: {
    title: 'Help Center',
    logo: {
      alt: 'Logo',
      src: 'img/logo.svg',
    },
    items: [
      {
        type: 'doc',
        position: 'left',
        label: 'Documentation',
        to: '/docs',
      },
      {
        type: 'doc',
        position: 'left',
        label: 'API',
        to: '/api',
      },
      {
        type: 'doc',
        position: 'left',
        label: 'FAQ',
        to: '/faq',
      },
    ],
  },
  footer: {
    style: 'dark',
    links: [
      {
        title: 'Docs',
        items: [
          {
            label: 'Getting Started',
            to: '/docs/getting-started',
          },
          {
            label: 'API Reference',
            to: '/api',
          },
        ],
      },
      {
        title: 'Community',
        items: [
          {
            label: 'Stack Overflow',
            href: 'https://stackoverflow.com/questions/tagged/your-tag',
          },
          {
            label: 'Discord',
            href: 'https://discord.gg/your-invite-code',
          },
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()}`,
  },
  customCss: [],
  customJs: [],
}; 