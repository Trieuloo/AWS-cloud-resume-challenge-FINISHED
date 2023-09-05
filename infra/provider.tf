terraform {
  required_providers {
    aws = {
      version =">=4.9.0"
      source = "hashicorp/aws"
    }
  }
}
provider "aws" {
  access_key = "*" hiding keys
  secret_key = "*" hiding keys
  region = "ca-central-1"
}
