import Popup from './Popup.js';
export default class PopupWithForm extends Popup {

  constructor({popupSelector, handleFormSubmit}) {
    super (popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.input');
    this._submitButton = this._form.querySelector('.input__btn');
  }

  open() {
    super.open();
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll('.input__text');
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  changeBtnOnloadStyle(isLoading) {
    if(isLoading) {
      this._submitButton.value = "Сохранение..."
    } else {
      this._submitButton.value = "Сохраненить"
    }
  }

  setEventListeners() {

    super.setEventListeners();

    this._form.addEventListener('submit', () => {
      const inputsData = this._getInputValues();
      this._handleFormSubmit(inputsData);
      this.changeBtnOnloadStyle(true);
    });

  }

  close() {
    super.close();
    this._form.reset();
  }
}
