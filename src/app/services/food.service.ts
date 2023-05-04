import { Injectable } from '@angular/core';
import { Food } from '../shared/model/Food';
import { sample_foods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  // Lấy ra tất cả sản phẩm
  getAll(): Food[] {
    return sample_foods
  }

  // Tìm kiếm món ăn
  getAllFoodBySearchTerm(searchTerm: string) {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  //Chi tiết món ăn theo id
  getFoodById(foodId: string) {
    return this.getAll().find(food => food.id === foodId) ?? new Food()
  }
}
