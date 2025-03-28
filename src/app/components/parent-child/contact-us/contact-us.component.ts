import { Component } from '@angular/core';
import { ProgressBarComponent } from '../child/progress-bar/progress-bar.component';

@Component({
  selector: 'app-contact-us',
  imports: [ProgressBarComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {}
