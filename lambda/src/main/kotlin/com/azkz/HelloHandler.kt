package com.azkz
import com.amazonaws.services.lambda.runtime.Context
import com.amazonaws.services.lambda.runtime.RequestHandler
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyRequestEvent
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent

class HelloHandler:RequestHandler<APIGatewayProxyRequestEvent,APIGatewayProxyResponseEvent> {
    /**
     * Handles a Lambda Function request
     * @param input The Lambda Function input
     * @param context The Lambda execution environment context object.
     * @return The Lambda Function output
     */
    override fun handleRequest(input: APIGatewayProxyRequestEvent?, context: Context?): APIGatewayProxyResponseEvent {
        val response = APIGatewayProxyResponseEvent()

        if(input == null) {
            response.statusCode = 400
            return response
        }

        response.statusCode = 200
        response.body = "Hello method:${input.httpMethod}"

        return response
    }
}