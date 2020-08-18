
function CreateAxios() {
    // eslint-disable-next-line no-undef
    var instance = axios.create({
        baseURL: 'https://127.0.0.1/ibs/',
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar'}
    });
    return instance;
}