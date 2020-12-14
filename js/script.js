import Validator from "./Validator.js";
import { selectors, calorieCounter } from "./utils.js";

const validator = new Validator(calorieCounter, selectors);
validator.enableValidation();