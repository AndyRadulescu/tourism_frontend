import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GlobalsService} from '../../globals.service';
import {UserServiceService} from './user-service.service';

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
    public takenRoomsID: String[] = [];

    constructor(private route: ActivatedRoute, private globals: GlobalsService, private postService: UserServiceService,
                private router: Router) {
    }

    ngOnInit() {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['login']);
        } else {
            this.rooms = this.globals.getRooms();
            this.route.queryParams.subscribe(params => {
                this.hotelID = params['hotel'];
                this.getHotel();
            });
        }
    }

    getHotel() {
        console.log(this.rooms);
        this.rooms.forEach((room) => {
            if (room.hotel.id === this.hotelID) {
                room.taken = false;
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

    onTakeRoom(room) {
        if (!room.taken) {
            room.taken = true;
            this.takenRoomsID.push(room.id);
            console.log(this.takenRoomsID);
        } else {
            room.taken = false;
            this.takenRoomsID.splice(this.takenRoomsID.indexOf(room.id), 1);
            console.log(this.takenRoomsID);
        }
    }

    buyRooms() {
        this.postService.post('user/rooms', {rooms: this.rooms}).subscribe(() => {
            alert('Successfully bought!');
        });
    }
}
