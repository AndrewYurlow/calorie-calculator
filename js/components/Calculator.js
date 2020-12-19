export default class Calculator {
  constructor(form, selectors, resetHandler, getParameters) {
    this._form = form;
    this._selectors = selectors;
    this._submitButton = this._form.querySelector(this._selectors.submitButton);
    this._resetButton = this._form.querySelector(this._selectors.resetButton);
    this._result = document.querySelector(this._selectors.counterResult);
    this._resetHandler = resetHandler;
    this._getParameters = getParameters;
  }
  _calculateCalorieNorm(data) {
    let calorieNorm;
    
    switch (data.gender) {
      case 'male':
        calorieNorm = (10 * data.weight) + (6.25 * data.height) - (5 * data.age) + 5;
        break;
      case 'female':
        calorieNorm = (10 * data.weight) + (6.25 * data.height) - (5 * data.age) - 161;
        break;
    }

    switch(data.activity) {
      case 'min':
        calorieNorm *= 1.2;
        break;
      case 'low':
        calorieNorm *= 1.375;
        break;
      case 'medium':
        calorieNorm *= 1.55;
        break;
      case 'high':
        calorieNorm *= 1.725;
        break;
      case 'max':
        calorieNorm *= 1.9;
        break;
    }
    
    return Math.round(calorieNorm);
  }
  _showResult(normal, minimal, maximal) {
    this._normal = this._result.querySelector(this._selectors.normalCalories);
    this._minimal = this._result.querySelector(this._selectors.minimalCalories);
    this._maximal = this._result.querySelector(this._selectors.maximalCalories);

    this._normal.textContent = normal;
    this._minimal.textContent = minimal;
    this._maximal.textContent = maximal;

    this._result.classList.remove(this._selectors.hiddenResult);
  }
  _hideResult() {
    this._normal = null;
    this._minimal = null;
    this._maximal = null;

    this._result.classList.add(this._selectors.hiddenResult);
  }
  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._physicalParameters = this._getParameters();
      const maintainingWeightCalories = this._calculateCalorieNorm(this._physicalParameters);
      const weightConstant = Math.round(0.15 * maintainingWeightCalories);
      const gainWeightCalories = weightConstant + maintainingWeightCalories;
      const lossWeightCalories = maintainingWeightCalories - weightConstant;
      this._showResult(maintainingWeightCalories, lossWeightCalories, gainWeightCalories);
    });
    this._resetButton.addEventListener('click', () => {
      this._resetHandler();
      this._hideResult();
    });
  }
}