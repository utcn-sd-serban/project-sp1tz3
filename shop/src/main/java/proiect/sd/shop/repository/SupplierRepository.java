package proiect.sd.shop.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import proiect.sd.shop.entity.Supplier;

@Repository
public interface SupplierRepository extends CrudRepository<Supplier, Integer> {
}
