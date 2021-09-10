import { Component } from '@angular/core';
import { EmailValidator, FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practiceapp';
  loginForm= new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password:new FormControl('')


  })
  onSubmit(){
    console.log("name=",this.loginForm.controls.name.value )
    console.log("Email=",this.loginForm.controls.email.value )
    console.log("password=",this.loginForm.controls.password.value )
  }

}
