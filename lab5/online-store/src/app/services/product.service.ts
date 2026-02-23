import { Injectable } from '@angular/core';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  getCategories(): Category[] {
    return CATEGORIES;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return PRODUCTS.filter(p => p.categoryId === categoryId);
  }
}