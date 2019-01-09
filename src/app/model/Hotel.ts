import Room from './Room';

export default class Hotel {
    private _id: String;
    private _name: String;
    private _stars: String;
    private _phone: String;
    private _email: String;
    private _country: String;
    private _city: String;
    private _street_address: String;
    private _image_url: String;
    private _rooms: Room[];

    constructor(id?: String, name?: String, stars?: String, phone?: String, email?: String, country?: String, city?: String,
                street_address?: String, image_url?: String, rooms?: Room[]) {
        this._id = id;
        this._name = name;
        this._stars = stars;
        this._phone = phone;
        this._email = email;
        this._country = country;
        this._city = city;
        this._street_address = street_address;
        this._image_url = image_url;
        this._rooms = rooms;
    }

    get id(): String {
        return this._id;
    }

    set id(value: String) {
        this._id = value;
    }

    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }

    get stars(): String {
        return this._stars;
    }

    set stars(value: String) {
        this._stars = value;
    }

    get phone(): String {
        return this._phone;
    }

    set phone(value: String) {
        this._phone = value;
    }

    get email(): String {
        return this._email;
    }

    set email(value: String) {
        this._email = value;
    }

    get country(): String {
        return this._country;
    }

    set country(value: String) {
        this._country = value;
    }

    get city(): String {
        return this._city;
    }

    set city(value: String) {
        this._city = value;
    }

    get street_address(): String {
        return this._street_address;
    }

    set street_address(value: String) {
        this._street_address = value;
    }

    get image_url(): String {
        return this._image_url;
    }

    set image_url(value: String) {
        this._image_url = value;
    }

    get rooms(): Room[] {
        return this._rooms;
    }

    set rooms(value: Room[]) {
        this._rooms = value;
    }
}
