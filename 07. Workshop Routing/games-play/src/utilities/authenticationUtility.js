export const getAccessToken = () => {
    const authenticationJSON = localStorage.getItem('auth');
    
    if (authenticationJSON == null || authenticationJSON == 'null') {
        return '';
    }

    const authenticationData = JSON.parse(authenticationJSON);
    return authenticationData.accessToken;
}
