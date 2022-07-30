import { Foods } from "./food";

export class CartItem{
    // filter(arg0: (item: any) => boolean): CartItem {
    //   throw new Error('Method not implemented.');
    // }
    // find(arg0: (item: any) => boolean) {
    //   throw new Error('Method not implemented.');
    // }
    // push(arg0: any) {
    //   throw new Error('Method not implemented.');
    // }
    // forEach(arg0: (item: any) => void) {
    //     throw new Error("Method not implemented.");
    // }
    constructor(food:Foods){
        this.food = food;
        this.price;
    }
    food:Foods;
    quantity:number = 1;
    get price(): Number{
        return this.food.price * this.quantity;
    }
}