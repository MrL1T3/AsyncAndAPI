import conversionHandler from "./convert";

function printElements(conversion_rate, currency) {
  const inputCash = document.querySelector('#starting-amount').value;
  const finalValue = inputCash * conversion_rate;
  document.querySelector('#response-area').innerText = "The conversion of " + inputCash + " USD to " + currency + " is " + finalValue.toFixed(2);
}

window.addEventListener("load", function() {
  let formElement = document.querySelector('form');
  if(formElement) {
    formElement.addEventListener("submit", handleFormSubmission);
  }
  const submitButton = this.document.getElementById('submit-button');
  const currencyCode = document.getElementById('iso-code');
  submitButton.addEventListener("click", function() {
    conversionHandler.getConversion(currencyCode.value, printElements);
  });
});