import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  email: string = '';
  mobile: string = '';

  

  constructor(private router: Router) {}

  checkEmail() {
    // Mock email validation
    const existingEmails = ['test@example.com', 'user@example.com'];
    
    if (existingEmails.includes(this.email)) {
      // Redirect to login if email exists
      this.router.navigate(['/login']);
      console.log(this.email)
    } else {
      // Redirect to signup if email doesn't exist
      this.router.navigate(['/signup']);
      console.log(this.email)
    }
  }

}
