import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-counter',
  imports: [ButtonComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  count = 0; // Counter value

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
