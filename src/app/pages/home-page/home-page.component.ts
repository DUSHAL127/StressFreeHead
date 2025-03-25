import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {
  showModal: boolean = false;
  private modalTimer: any;

  constructor(private router: Router) {}

  ngOnInit() {
    // Show modal after 30 seconds
    this.modalTimer = setTimeout(() => {
      this.showModal = true;
    }, 30000); // 30 seconds
  }

  ngOnDestroy() {
    // Clear the timer if the component is destroyed before the timer completes
    if (this.modalTimer) {
      clearTimeout(this.modalTimer);
    }
  }

  onModalClose() {
    this.showModal = false;
  }

  onModalConfirm() {
    this.router.navigate(['/login']); // Redirect to login page
  }
}
