# Stock Portfolio Tracker 📈

A comprehensive stocks and dividend portfolio tracker built with React frontend and AWS infrastructure.

## 🚀 Features

- **Portfolio Management**: Track your stock investments and dividend income
- **Real-time Data**: Get up-to-date stock prices and market information
- **Analytics Dashboard**: Visualize your portfolio performance with charts
- **Predictions**: AI-powered stock price predictions and analysis
- **Responsive Design**: Modern UI built with Material-UI components
- **Cloud Infrastructure**: Deployed on AWS with CloudFormation

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **Material-UI (MUI)** - Component library for beautiful UI
- **React Router** - Navigation and routing
- **Chart.js** - Data visualization and charts

### Infrastructure
- **AWS CloudFormation** - Infrastructure as Code
- **AWS VPC** - Network infrastructure
- **AWS EC2** - Compute resources
- **AWS Security Groups** - Network security

## 📁 Project Structure

```
Stock-Portfolio-Tracker/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   └── App.js          # Main application
│   └── package.json        # Frontend dependencies
├── cloudformation/          # AWS CloudFormation templates
├── Infrastructure/          # Terraform configurations
├── .github/                # GitHub Actions workflows
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- AWS CLI (for deployment)

### Frontend Development

1. **Clone the repository**
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

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
cd frontend
npm run build
```

### Infrastructure Deployment

1. **Deploy with CloudFormation**
   ```bash
   aws cloudformation create-stack \
     --stack-name stock-portfolio-tracker \
     --template-body file://stack.yml \
     --capabilities CAPABILITY_IAM
   ```

2. **Deploy with Terraform**
   ```bash
   cd Infrastructure
   terraform init
   terraform plan
   terraform apply
   ```

## 📊 Features Overview

### Dashboard
- Portfolio overview with total value
- Recent transactions
- Performance metrics

### Portfolio Management
- Add/remove stocks
- Track dividend payments
- Portfolio rebalancing tools

### Analysis Tools
- Stock price charts
- Technical indicators
- Performance analytics

### Predictions
- AI-powered price predictions
- Market trend analysis
- Risk assessment

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Material-UI](https://mui.com/) for the beautiful UI components
- [React](https://reactjs.org/) for the frontend framework
- [AWS](https://aws.amazon.com/) for cloud infrastructure

## 📞 Support

If you have any questions or need help, please:

1. Check the [Issues](https://github.com/yourusername/stock-portfolio-tracker/issues) page
2. Create a new issue if your problem isn't already addressed
3. Join our [Discussions](https://github.com/yourusername/stock-portfolio-tracker/discussions) for general questions

---

**Made with ❤️ by the Stock Portfolio Tracker team**
