import { ProductsQuantities } from './products-quantities';

export class OrderForPost {
    public timestamp: String;
    public deliveryAddressId: number;
    public productsQuantitiesDTO: ProductsQuantities;

    constructor(timestamp: string, address:number,productsQuantitiesDTO: ProductsQuantities){
        this.timestamp=timestamp;
        this.deliveryAddressId=address;
        this.productsQuantitiesDTO=productsQuantitiesDTO;
    }

    toString(): string{
        return "{ \"timestamp\":" + this.timestamp + ", \"deliveryAddressId\":" + this.deliveryAddressId + ", \"productsQuantitiesDTO\": {\"products\":" + "[" + this.productsQuantitiesDTO.products + "]" + ", \"quantities\":" + "[" + this.productsQuantitiesDTO.quantities + "]" + "}" + "}";
    }
}