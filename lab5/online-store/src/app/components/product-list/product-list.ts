import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products = input.required<Product[]>();

  onDelete(id: number) {
    const filtered = this.products().filter(p => p.id !== id);
    this._localProducts = filtered;
  }

  private _localProducts: Product[] | null = null;

  get viewProducts(): Product[] {
    return this._localProducts ?? this.products();
  }
}