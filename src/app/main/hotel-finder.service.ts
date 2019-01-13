import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HotelFinderService {

    constructor(private http: HttpClient) {
    }

    post(slug, body) {
        return this.http.post(`http://localhost:8080/api/${slug}`, body);
    }
}
