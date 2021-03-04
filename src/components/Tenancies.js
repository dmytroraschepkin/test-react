import List from './partials/List';

export default function Rooms() {
    return (
        <List endpoint="tenancies" contentKey="name" route="tenancy" />
    );
}
