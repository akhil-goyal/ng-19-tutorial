import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container-template',
  imports: [CommonModule],
  templateUrl: './ng-container-template.component.html',
  styleUrl: './ng-container-template.component.css',
})
export class NgContainerTemplateComponent {
  candidates: string[] = ['Alice', 'Bob', 'Charlie'];
  toppers: string[] = ['Max', 'Cindy', 'Philip'];
  shouldDisplayList: boolean = true;
}
