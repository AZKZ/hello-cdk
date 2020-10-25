package com.azkz
import com.amazonaws.services.lambda.runtime.Context
import com.amazonaws.services.lambda.runtime.RequestHandler
import java.time.LocalDate

class HelloHandler:RequestHandler<String,String> {
    /**
     * Handles a Lambda Function request
     * @param input The Lambda Function input
     * @param context The Lambda execution environment context object.
     * @return The Lambda Function output
     */
    override fun handleRequest(input: String?, context: Context?): String {
        return "Hello World:${input}"
    }

}