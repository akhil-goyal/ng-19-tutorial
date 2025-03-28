import { CommonModule } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor(private router: Router) {
    console.log('constructor');
  }

  /**
  When It’s Called: This hook is called before ngOnInit and whenever an @Input property changes. 
  It’s triggered the first time when the component receives its initial input values, 
  and subsequently whenever those inputs change.

  Purpose: Use this to react to changes in input data. 
  For example, if a parent component passes a new value to your component, 
  you can update your component’s behavior.
  */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnInit', changes);
  }

  /**
  When It’s Called: This hook is called once, right after the component is initialized and its 
  inputs are set for the first time. It runs after the constructor and the first ngOnChanges.

  Purpose: Use this to perform initialization tasks, like fetching data from an API 
  or setting up initial values.
  */
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  /**
  * When It’s Called: This hook is called during every change detection cycle, 
  which happens whenever Angular checks for changes in the app (e.g., when a user 
  clicks a button or data updates). It runs after ngOnInit and after every ngOnChanges.
  
  Purpose: Use this to implement custom change detection logic if Angular’s default change 
  detection isn’t enough. Be cautious — it runs frequently and can impact performance.
  */
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  /**
  When It’s Called: This hook is called once, after Angular finishes projecting external 
  content into the component’s view (e.g., content passed via <ng-content>). 
  It runs after ngDoCheck.

  Purpose: Use this to perform initialization tasks related to the projected content.
   */
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  /**
  When It’s Called: This hook is called after every change detection cycle for the projected 
  content, right after ngAfterContentInit and after every ngDoCheck.

  Purpose: Use this to check or update the projected content after Angular has checked 
  it for changes.
  */
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  /**
  When It’s Called: This hook is called once, after Angular finishes creating the 
  component’s view and all its child views (e.g., child components). It runs after 
  ngAfterContentChecked.

  Purpose: Use this to perform initialization tasks that depend on the component’s view 
  being fully rendered, like accessing DOM elements.
  */
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  /*
  When It’s Called: This hook is called after every change detection cycle for the component’s 
  view and its child views, right after ngAfterViewInit and after every ngAfterContentChecked.

  Purpose: Use this to check or update the view after Angular has checked it for changes.
  */
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  /**
  When It’s Called: This hook is called once, right before Angular destroys the component 
  (e.g., when the component is removed from the DOM, like navigating away from a route).

  Purpose: Use this to clean up resources, like unsubscribing from Observables or 
  clearing timers, to prevent memory leaks.
  */
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  navigate(): void {
    this.router.navigateByUrl('settings');
  }
}
