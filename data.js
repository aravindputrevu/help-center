export const categories = [
  { id: 'getting-started', title: 'Getting Started', description: 'Introduction to using the API', icon: 'rocket' },
  { id: 'billing', title: 'Billing', description: 'Manage billing and subscriptions', icon: 'credit-card' },
  { id: 'guides', title: 'Guides', description: 'Detailed how-to guides', icon: 'book' },
  { id: 'api-reference', title: 'API Reference', description: 'Full API documentation', icon: 'code' }
];

export const articles = [
  { id: 'quickstart', category: 'getting-started', title: 'Quickstart Guide', content: '<p>Welcome to the Quickstart Guide.</p>' },
  { id: 'authentication', category: 'getting-started', title: 'Authentication', content: '<p>Learn how to authenticate with the API.</p>' },
  { id: 'pricing', category: 'billing', title: 'Pricing', content: '<p>Understand our pricing plans.</p>' },
  { id: 'invoice-history', category: 'billing', title: 'Invoice History', content: '<p>View your past invoices.</p>' },
  { id: 'fine-tuning', category: 'guides', title: 'Fine-tuning Models', content: '<p>Step-by-step guide to fine-tuning.</p>' },
  { id: 'chat-completions', category: 'api-reference', title: 'Chat Completions API', content: '<p>Documentation for chat completions.</p>' }
];