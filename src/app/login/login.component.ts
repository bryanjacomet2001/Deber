import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm, } from '@angular/forms';
import {Router} from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
; 
  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>) {}
  
  usuarioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })

  ngOnInit(): void {}
  
  onSubmit(){
    console.log(this.usuarioLogin.value);
    this.router.navigate(['/usuario'], {queryParams: {usuario: this.usuarioLogin.value.usuario}});
    this.dialogRef.close();
  }
}
