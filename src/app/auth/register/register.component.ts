import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserDTO} from './UserDTO';
import {LoginService} from '../login.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public error = false;
    public success = false;
    public submitted = false;
    public userDto: UserDTO;
    public confirmPassword: String;
    public loader = true;

    constructor(private router: Router, private loginService: LoginService) {
    }

    ngOnInit() {
        this.userDto = new UserDTO();
    }

    registerUser() {
        this.submitted = true;
        console.log(this.userDto);
        this.loader = false;

        this.loginService.post(this.userDto)
            .subscribe((receivedUser) => {
                    console.log(receivedUser);
                    this.loader = true;
                    this.success = true;
                    this.error = false;
                    setTimeout(() => {
                        this.router.navigate(['login']);
                    }, 2000);
                },
                err => {
                    console.log(err);
                    this.loader = true;
                    this.error = true;
                    this.success = false;
                });
    }
}
