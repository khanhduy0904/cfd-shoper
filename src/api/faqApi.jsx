

    const faqApi = {
        get: () => {
            return fetch("/faq.json").then(res => res.json());
        }
    }
    


export default faqApi;