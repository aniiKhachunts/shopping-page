import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from "../../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loading = false;
  submitted = false;
  loginForm: FormGroup = <FormGroup<any>>{};
  returnUrl!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Username: ['', [Validators.required]],
      Password: ['', Validators.required]
    });
    this.loginService.logout();
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(formValue: AbstractControl) {
    if (this.loginForm.invalid) {
      return;
    }
    this.router.navigateByUrl('main/products');
      this.loginService.login(this.loginForm.value);
  }
}
