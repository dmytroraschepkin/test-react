import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import apiCall from '../../utils/api';
import { Link } from 'react-router-dom';

export default function Item({ endpoint, titleKey, contentKey }) {
    const params = useParams();
    const { id } = params;

    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        apiCall(`${endpoint}/${id}`).then(result => {
            setItem(result);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return 'Loading...';
    }

    if(!item) {
        return '404';
    }

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{item[titleKey]}</h1>
                <p className="lead">{item[contentKey]}</p>
            </div>
        </div>
    );
}
