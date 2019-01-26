import Hotel from './Hotel';

export default interface Room {
    id: String;
    number: String;
    description: String;
    startDate: String;
    endDate: String;
    hotel_id: String;
    hotel: Hotel;
}

export interface RoomObject {
    roomList: Room[];
}
