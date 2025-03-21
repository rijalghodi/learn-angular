import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: ` <button [ngClass]="['btn', 'btn-' + size, 'btn-' + color]">
    <ng-content></ng-content>
  </button>`,
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() color: 'primary' | 'secondary' | 'ghost' | 'danger' = 'secondary';
}
