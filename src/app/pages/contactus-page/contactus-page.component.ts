import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus-page',
  templateUrl: './contactus-page.component.html',
  styleUrls: ['./contactus-page.component.css']
})
export class ContactusPageComponent {
  contactForm: FormGroup;
  showModal = false;
  modalMessage = '';
  modalTitle = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  sendMessage() {
    if (this.contactForm.valid) {
      // Logic to send the message
      console.log('Sending message:', this.contactForm.value);

      // Simulate success response
      this.showModal = true;
      this.modalTitle = 'Message Sent';
      this.modalMessage = 'Your message has been sent successfully. We will get back to you shortly.';
      
      // Reset the form after successful submission
      this.contactForm.reset();
    }
  }

  navigateHome() {
    this.router.navigate(['/home']);
  }

  onModalClose() {
    this.showModal = false;
  }
}
