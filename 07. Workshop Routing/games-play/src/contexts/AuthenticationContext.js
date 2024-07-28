import { createContext } from "react";

export const AuthenticationContext = createContext({
    email: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthenticationState: (authenticationState = {}) => null
});

