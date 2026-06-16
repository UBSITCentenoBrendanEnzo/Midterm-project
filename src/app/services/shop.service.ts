import { Injectable, signal, computed } from '@angular/core';
import { Item } from '../models/item.model';


@Injectable({
  providedIn:'root'
})
export class ShopService {


items = signal<Item[]>([

{
id:1,
name:"Poké Ball",
price:200,
type:"Ball",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
},

{
id:2,
name:"Great Ball",
price:600,
type:"Ball",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png"
},

{
id:3,
name:"Ultra Ball",
price:1200,
type:"Ball",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png"
},

{
id:4,
name:"Potion",
price:300,
type:"Medicine",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png"
},

{
id:5,
name:"Super Potion",
price:700,
type:"Medicine",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/super-potion.png"
},

{
id:6,
name:"Hyper Potion",
price:1200,
type:"Medicine",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hyper-potion.png"
},

{
id:7,
name:"Revive",
price:1500,
type:"Medicine",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/revive.png"
},

{
id:8,
name:"Antidote",
price:100,
type:"Medicine",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/antidote.png"
},

{
id:9,
name:"Paralyze Heal",
price:200,
type:"Medicine",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/paralyze-heal.png"
},

{
id:10,
name:"Burn Heal",
price:250,
type:"Medicine",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/burn-heal.png"
},

{
id:11,
name:"Ether",
price:800,
type:"Recovery",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ether.png"
},

{
id:12,
name:"Rare Candy",
price:3000,
type:"Candy",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/rare-candy.png"
},

{
id:13,
name:"Escape Rope",
price:550,
type:"Tool",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/escape-rope.png"
},

{
id:14,
name:"Exp Share",
price:1000,
type:"Tool",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/exp-share.png"
},

{
id:15,
name:"Master Ball",
price:9999,
type:"Ball",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png"
}


]);



cart = signal<Item[]>([]);



addToCart(item:Item){

this.cart.update(old=>[
...old,
item
])

}



clearCart(){

this.cart.set([]);

}


total = computed(()=>{

return this.cart()
.reduce(
(sum,item)=>sum+item.price,
0
)

})


}