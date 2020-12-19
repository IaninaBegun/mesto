(()=>{"use strict";function e(e){document.querySelector(".popup_opened").querySelector(".input__btn").value=e?"Сохранение...":"Сохранить"}var t={formSelector:".input",inputSelector:".input__text",submitButtonSelector:".input__btn",inactiveButtonClass:"input__btn_inactive",inputErrorClass:"input__text_type_error",errorClass:"input__error-message"},n=document.querySelector(".popup_addCards"),r=document.querySelector(".popup_editProfile"),o=document.querySelector(".popup_editProfilePicture"),i=document.querySelector(".popup_enlargeImage"),a=document.querySelector(".popup_cardDeleteConfirm"),c=(document.querySelector(".input__btn_cards"),document.querySelector(".profile__btn_edit")),u=document.querySelector(".profile__btn_edit-avatar"),s=document.querySelector(".profile__btn_add"),l=document.querySelector(".input__text_type_name"),f=document.querySelector(".input__text_type_bio"),p=document.getElementById("profile-title"),h=document.getElementById("profile-subtitle"),d=document.querySelector(".profile__image"),_=document.querySelector(".card-template"),y=document.querySelector(".elements__list");function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n,r){var o=r.handleCardClick,i=r.handleDeleteIconClick,a=r.handleLikesClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t._id,this._owner=t.owner,this._cardSelector=n,this.handleCardClick=o,this.handleDeleteIconClick=i,this.handleLikesClick=a}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return this._cardSelector.content.querySelector(".elements__element").cloneNode(!0)}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._setEventListeners();var e=this._element.querySelector(".elements__image");return e.src=this._link,e.alt=this._name,this.checkCardIsLiked(this._likes),this._element.querySelector(".elements__title").textContent=this._name,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".elements__btn-like").addEventListener("click",(function(t){e._handleCardLikes(),e.handleLikesClick(t.target)})),this._element.querySelector(".elements__btn-erase").addEventListener("click",(function(){e.handleDeleteIconClick(e._id)})),this._element.querySelector(".elements__image").addEventListener("click",(function(){e.handleCardClick(e._name,e._link)}))}},{key:"_handleCardLikes",value:function(){this._element.querySelector(".elements__btn-like").classList.toggle("elements__btn-like_active")}},{key:"handleCardDelete",value:function(){this._element.remove(),this._element=null}},{key:"checkCardIsLiked",value:function(e){this._element.querySelector(".elements__likes-counter").textContent=e.length}},{key:"checkIfOwner",value:function(e){this._owner._id===e&&this._element.querySelector(".elements__btn-erase").classList.remove("elements__btn-erase_invisible")}}])&&v(t.prototype,n),e}();function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._object=t,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._object.inputSelector)),this._buttonElement=this._form.querySelector(this._object.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._form.querySelector("#".concat(e.id,"-error"));e.classList.add(this._object.inputErrorClass),n.textContent=t,n.classList.add(this._object.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._object.inputErrorClass),t.classList.remove(this._object.errorClass),t.textContent=""}},{key:"setDefaultErrorState",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._setDefaultBtnState()}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?(t.classList.add(this._object.inactiveButtonClass),t.disabled=!0):(t.classList.remove(this._object.inactiveButtonClass),t.disabled=!1)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(this._inputList,this._buttonElement),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(e._inputList,e._buttonElement)}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_setDefaultBtnState",value:function(){this._buttonElement.disabled=!0,this._buttonElement.classList.add("input__btn_inactive")}}])&&b(t.prototype,n),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._initialArray.reverse().forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&g(t.prototype,n),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_closePopups",value:function(e){e.target===this._popup&&this.close(e.target)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){this._popup.querySelector(".popup__btn-close").addEventListener("click",this.close.bind(this)),this._popup.addEventListener("click",this._closePopups.bind(this))}}])&&E(t.prototype,n),e}();function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupTitle=t._popup.querySelector(".popup__title"),t}return t=a,(n=[{key:"open",value:function(e,t){O(P(a.prototype),"open",this).call(this),this._popupImage.src=t,this._popupImage.alt=e,this._popupTitle.textContent=e}}])&&L(t.prototype,n),a}(w);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t,n){return(T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._form=t._popup.querySelector(".input"),t._inputList=t._form.querySelectorAll(".input__text"),t._submitButton=t._form.querySelector(".input__btn"),t}return t=a,(n=[{key:"open",value:function(){T(x(a.prototype),"open",this).call(this)}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;T(x(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){var t=e._getInputValues();e._handleFormSubmit(t)}))}},{key:"close",value:function(){T(x(a.prototype),"close",this).call(this),this._form.reset()}}])&&D(t.prototype,n),a}(w);function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t){var n=t.nameOfUser,r=t.bioOfUser,o=t.avatarOfUser;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=n,this._userBio=r,this._userAvatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,bio:this._userBio.textContent}}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userBio.textContent=t}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e}}])&&N(t.prototype,n),e}();function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t,n){return(G="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(r);if(o){var n=z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return M(this,e)});function a(e){var t,n=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._form=t._popup.querySelector(".input"),t}return t=a,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}},{key:"setEventListeners",value:function(){var e=this;G(z(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitCallback()}))}}])&&J(t.prototype,n),a}(w);function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function X(e,t){var n=new m(e,_,{handleCardClick:function(e,t){ee.open(e,t)},handleDeleteIconClick:function(e){Z.setSubmitAction((function(){Y.deleteCard(e).then((function(){n.handleCardDelete(),Z.close()})).catch((function(e){console.log(e)}))})),Z.open()},handleLikesClick:function(t){t.classList.contains("elements__btn-like_active")?Y.addCardLikes(e._id).then((function(e){n.checkCardIsLiked(e.likes)})).catch((function(e){console.log(e)})):Y.removeCardLikes(e._id).then((function(e){n.checkCardIsLiked(e.likes)})).catch((function(e){console.log(e)}))}}),r=n.generateCard();return n.checkIfOwner(t),r}var Y=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("Ошибка: ".concat(e.status)))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"getInitialInfo",value:function(){return Promise.all([this.getCards(),this.getUserInfo()])}},{key:"editUserProfile",value:function(e,t){var n=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:"".concat(e),about:"".concat(t)})}).then((function(e){return n._getResponseData(e)}))}},{key:"editUserAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:"".concat(e)})}).then((function(e){return t._getResponseData(e)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.placeName,link:e.placeSource})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"addCardLikes",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"removeCardLikes",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}}])&&K(t.prototype,n),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-18",headers:{authorization:"e5fb80c0-332b-4b8b-ad88-252aca14553b","content-type":"application/json"}});Y.getInitialInfo().then((function(t){var r=Q(t,2),o=r[0],i=r[1],a=new S({items:o,renderer:function(e){a.addItem(X(e,i._id))}},y),c=new B({popupSelector:n,handleFormSubmit:function(t){var n=t.placeName,r=t.placeSource;e(!0),Y.addNewCard({placeName:n,placeSource:r}).then((function(e){return X(e,i._id)})).then((function(e){a.addItem(e)})).catch((function(e){console.log(e)})).finally((function(){e(!1),c.close()}))}});a.renderItems(),re.setUserInfo(i.name,i.about),re.setUserAvatar(i.avatar),c.setEventListeners(),s.addEventListener("click",(function(){le.setDefaultErrorState(),c.open()}))})).catch((function(e){console.log(e)}));var Z=new $({popupSelector:a}),ee=new q(i),te=new B({popupSelector:r,handleFormSubmit:function(t){var n=t.userName,r=t.userBiography;e(!0),Y.editUserProfile(n,r).then((function(e){re.setUserInfo(e.name,e.about)})).catch((function(e){console.log(e)})).finally((function(){e(!1),te.close()}))}}),ne=new B({popupSelector:o,handleFormSubmit:function(t){var n=t.pictureSource;e(!0),Y.editUserAvatar(n).then((function(e){re.setUserAvatar(e.avatar)})).catch((function(e){console.log(e)})).finally((function(){e(!1),ne.close()}))}}),re=new V({nameOfUser:p,bioOfUser:h,avatarOfUser:d}),oe=Q(Array.from(document.querySelectorAll(t.formSelector)),3),ie=oe[0],ae=oe[1],ce=oe[2],ue=new k(t,ie);ue.enableValidation();var se=new k(t,ae);se.enableValidation();var le=new k(t,ce);le.enableValidation(),ee.setEventListeners(),te.setEventListeners(),Z.setEventListeners(),ne.setEventListeners(),c.addEventListener("click",(function(){return e=re.getUserInfo(),l.value=e.name,f.value=e.bio,ue.setDefaultErrorState(),void te.open();var e})),u.addEventListener("click",(function(){se.setDefaultErrorState(),ne.open()}))})();