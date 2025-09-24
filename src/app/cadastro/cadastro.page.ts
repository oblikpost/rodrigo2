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
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
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
export class CadastroPage {
  constructor(private router: Router) {
    addIcons({ personOutline });
  }

  cadastrar() {
    console.log('Cadastrando...');
    this.router.navigateByUrl('/dashboard');
  }
}