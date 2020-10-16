(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__formInputText",submitButtonSelector:".popup__formSubmitButton",inactiveButtonClass:"popup__formSubmitButton_disabled",inputErrorClass:"popup__formInputText_error",errorClass:"popup__formInputError"},t=".profile__name",n=".profile__description",r=document.querySelector(".profile__openPopupButton"),o=document.querySelector(".popup_editProfile").querySelector(e.formSelector),i=document.querySelector(".profile__addButton"),u=".popup_addElement",l=document.querySelector(u).querySelector(e.formSelector),c=".elements";function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.firstInput,this._link=t.secondInput,this._cardSelector=n,this._handleCardClick=r}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_removeCard",value:function(){var e=this;this._element.querySelector(".element__removeButton").addEventListener("click",(function(){e._element.remove(e._element)}))}},{key:"_likeCard",value:function(){var e=this;this._element.querySelector(".element__likeButton").addEventListener("click",(function(){e._element.querySelector(".element__likeButtonImage").classList.toggle("element__likeButtonImage_toggled")}))}},{key:"_getCardInfo",value:function(){var e=this;this._element.querySelectorAll(".element__image, .element__title").forEach((function(t){t.addEventListener("click",(function(t){if(t.target!==e._element.querySelector(".element__removeButton"))return e._handleCardClick(e._name,e._link)}))}))}},{key:"_setEventListeners",value:function(){this._likeCard(),this._removeCard(),this._getCardInfo()}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".element__title").textContent=this._name,this._element.querySelector(".element__image").alt=this._name,this._element.querySelector(".element__image").src=this._link,this._setEventListeners(),this._element}}])&&s(t.prototype,n),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n}var t,n;return t=e,(n=[{key:"_checkInputValidity",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"Error"));e.validity.valid?(e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""):(e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass))}},{key:"_toggleButton",value:function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(this._inactiveButtonClass),t.disabled=!1):(t.classList.add(this._inactiveButtonClass),t.disabled=!0)}},{key:"_setEventListeners",value:function(){var e=this,t=Array.from(this._formElement.querySelectorAll(this._inputSelector)),n=this._formElement.querySelector(this._submitButtonSelector);t.forEach((function(r){r.addEventListener("input",(function(){e._checkInputValidity(r),e._toggleButton(t,n)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&p(t.prototype,n),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._bindeHandleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._bindeHandleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._bindeHandleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target!==t.currentTarget&&t.target!==e._popup.querySelector(".popup__closeButton")||e.close()}))}}])&&_(t.prototype,n),e}();function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?S(e):t}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=r,n._bindedSubmit=n._submit.bind(S(n)),n}return t=u,(n=[{key:"_submit",value:function(e){e.preventDefault(),this._handleFormSubmit(this._getInputValues()),this.close()}},{key:"_getInputValues",value:function(){return this._formValues=[{firstInput:this._popup.querySelector(".popup__formInputText_firstInput").value,secondInput:this._popup.querySelector(".popup__formInputText_secondInput").value}],this._formValues}},{key:"_cleanPopupForm",value:function(){this._popup.querySelector(".popup__formSubmitButton").classList.contains("popup__formSubmitButton_disabled")||(this._popup.querySelector(".popup__formSubmitButton").classList.add("popup__formSubmitButton_disabled"),this._popup.querySelector(".popup__formSubmitButton").disabled=!0),this._popup.querySelectorAll(".popup__formInputText").forEach((function(e){e.classList.remove("popup__formInputText_error"),e.value=""})),this._popup.querySelectorAll(".popup__formInputError").forEach((function(e){e.value="",e.textContent=""})),this._popup.querySelector(".popup__form").removeEventListener("submit",this._bindedSubmit)}},{key:"setEventListeners",value:function(){y(g(u.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".popup__form").addEventListener("submit",this._bindedSubmit)}},{key:"close",value:function(){y(g(u.prototype),"close",this).call(this),this._cleanPopupForm()}},{key:"open",value:function(){this.setEventListeners(),y(g(u.prototype),"open",this).call(this)}}])&&h(t.prototype,n),u}(d);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t,n){return(I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function u(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._name=t,r._link=n,r}return t=u,(n=[{key:"_setCardInfo",value:function(){this._popup.querySelector(".popup__lightBoxFigcaption").textContent=this._name,this._popup.querySelector(".popup__lightBoxImage").alt=this._name,this._popup.querySelector(".popup__lightBoxImage").src=this._link}},{key:"open",value:function(){this._setCardInfo(),I(P(u.prototype),"setEventListeners",this).call(this),I(P(u.prototype),"open",this).call(this)}}])&&C(t.prototype,n),u}(d);function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"render",value:function(){var e=this;this._renderedItems.forEach((function(t){void 0===t.firstInput&&(t.firstInput=t.name,delete t.name),void 0===t.secondInput&&(t.secondInput=t.link,delete t.link),e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&L(t.prototype,n),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.profileNameSelector,r=t.profileDescriptionSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameOnPage=document.querySelector(n),this._descriptionOnPage=document.querySelector(r),this._nameInPopup=document.querySelector(".popup_editProfile").querySelector(".popup__formInputText_firstInput"),this._descriptionInPopup=document.querySelector(".popup_editProfile").querySelector(".popup__formInputText_secondInput")}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){this._nameInPopup.value=this._nameOnPage.textContent,this._descriptionInPopup.value=this._descriptionOnPage.textContent}},{key:"setUserInfo",value:function(){this._nameOnPage.textContent=this._nameInPopup.value,this._descriptionOnPage.textContent=this._descriptionInPopup.value}}])&&B(t.prototype,n),e}();r.addEventListener("click",(function(){var e=new k(".popup_editProfile",{handleFormSubmit:function(){new j({profileNameSelector:t,profileDescriptionSelector:n}).setUserInfo()}});new j({profileNameSelector:t,profileDescriptionSelector:n}).getUserInfo(),e.open()}));var T=function(e,t){new O(".popup_lightBox",e,t).open()};i.addEventListener("click",(function(){new k(u,{handleFormSubmit:function(e){var t=new x({items:e,renderer:function(e){var n=new a(e,"#element",T).generateCard();t.addItem(n)}},c);t.render()}}).open()}));var R=new x({items:[{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"}],renderer:function(e){var t=new a(e,"#element",T).generateCard();R.addItem(t)}},c);R.render(),new f(e,o).enableValidation(),new f(e,l).enableValidation()})();