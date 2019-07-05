export class ProductsQuantities {
    public products: number[];
    public quantities: number[];

    constructor(products:number[], quantities:number[]){
        this.products = products;
        this.quantities = quantities;
    }

    incrementQuantity(productId: number): void{
        let index = this.products.indexOf(productId);
        this.quantities[index]++;
    }

    decrementQuantity(productId: number): void{
        let index = this.products.indexOf(productId);
        this.quantities[index]--;
    }
}
