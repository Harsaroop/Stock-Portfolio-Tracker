# Contributing to Stock Portfolio Tracker

Thank you for your interest in contributing to Stock Portfolio Tracker! This document provides guidelines and information for contributors.

## 🎯 How to Contribute

### Reporting Bugs

- Use the GitHub issue tracker
- Include detailed steps to reproduce the bug
- Provide your operating system and browser information
- Include screenshots if applicable

### Suggesting Features

- Use the GitHub issue tracker with the "enhancement" label
- Describe the feature and its benefits
- Consider the impact on existing functionality

### Code Contributions

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test your changes**
5. **Commit your changes**
   ```bash
   git commit -m "Add: brief description of your changes"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

## 📋 Development Guidelines

### Code Style

- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Frontend Guidelines

- Use functional components with hooks
- Follow React best practices
- Use Material-UI components when possible
- Ensure responsive design

### Testing

- Write tests for new features
- Ensure all existing tests pass
- Test on multiple browsers
- Test responsive design on different screen sizes

### Documentation

- Update README.md if needed
- Add JSDoc comments for new functions
- Update API documentation if applicable

## 🚀 Development Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Local Development

1. **Clone your fork**
   ```bash
   git clone https://github.com/yourusername/stock-portfolio-tracker.git
   cd stock-portfolio-tracker
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Run tests**
   ```bash
   npm test
   ```

## 📝 Commit Message Guidelines

Use conventional commit messages:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

Example:
```
feat: add portfolio performance chart
fix: resolve stock data loading issue
docs: update API documentation
```

## 🔍 Pull Request Guidelines

### Before Submitting

- Ensure your code follows the project's style guidelines
- Run all tests and ensure they pass
- Update documentation if needed
- Test your changes thoroughly

### Pull Request Template

When creating a PR, include:

- **Description**: What does this PR do?
- **Type of change**: Bug fix, feature, documentation, etc.
- **Testing**: How was this tested?
- **Screenshots**: If UI changes are involved

## 🏷️ Issue Labels

We use the following labels:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested

## 📞 Getting Help

- Check existing issues and discussions
- Join our community discussions
- Ask questions in GitHub Discussions

## 🙏 Recognition

Contributors will be recognized in:

- The project README
- Release notes
- GitHub contributors page

Thank you for contributing to Stock Portfolio Tracker! 🚀 