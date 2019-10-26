import { Component, OnInit, OnDestroy } from '@angular/core';
 import { interval, Subscription, from } from 'rxjs';
 import {map} from "rxjs/operators";
import{UserService} from '../user.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
  providers:[UserService]
})
export class ObservablesComponent implements OnInit,OnDestroy {
mySubscription:Subscription;
  constructor(private userService:UserService) { }

ngOnInit() {
    this.mySubscription=interval(1000).pipe(map(data => { return data*10 ; })).subscribe(data=>{
       console.log(data);
    }, err=>{
      console.log(err);
    },
    ()=>{
      console.log('subscription complete');
    });
 this.userService.printdetails();
    
  }
ngOnDestroy()
 {
 this.mySubscription.unsubscribe();
 }
}
