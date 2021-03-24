const storeApi = {
    get: () => {
        return fetch("/storeLocation.json").then(res => res.json());
    }
}

export default storeApi;