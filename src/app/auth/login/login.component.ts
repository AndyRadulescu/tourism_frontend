import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NavbarComponent} from '../../global/components/navbar/navbar.component';
import {LoginTextService} from './loginText.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    notFound = false;

    constructor(private router: Router, private http: HttpClient, private loginTextService: LoginTextService) {
    }

    ngOnInit() {
        if (localStorage.getItem('token')) {
            this.router.navigate(['']);
        }
    }

    loginUser(e) {
        e.preventDefault();
        console.log(e);
        const username = e.target.elements[0].value;
        const password = e.target.elements[1].value;

        this.post(username, password)
            .subscribe((receivedStudent) => {
                    console.log(receivedStudent);
                    localStorage.setItem('token', receivedStudent['token']);
                    this.notFound = false;
                    this.router.navigate(['']);
                    this.loginTextService.changeMessage(true);
                },
                err => {
                    console.log(err);
                    this.notFound = true;
                });
    }

    post(username, password) {
        const user = {username, password};
        return this.http.post('http://localhost:8080/api/user/login', user);
    }
}
