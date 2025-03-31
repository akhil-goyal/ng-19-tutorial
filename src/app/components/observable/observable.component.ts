import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UsersService } from './users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-observable',
  imports: [CommonModule],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css',
  providers: [UsersService],
})
export class ObservableComponent implements OnInit {
  users$: Observable<User[]> = of();

  constructor(private userService: UsersService) {}
  // myPromise = new Promise((resolve, reject) => {
  //   console.log('Promise Started..');
  // });

  // myObservable = new Observable((observable) => {
  //   console.log('Observable Started..');
  //   observable.next('1');
  //   observable.next('2');
  //   observable.next('3');
  // });

  ngOnInit(): void {
    // this.myObservable.subscribe((obs) => {
    //   console.log(obs);
    // });
    this.users$ = this.userService.getUsers();
  }
}
