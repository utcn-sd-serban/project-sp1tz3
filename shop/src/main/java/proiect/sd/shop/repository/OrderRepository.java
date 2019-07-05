package proiect.sd.shop.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import proiect.sd.shop.entity.Orders;

@Repository
public interface OrderRepository extends CrudRepository<Orders, Integer> {
}
