import { Component, OnInit } from '@angular/core';
import { AddproductService } from '../addproduct.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private service:AddproductService,private router:Router) { }

  ngOnInit() {
    this.service.getData();
    console.log(this.service.products);
  }
  updateProduct(product)
  {
    this.service.selectedProduct=product;
    this.router.navigateByUrl('/add');
   
    
  }
  deleteProduct(product)
  {
    this.service.deleteData(product).subscribe(res=>{
      console.log(res);
      this.service.getData();
    },
    err=>{
      console.log(err);
    })
  }

}
