import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { User } from 'src/app/interfaces/user';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public valCheck: string[] = ['remember'];
    public user!: User;
    public form!: FormGroup;

    constructor(public layoutService: LayoutService, private router: Router, private formbuilder: FormBuilder, private authService: AuthService, private messageService: MessageService) {}

    ngOnInit(): void {
        this.initializeForm();
    }

    initializeForm(){
        this.form = this.formbuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        })
    }

    login(){
        const user: User = this.form.value;
        if(!user){
            return;
        }
        this.authService.login(user).then(() => this.router.navigate(['home'])).catch((error) => {console.log(error); this.messageService.add({severity: 'error', summary: 'Erro de Login', detail: 'Falha na autenticação.'})});
    }
}