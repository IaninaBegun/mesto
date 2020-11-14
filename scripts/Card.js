import { enlargeImage, popupImage, popupImageTitle } from './constants.js';

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const CardElement = document.querySelector(this._cardSelector)
                        .content
                        .querySelector('.elements__element')
                        .cloneNode(true);
    return CardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.elements__image').src = this._link;
    this._element.querySelector('.elements__image').alt = this._name;
    this._element.querySelector('.elements__title').textContent = this._name;
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.elements__btn-like').addEventListener('click', () => {
      this._handleCardLikes();
    });

    this._element.querySelector('.elements__btn-erase').addEventListener('click', () => {
      this._handleCardDelete();
    });

    this._element.querySelector('.elements__image').addEventListener('click', () => {
      this._handleLargeImagePopup();
    });

    document.addEventListener('keydown', (evt) => {
      if (evt.key === "Escape") {
        enlargeImage.classList.remove('popup_opened');
      }
    })
  }

  _handleCardLikes() {
    this._element.querySelector('.elements__btn-like').classList.toggle('elements__btn-like_active');
  }

  _handleCardDelete() {
    this._element.remove();
  }

  _handleLargeImagePopup() {
    enlargeImage.classList.add('popup_opened');
    popupImage.src = this._element.querySelector('.elements__image').src;
    popupImageTitle.innerText = this._element.querySelector('.elements__title').innerText;
    popupImage.alt = this._element.querySelector('.elements__title').innerText;
  }
}

