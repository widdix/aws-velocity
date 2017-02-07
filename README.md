# AWS Velocity

## CI/CD Pipeline as Code

To create an AWS CodeCommit git repository, make sure you have the [AWS CLI](https://aws.amazon.com/cli/) installed, and run in your terminal:

```
export AWS_DEFAULT_REGION=eu-west-1
aws codecommit create-repository --repository-name aws-velocity
#{
#    "repositoryMetadata": {
#        "repositoryName": "aws-velocity", 
#        "cloneUrlSsh": "ssh://git-codecommit.eu-west-1.amazonaws.com/v1/repos/aws-velocity", 
#        "lastModifiedDate": 1486450175.193, 
#        "repositoryId": "11c6b1ec-95bb-4925-84ac-da9695ac6031", 
#        "cloneUrlHttp": "https://git-codecommit.eu-west-1.amazonaws.com/v1/repos/aws-velocity", 
#        "creationDate": 1486450175.193, 
#        "Arn": "arn:aws:codecommit:eu-west-1:163732473262:aws-velocity", 
#        "accountId": "163732473262"
#    }
#}
```
