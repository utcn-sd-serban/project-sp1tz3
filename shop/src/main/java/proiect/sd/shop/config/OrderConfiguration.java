package proiect.sd.shop.config;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import proiect.sd.shop.repository.LocationRepository;
import proiect.sd.shop.repository.ProductRepository;
import proiect.sd.shop.service.strategy.OrderStrategy;
import proiect.sd.shop.service.strategy.OrderStrategyAbundant;
import proiect.sd.shop.service.strategy.OrderStrategySingle;

@Configuration
@RequiredArgsConstructor
public class OrderConfiguration {
    private final ProductRepository productRepository;
    private final LocationRepository locationRepository;

    @Bean
    public OrderStrategy selectStrategy(@Value("${strategy}") Strategies strategy){
        switch(strategy){
            case SINGLE:
                return new OrderStrategySingle(productRepository,locationRepository);
            case ABUNDANT:
                return new OrderStrategyAbundant(productRepository, locationRepository);
            default: return null;
        }
    }
    private enum Strategies{
        SINGLE, ABUNDANT
    }
}
