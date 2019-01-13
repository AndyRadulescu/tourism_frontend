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

    public hotelID: String;
    public rooms = [];
    public actualRoomList = [];
    public actualHotel;

    constructor(private route: ActivatedRoute, private globals: GlobalsService) {
    }

    ngOnInit() {
        this.rooms = this.globals.getRooms();
        this.route.queryParams.subscribe(params => {
            this.hotelID = params['hotel'];
            this.getHotel();
        });
    }

    getHotel() {
        console.log(this.rooms);
        this.rooms.forEach((room) => {
            if (room.hotel.id === this.hotelID) {
                this.actualRoomList.push(room);
            }
        });

        this.actualHotel = this.actualRoomList[0].hotel;
        console.log(this.actualHotel);
        console.log(this.actualRoomList);
    }

    toArray(stars: String) {
        return Array(stars);
    }
}
