export default class conversionHandler {
  static getConversion(currency, handleResponse) {
    let request = new XMLHttpRequest();
    const url = "https://v6.exchangerate-api.com/v6/" + process.env.API_KEY + "/pair/USD/" + currency;
  }
}