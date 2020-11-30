import './index.css';

import { editButton, addButton, cardsContainer, cardTemplate } from '../utils/constants.js';
import { cardsAddPopup, editProfilePopup, enlargedImagePopup } from '../utils/constants.js';
import { initialCards, formObject } from '../utils/constants.js';
import { nameInput, jobInput, profileTitle, profileSubtitle} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const largePopup = new PopupWithImage(enlargedImagePopup);

function createNewCard (cardItem) {
  const card = new Card(cardItem, cardTemplate,
    {handleCardClick: (text, itemLink) => {
        largePopup.open(text, itemLink);
      }
    });

  const cardElement = card.generateCard();
  cardList.addItems(cardElement);
}

const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    createNewCard (cardItem);
  }
}, cardsContainer);

const formList = Array.from(document.querySelectorAll(formObject.formSelector));
formList.forEach(formItem => {
  const formValidated = new FormValidator(formObject, formItem);
  formValidated.enableValidation();
});

const popupAddingCards = new PopupWithForm({
  popupSelector: cardsAddPopup,
  handleFormSubmit: ({placeName, placeSource}) => {

    createNewCard ({
      name: placeName,
      link: placeSource});
    popupAddingCards.close();

  }
});

const userInfo = new UserInfo({
  nameOfUser: profileTitle,
  bioOfUser: profileSubtitle
});

const openPopupUserInfo = () => {
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().bio;
  popupAddingUserInfo.open();
};

const popupAddingUserInfo = new PopupWithForm({
  popupSelector: editProfilePopup,
  handleFormSubmit: ({userName, userBiography}) => {
    userInfo.setUserInfo(userName, userBiography);
    popupAddingUserInfo.close();
  }
});

cardList.renderItems();
popupAddingUserInfo.setEventListeners();
popupAddingCards.setEventListeners();
largePopup.setEventListeners();


addButton.addEventListener('click', () => {popupAddingCards.open()} );
editButton.addEventListener('click', () => openPopupUserInfo() );
