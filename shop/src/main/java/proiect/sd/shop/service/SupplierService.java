package proiect.sd.shop.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import proiect.sd.shop.dto.SupplierDTO;
import proiect.sd.shop.entity.Supplier;
import proiect.sd.shop.repository.SupplierRepository;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SupplierService {
    private final SupplierRepository repo;

    @Transactional
    public List<SupplierDTO> getAll(){
        Iterable<Supplier> suppliers = repo.findAll();
        List<Supplier> supplierList = new ArrayList<>();
        suppliers.forEach(supplierList::add);
        return supplierList.stream().map(SupplierDTO::ofEntity).collect(Collectors.toList());
    }
}