import { jwtDecode as decode } from 'jwt-decode';

const JWT = 'auth_token_id';

// get and set token methods
const setToken = token => {
    localStorage.setItem(JWT, token);
};

const getToken = token => {
    return localStorage.getItem(JWT);
};

// Login method
const isLogin = () => {
    const jwToken = getToken();
    return !!jwToken && !isTokenExpired(jwToken);
};

// Login expired method
const isTokenExpired = token => {
    try {
        const _info = decode(token);
        return _info.exp < Date.now() / 1000;
    } catch (error) {
        return false;
    }
};

// Retrieve user information
const getUser = () => {
    const jwToken = getToken();
    if (isLogin()) {
        const user = decode(jwToken);
        return user;
    } else {
        return null;
    }
};

// Logout method
const logout = () => {
    localStorage.removeItem(JWT);
};

export default {
    setToken,
    getToken,
    getUser,
    isLogin,
    logout
};
