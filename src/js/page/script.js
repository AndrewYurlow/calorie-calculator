import Validator from "../components/Validator.js";
import Calculator from "../components/Calculator.js";
import UserParameters from "../components/UserParameters.js";
import { 
  validatorSelectors, 
  calorieCounter, 
  calculatorSelectors,
  userParametersSelectors 
} from "../utils/utils.js";
import "../../style/style.css";

const validator = new Validator(calorieCounter, validatorSelectors);
const userData = new UserParameters(calorieCounter, userParametersSelectors);
const calculator = new Calculator(
  calorieCounter, 
  calculatorSelectors,
  function () {
    validator.clearValidation();
  },
  function () {
    return userData.getUserParameters();
  }
);
validator.enableValidation();
calculator.setEventListeners();