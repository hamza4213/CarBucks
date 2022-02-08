import { Alert } from 'react-native';
import { store } from '../redux/store';


export default function api(path, body, method = "GET", token) {
    let options;


    options = {
        headers: {
            "Authorization": `Bearer ${store.getState().auth.token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        method,
    };
    if (body) {
        options.body = JSON.stringify(body)
    }

    return fetch(path, options)
        .then(resp => resp.json())
        .then(json => {
            console.log('-->', method, path, ' ', json?.status,
                '\n', JSON.stringify(body),
                '\n', JSON.stringify(json), '\n__________________\n',
            )

            return json
        })
        .catch(error => {
            if (error.message === 'Network request failed') {
                alert('Network error. Please make sure you are connected to internet.')
            }
            else {
                alert(error.message)
            }
            console.log('-->', method, path, " \u261a \u261a \u261a \u261a \u261a",
                '\nparam:', JSON.stringify(body), '\nError\n------------------\n',
            )
            return false

        });
}