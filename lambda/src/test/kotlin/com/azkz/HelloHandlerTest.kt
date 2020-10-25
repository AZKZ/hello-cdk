package com.azkz

import com.amazonaws.services.lambda.runtime.Context
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyRequestEvent
import io.mockk.every
import io.mockk.mockk
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class HelloHandlerTest {

    @Test
    fun testHandleRequest() {
        val method = "GET"
        val mockInput = mockk<APIGatewayProxyRequestEvent>()

        every { mockInput.httpMethod } returns method

        val mockContext = mockk<Context>()
        val returnValue = HelloHandler().handleRequest(mockInput,mockContext)

        assertEquals("Hello method:${method}",returnValue.body)
    }
}