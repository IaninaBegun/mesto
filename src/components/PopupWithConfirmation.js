import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor({popupSelector}) {
    super (popupSelector);
    this._form = this._popup.querySelector('.input');
  }

  setSubmitAction(submitAction) {
    this._handleSubmitCallback = submitAction;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
    })
  }
}
