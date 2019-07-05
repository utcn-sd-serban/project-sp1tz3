package proiect.sd.shop.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import proiect.sd.shop.dto.CustomerDTO;
import proiect.sd.shop.entity.Customer;
import proiect.sd.shop.repository.CustomerRepository;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CustomerService {
    private final CustomerRepository repo;

    @Transactional
    public List<CustomerDTO> getCustomers(){
        Iterable<Customer> customers = repo.findAll();
        List<Customer> customerList = new ArrayList<>();
        customers.forEach(customerList::add);
        return customerList.stream().map(CustomerDTO::ofEntity).collect(Collectors.toList());
    }
}