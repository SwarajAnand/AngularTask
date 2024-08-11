import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { userReducer } from './app/store/user.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore({ user: userReducer })
  ],
});
