import * as core from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as s3 from '@aws-cdk/aws-s3';

export class HelloCdkStack extends core.Stack {
  constructor(scope: core.Construct, id: string, props?: core.StackProps) {
    super(scope, id, props);
    console.log(__dirname)

    // Lambda実行ソース デプロイ先S3バケット
    const sourceBucket = new s3.Bucket(this,'HelloCdkSourceBucket',{
      removalPolicy: core.RemovalPolicy.DESTROY
    })

    // Lambda関数
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.JAVA_11,
      code: lambda.Code.fromBucket(sourceBucket,'HelloCdkKotlinSource.zip'),
      handler: 'com.azkz.HelloHandler'
    })
  }
}