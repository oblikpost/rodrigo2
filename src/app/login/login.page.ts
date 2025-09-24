import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { 
  IonContent, 
  IonIcon, 
  IonItem, 
  IonInput, 
  IonButton 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterLink,
    IonContent, 
    IonIcon, 
    IonItem, 
    IonInput, 
    IonButton
  ]
})
export class LoginPage {
  constructor(private router: Router) { 
    addIcons({ personOutline });
  }

  login() {
    console.log('Login efetuado!');
    this.router.navigateByUrl('/dashboard');
  }
}