import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {
  existingEmailsOrMobile,
  organizationIds,
  organizationNames,
} from "../utils/common";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../store/globalUsers.state";
import { loginUser } from "../store/user.action";

@Component({
  selector: "app-signup",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./signup.component.html",
  styleUrl: "./signup.component.css",
})
export class SignupComponent {
  flag: boolean = true;
  errorFlag: boolean = false;
  validSubmit: boolean = false;

  emailOrPhone: string = "";
  name: string = "";
  password: string = "";

  organizationName: string = "";
  organizationId: string = "";
  designation: string = "Developer";
  birthDate: string = "";
  city: string = "";
  private _pincode: any = "";
  passwordFieldType: string = "password";

  errorMessage: string = "";

  get pincode(): string {
    return this._pincode;
  }

  constructor(private router: Router, private store: Store<AppState>) {}

  onContinue() {
    this.flag = false;
  }

  onBack() {
    this.flag = true;
  }

  togglePasswordVisibility() {
    this.passwordFieldType =
      this.passwordFieldType === "password" ? "text" : "password";
  }

  set pincode(value: string) {
    this._pincode = value;
  }

  validatePincode(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value.length > 6) {
      input.value = input.value.slice(0, 6);
    }
    this._pincode = input.value;
  }

  checkOrganization(): boolean {
    const validOrganization = organizationNames.find(
      (name) => name === this.organizationName
    );
    const validOrganizationId = organizationIds.find(
      (id) => id === this.organizationId
    );

    if (validOrganization && validOrganizationId) {
      return true;
    } else {
      this.errorFlag = true;
      this.errorMessage = "Invalid organization details";
      return false;
    }
  }

  isFormValid(): boolean {
    const isValid =
      this.emailOrPhone.trim() !== "" &&
      this.name.trim() !== "" &&
      this.password.trim() !== "" &&
      this.designation.trim() !== "" &&
      this.birthDate.trim() !== "" &&
      this.city.trim() !== "" &&
      this.pincode.trim() !== "";

    if (!isValid) {
      this.errorFlag = true;
      this.errorMessage = "All fields are required";
    }

    return isValid;
  }

  handleSubmit() {
    this.errorFlag = false;
    this.errorMessage = "";

    const isValid = this.isFormValid();
    if (!isValid) {
      return;
    }

    const validOrganization = this.checkOrganization();
    if (!validOrganization) {
      return;
    }

    let createUser = {
      email: this.emailOrPhone,
      password: this.password,
      name: this.name,
      organizationName: this.organizationName,
      designationId: this.organizationId,
      birthDate: new Date(this.birthDate),
      designation: this.designation,
      city: this.city,
      pincode: this.pincode,
      mobile: this.emailOrPhone,
    };

    this.store.dispatch(loginUser({ user: createUser }));
    existingEmailsOrMobile.push(createUser);

    this.validSubmit = true;
    // if validSubmit === true then redirect to login state that user is created successfully and save the current login user to global store state

    setTimeout(() => {
      this.router.navigate(["/login"]);
    }, 1000);
  }
}
