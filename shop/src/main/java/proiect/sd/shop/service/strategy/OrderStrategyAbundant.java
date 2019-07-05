package proiect.sd.shop.service.strategy;

import lombok.RequiredArgsConstructor;
import proiect.sd.shop.dto.OrderInputDTO;
import proiect.sd.shop.dto.OrderOutputDTO;
import proiect.sd.shop.exception.OrderNotFoundException;
import proiect.sd.shop.exception.ProductNotFoundException;
import proiect.sd.shop.repository.LocationRepository;
import proiect.sd.shop.repository.ProductRepository;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
public class OrderStrategyAbundant implements OrderStrategy {
    private final ProductRepository productRepository;
    private final LocationRepository locationRepository;

    @Override
    public List<OrderOutputDTO> makeOrderOutputDTO(OrderInputDTO input) throws OrderNotFoundException {
        List<OrderOutputDTO> orderOutputDTOS = new ArrayList<>();
        List<Integer> products = input.getProductsQuantitiesDTO().getProducts();
        List<Integer> quantities = input.getProductsQuantitiesDTO().getQuantities();
        products.forEach(p->{
            orderOutputDTOS.add(new OrderOutputDTO(locationRepository.findAbundantLocation(p, quantities.get(products.indexOf(p))).get(0),
                    productRepository.findById(p).orElseThrow(ProductNotFoundException::new),
                    quantities.get(products.indexOf(p))));
        });

        return orderOutputDTOS;
    }
}
