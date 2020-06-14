package com.example.todoapp.cucumber;

import com.example.todoapp.TodoApplication;
import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.ContextConfiguration;

import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;

//@SpringBootTest(webEnvironment = RANDOM_PORT)
@SpringBootTest
@ContextConfiguration(classes = {
        SpringCucumberContextConfiguration.SpringConfiguration.class,
        TodoApplication.class
})
@AutoConfigureMockMvc
@CucumberContextConfiguration
public class SpringCucumberContextConfiguration {

    public static class SpringConfiguration {
        @Bean
        public CucumberContext cucumberContext() {
            return new CucumberContext();
        }
    }
}
