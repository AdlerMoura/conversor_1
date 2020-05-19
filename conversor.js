function botao(){
    var conversor, temperaturaFahrenheit, temperaturaCelsius, temperaturaKelvin

    conversor = prompt("Digite a conversão que deseja: ")
    switch(conversor) {
        case "1":
            temperaturaFahrenheit = prompt("Digite uma temperatura em Fahrenheit: ")
            temperaturaCelsius = (parseFloat(temperaturaFahrenheit) - 32) * 5 / 9
            temperatura = alert("A temperatura em Celsius será: " + temperaturaCelsius)
            break;
        case "2":
            temperaturaCelsius = prompt("Digite uma temperatura em Celsius: ")
            temperaturaFahrenheit = (parseFloat(temperaturaCelsius) * 9 / 5) + 32
            temperatura = alert("A temperatura em Fahrenheit será: " + temperaturaFahrenheit)
            break;
        case "3":
            temperaturaCelsius = prompt("Digite uma temperatura em Celsius: ")
            temperaturaKelvin = parseFloat(temperaturaCelsius) + 273
            temperatura = alert("A temperatura em Kelvin será: " + temperaturaKelvin)
            break;
        case "4":
            temperaturaKelvin = prompt("Digite uma temperatura em Kelvin: ")
            temperaturaCelsius = parseFloat(temperaturaKelvin) - 273
            temperatura = alert("A temperatura em Celsius será: " + temperaturaCelsius)
            break;
        case "5":
            temperaturaFahrenheit = prompt("Digite uma temperatura em Fahrenheit: ")
            temperaturaKelvin = ((parseFloat(temperaturaFahrenheit) * 5) / 9) + 273
            temperatura = alert("A temperatura em Kelvin será: " + temperaturaKelvin)
            break;
        case "6":
            temperaturaKelvin = prompt("Digite uma temperatura em Kelvin: ")
            temperaturaFahrenheit = ((parseFloat(temperaturaKelvin) * 9) / 5) + 32
            temperatura = alert("A temperatura em Fahrenheit será: " + temperaturaFahrenheit)
            break;
        default:
            alert("Conversão não existente, por favor digite uma opção válida.")
            break;
    }
}