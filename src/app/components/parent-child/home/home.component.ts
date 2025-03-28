import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProgressBarComponent } from '../child/progress-bar/progress-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ProgressBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @ViewChild('nameInput') name: ElementRef | undefined;
  @ViewChild(ProgressBarComponent) progressBar:
    | ProgressBarComponent
    | undefined;
  childMessage: string = '';

  receiveMessage(message: string): void {
    this.childMessage = message;
  }

  readInput(): void {
    debugger;
    this.name?.nativeElement.value;
    this.progressBar?.progressValue;
    if (this.name) {
      this.name.nativeElement.style.color = 'red';
    }
  }
}
