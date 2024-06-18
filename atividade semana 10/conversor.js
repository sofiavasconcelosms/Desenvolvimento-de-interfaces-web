document.getElementById('convert').addEventListener('click', function() {
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('from').value;
    var toCurrency = document.getElementById('to').value;
    
    // Simulação de taxa de câmbio
    var exchangeRates = {
        BRL: 1, // 1 BRL = 1 BRL
        US: 0.19, // 1 BRL = 0.19 USD
        EUR: 0.15, // 1 BRL = 0.15 EUR
        AR: 171.62, // 1 BRL = 171.62 AR
        sul_coreano: 265.88, // 1 BRL = 265.88
        JP: 30.23 // 1 BRL = 30.23 JP
    };
  
    var resultado = amount * exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    document.getElementById('resultado').innerText = `Valor convertido: ${resultado.toFixed(2)} ${toCurrency}`;
});
