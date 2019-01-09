export default class Room {
    private _id: String;
    private _number: String;
    private _description: String;
    private _startDate: String;
    private _endDate: String;


    constructor(id?: String, number?: String, description?: String, startDate?: String, endDate?: String) {
        this._id = id;
        this._number = number;
        this._description = description;
        this._startDate = startDate;
        this._endDate = endDate;
    }


    get id(): String {
        return this._id;
    }

    set id(value: String) {
        this._id = value;
    }

    get number(): String {
        return this._number;
    }

    set number(value: String) {
        this._number = value;
    }

    get description(): String {
        return this._description;
    }

    set description(value: String) {
        this._description = value;
    }

    get startDate(): String {
        return this._startDate;
    }

    set startDate(value: String) {
        this._startDate = value;
    }

    get endDate(): String {
        return this._endDate;
    }

    set endDate(value: String) {
        this._endDate = value;
    }
}
