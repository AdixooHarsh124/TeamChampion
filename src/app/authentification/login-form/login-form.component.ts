import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthentificationServiceService } from 'src/app/services/authentification-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private AuthentificationService:AuthentificationServiceService) { }

  ngOnInit(): void {
  }
  myReactiveForm=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })

  fetchdata(val:any){
    console.log(val)
    this.AuthentificationService.login(val).subscribe(res=>{
      console.log(res);
    })
  }

}