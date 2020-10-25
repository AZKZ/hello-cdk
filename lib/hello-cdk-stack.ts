import * as core from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from "@aws-cdk/aws-apigateway";


export class HelloCdkStack extends core.Stack {
  constructor(scope: core.Construct, id: string, props?: core.StackProps) {
    super(scope, id, props);

    // Lambda関数
    const helloHandler = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.JAVA_11,
      code: lambda.Code.fromAsset('lambda/build/distributions/lambda-1.0-SNAPSHOT.zip'),
      handler: 'com.azkz.HelloHandler'
    })

    // API
    const helloApi = new apigateway.LambdaRestApi(this, 'hello-api', {
      handler: helloHandler,
      proxy: false
    })
    helloApi.root.addMethod('GET');
    helloApi.root.addMethod('POST');
  }
}