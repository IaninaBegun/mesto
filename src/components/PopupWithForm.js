import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}) {
    super (popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formSelector = this._popupSelector.querySelector('.input');
  }

  _getInputValues() {
    this._inputList = this._formSelector.querySelectorAll('.input__text');
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {

    super.setEventListeners();

    this._formSelector.addEventListener('submit', (evt) => {
        evt.preventDefault();
        const inputsData = this._getInputValues();
        this._handleFormSubmit(inputsData);
        this.close();
    });

  }

  close() {
    super.close();
    this._formSelector.reset();
  }
}
