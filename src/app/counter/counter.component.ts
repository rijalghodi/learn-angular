import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-counter',
  imports: [ButtonComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  count = 0; // Counter value
  count2 = signal(0);

  increment() {
    this.count++;
    this.count2.set(this.count2() + 1);
  }

  decrement() {
    this.count--;
  }

  incrementAsync() {
    setTimeout(() => {
      this.count++; // Without detectChanges(), UI might not update
      this.count2.update((prev) => prev + 1);
    }, 1000);
  }
}
