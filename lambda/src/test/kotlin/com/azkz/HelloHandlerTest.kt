package com.azkz

import com.amazonaws.services.lambda.runtime.Context
import io.mockk.mockk
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class HelloHandlerTest {

    @Test
    fun testHandleRequest() {
        val input = "AAAA"
        val mockContext = mockk<Context>()
        val returnValue = HelloHandler().handleRequest(input,mockContext)

        assertEquals("Hello World:${input}",returnValue)
    }
}