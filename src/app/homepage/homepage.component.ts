import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { UserDetail } from "../interfaces/interfaces";
import { AppState } from "../store/globalUsers.state";
import { loginUser, setExistingUsers } from "../store/user.action";
import { selectExistingUsers } from "../store/user.selector";
import { FormsModule } from "@angular/forms";
import { existingEmailsOrMobile } from "../utils/common";

@Component({
  selector: "app-homepage",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent implements OnInit {
  email: string = "";
  mobile: string = "";
  existingUsers$: Observable<UserDetail[]>;

  constructor(private router: Router, private store: Store<AppState>) {
    this.existingUsers$ = this.store.select(selectExistingUsers);
  }

  ngOnInit() {
    // setting setExistingUsers with all data from common file
    this.store.dispatch(setExistingUsers({ users: existingEmailsOrMobile }));
  }

  checkEmail() {
    this.existingUsers$.subscribe((existingUsers) => {
      const currUser = existingUsers.find(
        (user) => user.email === this.email || user.mobile === this.mobile
      );
      console.log(currUser);

      if (currUser) {
        this.store.dispatch(loginUser({ user: currUser }));
        this.router.navigate(["/login"]);
      } else {
        this.router.navigate(["/signup"]);
      }
    });
  }
}
