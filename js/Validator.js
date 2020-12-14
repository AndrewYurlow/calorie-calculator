export default class Validator {
  constructor(form, selectors) {
    this._form = form;
    this._selectors = selectors
    this._submitButton = this._form.querySelector(this._selectors.submitButton);
    this._resetButton = this._form.querySelector(this._selectors.resetButton);
    this._parameters = this._form.querySelector(this._selectors.physicalParameters);
    this._inputs = this._parameters.querySelectorAll(this._selectors.input);
    this._formFields = this._form.querySelectorAll(this._selectors.formItem);
  }
  _showError(input) {
    const error = this._parameters.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
  }
  _hideError(input) {
    const error = this._parameters.querySelector(`#${input.id}-error`);
    error.textContent = null;
  }
  _toggleSubmitButton() {
    if (this._form.checkValidity()) {
      this._submitButton.removeAttribute('disabled');
    } else {
      this._submitButton.setAttribute('disabled', true);
    }
  }
  _checkInputValidity() {
    this._inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._toggleSubmitButton();
        if(input.validity.valid) {
          this._hideError(input);
        } else {
          this._showError(input);
        }
      });
    });
  }
  _checkChangeFields() {
    this._formFields.forEach(item => {
      item.addEventListener('change', () => {
        this._resetButton.removeAttribute('disabled');
      });
    });
  }
  clearValidation() {
    this._resetButton.setAttribute('disabled', true);
    this._toggleSubmitButton();
    this._inputs.forEach(input => {
      this._hideError(input);
    });
  }
  enableValidation() {
    this._checkChangeFields();
    this._checkInputValidity();
  }
}