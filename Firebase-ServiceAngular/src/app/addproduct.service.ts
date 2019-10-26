import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map} from 'rxjs/operators';
import { from } from 'rxjs';
import { ProductDetails } from './productdetails/productdetails';




@Injectable({
  providedIn: 'root'
})
export class AddproductService {

   url:String='https://firbase-angular-6.firebaseio.com/';
  constructor(private http:HttpClient){
    
  }
  products=[];
  selectedProduct:ProductDetails={
    title:null,
     image:null,
      description:null,
      id:null
  }
  postData(data)
  {
   return this.http.post(`${this.url}/product.json`,data);
  }
  getData()
  {
    return this.http.get(`${this.url}/product.json`).pipe(map(resdata=>{
      let productsArray=[];
      for(let key in resdata)
      {
        productsArray.push({...resdata[key],id:key});
      }
      return productsArray;
    })).subscribe(data =>{
      this.products=data;
      console.log(data);
    },err=>{
      console.log(err);
    });
  }
  updateData(data)
  {
    return this.http.put(`${this.url}/product ${data.id}.json`,data);
  }
  deleteData(data)
  {
    return this.http.delete(`${this.url}/product/${data.id}.json`);
  }
 
}
