import List from './partials/List';

export default function Rooms() {
    return (
        <List endpoint="rooms" contentKey="room_number" route="room" />
    );
}
