const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const inputCurrencyValueToConverter = document.querySelector(".currency-value-to-convert") // valor a converter//
    const inputCurrencyValueConverted = document.querySelector(".currency-value") // valor a ser convertido//

    const dolarToday = 4.98;
    const euroToday = 5.84;

    if(currencySelect.value == "dolar"){  // se o select estiver selecionado o valor de dolar entra aqui //
        inputCurrencyValueConverted.innerHTML=  new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);     
    }

    if(currencySelect.value == "euro"){  // se o select estiver selecionado o valor de euro entra aqui //
        inputCurrencyValueConverted.innerHTML=  new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }


    inputCurrencyValueToConverter.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

    
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar"){
      currencyName.innerHTML = "Dolar Americano"
      currencyImage.src = "./assets/dolar.png"

    }
    if (currencySelect.value == "euro"){
      currencyName.innerHTML = "Euro"
      currencyImage.src = "./assets/euro.png"

    }

    convertValues()

}

 currencySelect.addEventListener("change", changeCurrency)
 convertButton.addEventListener("click", convertValues);
