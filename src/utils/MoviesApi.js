export class MoviesApi {
    constructor(options) {
        this._url = options.baseUrl
    }
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }

    getMovie() {
        return fetch(`${this._url}/beatfilm-movies`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        }).then(this._checkResponse)
            .catch((error) => console.error(`Ошибка при загрузки фильмов ${error}`));
    }
}


const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co',
});

export default moviesApi;
