import { useContext } from "react";

import { loginRequest, registerRequest, logoutRequest } from "../services/authentication-api";
import { AuthenticationContext } from "../contexts/AuthenticationContext";


export const useLogin = () => {
    const { changeAuthenticationState } = useContext(AuthenticationContext);

    const loginHandler = async (email, password) => {
        try {
            const { password: passwordReceived, ...authenticationData } = await loginRequest(email, password);
            //console.log(authenticationData);
            changeAuthenticationState(authenticationData);

            return authenticationData;
        } catch (error) {
            console.log(error.message);
        }
    }

    return loginHandler;
};

export const useRegister = () => {
    const { changeAuthenticationState } = useContext(AuthenticationContext);

    const registerHandler = async (email, password) => {
        // try {
        //     const authenticationData = await registerRequest(email, password);
        //     //console.log(authenticationData);
        //     changeAuthenticationState(authenticationData);

        //     return authenticationData;
        // } catch (error) {
        //     console.log(error.message);
        // }

        const { password: passwordReceived, ...authenticationData } = await registerRequest(email, password);
        //console.log(authenticationData);
        changeAuthenticationState(authenticationData);

        return authenticationData;
    }

    return registerHandler;
};

export const useLogout = () => {
    const { logoutFunction } = useContext(AuthenticationContext);

    const logoutHandler = async () => {
        await logoutRequest();
        logoutFunction();
    }

    return logoutHandler;
}
