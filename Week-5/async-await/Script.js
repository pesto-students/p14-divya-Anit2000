let exchangeApi = {};
Object.defineProperties(exchangeApi, {
    key: {
        value: "dmq9nDrxPpI8JAaACFEMptQ2fhAKZJH9",
        writable: false
    },
    url: {
        value: "https://api.apilayer.com/exchangerates_data/latest",
        writable: false
    }
})
async function getExchangeRate(currency) {
    let url = `${exchangeApi.url}?symbols=${currency}&base=EUR`;
    try {
        const data = await fetch(url, {
            method: 'GET',
            headers: {
                apikey: exchangeApi.key
            }
        }).then(res => res.json());
        if (data.success) console.log(data.rates);
        return console.log(null);
    } catch ({ ...error }) {
        let { message } = { ...error };
        console.log(message)
    }
}


getExchangeRate("jdhsfjh");
getExchangeRate("USD");
