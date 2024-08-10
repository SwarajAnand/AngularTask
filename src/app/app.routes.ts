import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent }, // Default route (homepage)
  { path: 'login', component: LoginComponent }, // Login route
  { path: 'signup', component: SignupComponent }, // Signup route
  { path: '**', redirectTo: '' } // Wildcard route for 404, redirects to homepage
];
