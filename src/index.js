import conversionHandler from "./convert";

window.addEventListener("load", function() {
  let formElem = document.querySelector('form');
  if(formElem) {
    formElem.addEventListener("submit", handleFormSubmission);
  }
  const convertButton = this.document.getElementById('submit-button');
  const currencyCode = document.getElementById('iso-code');
  convertButton.addEventListener("click", function() {
    convertHandler.getConversion(currencyCode.value, printElements);
  });
});