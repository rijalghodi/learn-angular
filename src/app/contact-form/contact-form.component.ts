import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  // standalone: true,
  imports: [FormsModule, CommonModule], // ✅ Import FormsModule for ngModel
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  formData = { name: '', email: '', question: '' };
  submittedData: any = null;

  submitForm() {
    this.submittedData = { ...this.formData }; // Store submitted data
  }
}
