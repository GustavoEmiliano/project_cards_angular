import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  cardLaranja = {
    typeCard: 'Simples',
    planPrice: 100,
    style: 'orange' as const,
  };

  cardRoxo = {
    typeCard: 'Completo',
    planPrice: 200,
    style: 'purple' as const,
  };

  onCradButtonClicked() {
    console.log('onCradButtonClicked');
  }
}
