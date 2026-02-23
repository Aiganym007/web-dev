import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  product = input.required<Product>();
  shared = output<Product>();
  delete = output<number>();
  selectedImageIndex = 0;

  stars(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i);
}

  get selectedImage(): string {
  const p = this.product();

  const imgs = p.images && p.images.length > 0
    ? p.images
    : [p.image]; 

  return imgs[this.selectedImageIndex] ?? p.image;
}

  selectImage(i: number) {
    this.selectedImageIndex = i;
  }

  like() {
    this.product().likes += 1; 
  }

  get fullStars(): number {
    return Math.floor(this.product().rating);
  }
  get emptyStars(): number {
    return Math.max(0, 5 - this.fullStars);
  }

  openKaspi() {
    window.open(this.product().link, '_blank', 'noopener,noreferrer');
  }

  shareWhatsApp() {
    const text = `Check out this product: ${this.product().link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    this.shared.emit(this.product());
  }

  shareTelegram() {
  const p = this.product();

  const url =
    `https://t.me/share/url?url=${encodeURIComponent(p.link)}` +
    `&text=${encodeURIComponent(p.name)}`;

  window.open(url, '_blank');
  this.shared.emit(p);
}
  onDelete() {
  if (confirm('Delete this product?')) {
      this.delete.emit(this.product().id);
    }
}
}