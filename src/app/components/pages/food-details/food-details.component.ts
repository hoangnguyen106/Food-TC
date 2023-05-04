import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/model/Food';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {
  food!: Food
  constructor(activeRoute: ActivatedRoute, private api: FoodService, private cartService: CartService, private router: Router) {
    activeRoute.params.subscribe((params) => {
      if (params.id)
        this.food = this.api.getFoodById(params.id)
    })
  }

  ngOnInit(): void {

  }
  //Add to cart Button
  addToCart() {
    this.cartService.addToCart(this.food)
    this.router.navigateByUrl('/cart-page')
  }
}
