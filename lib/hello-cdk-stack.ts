import * as core from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class HelloCdkStack extends core.Stack {
  constructor(scope: core.Construct, id: string, props?: core.StackProps) {
    super(scope, id, props);
    console.log(__dirname)

    // Lambda関数
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.JAVA_11,
      code: lambda.Code.fromAsset('lambda/build/distributions/lambda-1.0-SNAPSHOT.zip'),
      handler: 'com.azkz.HelloHandler'
    })
  }
}