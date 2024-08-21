import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  products = [
    {
      title: 'Meditation Guide',
      shortDescription: 'A comprehensive guide to meditation techniques.',
      description: 'This guide offers step-by-step instructions on meditation practices designed to reduce stress and improve well-being.',
      image: 'assets/meditation-guide.jpg',
      techniques: ['Mindfulness Meditation', 'Breathing Techniques', 'Body Scan']
    },
    {
      title: 'Stress Relief Techniques',
      shortDescription: 'Effective techniques for managing stress.',
      description: 'Learn various techniques to handle stress effectively and maintain a balanced lifestyle.',
      image: 'assets/stress-relief.jpg',
      techniques: ['Progressive Muscle Relaxation', 'Deep Breathing Exercises', 'Visualization']
    }
    // Add more products as needed
  ];

  selectedProduct: any;

  openProduct(product: any) {
    // this.selectedProduct = product;
    // const modal = new bootstrap.Modal(document.getElementById('productModal')!);
    // modal.show();
  }
}
