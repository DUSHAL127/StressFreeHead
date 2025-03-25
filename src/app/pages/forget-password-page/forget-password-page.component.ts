import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password-page',
  templateUrl: './forget-password-page.component.html',
  styleUrls: ['./forget-password-page.component.css']
})
export class ForgetPasswordPageComponent {
  otpRequested = false;
  passwordReset = false;
  resetPasswordForm: FormGroup;
  otpForm: FormGroup;
  passwordResetForm: FormGroup;
  showModal = false;
  modalMessage = '';
  modalTitle = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.otpForm = this.fb.group({
      otp: ['', Validators.required]
    });

    this.passwordResetForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  requestOtp() {
    if (this.resetPasswordForm.valid) {
      // Logic to send OTP to the provided email address
      console.log('Requesting OTP for email:', this.resetPasswordForm.value.email);

      // Simulate success response
      this.showModal = true;
      this.modalTitle = 'OTP Sent';
      this.modalMessage = 'An OTP has been sent to your email address. Please check your inbox.';

      this.otpRequested = true;
    }
  }

  verifyOtp() {
    if (this.otpForm.valid) {
      // Logic to verify the provided OTP
      console.log('Verifying OTP:', this.otpForm.value.otp);

      // Simulate success response
      this.showModal = true;
      this.modalTitle = 'OTP Verified';
      this.modalMessage = 'Your OTP has been verified successfully. You can now reset your password.';
      
      this.passwordReset = true;
    }
  }

  resetPassword() {
    if (this.passwordResetForm.valid) {
      // Logic to reset the password
      console.log('Resetting password:', this.passwordResetForm.value);

      // Simulate success response
      this.showModal = true;
      this.modalTitle = 'Password Changed';
      this.modalMessage = 'Your password has been changed successfully. You can now log in with your new password.';
      
      // Redirect to the login page after successful password change
      this.router.navigate(['/login']);
    }
  }

  passwordMatchValidator(form: FormGroup) {
    const newPassword = form.get('newPassword')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { passwordMismatch: true };
  }

  onModalClose() {
    this.showModal = false;
  }
}
