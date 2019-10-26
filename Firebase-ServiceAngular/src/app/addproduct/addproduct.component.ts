import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { AddproductService } from '../addproduct.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
 
  constructor(private service:AddproductService,private router:Router) { }
  postProduct(form:NgForm)
  {
    if(form.value.id)
    {
    this.service.updateData(form.value).subscribe((data)=>{
      console.log(data);
      this.service.getData();
      form.reset();
      this.router.navigateByUrl('/proddetails');
    },err=>{
      console.log(err);
    })
  }
  
  else{
    this.service.postData(form.value).subscribe(data=>{
      console.log(data);
      this.service.getData();
      this.router.navigateByUrl('/proddetails');
    },err=>{
      console.log(err);
    })
  }
}
  ngOnInit() {
    
  
  }
 

}
