import Popup from './Popup.js';
export default class PopupWithImage extends Popup {

  constructor(popupSelector) {
    super (popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupTitle = this._popup.querySelector('.popup__title');
  }

  open(title,link) {
    super.open();
    this._popupImage.src = link;
    this._popupImage.alt = title;
    this._popupTitle.textContent = title;
  }
}
