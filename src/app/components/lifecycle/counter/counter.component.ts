import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-counter',
  imports: [RouterLink],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent
  implements
    OnChanges,
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() count: number = 0;

  constructor() {
    console.log('Constructor is running..');
  }

  ngOnChanges(changes: SimpleChanges): void { //
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void { //
    console.log('ngOnInit', this.count);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck', this.count);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void { //
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void { //
    alert('Are you sure you want to leave?');
    console.log('ngOnDestroy');
  }

  increment(): void {
    this.count++;
  }
}
