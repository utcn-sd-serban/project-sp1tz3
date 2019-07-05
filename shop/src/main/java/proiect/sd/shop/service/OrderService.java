package proiect.sd.shop.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import proiect.sd.shop.dto.OrderInputDTO;
import proiect.sd.shop.dto.OrderOutputDTO;
import proiect.sd.shop.entity.OrderDetail;
import proiect.sd.shop.entity.Orders;
import proiect.sd.shop.entity.Stock;
import proiect.sd.shop.exception.AddressNotFoundException;
import proiect.sd.shop.exception.CustomerNotFoundException;
import proiect.sd.shop.repository.*;
import proiect.sd.shop.service.strategy.OrderStrategy;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderStrategy strategy;
    private final CustomerRepository customerRepository;
    private final OrderDetailRepository orderDetailRepository;
    private final AddressRepository addressRepository;
    private final StockRepository stockRepository;
    private final OrderRepository orderRepository;

    @Transactional
    public Orders createOrder(OrderInputDTO input){
        List<OrderOutputDTO> outputs = new ArrayList<>();
        try {
            outputs = strategy.makeOrderOutputDTO(input);
        }catch(Exception e){
            e.printStackTrace();
        }

        Orders newOrder = new Orders(
                outputs.get(0).getLocation(),
                customerRepository.findById(1).orElseThrow(CustomerNotFoundException::new),
                input.getTimestamp(),
                addressRepository.findById(input.getDeliveryAddressId()).orElseThrow(AddressNotFoundException::new)
        );
        orderRepository.save(newOrder);
        outputs.forEach(o->{
            for(Stock s: o.getLocation().getStocks()){
                if(s.getProduct().equals(o.getProduct())){
                    if(s.getQuantity().equals(o.getQuantity()))
                        stockRepository.delete(s);
                    else {
                        s.setQuantity(s.getQuantity()-o.getQuantity());
                    }
                }
            }
            orderDetailRepository.save(new OrderDetail(newOrder, o.getProduct(), o.getQuantity()));
        });

        return newOrder;
    }

}