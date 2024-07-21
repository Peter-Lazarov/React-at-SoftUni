export default async function get(url){
    const options = {};
    options.method = 'GET';

    const response = await fetch(url, options);
    const result = response.json();

    return result;
}

export async function post(url, data){
    const options = {};
    options.method = 'POST';

    options.headers = {
        'Content-Type': 'application/json'
    };

    options.body = JSON.stringify(data);

    const response = await fetch(url, options);
    const result = response.json();

    return result;
}
