import { CartItem } from "./CartItem";

export class Cart{
     items:CartItem[]=[];
    
    get totalPrice(){
        let totalPrice = 0;
        this.items.forEach(item =>{
            
            totalPrice = 2 ;
        });
        return totalPrice;
    }
}