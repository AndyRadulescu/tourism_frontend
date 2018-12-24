import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    notFound = false;

    constructor(private router: Router, private http: HttpClient) {
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
                },
                err => {
                    console.log(err);
                    this.notFound = true;
                });
    }

    post(username, password) {
        const user = {username, password};
        return this.http.post('http://localhost:8000/api/user/login', user);
    }
}
