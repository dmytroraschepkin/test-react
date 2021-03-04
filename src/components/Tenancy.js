import Item from './partials/Item';

export default function House()  {
    return (
        <Item
            endpoint="tenancies"
            titleKey="id"
            contentKey="name"
        />
    );
}
