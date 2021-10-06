import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  panelOpenState: boolean = false;
  constructor() { 
    panelOpenState:Boolean;
  }

togglePanel() {
  this.panelOpenState = !this.panelOpenState;
}

  ngOnInit(): void {
  }

}
