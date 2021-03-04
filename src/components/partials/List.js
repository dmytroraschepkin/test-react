import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import apiCall from '../../utils/api';

export default function List({ endpoint, contentKey, route }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        apiCall(endpoint)
            .then(data => {
                setItems(data);
            });
    }, []);
    return (
        <div className="row">
            {items.map(item => (
                <div className="col-md-4" key={item.id}>
                    <div className="card mb-4 box-shadow">
                        <div className="card-body">
                            <p className="card-text">{item[contentKey]}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <Link
                                        type="button"
                                        className="btn btn-sm btn-outline-secondary"
                                        to={`/${route}/${item.id}`}
                                    >View</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
