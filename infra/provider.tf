terraform {
  required_providers {
    aws = {
      version =">=4.9.0"
      source = "hashicorp/aws"
    }
  }
}
provider "aws" {
  access_key = "AKIAY6WISE76HPMSYKGB"
  secret_key = "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"
  region = "ca-central-1"
}