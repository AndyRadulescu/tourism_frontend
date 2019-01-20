import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginTextService} from '../../../auth/login/loginText.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public collapsed = true;
    public isLoggedIn: boolean;
    public loginOrLogout: String;

    constructor(private router: Router, private loginTextService: LoginTextService) {
    }

    ngOnInit() {
        this.isLoggedIn = !!window.localStorage.getItem('token');
        this.loginTextService.changeMessage(this.isLoggedIn);
        this.isLoggedInLoggedOutText();
        this.loginTextService.currentMessage.subscribe(message => {
            this.isLoggedIn = message;
            this.isLoggedInLoggedOutText();
        });

    }

    isLoggedInLoggedOutText() {
        this.loginOrLogout = this.isLoggedIn ? 'Logout' : 'Login';
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
    }

    logout() {
        localStorage.removeItem('token');
        this.isLoggedIn = false;
        this.router.navigate(['login']);
    }
}
