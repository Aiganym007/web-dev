import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private ps = new ProductService(); 
  categories: Category[] = this.ps.getCategories();

  selectedCategoryId = signal<number | null>(null);

  products = computed<Product[]>(() => {
    const id = this.selectedCategoryId();
    return id ? this.ps.getProductsByCategory(id) : [];
  });

  selectCategory(id: number) {
    this.selectedCategoryId.set(id);
  }

  clearCategory() {
    this.selectedCategoryId.set(null);
  }
}