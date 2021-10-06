import { Component, OnInit } from '@angular/core';
import { FormControl,FormControlName, FormGroup } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { AuthentificationServiceService } from 'src/app/services/authentification-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private Authentificationservice:AuthentificationServiceService) { }

  ngOnInit(): void {
  }
  myReactiveForm=new FormGroup ({
    firstName:new FormControl(),
    lastName:new FormControl(),
    email:new FormControl(),
    mobile:new FormControl(),
    password:new FormControl()
  })
  fetchdata(val:any){
    console.log(val)
    this.Authentificationservice.register(val).subscribe(res=>{
      console.log(res);
    })


  }

  // validmail(val:string){
  //   console.log(val)
  // let  re:any;
  // "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
  // if("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"==val){
  //   alert("plz enter a valid Email Id");
  //   return false;
  // }
  // else{
  //   return true;
  // }
  // }
  

}
