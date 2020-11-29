import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super (popupSelector);
  }
  open(title,link) {
    super.open();
    const popupImage = this._popupSelector.querySelector('.popup__image');
    const popupTitle = this._popupSelector.querySelector('.popup__title');
    popupImage.src = link;
    popupImage.alt = title;
    popupTitle.textContent = title;
  }
}
