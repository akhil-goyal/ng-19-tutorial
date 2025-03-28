import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  userData: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    age: new FormControl(0),
  });

  // constructor() {
  //   this.userData.controls['age'].disable();
  //   setTimeout(() => {
  //     this.userData.controls['age'].enable();
  //   }, 3000);
  // }

  onFormSubmit(): void {
    const isFormValid = this.userData.valid;
    const formData = this.userData.value;
    debugger;
  }
}
