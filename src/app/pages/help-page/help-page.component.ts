import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.css']
})
export class HelpPageComponent {
  faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page. You will receive an email with instructions to reset your password.'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can contact our customer support team via the "Contact Us" page, where you can fill out a form or reach us through email or phone.'
    },
    {
      question: 'Where can I update my profile information?',
      answer: 'You can update your profile information on the "Profile" page by clicking on the "Edit Profile" button and making the necessary changes.'
    },
    {
      question: 'How do I delete my account?',
      answer: 'To delete your account, please contact our support team via the "Contact Us" page. They will assist you with the process.'
    }
  ];

  constructor(private router: Router) { }

  navigateHome() {
    this.router.navigate(['/home']);
  }
}
