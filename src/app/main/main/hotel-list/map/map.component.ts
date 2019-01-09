/// <reference types="@types/googlemaps" />
import {Component, Input, NgZone, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import Hotel from '../../../../model/Hotel';
import {MapsAPILoader} from '@agm/core';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {

    @Input() public hotel: Hotel;
    private geocoder: any;
    public lat: Number;
    public lng: Number;

    constructor(public mapsApiLoader: MapsAPILoader, private zone: NgZone) {
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
            this.geocoder = new google.maps.Geocoder();
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['hotel']) {
            console.log(this.hotel);
            this.geocoder.geocode({
                'address': `${this.hotel.street_address}, ${this.hotel.city}`
            }, (results, status) => {
                if (status === google.maps.GeocoderStatus.OK) {
                    // decompose the result
                    this.lat = results[0].geometry.location.lat();
                    this.lng = results[0].geometry.location.lng();

                } else {
                    alert('Sorry, this search produced no results.');
                }
            });
        }
    }
}
