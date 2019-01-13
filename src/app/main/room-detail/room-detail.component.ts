import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import Hotel from '../../model/Hotel';
import {GlobalsService} from '../../globals.service';

@Component({
    selector: 'app-room-detail',
    templateUrl: './room-detail.component.html',
    styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit {

    public hotel: Hotel;

    constructor(private route: ActivatedRoute, private globals: GlobalsService) {
    }

    ngOnInit() {
        console.log(this.globals.getRooms());
        this.route.queryParams.subscribe(params => {
            this.hotel = params['hotel'];

            console.log(params['hotel']);
        });
    }

}
