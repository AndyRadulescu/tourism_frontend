import {Component, OnInit} from '@angular/core';
import {UserServiceService} from '../user-service.service';

@Component({
    selector: 'app-aboutme',
    templateUrl: './aboutme.component.html',
    styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

    constructor(private userService: UserServiceService) {
    }

    ngOnInit() {
        this.userService.sync();
        this.userService.getRooms().subscribe(rooms => {
            console.log(rooms);
        });
    }

}
