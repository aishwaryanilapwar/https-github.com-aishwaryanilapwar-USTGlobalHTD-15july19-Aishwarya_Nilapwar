import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CustomValidator } from './custom.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
get name()
{
  return this.registerForm.get('name');
}
get email()
{
  return this.registerForm.get('email');
}
get phno()
{
  return this.registerForm.get('phno');
} 


  registerForm= new FormGroup({
  name: new FormControl('',[Validators.minLength(4),Validators.required]),
  email: new FormControl('',[Validators.email,Validators.minLength(4),Validators.required,CustomValidator.noSpace]),
  phno: new FormControl('',[Validators.minLength(10),Validators.required]),
})

printForm(from)
{
  console.log(from);
 
 
}
  ngOnInit() {
  }

}
