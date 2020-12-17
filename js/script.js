import Validator from "./Validator.js";
import Calculator from "./Calculator.js";
import { validatorSelectors, calorieCounter, calculatorSelectors } from "./utils.js";

const validator = new Validator(calorieCounter, validatorSelectors);
const calculator = new Calculator(
  calorieCounter, 
  calculatorSelectors,
  function () {
    validator.clearValidation();
  });
validator.enableValidation();
calculator.setEventListeners();