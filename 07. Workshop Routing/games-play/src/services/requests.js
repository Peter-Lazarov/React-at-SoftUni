async function get(url){
    const options = {};
    options.method = 'GET';

    const response = await fetch(url, options);
    const result = response.json();
    
    return result;
}

async function post(url, data){
    const options = {};
    options.method = 'POST';

    options.headers = {
        'Content-Type': 'application/json'
    };

    const accessToken = localStorage.getItem('accessToken');
    if(accessToken){
        options.headers['X-Authorization'] = accessToken;
    }

    options.body = JSON.stringify(data);
    
    const response = await fetch(url, options);
    const result = await response.json();
    
    if (!response.ok) {
        // console.log('here in result');
        // console.log(result);
        throw result;
    }

    return result;
}

export default {
    get,
    post
};
