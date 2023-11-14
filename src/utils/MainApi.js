class MainApi {
    constructor(options) {
        this._url = options.baseUrl
    }
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }

    register(name, email, password) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })

            .then(this._checkResponse)
    }

    authorize(email, password) {
        console.log("authorize");
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        
            .then(this._checkResponse)
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    return data;
                }
            })
    }

    getUserInfo(token) {
        return fetch(`${this._url}/users/me`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(this._checkResponse)
    }

    setUserInfo(data, token) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            })
        })
            .then(this._checkResponse)
    }


    getMovie(token) {
        return fetch(`${this._url}/movies`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(this._checkResponse)
    }

    addMovie(data, token) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                year: data.year,
                duration: data.duration,
                description: data.description,
                image: `https://api.nomoreparties.co${data.image.url}`,
                trailerLink: data.trailerLink,
                thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            })
        })
            .then(this._checkResponse)
    }

    deleteMovie(movieId, token) {
        return fetch(`${this._url}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(this._checkResponse)
    }

}

const apiMain = new MainApi({
    //baseUrl: 'http://localhost:3000',
    baseUrl: 'https://api.kurkov.movie.nomoredomainsrocks.ru',
});

export default apiMain

