package com.example.serviceclient;

import com.example.serviceclient.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import com.example.serviceclient.entities.Client;


@EnableDiscoveryClient
@SpringBootApplication
public class ServiceClientApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServiceClientApplication.class, args);
    }

    @Bean
    CommandLineRunner initialiserBaseH2(ClientRepository clientRepository) {
        return args -> {
            clientRepository.save(new Client("Soukaina Zaid", 23f));
            clientRepository.save(new Client("Alice", 22f));
            clientRepository.save(new Client("Bob", 22f));
        };
    }
}