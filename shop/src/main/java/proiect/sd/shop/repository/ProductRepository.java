package proiect.sd.shop.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import proiect.sd.shop.entity.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Integer> {
}
