const to = document.getElementById("to");
const from = document.getElementById("from");
const amount = document.getElementById("amount");
let result = document.getElementById("result");

const curr = new Currency("https://api.exchangerate.host/latest");

document.addEventListener("DOMContentLoaded", () => {
    curr.getRates().then(rates => {
        for (const rate in rates){
            to.innerHTML += `<option>${rate}</option>`
            from.innerHTML += `<option>${rate}</option>`
        }
        from.value = "USD";
        to.value = "TRY";
    })
})

amount.addEventListener("input",() => {
    curr.getRate(from.value,to.value).then(rate => result.value = rate*(Number(amount.value)))
})


