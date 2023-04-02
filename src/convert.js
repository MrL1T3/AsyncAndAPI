export default class conversionHandler {
  static getConversion(currency, handleResponse) {
    let request = new XMLHttpRequest();
    const url = "https://v6.exchangerate-api.com/v6/" + process.env.API_KEY + "/pair/USD/" + currency;

    request.addEventListener("loadend", function(){ 
      const apiResponse = JSON.parse(this.responseText)
      if (this.status === 200) {
        handleResponse(apiResponse.conversion_rate, currency);
      }
      else if (this.status === 400){
        document.querySelector('#api-error').innerText = "400 error, bad API request"
      }
      else if (this.status === 401){
        document.querySelector('#api-error').innerText = "401 error, unauthorized access"
      }
      else if (this.status === 403){
        document.querySelector('#api-error').innerText = "403 error, forbidden to access"
      }
      else if (this.status === 404){
        document.querySelector('#api-error').innerText = "400 error, resource cannot be found"
      }
      else if (this.status === 500){
        document.querySelector('#api-error').innerText = "500 error, internal server issue"
      }
    });
    request.open('GET', url);
    request.send();
  }
}