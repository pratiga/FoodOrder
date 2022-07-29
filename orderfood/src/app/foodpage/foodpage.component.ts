import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
food!:Foods;
  constructor(private activateRoute:ActivatedRoute,
    private foodService:FoodService, private cartService:CartService,
    private router:Router ) {
      activateRoute.params.subscribe((params)=>{
        if(params['id'])
        this.food = foodService.getFoodById(params['id'])
      })
       }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCard(this.food);
    this.router.navigateByUrl('/cart-page')
  }

}
