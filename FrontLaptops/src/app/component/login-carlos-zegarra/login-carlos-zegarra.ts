import {Component, inject} from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatInput, MatLabel, MatPrefix} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {Router} from '@angular/router';
import {RequestDto} from '../../model/request-dto';
import {ResponseDto} from '../../model/response-dto';
import {LoginService} from '../../services/login-service';
@Component({
  selector: 'app-login-carlos-zegarra',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatPrefix,
    MatInput,
    MatIcon,
    MatButton
  ],
  templateUrl: './login-carlos-zegarra.html',
  styleUrl: './login-carlos-zegarra.css',
})
export class LoginCarlosZegarra {
  router: Router = inject(Router);
  loginForm: FormGroup;
  fb: FormBuilder = inject(FormBuilder);
  loginService: LoginService = inject(LoginService);

  constructor() {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }
  ngOnInit() {
    if(localStorage.getItem('token')!=null){
      localStorage.clear();//borra todos los items de localStorage
      console.log("token y itmes eliminados...");
    }
    this.loadForm();
  }

  loadForm() {
    console.log("Loading...");
  }

  onSubmit() {
    if(this.loginForm.valid){
      const requestDto = new RequestDto();
      requestDto.username = this.loginForm.controls['username'].value;
      requestDto.password = this.loginForm.controls['password'].value;
      let responseDto = new ResponseDto();
      this.loginService.login(requestDto).subscribe({
        next: (data :ResponseDto) => {
          console.log("Login Roles:", data.roles);
          console.log("Login rol:", data.roles[0]); // primer rol
          localStorage.setItem('rol', data.roles[0]);

          localStorage.setItem('user', requestDto.username);
          localStorage.setItem('pass', requestDto.password);
          this.router.navigate(['/Home']);
        },
        error: (error) => {
          console.log(error);
          this.router.navigate(['/Login']);
        }
      })
      alert("Login ok!");
      this.router.navigate(['/']);
    }
    else{
      alert("Formulario incorrecto!");
      console.log("Form invalido!");
    }
  }
}
