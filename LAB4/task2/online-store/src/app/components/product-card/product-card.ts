import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input({ required: true }) product!: Product;
  @Output() shared = new EventEmitter<Product>();

  selectedImageIndex = 0;

  get selectedImage(): string {
    const imgs = this.product.images?.length ? this.product.images : [this.product.image];
    return imgs[this.selectedImageIndex] ?? this.product.image;
  }

  selectImage(i: number) {
    this.selectedImageIndex = i;
  }

  get fullStars(): number {
    return Math.floor(this.product.rating);
  }
  get emptyStars(): number {
    return Math.max(0, 5 - this.fullStars);
  }

  openKaspi() {
    window.open(this.product.link, '_blank', 'noopener,noreferrer');
  }

  shareWhatsApp() {
    const text = `Check out this product: ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    this.shared.emit(this.product);
  }

  shareTelegram() {
    const url =
      `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}` +
      `&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
    this.shared.emit(this.product);
  }
}
