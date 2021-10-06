import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-navagation',
  templateUrl: './user-navagation.component.html',
  styleUrls: ['./user-navagation.component.css']
})
export class UserNavagationComponent implements OnInit {

  constructor() { }

  over(valu:string)
  {
     console.log(valu);
  }
  leave(value:string )
  {
    console.log(value);
  }
  ngOnInit(): void {
  }

}
