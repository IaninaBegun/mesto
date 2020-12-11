import './index.css';

import { editButton, addButton, cardsContainer, cardTemplate } from '../utils/constants.js';
import { cardsAddPopup, editProfilePopup, enlargedImagePopup, deleteConfirmPopup } from '../utils/constants.js';
import { editProfileAvatarButton, formObject, editProfileAvatarPopup } from '../utils/constants.js';
import { nameInput, jobInput, profileTitle, profileSubtitle, profilePicture} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Api from '../components/Api.js';




const cardList = new Section(cardsContainer);

function createNewCard (cardItem) {

  const card = new Card(cardItem, cardTemplate,
    { handleCardClick: (text, itemLink) => {
        largePopup.open(text, itemLink);
      },
      handleDeleteIconClick: (id) => {
        popupDeleteCard.setSubmitAction(() => {
          api.deleteCard(id)
          .then(() => {
            card.handleCardDelete();
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            popupDeleteCard.close();
          });
        });
        popupDeleteCard.open();
      },
      handleLikesClick: (element) => {
        if (element.classList.contains('elements__btn-like_active')) {
          api.addCardLikes(cardItem._id)
          .catch((err) => {
            console.log(err);
          });

        } else {
          api.removeCardLikes(cardItem._id)
          .catch((err) => {
            console.log(err);
          });
        }
      }
    });

  const cardElement = card.generateCard();
  card.checkIfOwner();
  cardList.addItems(cardElement);
}

const api = new Api ({
  url:'https://mesto.nomoreparties.co/v1/cohort-18/cards',
  headers: {
    'authorization': 'e5fb80c0-332b-4b8b-ad88-252aca14553b',
    'content-type': 'application/json'
  }
});

const initialCardsFromServer = api.getInitialInfo();

initialCardsFromServer.then((data) => {
  const [cardsData, userData] = data;
  cardsData.forEach((cardObject) => {
    createNewCard(cardObject);
  });

  userInfo.setUserInfo(userData.name, userData.about);
  userInfo.setUserAvatar(userData.avatar);
})
.catch((err) => {
  console.log(err);
});

const popupDeleteCard = new PopupWithConfirmation({
  popupSelector: deleteConfirmPopup
});

const popupAddingCards = new PopupWithForm({
  popupSelector: cardsAddPopup,
  handleFormSubmit: ({placeName, placeSource}) => {
    api.addNewCard({placeName, placeSource})
    .then((data) => {
      createNewCard (data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddingCards.close();
    });
  }
});

const largePopup = new PopupWithImage(enlargedImagePopup);

const openPopupUserInfo = () => {
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().bio;
  popupAddingUserInfo.open();
};

const popupAddingUserInfo = new PopupWithForm({
  popupSelector: editProfilePopup,
  handleFormSubmit: ({userName, userBiography}) => {
    api.editUserProfile(userName, userBiography)
    .then((data) => {
      userInfo.setUserInfo(data.name, data.about);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddingUserInfo.changeBtnOnloadStyle(false);
      popupAddingUserInfo.close();
    })
  }
});

const popupEditProfileAvatar = new PopupWithForm({
  popupSelector: editProfileAvatarPopup,
  handleFormSubmit: ({pictureSource}) => {
    api.editUserAvatar(pictureSource)
    .then((data) => {
      userInfo.setUserAvatar(data.avatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditProfileAvatar.changeBtnOnloadStyle(false);
      popupEditProfileAvatar.close();
    });
  }
});

const userInfo = new UserInfo({
  nameOfUser: profileTitle,
  bioOfUser: profileSubtitle,
  avatarOfUser: profilePicture
});

const formList = Array.from(document.querySelectorAll(formObject.formSelector));
formList.forEach(formItem => {
  const formValidated = new FormValidator(formObject, formItem);
  formValidated.enableValidation();
});


largePopup.setEventListeners();
popupAddingCards.setEventListeners();
popupAddingUserInfo.setEventListeners();
popupDeleteCard.setEventListeners();
popupEditProfileAvatar.setEventListeners();

addButton.addEventListener('click', () => {popupAddingCards.open()} );
editButton.addEventListener('click', () => openPopupUserInfo() );
editProfileAvatarButton.addEventListener('click', () => {popupEditProfileAvatar.open()});




