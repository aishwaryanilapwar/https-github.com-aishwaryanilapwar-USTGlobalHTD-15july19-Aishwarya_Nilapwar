import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(private service:TaskserviceService,private router:Router) { }
  postTask(form)
  {
    this.service.postData(form.value).subscribe((data) =>{
      console.log(data);
      this.service.getData();
      form.reset();
      this.router.navigateByUrl("/showall")
    },err=>{
        console.log(err);
      })
  
}
  ngOnInit() {
  }

}
