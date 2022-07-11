const text = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const euroRate = 4.7958;
const usdRate  = 4.7417;
const currencyOptions = Array.from(document.querySelectorAll(['[name="filter"]']));


const filters = {
    euro(number) {
       currency = number / euroRate;
       return `${currency} euro`;
    },
    usd(number) {
       currency = number / usdRate;
        return `${currency} USD`;
    }

}

function currencyExchange(text) {
    
    const filter = currencyOptions.find(input => input.checked).value;
    text = Array.of(text);
    const mod = text.map(filters[filter]);
    result.textContent = mod.join('');
}

  
text.addEventListener('input', e => currencyExchange(e.target.value));


currencyOptions.forEach(input =>
    input.addEventListener('input', () => {
        currencyExchange(textarea.value);
    })
  );
