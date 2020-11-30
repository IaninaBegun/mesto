import {ESC_KEY} from '../utils/constants.js';

export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _closePopups (evt) {
    if (evt.target === this._popup) {
      this.close(evt.target);
    }
  }

  _handleEscClose(evt) {
    if (evt.key === ESC_KEY) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.querySelector('.popup__btn-close')
      .addEventListener('click', this.close.bind(this));
    this._popup.addEventListener('click', this._closePopups.bind(this));
  }
}
