import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [RouterLink],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  constructor(private router: Router) {}

  navigate(): void {
    this.router.navigateByUrl('dashboard');
  }
}
