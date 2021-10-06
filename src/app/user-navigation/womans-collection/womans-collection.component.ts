import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-womans-collection',
  templateUrl: './womans-collection.component.html',
  styleUrls: ['./womans-collection.component.css']
})
export class WomansCollectionComponent implements OnInit {

  open:boolean;
  constructor() { 
    this.open=false;
  }
  
  over(val:string)
  {
     console.log(this.open);
  }
  leave(value:string )
  {
    console.log(value);
  }
  ngOnInit(): void {
  }

}
