import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
  GoogleSigninButtonDirective,
} from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  user: SocialUser;
  isLoggedIn: boolean;

  constructor(private authService: SocialAuthService) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);

      this.isLoggedIn = user != null;
    });
  }

  signOut(): void {
    this.authService.signOut();
  }

  /**
   * Once the user is logged in, trigger manual refresh token
   */
  refreshToken(): void {
    console.log('token refeesh');

    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
