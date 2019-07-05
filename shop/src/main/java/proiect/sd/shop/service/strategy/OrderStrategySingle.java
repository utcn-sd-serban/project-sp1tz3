package proiect.sd.shop.service.strategy;

import lombok.RequiredArgsConstructor;
import proiect.sd.shop.dto.OrderInputDTO;
import proiect.sd.shop.dto.OrderOutputDTO;
import proiect.sd.shop.entity.Location;
import proiect.sd.shop.entity.Stock;
import proiect.sd.shop.exception.OrderNotFoundException;
import proiect.sd.shop.exception.ProductNotFoundException;
import proiect.sd.shop.repository.LocationRepository;
import proiect.sd.shop.repository.ProductRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
public class OrderStrategySingle implements OrderStrategy{
    private final ProductRepository productRepository;
    private final LocationRepository locationRepository;

    @Override
    public List<OrderOutputDTO> makeOrderOutputDTO(OrderInputDTO input) throws OrderNotFoundException {
        List<OrderOutputDTO> orderOutputDTOS = new ArrayList<>();
        List<Integer> products = input.getProductsQuantitiesDTO().getProducts();
        List<Integer> quantities = input.getProductsQuantitiesDTO().getQuantities();
        final List<Location> potentialLocations = new ArrayList<>();
        products.forEach(p->potentialLocations.addAll(locationRepository.findSingleLocation(p, quantities.get(products.indexOf(p)))));
        int cnt = input.getProductsQuantitiesDTO().getProducts().size();
        Location foundLocation = null;
        for(Location l: potentialLocations.stream().distinct().collect(Collectors.toList())){
            for(Stock s: l.getStocks()){
                if(products.contains(s.getProduct().getProductId()) && s.getQuantity() >= quantities.get(products.indexOf(s.getProduct().getProductId())))
                    cnt--;
            }
            if(cnt ==0){
                foundLocation = l;
                break;
            }else {
                cnt = products.size();
            }
        }
        final Location neededLocation = foundLocation;
        products.stream().forEach(p->
                orderOutputDTOS.add(new OrderOutputDTO(neededLocation,
                        productRepository.findById(p).orElseThrow(ProductNotFoundException::new),
                        quantities.get(products.indexOf(p))))
        );
        return orderOutputDTOS;
    }
}
