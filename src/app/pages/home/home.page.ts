import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'nd-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user: SocialUser;
  isLoggedIn: boolean;

  constructor(
    private socialAuthService: SocialAuthService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      this.authService.signInWithGoogle(this.user?.idToken);
      this.isLoggedIn = user != null;
    });
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }

  /**
   * Once the user is logged in, trigger manual refresh token
   */
  refreshToken(): void {
    console.log('token refeesh');

    this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
  onSplitPaneVisible(event) {}
}
