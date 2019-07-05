package proiect.sd.shop.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import proiect.sd.shop.entity.Supplier;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SupplierDTO {
    private Integer id;
    private String name;

    public static SupplierDTO ofEntity(Supplier supplier){
        SupplierDTO dto = new SupplierDTO();
        dto.setId(supplier.getSupplierId());
        dto.setName(supplier.getName());
        return dto;
    }
}
