import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HotelFinderService {

    constructor(private http: HttpClient) {
    }

    post(location) {
        return this.http.post('http://localhost:8000/api/hotel', {country: location});
    }
}
