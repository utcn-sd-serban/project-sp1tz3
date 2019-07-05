package proiect.sd.shop.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import proiect.sd.shop.entity.ProductCategory;

@Repository
public interface ProductCategoryRepository extends CrudRepository<ProductCategory, Integer> {
}
