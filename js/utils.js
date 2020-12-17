const validatorSelectors = {
  submitButton: '.form__submit-button',
  resetButton: '.form__reset-button',
  physicalParameters: '.form__parameters',
  formItem: '.form__item',
  input: 'input',
  inputError: 'input__wrapper_error'
}

const calculatorSelectors = {
  submitButton: '.form__submit-button',
  resetButton: '.form__reset-button',
}

const calorieCounter = document.querySelector('.form');

export { validatorSelectors, calorieCounter, calculatorSelectors }
