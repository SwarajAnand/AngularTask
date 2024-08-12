import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../store/globalUsers.state";
import { UserDetail } from "../interfaces/interfaces";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { selectCurrentUser } from "../store/user.selector";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  flag: boolean = true;
  // flag -> for showing error message if user is not valid or password is wrong
  validSubmit: boolean = false;
  // validSubmit -> login true -> show login successfully -> redirect further

  validUser: string = "";
  passwordFieldType: string = "password";
  // passwordFieldType -> toggle (between show & hide) password

  currentUserToLogin: UserDetail | null = null;
  currentUser$: Observable<UserDetail | null>;

  constructor(private store: Store<AppState>) {
    this.currentUser$ = this.store.select(selectCurrentUser);
  }

  togglePasswordVisibility() {
    this.passwordFieldType =
      this.passwordFieldType === "password" ? "text" : "password";
  }

  ngOnInit() {
    // Subscribe to currentUser$ for getting the user Name if it was a valid user
    this.currentUser$.subscribe((user) => {
      this.validUser = user?.name || "";
      this.currentUserToLogin = user || null;
    });
  }

  checkValidUser() {
    this.currentUser$.subscribe((user) => {
      this.flag = true;
      if (
        user &&
        user.email === this.email &&
        user.password === this.password
      ) {
        console.log("Login successful");
        this.validSubmit = true;
      } else {
        console.log("Login failed");
        this.flag = false;
      }
    });
  }
}
