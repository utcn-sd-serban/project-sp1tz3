package proiect.sd.shop.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import proiect.sd.shop.entity.Address;

@Repository
public interface AddressRepository extends CrudRepository<Address, Integer> {
}
