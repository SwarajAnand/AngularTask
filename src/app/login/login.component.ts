import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/globalUsers.state';
import { UserDetail } from '../interfaces/interfaces';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { selectCurrentUser } from '../store/user.selector';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  flag: boolean = true;
  validUser: string = ''; 
  // togglePassword: boolean = false;
  passwordFieldType: string = 'password';


  currentUserToLogin: UserDetail | null = null;
  currentUser$: Observable<UserDetail | null>;

  constructor(private store: Store<AppState>) {
    this.currentUser$ = this.store.select(selectCurrentUser); 
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  
  ngOnInit() {
    // Subscribe to currentUser$ and log the value
    this.currentUser$.subscribe(user => {
      console.log('Logged-in user:', user);
      this.validUser = user?.name || '';
      this.currentUserToLogin = user || null;
    });
  }

  checkValidUser() {
    this.currentUser$.subscribe(user => {
      this.flag = true;
      if (user && user.email === this.email && user.password === this.password) {
        console.log('Login successful');
        // Handle successful login here
      } else {
        console.log('Login failed');
        // Handle failed login here
        this.flag = false;
      }
    });
  }
}
