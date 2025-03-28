import { Component } from '@angular/core';
import { ProgressBarComponent } from '../child/progress-bar/progress-bar.component';

@Component({
  selector: 'app-about-us',
  imports: [ProgressBarComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {}
