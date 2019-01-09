/// <reference types="@types/googlemaps" />
import {Component, Input, OnInit, OnChanges, SimpleChanges, NgZone} from '@angular/core';
import Hotel from '../../../model/Hotel';
import {MapsAPILoader} from '@agm/core';


@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
    styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit, OnChanges {
    @Input() hotelList: Hotel[];
    private geocoder: any;
    private lat: Number = 52;
    private lng: Number = 25;

    constructor(public mapsApiLoader: MapsAPILoader, private zone: NgZone) {
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
        this.mapsApiLoader.load().then(() => {
            this.geocoder = new google.maps.Geocoder();
        });
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.hotelList && changes['hotelList']) {
            console.log(this.hotelList);

            this.hotelList.forEach(() => {
                this.geocoder.geocode({
                    'address': 'Avram Iancu 54 Brasov'
                }, (results, status) => {
                    if (status === google.maps.GeocoderStatus.OK) {
                        // decompose the result
                        this.lat = results[0].geometry.location.lat();
                        this.lng = results[0].geometry.location.lng();

                    } else {
                        alert('Sorry, this search produced no results.');
                    }
                });
            });
        }
    }

    toArray(stars: Number) {
        return Array(stars);
    }
}
