import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-lifecycle',
  imports: [FormsModule, CounterComponent],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent {
  initialValue: number = 0;
}
