import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface UserDataInterface {
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  userData: UserDataInterface = {
    firstName: '',
    lastName: '',
    age: 0,
  };

  submitUserData(): void {
    debugger;
    const formData = this.userData;
  }
}
