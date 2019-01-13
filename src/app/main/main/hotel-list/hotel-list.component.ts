import {Component, Input, OnInit, OnChanges, SimpleChanges, NgZone} from '@angular/core';
import Hotel from '../../../model/Hotel';
import {NavigationExtras, Router} from '@angular/router';


@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
    styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit, OnChanges {
    @Input() hotelList: Hotel[];

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.hotelList && changes['hotelList']) {
            console.log(this.hotelList);
        }
    }

    toArray(stars: Number) {
        return Array(stars);
    }

    linkToDetail(hotel) {
        console.log(hotel);
        const navigationExtras: NavigationExtras = {
            queryParams: {
                'hotel': hotel.id
            }
        };
        this.router.navigate(['detail'], navigationExtras);
    }
}
