package proiect.sd.shop.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import proiect.sd.shop.entity.ProductCategory;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDTO {
    private Integer id;
    private String name;
    private String description;

    public static CategoryDTO ofEntity(ProductCategory category){
        CategoryDTO dto = new CategoryDTO();
        dto.setId(category.getProductCategoryId());
        dto.setName(category.getName());
        dto.setDescription(category.getDescription());
        return dto;
    }
}
