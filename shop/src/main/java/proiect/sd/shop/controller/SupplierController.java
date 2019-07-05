package proiect.sd.shop.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import proiect.sd.shop.dto.SupplierDTO;
import proiect.sd.shop.service.SupplierService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class SupplierController {
    private final SupplierService service;

    @GetMapping("/suppliers")
    public List<SupplierDTO> all(){
        return service.getAll();
    }
}
