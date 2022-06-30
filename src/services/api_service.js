class ApiService {
    fetch = (url, options) => {
        let headers = new Headers();

        headers = { 'Authentication': 'web:free' };
        return fetch(url, { headers, ...options })
            .then(this._checkStatus)
            .then(response => {
                return Promise.resolve(response.json());
            });
    };

    fetchGraphQL = (url, options) => {
        let headers = new Headers();
        headers = { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        return fetch(url, { headers, ...options })
            .then(this._checkStatusQL)
            .then(response => {
                return Promise.resolve(response.json());
            });
    };

    _checkStatus = response => {
        if (response.status >= 200 && response.status < 300) {
            return response;
        }

        if (response.status === 401 || response.status === 403) {
            return response;
        }

        const error = new Error(response.statusText);
        error.response = response;
        return error;
    };

    _checkStatusQL = response => {
        if (response.status >= 200 && response.status < 300) {
            return response;
        }

        if (response.status === 401 || response.status === 403) {
            return response;
        }

        const error = new Error(response.statusText);
        error.response = response;
        return error;
    };
}

export default ApiService;
