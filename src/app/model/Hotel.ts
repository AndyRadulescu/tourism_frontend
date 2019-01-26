import Room from './Room';

export default interface Hotel {
    id: String;
    name: String;
    stars: String;
    phone: String;
    email: String;
    description: String;
    country: String;
    city: String;
    street_address: String;
    image_url: String;
    rooms?: Room[];
}
