import Item from './partials/Item';

export default function House()  {
    return (
        <Item
            endpoint="rooms"
            titleKey="id"
            contentKey="room_number"
        />
    );
}
