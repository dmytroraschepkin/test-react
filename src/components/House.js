import Item from './partials/Item';

export default function House()  {
    return (
        <Item
            endpoint="houses"
            titleKey="id"
            contentKey="address"
        />
    );
}
