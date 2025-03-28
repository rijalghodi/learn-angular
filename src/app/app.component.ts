import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { CounterComponent } from './counter/counter.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CounterComponent,
    TodoComponent,
    ContactFormComponent,
    FetchDataComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Learn Angular';
}
