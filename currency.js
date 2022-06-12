class Currency{
    constructor(url){
        this.url = url;
    }

    async getRates(){
        const req = await fetch(this.url);
        const data = await req.json();
        const rates = await data.rates;
        return rates;        
    }

    async getRate(from,to){
        const url = this.url + `?base=${from}`;        
        const req = await fetch(url);
        const data = await req.json();
        console.log(data)
        const rate = await data.rates[to];

        return rate;
    }   
}