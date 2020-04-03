import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title = 'Nueva Aplicación';
  public name: string;
  public usuario: Usuario = new Usuario();

  constructor(public authAf: AngularFireAuth, private router: Router){

  } 

  ngOnInit(): void {
  }

  ingresar(): void {
    try {
      let user = this.usuario;
      this.authAf.signInWithEmailAndPassword(user.email, user.pass)
        .then(result => {
          this.router.navigate(['/home'])})
        .catch(error => {
          console.log(error);
        })
      } catch (error) {
          if(error.code == "auth/argument-error"){
            var mailError = "Formato de mail incorrecto";
            console.log(mailError);
          }
      } 
  }
}
