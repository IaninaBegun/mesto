import {page, cardsAddPopup, editProfile, enlargeImage, editButton, closeProfileButton, addButton, closeCardFormButton, closeEnlargedImage, cardsList, popups } from './constants.js';
import { editProfileForm, nameInput, jobInput, profileTitle, profileSubtitle, cardNameInput, cardUrlInput, cardAddForm} from './constants.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const obj = ({
  formSelector: '.input',
  inputSelector: '.input__text',
  submitButtonSelector: '.input__btn',
  inactiveButtonClass: 'input__btn_inactive',
  inputErrorClass: 'input__text_type_error',
  errorClass: 'input__error-message'
});

const bindHandlers = () => {
  addButton.addEventListener('click', () => togglePopup(cardsAddPopup));
  closeCardFormButton.addEventListener('click', () => togglePopup(cardsAddPopup));
};

function togglePopup(popUp) {
  popUp.classList.toggle('popup_opened');

  function closePopupByEscape (evt) {
    if (evt.key === "Escape") {
      popUp.classList.remove('popup_opened');
    }
  }

  if (popUp.classList.contains('popup_opened')) {
    page.addEventListener('keydown',closePopupByEscape);
  } else {
    page.removeEventListener('keydown',closePopupByEscape);
  }
}

function insertUserData() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  togglePopup(editProfile);
}

function addCards() {
  const item =  new Card({
      name: cardNameInput.value,
      link: cardUrlInput.value
  }, '.card-template');

  console.log(item);
  const newCard = item.generateCard();
  cardsList.prepend(newCard);

  cardAddForm.reset();
}

function cardsSubmitHandler (evt) {
  evt.preventDefault();
  addCards();
  togglePopup(cardsAddPopup);
}

function closePopups (evt) {
  evt.stopPropagation();
  evt.target.classList.remove('popup_opened');
}

const popupsClosingHandler = () => {
  popups.forEach((popup) => {
    popup.addEventListener('click', closePopups);
  });
};

bindHandlers();
popupsClosingHandler();

closeProfileButton.addEventListener('click', () => togglePopup(editProfile));
editProfileForm.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', () => togglePopup(editProfile), insertUserData());
cardAddForm.addEventListener('submit', cardsSubmitHandler);
closeEnlargedImage.addEventListener('click', () => togglePopup(enlargeImage));

initialCards.forEach((element) => {
  const card = new Card(element, '.card-template');
  const cardElement = card.generateCard();
  cardsList.append(cardElement);
});

const formList = Array.from(document.querySelectorAll(obj.formSelector));
formList.forEach(formItem => {
  const formValidated = new FormValidator(obj, formItem);
  formValidated.enableValidation();
});

