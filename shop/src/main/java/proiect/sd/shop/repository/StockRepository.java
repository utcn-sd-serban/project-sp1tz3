package proiect.sd.shop.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import proiect.sd.shop.entity.Stock;

@Repository
public interface StockRepository extends CrudRepository<Stock, Integer> {
}