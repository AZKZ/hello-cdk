import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    console.log(__dirname)

    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.JAVA_11,
      code: lambda.Code.fromAsset('lambda/build/distributions/lambda-1.0-SNAPSHOT.zip'),
      handler: 'com.azkz.HelloHandler'
    })
  }
}

