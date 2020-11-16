import { cardsAddPopup, editProfilePopup, enlargedImagePopup, editButton, closeProfileButton, addButton, closeCardFormButton, closeEnlargedImage, cardsList, popups, initialCards, formObject, popupImage, popupImageTitle } from './constants.js';
import { editProfileForm, nameInput, jobInput, profileTitle, profileSubtitle, cardNameInput, cardUrlInput, cardAddForm} from './constants.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';


function togglePopup(popUp) {
  popUp.classList.toggle('popup_opened');

  if (popUp.classList.contains('popup_opened')) {
    document.addEventListener('keydown',closePopupByEscape);
  } else {
    document.removeEventListener('keydown',closePopupByEscape);
  }
}

function closePopupByEscape (evt) {
  if (evt.key === "Escape") {
    togglePopup(document.querySelector('.popup_opened'));
  }
}

const bindHandlers = () => {
  addButton.addEventListener('click', () => togglePopup(cardsAddPopup));
  closeCardFormButton.addEventListener('click', () => togglePopup(cardsAddPopup));
};

function insertUserData() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  togglePopup(editProfilePopup);
}

function addCards() {
  const item =  new Card( {
    name: cardNameInput.value,
    link: cardUrlInput.value
  }, '.card-template' );

  item.setPhotoClickHandler(handleLargeImagePopup);
  const newCard = item.generateCard();
  cardsList.prepend(newCard);

  cardAddForm.reset();
}

function handleCardsSubmit (evt) {
  evt.preventDefault();
  addCards();
  togglePopup(cardsAddPopup);
}

function closePopups (evt) {
  evt.stopPropagation();
  togglePopup(evt.target);
}

const handlePopupsClosing = () => {
  popups.forEach((popup) => {
    popup.addEventListener('click', closePopups);
  });
};

function handleLargeImagePopup (text, src) {
  popupImage.src = src;
  popupImageTitle.innerText = text;
  popupImage.alt = text;
  togglePopup(enlargedImagePopup);
};

bindHandlers();
handlePopupsClosing();

closeProfileButton.addEventListener('click', () => togglePopup(editProfilePopup));
editProfileForm.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', () => togglePopup(editProfilePopup), insertUserData());
cardAddForm.addEventListener('submit', handleCardsSubmit);
closeEnlargedImage.addEventListener('click', () => togglePopup(enlargedImagePopup));

initialCards.forEach((element) => {
  const card = new Card(element, '.card-template');
  card.setPhotoClickHandler(handleLargeImagePopup);
  const cardElement = card.generateCard();
  cardsList.append(cardElement);
});

const formList = Array.from(document.querySelectorAll(formObject.formSelector));
formList.forEach(formItem => {
  const formValidated = new FormValidator(formObject, formItem);
  formValidated.enableValidation();
});

