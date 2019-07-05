package proiect.sd.shop.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import proiect.sd.shop.entity.OrderDetail;

@Repository
public interface OrderDetailRepository extends CrudRepository<OrderDetail, Integer> {
}

