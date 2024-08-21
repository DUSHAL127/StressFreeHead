import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm: FormGroup;
  showModal = false;
  modalMessage = '';
  modalTitle = '';

  constructor(private fb: FormBuilder, public router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Method to handle login
  onLogin() {
    if (this.loginForm.valid) {
      // Simulate a login request
      const loginSuccessful = this.simulateLogin();

      if (loginSuccessful) {
        this.modalTitle = 'Login Successful';
        this.modalMessage = 'Welcome back! You have successfully logged in.';
        this.showModal = true;

        // Automatically navigate to the home page after a short delay
        setTimeout(() => {
          this.showModal = false;  // Hide the modal
          this.router.navigate(['/home']); // Redirect to the home page
        }, 1500); // Adjust the delay as needed
      } else {
        this.modalTitle = 'Login Failed';
        this.modalMessage = 'Invalid email or password. Please try again.';
        this.showModal = true;
      }
    }
  }

  // Simulate login logic
  simulateLogin(): boolean {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    return email === 'test@example.com' && password === 'password123'; // Replace with real logic
  }

  // Method to close the modal manually if needed
  onModalClose() {
    this.showModal = false;
  }
}
