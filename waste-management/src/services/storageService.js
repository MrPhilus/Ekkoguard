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
        this.#saveItemIfProvided("userName", authData.userName, expirationTime);
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
        _removeTokenFromStorage("userName");
    }

    clearCookieData() {
        _removeTokenFromStorage("accessToken");
        _removeTokenFromStorage("userName");
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
            userName: _getTokenFromStorage("userName"),
        }
    }
}