import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private scrollListener!: () => void;
  isLoggedIn: boolean = true; // Assume user is not logged in initially
  showModal: boolean = false;
  private pendingRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.scrollListener = () => {
      const navbar = document.querySelector('.custom-navbar');
      if (navbar) {
        if (window.scrollY > 50) { // Adjust the scroll threshold as needed
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', this.scrollListener);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  // Method to toggle login/logout status
  toggleLoginStatus() {
    this.isLoggedIn = !this.isLoggedIn;
    if (this.isLoggedIn) {
      this.router.navigate(['/login']); // Navigate to login page
    }
  }

  // Method to handle logout
  logout() {
    this.isLoggedIn = true;
    this.router.navigate(['/']); // Navigate to home page or desired page after logout
  }

  // Method to handle navigation with login check
  navigateWithCheck(route: string) {
    if (this.isLoggedIn) {
      this.router.navigate([route]);
    } else {
      this.pendingRoute = route;
      this.showModal = true;
    }
  }

  // Method to close the modal
  closeModal() {
    this.showModal = false;
  }

  // Method to handle modal confirmation
  confirmModal() {
    this.showModal = false;
    this.router.navigate(['/login'], { queryParams: { redirect: this.pendingRoute } });
  }
}
