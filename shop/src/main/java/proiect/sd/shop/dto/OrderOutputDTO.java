package proiect.sd.shop.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import proiect.sd.shop.entity.Location;
import proiect.sd.shop.entity.Product;

@Data
@AllArgsConstructor
public class OrderOutputDTO {
    private Location location;
    private Product product;
    private Integer quantity;
}