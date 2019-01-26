import {Component, OnInit} from '@angular/core';
import {UserServiceService} from '../user-service.service';
import Room, {RoomObject} from '../../model/Room';

@Component({
    selector: 'app-aboutme',
    templateUrl: './aboutme.component.html',
    styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

    public hasRooms = false;
    public didLoad = false;
    public roomsArray: Room[];

    constructor(private userService: UserServiceService) {
    }

    ngOnInit() {
        this.userService.sync();
        this.userService.getRooms().subscribe((rooms: RoomObject) => {
            console.log(rooms);
            this.roomsArray = rooms.roomList;
            this.hasRooms = !!rooms;
            this.didLoad = true;
        }, (e) => {
            this.didLoad = true;
        });
    }


}
