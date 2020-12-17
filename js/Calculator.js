export default class Calculator {
  constructor(form, selectors, resetHandler) {
    this._form = form;
    this._selectors = selectors;
    this._submitButton = this._form.querySelector(this._selectors.submitButton);
    this._resetButton = this._form.querySelector(this._selectors.resetButton);
    this._resetHandler = resetHandler;
  }
  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      console.log(evt);
    });
    this._resetButton.addEventListener('click', () => {
      this._resetHandler();
    });
  }
}