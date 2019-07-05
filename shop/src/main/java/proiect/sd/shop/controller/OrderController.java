package proiect.sd.shop.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import proiect.sd.shop.dto.OrderInputDTO;
import proiect.sd.shop.entity.Orders;
import proiect.sd.shop.service.OrderService;

import java.io.IOException;
import java.net.PasswordAuthentication;
import java.util.Properties;

@RestController
@RequiredArgsConstructor
public class OrderController {
    private final OrderService service;

    @PostMapping("/orders")
    private Orders createOrder(@RequestBody OrderInputDTO dto) {
        return service.createOrder(dto);
    }
}
