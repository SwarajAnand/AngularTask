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
  private _pincode: any = '';

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
    // Only allow numeric characters and limit to 6 digits
    this._pincode = value;
    // console.log('Pincode length:', this._pincode.length);
  }


  validatePincode(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value.length > 6) {
      input.value = input.value.slice(0, 6);
    }
    this._pincode = input.value; // Trigger the setter

    // console.log(this._pincode)
  }

}


