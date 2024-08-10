import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  flag: boolean = true;

  emailOrPhone: string = '';
  name: string = '';
  password: string = '';

  organizationName: string = '';
  organizationId: string = '';
  designation: string = 'Developer';
  birthDate: string = '';
  city: string = '';
  private _pincode: string = '';

  get pincode(): string {
    return this._pincode;
  }

  onContinue() {
    this.flag = false;
  }

  onBack() {
    this.flag = true;
  }

  set pincode(value: string) {


    // Limit to 6 digits
    this._pincode = value
    // this._pincode = 
    console.log(this._pincode.length())
  }
}


