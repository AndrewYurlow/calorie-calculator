const validatorSelectors = {
  submitButton: '.form__submit-button',
  resetButton: '.form__reset-button',
  physicalParameters: '.form__parameters',
  formItem: '.form__item',
  input: 'input',
  inputError: 'input__wrapper_error'
}

const calculatorSelectors = {
  submitButton: validatorSelectors.submitButton,
  resetButton: validatorSelectors.resetButton,
  counterResult: '.counter__result',
  normalCalories: '#calories-norm',
  minimalCalories: '#calories-minimal',
  maximalCalories: '#calories-maximal',
  hiddenResult: 'counter__result--hidden'
}

const userParametersSelectors = {
  genderSwitcher: '.switcher',
  genderItem: '.switcher__item input',
  age: '#age',
  height: '#height',
  weight: '#weight',
  activitySwitcher: '.radios-group',
  activityLevel: '.radio__wrapper input'
}

const calorieCounter = document.querySelector('.form');

export { validatorSelectors, calorieCounter, calculatorSelectors, userParametersSelectors }
