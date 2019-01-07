import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HotelFinderService} from '../hotel-finder.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    constructor(private router: Router, private hotelFinder: HotelFinderService) {
    }

    public locationSearch: String = '';
    public auxLocationSearch: String = '';
    public hotelFound: boolean = true;

    ngOnInit() {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['login']);
        }
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }

    search() {
        console.log(this.locationSearch);
        this.hotelFinder.post(this.auxLocationSearch).subscribe((hotels: any) => {
            console.log(hotels);
            this.locationSearch = this.auxLocationSearch;
            this.hotelFound = hotels.hotelList.length > 0;
        });
    }
}
