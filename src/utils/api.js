import { API_HOST, TOKEN } from '../constants';

export default function apiCall(uri) {
    return fetch(
    `${API_HOST}/${uri}/`,
    {
            headers: {
                'Authorization': `Token ${TOKEN}`
            }
        }
    )
        .then((response) => {
            return response.json();
        });
}
