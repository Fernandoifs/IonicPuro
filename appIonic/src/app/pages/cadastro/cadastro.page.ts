import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  nome: string | null = '';
  telefone: string | null = '';
  dataNascimento: string | null = '';
  endereco: string | null = '';
  contactField: string | null = '';
  messageField: string | null = '';

  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  async sendForm(f: NgForm) {
    const message = 'Cadastro realizado com sucesso!'
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirmado');
          },
        },
      ],
    });
    await alert.present();
  }
}
