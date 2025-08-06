# Project Setup Guide

This guide will help you set up the Stock Portfolio Tracker project for development.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**
- **AWS CLI** (for infrastructure deployment)
- **Terraform** (for infrastructure management)

## Initial Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/stock-portfolio-tracker.git
cd stock-portfolio-tracker
```

### 2. Frontend Setup

```bash
cd frontend
npm install
```

### 3. Environment Configuration

Create a `.env` file in the frontend directory:

```bash
cd frontend
touch .env
```

Add the following environment variables:

```env
REACT_APP_API_URL=http://localhost:3001
REACT_APP_STOCK_API_KEY=your_stock_api_key_here
REACT_APP_AWS_REGION=us-east-1
```

### 4. Start Development Server

```bash
npm start
```

The application will be available at `http://localhost:3000`

## Infrastructure Setup

### AWS Configuration

1. **Install AWS CLI**
   ```bash
   # macOS
   brew install awscli
   
   # Ubuntu/Debian
   sudo apt-get install awscli
   ```

2. **Configure AWS Credentials**
   ```bash
   aws configure
   ```

3. **Deploy Infrastructure**

   **Option A: CloudFormation**
   ```bash
   aws cloudformation create-stack \
     --stack-name stock-portfolio-tracker \
     --template-body file://stack.yml \
     --capabilities CAPABILITY_IAM
   ```

   **Option B: Terraform**
   ```bash
   cd Infrastructure
   terraform init
   terraform plan
   terraform apply
   ```

## Development Workflow

### Code Style

We use ESLint and Prettier for code formatting. Install the extensions in your editor:

- ESLint
- Prettier

### Git Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

4. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**

### Testing

Run tests before committing:

```bash
cd frontend
npm test
```

### Building for Production

```bash
cd frontend
npm run build
```

## Project Structure

```
Stock-Portfolio-Tracker/
├── frontend/                 # React application
│   ├── public/              # Static files
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── utils/          # Utility functions
│   │   └── App.js          # Main application
│   └── package.json        # Dependencies
├── cloudformation/          # AWS CloudFormation templates
├── Infrastructure/          # Terraform configurations
├── .github/                # GitHub Actions workflows
├── docs/                   # Documentation
└── README.md              # Project overview
```

## Key Components

### Frontend Components

- **Dashboard**: Main overview page
- **Portfolio**: Stock management interface
- **Analysis**: Charts and analytics
- **Settings**: User preferences

### Infrastructure

- **VPC**: Network isolation
- **Security Groups**: Access controls
- **EC2**: Compute resources
- **S3**: Static file storage

## Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   lsof -ti:3000 | xargs kill -9
   ```

2. **Node modules issues**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **AWS credentials not found**
   ```bash
   aws configure list
   aws configure
   ```

### Getting Help

- Check the [Issues](https://github.com/yourusername/stock-portfolio-tracker/issues) page
- Create a new issue if your problem isn't addressed
- Join our [Discussions](https://github.com/yourusername/stock-portfolio-tracker/discussions)

## Deployment

### Staging Environment

```bash
# Deploy to staging
npm run build:staging
aws s3 sync build/ s3://staging-bucket
```

### Production Environment

```bash
# Deploy to production
npm run build:production
aws s3 sync build/ s3://production-bucket
```

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for detailed guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details. 