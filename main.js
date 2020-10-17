(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__formInputText",submitButtonSelector:".popup__formSubmitButton",inactiveButtonClass:"popup__formSubmitButton_disabled",inputErrorClass:"popup__formInputText_error",errorClass:"popup__formInputError"},t=document.querySelector(".profile__openPopupButton"),n=document.querySelector(".popup_editProfile").querySelector(e.formSelector),r=document.querySelector(".profile__addButton"),o=".popup_addElement",i=document.querySelector(o).querySelector(e.formSelector);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n,r){var o=t.name,i=t.link,u=r.sendCardInfo;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=o,this._link=i,this._cardSelector=n,this._sendCardInfo=u}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_removeCard",value:function(){var e=this;this._element.querySelector(".element__removeButton").addEventListener("click",(function(){e._element.remove(e._element)}))}},{key:"_likeCard",value:function(){var e=this;this._element.querySelector(".element__likeButton").addEventListener("click",(function(){e._element.querySelector(".element__likeButtonImage").classList.toggle("element__likeButtonImage_toggled")}))}},{key:"_returnCardInfo",value:function(){return{name:this._name,link:this._link}}},{key:"_handleCardClick",value:function(){var e=this;this._element.querySelectorAll(".element__image, .element__title").forEach((function(t){t.addEventListener("click",(function(t){t.target!==e._element.querySelector(".element__removeButton")&&e._sendCardInfo(e._returnCardInfo())}))}))}},{key:"_setEventListeners",value:function(){this._likeCard(),this._removeCard(),this._handleCardClick()}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".element__title").textContent=this._name,this._element.querySelector(".element__image").alt=this._name,this._element.querySelector(".element__image").src=this._link,this._setEventListeners(),this._element}}])&&u(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n}var t,n;return t=e,(n=[{key:"_checkInputValidity",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"Error"));e.validity.valid?(e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""):(e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass))}},{key:"_toggleButton",value:function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(this._inactiveButtonClass),t.disabled=!1):(t.classList.add(this._inactiveButtonClass),t.disabled=!0)}},{key:"_setEventListeners",value:function(){var e=this,t=Array.from(this._formElement.querySelectorAll(this._inputSelector)),n=this._formElement.querySelector(this._submitButtonSelector);t.forEach((function(r){r.addEventListener("input",(function(){e._checkInputValidity(r),e._toggleButton(t,n)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&a(t.prototype,n),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=function(e){27===e.keyCode&&n.close()}}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target!==t.currentTarget&&t.target!==e._popup.querySelector(".popup__closeButton")||e.close()}))}}])&&l(t.prototype,n),e}();function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function u(e,t){var n,r=t.sendInputValues;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._sendInputValues=r,n._form=n._popup.querySelector(".popup__form"),n._firstInput=n._form.querySelector(".popup__formInputText_firstInput"),n._secondInput=n._form.querySelector(".popup__formInputText_secondInput"),n._formButton=n._form.querySelector(".popup__formSubmitButton"),n._submit=function(e){e.preventDefault(),n._sendInputValues(n._getInputValues()),n.close()},n}return t=u,(n=[{key:"_cleanPopupForm",value:function(){this._formButton.classList.contains("popup__formSubmitButton_disabled")||(this._formButton.classList.add("popup__formSubmitButton_disabled"),this._formButton.disabled=!0),this._secondInput.classList.remove("popup__formInputText_error"),this._secondInput.value="",this._firstInput.classList.remove("popup__formInputText_error"),this._firstInput.value="",this._popup.querySelectorAll(".popup__formInputError").forEach((function(e){e.value="",e.textContent=""})),this._form.removeEventListener("submit",this._submit)}},{key:"_getInputValues",value:function(){return{firstInput:this._firstInput.value,secondInput:this._secondInput.value}}},{key:"receiveInputValues",value:function(e){var t=e.name,n=e.description;this._firstInput.value=t,this._secondInput.value=n}},{key:"setEventListeners",value:function(){d(y(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submit)}},{key:"close",value:function(){d(y(u.prototype),"close",this).call(this),this._cleanPopupForm()}},{key:"open",value:function(){d(y(u.prototype),"open",this).call(this),this.setEventListeners()}}])&&_(t.prototype,n),u}(p);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return(k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._lightBoxFigcaption=t._popup.querySelector(".popup__lightBoxFigcaption"),t._lightBoxImage=t._popup.querySelector(".popup__lightBoxImage"),t}return t=u,(n=[{key:"_receiveCardInfo",value:function(e){var t=e.name,n=e.link;this._lightBoxFigcaption.textContent=t,this._lightBoxImage.alt=n,this._lightBoxImage.src=n}},{key:"open",value:function(e){var t=e.name,n=e.link;this._receiveCardInfo({name:t,link:n}),k(C(u.prototype),"open",this).call(this),k(C(u.prototype),"setEventListeners",this).call(this)}}])&&g(t.prototype,n),u}(p);function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"render",value:function(){var e=this;this._renderedItems.forEach((function(t){var n=t.name,r=t.link;return e._renderer({name:n,link:r})}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&w(t.prototype,n),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=new(function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameOnPage=document.querySelector(t),this._descriptionOnPage=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameOnPage.textContent,description:this._descriptionOnPage.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.description;this._nameOnPage.textContent=t,this._descriptionOnPage.textContent=n}}])&&B(t.prototype,n),e}())(".profile__name",".profile__description"),L=new v(".popup_editProfile",{sendInputValues:function(e){var t=e.firstInput,n=e.secondInput;x.setUserInfo({name:t,description:n})}});t.addEventListener("click",(function(){L.receiveInputValues(x.getUserInfo()),L.open()}));var P=new E(".popup_lightBox"),q=function(e){return new s(e,"#element",{sendCardInfo:function(e){P.open(e)}})},j=new v(o,{sendInputValues:function(e){var t=e.firstInput,n=e.secondInput;R.addItem(q({name:t,link:n}).generateCard())}});r.addEventListener("click",(function(){j.open()}));var R=new O({items:[{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"}],renderer:function(e){var t=e.name,n=e.link;return R.addItem(q({name:t,link:n}).generateCard())}},".elements");R.render(),new c(e,n).enableValidation(),new c(e,i).enableValidation()})();