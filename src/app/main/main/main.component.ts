import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HotelFinderService} from '../hotel-finder.service';
import Hotel from '../../model/Hotel';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    public locationSearch: String = '';
    public auxLocationSearch: String = '';
    public hotelFound: boolean = true;
    public hotelList: Hotel[];


    constructor(private router: Router, private hotelFinder: HotelFinderService) {
    }

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
            this.hotelList = hotels.hotelList;
            this.locationSearch = this.auxLocationSearch;
            this.hotelFound = hotels.hotelList.length > 0;
        });
    }
}
