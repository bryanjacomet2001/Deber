import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-menu-login',
  templateUrl: './menu-login.component.html',
  styleUrls: ['./menu-login.component.css']
})
export class MenuLoginComponent implements OnInit {
  
  usuario!:string;

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.queryParams.subscribe((params:Params) =>{
      this.usuario = params['usuario'];
    });
  }

}
