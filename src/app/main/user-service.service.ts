import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserServiceService {

    constructor(private http: HttpClient) {
    }

    post(slug, body) {
        return this.http.post(`http://localhost:8080/api/${slug}`, body, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        });
    }

    sync() {
        return this.http.get(`http://localhost:8080/api/user/sync`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        });
    }
}
