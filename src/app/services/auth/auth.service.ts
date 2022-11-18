import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  signInWithGoogle(idToken: string) {
    this.apiService
      .post('auth/signin/google', {
        idToken,
      })
      .subscribe((res) => {
        console.log({ authResponse: res });
      });
  }
}
