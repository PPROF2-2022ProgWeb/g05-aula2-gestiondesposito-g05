// import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';


// @Component({
//   selector: 'app-registro',
//   templateUrl: './registro.component.html',
//   styleUrls: ['./registro.component.scss']
// })

// export class RegistroComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//    selector: 'app-registro',
//    templateUrl: './registro.component.html',
//    styleUrls: ['./registro.component.scss']
// })

// export class RegistroComponent {
//   constructor(

//     ) { }
// }
//************************************************************************ */
// import { Component, OnInit } from "@angular/core";
// import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-registro',
//   templateUrl: './registro.component.html',
//   styleUrls: ['./registro.component.css']
// })

// export class RegistroComponent implements OnInit {
//   // El modelo ligado al formulario, por defecto vacío

//   constructor() {

//   }

//   ngOnInit(): void {}

//   login(loginForm: NgForm) {
//     this.userService.login(loginForm.value).subscribe(
//       (response: any) => {
//         this.userAuthService.setRoles(response.user.role);
//         this.userAuthService.setToken(response.jwtToken);

//         const role = response.user.role[0].roleName;
//         if (role === 'Admin') {
//           this.router.navigate(['/admin']);
//         } else {
//           this.router.navigate(['/user']);
//         }
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   }
// }
/******************************************************************* */
import { NgModule } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from "../app.component";
// import { ReactiveFormsComponent } from "./registro.component";

// @NgModule({
//   imports: [BrowserModule, FormsModule, ReactiveFormsModule],
//   declarations: [AppComponent,ReactiveFormsComponent],
//   bootstrap: [AppComponent]
// })

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
    })

export class RegistroComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(){
    this.registerForm = this.formBuilder.group(
      {
        name: ["", Validators.required],  // validamos q el nombre este o tenga algo escrito
        email: ["", [Validators.required, Validators.email]], // validacion de que sea una direccion de correo
        password: ["", [Validators.required, Validators.minLength(6)]],// validacion de 6 digitos minimos
        repeatPass: ["", Validators.required]
      },
      {
        //validator: this.mustMatch("password", "repeatPass")
      }
    )
  }

}
