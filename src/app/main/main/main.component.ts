import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HotelFinderService} from '../hotel-finder.service';
import Hotel from '../../model/Hotel';
import {GlobalsService} from '../../globals.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    public locationSearch: String = '';
    public auxLocationSearch: String = '';
    public hotelFound = true;
    public hotelList: Hotel[];
    public dateInterval;
    public calendarOK = true;


    constructor(private router: Router, private hotelFinder: HotelFinderService, private globals: GlobalsService) {
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
        if (this.dateInterval.toDate) {
            console.log(this.dateInterval);
            this.calendarOK = true;
            this.hotelFinder.post('hotel', {
                country: this.auxLocationSearch,
                dateInterval: this.dateInterval
            }).subscribe((rooms: any) => {
                this.globals.setRooms(rooms.roomList);
                this.hotelList = this.getHotelList(rooms.roomList);
                this.locationSearch = this.auxLocationSearch;
                this.hotelFound = this.hotelList.length > 0;
            }, ((err) => {
                console.log(err);
                this.hotelFound = false;
            }));
        } else {
            this.calendarOK = false;
        }
    }

    getHotelList(roomList) {
        const hotelList = [];

        roomList.forEach((item) => {
            hotelList.push(item.hotel);
        });

        return hotelList;
    }

    setDateInterval(dateInterval) {
        this.dateInterval = dateInterval;
    }
}
