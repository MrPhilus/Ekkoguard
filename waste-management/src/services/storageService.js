import {
    _getTokenFromStorage,
    _removeTokenFromStorage,
    _setTokenToStorage
} from "../utils";

export default class StorageService {
    #milliSecondsInDays = 86400000;

    saveAuthData(authData) {
        // this.#saveItemIfProvided("access_token", authData.accessToken, Number(authData.expires_in) / this.#milliSecondsInDays);
        const expirationTime = new Date(authData.expires_in * 1000);
        this.#saveItemIfProvided("accessToken", authData.accessToken, expirationTime);
        this.#saveItemIfProvided("userId", authData.id, expirationTime);
        this.#saveItemIfProvided("firstName", authData.firstName, expirationTime)
        this.#saveItemIfProvided("lastName", authData.lastName, expirationTime)
        this.#saveItemIfProvided("email", authData.email, expirationTime)
        this.#saveItemIfProvided("address", authData.address, expirationTime)
        this.#saveItemIfProvided("loginDate", authData.loginDate, expirationTime)
    }

    #saveItemIfProvided(key, value, expiresAt) {
        if (value && expiresAt) {
            _setTokenToStorage(key, value, expiresAt);
        }
        else if (value) {
            _setTokenToStorage(key, value);
        }
    }

    clearAuthData() {
        _removeTokenFromStorage("accessToken");
        _removeTokenFromStorage("userId");
        _removeTokenFromStorage("firstName");
        _removeTokenFromStorage("lastName");
        _removeTokenFromStorage("email");
        _removeTokenFromStorage("address");
        _removeTokenFromStorage("loginDate");
    }

    clearCookieData() {
        _removeTokenFromStorage("accessToken");
        _removeTokenFromStorage("userId");
        _removeTokenFromStorage("firstName");
        _removeTokenFromStorage("lastName");
        _removeTokenFromStorage("email");
        _removeTokenFromStorage("address");
        _removeTokenFromStorage("loginDate");
    }

    set(key, value) {
        this.#saveItemIfProvided(key, value)
    }

    get(key) {
        return _getTokenFromStorage(key)
    }

    remove(key) {
        return _removeTokenFromStorage(key)
    }

    getAuthData() {
        return {
            accessToken: _getTokenFromStorage("accessToken"),
            userId: _getTokenFromStorage("userId"),
            firstName: _getTokenFromStorage("firstName"),
            lastName: _getTokenFromStorage("lastName"),
            email: _getTokenFromStorage("email"),
            address: _getTokenFromStorage("address"),
            loginDate: _getTokenFromStorage("loginDate"),
        }
    }
}