import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [NgStyle],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css',
})
export class ProgressBarComponent {
  @Input() progressValue: number = 0;
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(): void {
    this.messageEvent.emit('Hello from the child component!');
  }
}
