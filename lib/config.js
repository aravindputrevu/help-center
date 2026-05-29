const path = require('path');
const fs = require('fs');

class Config {
  constructor() {
    this.config = null;
  }

  load(configPath) {
    try {
      const configFile = path.resolve(process.cwd(), configPath || 'help-center.config.js');
      if (fs.existsSync(configFile)) {
        this.config = require(configFile);
      } else {
        this.config = this.getDefaultConfig();
      }
    } catch (error) {
      console.error('Error loading config:', error);
      this.config = this.getDefaultConfig();
    }
    return this.config;
  }

  getDefaultConfig() {
    return {
      title: 'Help Center',
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
        items: [],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      customCss: [],
      customJs: [],
    };
  }

  get() {
    if (!this.config) {
      this.load();
    }
    return this.config;
  }

  // Validate the configuration
  validate() {
    const config = this.get();
    const requiredFields = ['title', 'baseUrl'];
    
    for (const field of requiredFields) {
      if (!config[field]) {
        throw new Error(`Missing required configuration field: ${field}`);
      }
    }

    // Validate baseUrl format
    if (!config.baseUrl.startsWith('/')) {
      throw new Error('baseUrl must start with /');
    }

    return true;
  }
}

module.exports = new Config(); 