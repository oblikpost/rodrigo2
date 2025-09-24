import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton
  ]
})
export class DashboardPage {
  // ... o restante do seu código permanece o mesmo
  private mensagens: string[] = [
    "Que bom te ver por aqui!",
    "Viva o Mundo Real!",
    "Seja bem-vindo(a) de volta!",
    "O seu dia vai ser incrível!",
    "Que a força esteja com você."
  ];

  public mensagemAleatoria: string = "";

  constructor(private router: Router) { }

  ionViewWillEnter() {
    this.gerarMensagemAleatoria();
  }

  gerarMensagemAleatoria() {
    const index = Math.floor(Math.random() * this.mensagens.length);
    this.mensagemAleatoria = this.mensagens[index];
  }

  logout() {
    this.router.navigateByUrl('/home');
  }
}