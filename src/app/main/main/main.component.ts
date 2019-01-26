import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HotelFinderService} from '../hotel-finder.service';
import Hotel from '../../model/Hotel';
import {GlobalsService} from '../../globals.service';
import {UserServiceService} from '../user-service.service';

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
    public didLoad = true;


    constructor(private router: Router, private hotelFinder: HotelFinderService, private globals: GlobalsService,
                private userService: UserServiceService) {
    }

    ngOnInit() {
        this.userService.sync();
    }

    search() {
        this.didLoad = false;
        if (this.dateInterval.toDate) {
            console.log(this.dateInterval);
            this.calendarOK = true;
            this.hotelFinder.post('room', {
                country: this.auxLocationSearch,
                dateInterval: this.dateInterval
            }).subscribe((rooms: any) => {
                this.didLoad = true;
                this.hotelList = this.getHotelList(rooms.roomList);
                this.globals.setRooms(rooms.roomList);
                this.locationSearch = this.auxLocationSearch;
                this.hotelFound = this.hotelList.length > 0;
            }, ((err) => {
                this.hotelFound = false;
                this.didLoad = true;
            }));
        } else {
            this.calendarOK = false;
        }
    }

    getHotelList(roomList) {
        const hotelList = [];

        roomList.forEach((item) => {
            let ok = true;
            hotelList.forEach((hotel) => {
                if (hotel && item.hotel.id === hotel.id) {
                    ok = false;
                }
            });
            if (ok) {
                hotelList.push(item.hotel);
            }
        });

        return hotelList;
    }

    setDateInterval(dateInterval) {
        this.dateInterval = dateInterval;
    }
}
