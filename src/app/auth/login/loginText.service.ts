import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginTextService {

    private messageSource = new BehaviorSubject(false);
    currentMessage = this.messageSource.asObservable();

    constructor() {
    }

    changeMessage(isLoggedIn: boolean) {
        this.messageSource.next(isLoggedIn);
    }
}
