import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CheckemptyPipe } from '../../pipes/checkempty.pipe';

@Component({
  selector: 'app-products',
  imports: [CommonModule, CheckemptyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products = [
    {
      name: 'Laptop',
      price: 999.99,
      launchDate: new Date('2023-01-15'),
      description: { brand: 'TechCo', model: 'X123' },
    },
    {
      price: 699.5,
      launchDate: new Date('2024-03-10'),
      description: { brand: 'PhoneCo', model: 'Y456' },
    },
    {
      name: '',
      price: 89.95,
      launchDate: new Date('2022-11-20'),
      description: { brand: 'SoundCo', model: 'Z789' },
    },
  ];
  longText =
    'This is a very long product description that we will shorten using the slice pipe to make it more readable in our UI.';
}
