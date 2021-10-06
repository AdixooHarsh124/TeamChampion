import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-foregtpassword',
  templateUrl: './foregtpassword.component.html',
  styleUrls: ['./foregtpassword.component.css']
})
export class ForegtpasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myReactiveForm=new FormGroup ({
    curpass:new FormControl(),
    newpass:new FormControl(),
    conpass:new FormControl(),
  });

  changepass(val:any){
    console.log(val);
    
  }
}
