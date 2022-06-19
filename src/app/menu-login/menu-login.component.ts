import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-login',
  templateUrl: './menu-login.component.html',
  styleUrls: ['./menu-login.component.css']
})
export class MenuLoginComponent implements OnInit {

  @Input() name: any;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
