import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public collapsed = true;
    public isLoggedIn: boolean;
    public loginOrLogout: String;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.isLoggedIn = !!window.localStorage.getItem('token');
        console.log(this.isLoggedIn);
        this.isLoggedInLoggedOutText();
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
