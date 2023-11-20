'use strict';

// Default hourly rate is EUR
// TODO: optimise edge cases
const url = 'https://open.er-api.com/v6/latest/EUR';
let result;
let rateEUR;
let rateUSD;
let rateGBP;
let updateTime;

let hourlyRate;
let totalHours;
let currency;
let rateInput;
let currencySymbol;

const btnEL = document.querySelector('.btnGen');

const quoteCal = function () {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            result = data.result;
            rateEUR = data.rates.EUR.toFixed(2);
            rateUSD = data.rates.USD.toFixed(2);
            rateGBP = data.rates.GBP.toFixed(2);
            updateTime = data.time_last_update_utc;

            // API Data Test
            console.log(`Fetch result: ${result}`);
            console.log(`Data update time: ${updateTime}`);
            console.log(`EUR rate: ${rateEUR}`);
            console.log(`USD rate: ${rateUSD}`);
            console.log(`GBP rate: ${rateGBP}`);

            hourlyRate = document.getElementById('hourlyRate').value;
            totalHours = document.getElementById('totalHours').value - 1;
            currency = document.getElementById('currency').value;

            if (currency === 'eur') {
                rateInput = rateEUR;
                currencySymbol = 'EUR';
            } else if (currency === 'usd') {
                rateInput = rateUSD;
                currencySymbol = 'USD';
            } else if (currency === 'gbp') {
                rateInput = rateGBP;
                currencySymbol = 'GBP';
            }

            const totalCost = `The overall project cost is ${(
                hourlyRate *
                totalHours *
                rateInput
            ).toFixed(2)} ${currencySymbol}.`;
            console.log(totalCost);

            window.alert(totalCost);
        });
};

btnEL.addEventListener('click', function () {
    quoteCal();
});
