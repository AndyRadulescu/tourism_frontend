import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {HotelFinderService} from '../../hotel-finder.service';

@Component({
    selector: 'app-date-picker',
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

    hoveredDate: NgbDate;

    fromDate: NgbDate;
    toDate: NgbDate;
    @Output() dateInterval = new EventEmitter<Object>();

    constructor(private ngbCalendar: NgbCalendar, private hotelFinder: HotelFinderService) {
    }

    ngOnInit(): void {
        this.fromDate = this.ngbCalendar.getToday();
        this.toDate = this.ngbCalendar.getNext(this.ngbCalendar.getToday(), 'd', 10);
        console.log(this.fromDate);
        this.dateInterval.emit({fromDate: this.fromDate, toDate: this.toDate});
    }

    onDateSelection(date: NgbDate) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
        } else {
            this.toDate = null;
            this.fromDate = date;
        }
        this.dateInterval.emit({fromDate: this.fromDate, toDate: this.toDate});
    }

    isHovered(date: NgbDate) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    }

    isInside(date: NgbDate) {
        return date.after(this.fromDate) && date.before(this.toDate);
    }

    isRange(date: NgbDate) {
        return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
    }


}
