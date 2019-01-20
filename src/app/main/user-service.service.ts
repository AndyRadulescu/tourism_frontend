import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserServiceService {

    constructor(private http: HttpClient, private router: Router) {
    }

    post(slug, body) {
        return this.http.post(`http://localhost:8080/api/${slug}`, body, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        });
    }

    sync() {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['login']);
        } else {
            this.http.get(`http://localhost:8080/api/user/sync`, {
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            }).subscribe(() => {
            }, (err) => {
                console.log(err);
                if (err.status === 401) {
                    localStorage.removeItem('token');
                    this.router.navigate(['login']);
                }
            });
        }
    }

    getRooms() {
        return this.http.get(`http://localhost:8080/api/room/`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        });
    }
}
