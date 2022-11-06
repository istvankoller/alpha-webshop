import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user$: Observable<firebase.User | null>;
  constructor(private auth: AuthService) {
    this.user$ = this.auth.login();
  }

  ngOnInit(): void {}

  login() {
    this.auth.login();
  }
}
