import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'alpha-webshop';
  constructor(
    firestore: AngularFirestore,
    private auth: AuthService,
    router: Router
  ) {
    auth.user$.subscribe((user) => {
      if (user) {
        let returnUrl: any = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }
}
