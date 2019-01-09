import {Component, Input, OnInit, OnChanges, SimpleChanges, NgZone} from '@angular/core';
import Hotel from '../../../model/Hotel';


@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
    styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit, OnChanges {
    @Input() hotelList: Hotel[];

    constructor() {
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
}
