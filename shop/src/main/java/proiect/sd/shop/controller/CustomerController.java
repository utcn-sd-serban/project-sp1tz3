package proiect.sd.shop.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import proiect.sd.shop.dto.CustomerDTO;
import proiect.sd.shop.service.CustomerService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerService service;

    @GetMapping("/customers")
    List<CustomerDTO> all(){
        return service.getCustomers();
    }
}
