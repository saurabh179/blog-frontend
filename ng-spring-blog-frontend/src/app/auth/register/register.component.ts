import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { RegisterPayload } from '../register-payload';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  resisterPayload: RegisterPayload;

  constructor(private formBuilder: FormBuilder, private authService:AuthService,private router:Router) {
    this.registerForm = this.formBuilder.group(
      {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

      this.resisterPayload = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.resisterPayload.username = this.registerForm.get('username').value;
    this.resisterPayload.email = this.registerForm.get('email').value;
    this.resisterPayload.password = this.registerForm.get('password').value;
    this.resisterPayload.confirmPassword = this.registerForm.get('confirmPassword').value;
    this.authService.register(this.resisterPayload).subscribe(data=>{
      console.log("registered successfully!!!");
      this.router.navigateByUrl('/register-success');
    }, error=>{
      console.log("failed to register");
    });
  }


}
