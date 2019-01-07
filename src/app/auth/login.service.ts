import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) {
    }

    post(userDto) {
        return this.http.post('http://localhost:8000/api/user', userDto);
    }
}
