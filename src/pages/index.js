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


function createNewCard (cardItem, userId) {

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
          .then((data) => {
            card.checkCardIsLiked(data.likes);
          })
          .catch((err) => {
            console.log(err);
          });

        } else {
          api.removeCardLikes(cardItem._id)
          .then((data) => {
            card.checkCardIsLiked(data.likes);
          })
          .catch((err) => {
            console.log(err);
          });
        }
      }
    });

  const cardElement = card.generateCard();
  card.checkIfOwner(userId);
  return cardElement;
}

const api = new Api ({
  url:'https://mesto.nomoreparties.co/v1/cohort-18',
  headers: {
    'authorization': 'e5fb80c0-332b-4b8b-ad88-252aca14553b',
    'content-type': 'application/json'
  }
});

const initialCardsFromServer = api.getInitialInfo();

initialCardsFromServer.then((data) => {
  const [cardsData, userData] = data;
  console.log(cardsData);

  const cardList = new Section({
    items: cardsData,
    renderer: (cardItem) => {
      cardList.addItem(createNewCard(cardItem, userData._id));
    }
  }, cardsContainer);

  const popupAddingCards = new PopupWithForm({
    popupSelector: cardsAddPopup,
    handleFormSubmit: ({placeName, placeSource}) => {
      api.addNewCard({placeName, placeSource})
      .then((data) => {
        return createNewCard(data, userData._id);
      })
      .then((res) => {
        cardList.addItem(res);
        popupAddingCards.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAddingCards.changeBtnOnloadStyle(false);
      });
    }
  });

  cardList.renderItems();
  userInfo.setUserInfo(userData.name, userData.about);
  userInfo.setUserAvatar(userData.avatar);
  popupAddingCards.setEventListeners();
  addButton.addEventListener('click', () => {popupAddingCards.open()} );

})
.catch((err) => {
  console.log(err);
});

const popupDeleteCard = new PopupWithConfirmation({
  popupSelector: deleteConfirmPopup
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
      popupAddingUserInfo.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddingUserInfo.changeBtnOnloadStyle(false);
    })
  }
});

const popupEditProfileAvatar = new PopupWithForm({
  popupSelector: editProfileAvatarPopup,
  handleFormSubmit: ({pictureSource}) => {
    api.editUserAvatar(pictureSource)
    .then((data) => {
      userInfo.setUserAvatar(data.avatar);
      popupEditProfileAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditProfileAvatar.changeBtnOnloadStyle(false);
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

popupAddingUserInfo.setEventListeners();
popupDeleteCard.setEventListeners();
popupEditProfileAvatar.setEventListeners();


editButton.addEventListener('click', () => openPopupUserInfo() );
editProfileAvatarButton.addEventListener('click', () => {popupEditProfileAvatar.open()});




