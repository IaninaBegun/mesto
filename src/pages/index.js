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

const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const card = new Card(cardItem, cardTemplate,
      {handleCardClick: (text, itemLink) => {

          const largePopup = new PopupWithImage(enlargedImagePopup);
          largePopup.open(text, itemLink);
          largePopup.setEventListeners();

        }
      });

    const cardElement = card.generateCard();
    cardList.addItems(cardElement);

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
    const newCard = new Card({
      name: placeName,
      link: placeSource
    }, cardTemplate,

    {handleCardClick: (text, itemLink) => {
      const largePopup = new PopupWithImage(enlargedImagePopup);
      largePopup.open(text, itemLink);
      largePopup.setEventListeners();
    }});

    const cardElement = newCard.generateCard();
    cardList.addItems(cardElement);
  }
});


const userInfo = new UserInfo({
  nameOfUser: profileTitle,
  bioOfUser: profileSubtitle
});

const popupAddingUserInfo = new PopupWithForm({
  popupSelector: editProfilePopup,
  handleFormSubmit: ({userName, userBiography}) => {
    userInfo.setUserInfo(userName, userBiography);
  }
});

cardList.renderItems();
popupAddingUserInfo.setEventListeners();
popupAddingCards.setEventListeners();


addButton.addEventListener('click', () => {popupAddingCards.open()} );
editButton.addEventListener('click',
  () => {popupAddingUserInfo.open()},
  userInfo.getUserInfo({
    name: nameInput,
    bio: jobInput
  })
);
