#!/usr/bin/env node

const { program } = require('commander');
const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { execSync } = require('child_process');

program
  .version('1.0.0')
  .description('Help Center Framework CLI');

program
  .command('create <project-name>')
  .description('Create a new help center project')
  .action(async (projectName) => {
    console.log(chalk.blue(`Creating new help center: ${projectName}`));
    
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your help center?',
        default: projectName
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description:',
        default: 'My Help Center'
      }
    ]);

    const projectPath = path.join(process.cwd(), projectName);
    
    // Create project directory
    fs.mkdirSync(projectPath, { recursive: true });
    
    // Copy template files
    const templatePath = path.join(__dirname, '../templates/default');
    fs.copySync(templatePath, projectPath);
    
    // Create config file
    const config = {
      title: answers.title,
      description: answers.description,
      theme: 'default',
      baseUrl: '/',
      favicon: 'img/favicon.ico'
    };
    
    fs.writeFileSync(
      path.join(projectPath, 'help-center.config.js'),
      `module.exports = ${JSON.stringify(config, null, 2)}`
    );
    
    // Install dependencies
    console.log(chalk.yellow('Installing dependencies...'));
    execSync('npm install', { cwd: projectPath, stdio: 'inherit' });
    
    console.log(chalk.green('\nSuccess! Created help center at ' + projectPath));
    console.log('\nInside that directory, you can run several commands:');
    console.log('\n  npm start');
    console.log('    Starts the development server.');
    console.log('\n  npm run build');
    console.log('    Builds the help center for production.');
    console.log('\n  npm run deploy');
    console.log('    Deploys the help center to your specified domain.');
  });

program
  .command('start')
  .description('Start the development server')
  .action(() => {
    console.log(chalk.blue('Starting development server...'));
    execSync('next dev', { stdio: 'inherit' });
  });

program
  .command('deploy')
  .description('Deploy the help center')
  .action(() => {
    console.log(chalk.blue('Deploying help center...'));
    // Add deployment logic here
  });

program.parse(process.argv); 