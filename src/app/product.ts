export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    weight: number;
    category: number;
    supplier: number;
    imageUrl: string;

    constructor(name, description, price, weight, category, supplier, imageUrl){
        this.name = name;
        this.description = description;
        this.price = price;
        this.weight = weight;
        this.category = category;
        this.supplier = supplier;
        this.imageUrl = imageUrl;
    }
}
