const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    const dolarToday = 5.2
    const euroToday= 6.2
    const libraToday= 7.3
    
    console.log(currencySelect.value)
  


       if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputCurrencyValue / dolarToday)
       }
  
       if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML= new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyValue / euroToday) 
      
      
      if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML= new Intl.NumberFormat("en-GB",{
          style:"currency",
          currrency:"GBP"
        }).format(inputCurrencyValue / libraToday)
      }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
          style:"currency",
          currency:"BRL"
      }).format(inputCurrencyValue)

       }
    

    currencyName.innerHTML = "Euro"
    currencyImage.src = "./euro-moeda-amarela.png"

  }

if(currencySelect.value =="libra"){
  currencyName.innerHTML = "Libra"
  currencyImage.src = "./libra 1.png"
}



convertValues()



currencySelect.addEventListener("change", changeCurrency )
convertButton.addEventListener("click", convertValues)