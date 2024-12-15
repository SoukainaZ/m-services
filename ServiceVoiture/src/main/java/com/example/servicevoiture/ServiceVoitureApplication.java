package com.example.servicevoiture;

import com.example.servicevoiture.entities.Client;
import com.example.servicevoiture.entities.Voiture;
import com.example.servicevoiture.repositories.VoitureRepository;
import com.example.servicevoiture.services.ClientService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

@EnableFeignClients
@EnableDiscoveryClient
@SpringBootApplication
public class ServiceVoitureApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServiceVoitureApplication.class, args);
    }

    @Bean
    CommandLineRunner initialiserBaseH2(VoitureRepository voitureRepository,
                                        ClientService clientService){
        return args -> {
            Client c1 = clientService.clientById(2L);
            Client c2 = clientService.clientById(1L);
            voitureRepository.save(new Voiture(null, "Dacia","26 B 1234", "Sandero", 1L, c2));
            voitureRepository.save(new Voiture(null, "Renault","72 A 12345", "Clio", 1L, c2));
            voitureRepository.save(new Voiture(null, "BMW","26 A 6789", "S5", 2L, c1));
        };
    }


}
