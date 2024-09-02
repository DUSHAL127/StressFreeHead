import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  constructor(private router: Router) {} // Inject the Router service

  navigateToHome() {
    this.router.navigate(['/home']);
  }
  products = [
    {
      name: 'Stress Relief Essential Oils',
      description: 'A blend of essential oils to help you relax and unwind.',
      image: 'assets/essential-oils.jpeg'
    },
    {
      name: 'Mindful Meditation Guide',
      description: 'A comprehensive guide to help you start your meditation journey.',
      image: 'assets/meditation-guide.jpeg'
    },
    {
      name: 'Yoga Mat',
      description: 'A comfortable and durable yoga mat to support your practice.',
      image: 'assets/yoga-mat.jpeg'
    },
    {
      name: 'Stress Reduction Techniques',
      description: 'Effective techniques to reduce and manage stress.',
      image: 'assets/stress-techniques.jpeg'
    },
    {
      name: 'Stress Reduction Diet',
      description: 'A diet plan that helps reduce stress levels naturally.',
      image: 'assets/stress-diet.jpeg'
    },
    {
      name: 'Stress Reduction Exercises',
      description: 'Exercise routines specifically designed to reduce stress.',
      image: 'assets/stress-exercises.jpeg'
    },
    {
      name: 'Stress Reduction Routines',
      description: 'Daily routines to help you manage and reduce stress.',
      image: 'assets/stress-routines.jpeg'
    },
    {
      name: 'Stress Reduction Tools',
      description: 'Tools and gadgets that aid in stress management.',
      image: 'assets/stress-tools.jpeg'
    },
    {
      name: 'Stress Reduction Massages',
      description: 'Massage techniques that help in relieving stress.',
      image: 'assets/stress-massages.jpeg'
    },
    {
      name: 'Ayurvedic Guidelines',
      description: 'Traditional Ayurvedic practices for stress reduction.',
      image: 'assets/ayurvedic-guidelines.jpeg'
    },
    {
      name: 'Home Remedies',
      description: 'Simple and effective home remedies to relieve stress.',
      image: 'assets/home-remedies.jpeg'
    }
  ];

}
