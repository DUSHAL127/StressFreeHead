import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upgrade-page',
  templateUrl: './upgrade-page.component.html',
  styleUrls: ['./upgrade-page.component.css']
})
export class UpgradePageComponent {
  plans = [
    { name: 'Basic Plan', duration: 'Monthly', details: 'Basic features', price: 9.99 },
    { name: 'Pro Plan', duration: 'Yearly', details: 'All features', price: 99.99 },
    { name: 'Free Plan', duration: 'Lifetime', details: 'Limited features', price: 0 }
  ];
  selectedPlan: any;
  paymentInfo = { cardName: '', cardNumber: '', expiryDate: '', cvv: '' };

  isModalOpen = false;
  modalTitle = '';
  modalMessage = '';

  constructor(private router: Router) {}  // Inject the Router here

  selectPlan(plan: any) {
    this.selectedPlan = plan;
  }

  processPayment() {
    if (this.selectedPlan.price > 0) {
      // Payment processing logic here
      this.modalTitle = 'Payment Successful';
      this.modalMessage = `You have successfully purchased the ${this.selectedPlan.name}.`;
    } else {
      // Free plan confirmation
      this.modalTitle = 'Plan Selected';
      this.modalMessage = `You have selected the ${this.selectedPlan.name}.`;
    }
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  handleConfirm() {
    // Additional logic after confirming the modal
    this.closeModal();
  }

  navigateHome() {
    this.router.navigate(['/home']);  // Use the injected Router instance
  }
}
