package proiect.sd.shop.service.strategy;

import proiect.sd.shop.dto.OrderInputDTO;
import proiect.sd.shop.dto.OrderOutputDTO;
import proiect.sd.shop.exception.OrderNotFoundException;

import java.util.List;

public interface OrderStrategy {
    public List<OrderOutputDTO> makeOrderOutputDTO(OrderInputDTO input) throws OrderNotFoundException;
}
