provider "aws" {
  region = var.aws_region
}

module "vpc" {
  source = "./modules/vpc"
  # ... vpc variables
}

module "ec2" {
  source = "./modules/ec2"
  vpc_id = module.vpc.vpc_id
  # ... other variables
}

# ... other modules