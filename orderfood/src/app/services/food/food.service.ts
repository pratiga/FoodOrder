import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})



export class FoodService {
  
  constructor() { }
  
  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }
  
  getAllFoodByTag(tag: string) :Foods[] {
    return tag == "All"? this.getAll():this.getAll().filter(food => food.tags?.includes(tag));

  }
 

  
  getAllTag(): Tag[]{
    return [
      {name: 'All', count: 14 },
      {name:'FastFood', count:4},
      {name:'Pizza', count:2},
      {name:'Lunch', count:2},
      {name:'SlowFood', count:1},
      {name:'Hamburger', count:1},
      {name:'Fry', count:1},
      {name:'Soup', count:1},
    ]
  }
  getAll(){
    return [
      {
        id:1,
        name:'Chicken SoupPizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: './assets/pepperoni-pizza.jpg',
        tags: ['FastFood', 'Pizza','Lunch']
      },
      {
        id:2,
        name:'Cheese Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
       star: 4.5,
        imageUrl: './assets/pizza-cheese.png',
        tags: ['SlowFood', 'Pizza','Lunch']
      },
      {
        id:3,
        name:'MeatBall',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
       star: 4.5,
        imageUrl: './assets/meatball.jpg',
        tags: ['Soup', 'FastFood','Lunch']
      },
      {
        id:4,
        name:'SeaMomo',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
       star: 4.5,
        imageUrl: './assets/seamomo.jpg',
        tags: ['FastFood', 'Soup','Lunch']
      },
      {
        id:5,
        name:'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
       star: 4.5,
        imageUrl: './assets/pepperoni.jpg',
        tags: ['FastFood', 'Pizza','Lunch']
      },
      {
        id:6,
        name:'Meatball',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
       star: 4.5,
        imageUrl: './assets/meatball1.jpg',
        tags: ['FastFood', 'Pizza','Lunch']
      },
      {
        id:7,
        name:'Hamburger',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
       star: 4.5,
        imageUrl: './assets/burger2.jpg',
        tags: ['FastFood', 'Pizza','Lunch']
      },
      {
        id:8,
        name:'Fried Potatoes',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
       star: 4.5,
        imageUrl: './assets/fried-potato.jpg',
        tags: ['Fry', 'SlowFood','Lunch']
      },
      {
        id:9,
        name:'MOMO',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
       star: 4.5,
        imageUrl: './assets/sea-momo.jpg',
        tags: ['Soup', 'SlowFood','Lunch']
      },
      {
        id:10,
        name:'Meatball',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
       star: 4.5,
        imageUrl: './assets/meatball.jpg',
        tags: ['Lunch', 'SlowFood','Fry']
      },
    ]
  }
}
