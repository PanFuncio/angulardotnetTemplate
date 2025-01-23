import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {
  private router = inject(Router);

  navigateTo(route: string) {
    console.log('Navigating to:', route);
    this.router.navigate([route]);
    console.log(this.router.navigate([route]))
  }
}
