export default class UserParameters {
  constructor(form, selectors) {
    this._form = form;
    this._selectors = selectors;
  }
  _getGenderValue() {
    this._switcher = this._form.querySelector(this._selectors.genderSwitcher);
    this._genders = Array.from(this._switcher.querySelectorAll(this._selectors.genderItem));
    this._chosenGender = this._genders.find(item => item.checked).value;
    return this._chosenGender;
  }
  _getActivityLevel() {
    this._activitySwitcher = this._form.querySelector(this._selectors.activitySwitcher);
    this._activityLevels = Array.from(this._activitySwitcher.querySelectorAll(this._selectors.activityLevel));
    this._chosenActivityLevel = this._activityLevels.find(item => item.checked).value;
    return this._chosenActivityLevel;
  }
  getUserParameters() {
    const data = {};
    data.gender = this._getGenderValue();
    data.age = Number.parseInt(this._form.querySelector(this._selectors.age).value);
    data.height = Number.parseInt(this._form.querySelector(this._selectors.height).value);
    data.weight = Number.parseInt(this._form.querySelector(this._selectors.weight).value);
    data.activity = this._getActivityLevel();
    return data;
  }
}