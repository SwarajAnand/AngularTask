import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  flag: boolean = true;

  checkValidUser() {
    this.flag = !this.flag;
    if (this.email === "test" && this.password === "test") {
      return true;
    } else {
      return false;
      this.flag = false;
    }
  }
}
