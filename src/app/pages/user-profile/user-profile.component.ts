import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  profileForm: FormGroup;
  showModal = false;
  modalMessage = '';
  modalTitle = '';
  
  user = {
    username: '',
    email: '',
    dob: '',
    sex: '',
    packageType: 'free'
  };

  constructor(private fb: FormBuilder, private router: Router) {
    this.profileForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      sex: ['', Validators.required],
    });
  }

  onUpdate() {
    if (this.profileForm.valid) {
      // Simulate an update request
      const updateSuccessful = this.simulateUpdate();

      if (updateSuccessful) {
        this.modalTitle = 'Update Successful';
        this.modalMessage = 'Your profile has been successfully updated.';
        this.showModal = true;
      } else {
        this.modalTitle = 'Update Failed';
        this.modalMessage = 'There was an error updating your profile. Please try again.';
        this.showModal = true;
      }
    }
  }

  simulateUpdate(): boolean {
    // Simulate update logic
    return true; // Replace with real logic
  }

  onModalClose() {
    this.showModal = false;
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
