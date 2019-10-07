import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
  constructor(private http:HttpClient) { }
tasks:any = [];

getData()
{
  this.http.get('http://localhost:8088/task/get-all').subscribe(data =>{
    this.tasks=data.task;
    console.log(data.task);
  },err =>{
    console.log(err)
  });
}
  postData(data)
  {
    return this.http.post('http://localhost:8088/task/add',data);
  }
  updateData(data)
  {
return this.http.put('http://localhost:8088/task/modify',data);
  }

deleteData(data)
{
  return this.http.delete(`http://localhost:8088/task/remove/${data}`);

}
  ngDoCheck()
  {
    this.getData();
  }

}
