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

const btnEdit = document.querySelector('.profile-info__edit-btn');
const btnAdd = document.querySelector('.profile__add-btn');
const btnDelete = document.querySelector('.element__delete');

const popupEditProfile = document.querySelector('.popup_edit');
const popupAddPic = document.querySelector('.popup_add-pic');

const popupPhoto = document.querySelector('.popup_figure');
const popupPhotoPic = document.querySelector('.figure__pic');
const popupPhotoDesc = document.querySelector('.figure__caption');

const profileName = document.querySelector('.profile-info__name');
const profileDesc = document.querySelector('.profile-info__description');
const formEdit = document.querySelector('.form_edit');
const formAdd = document.querySelector('.form_add');
const inputProfileName = document.querySelector('.form__item_el_heading');
const inputProfileDesc = document.querySelector('.form__item_el_desc');

const elements = document.querySelector('.elements__list');
const elementPhoto = document.querySelector('.element__photo');
const inputNamePic = document.querySelector('.form__item_el_namePic');
const inputUrlPic = document.querySelector('.form__item_el_url');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  const btnPopupClose = document.querySelector('.popup_opened').addEventListener('click', function(evt) {
    closePopup(evt.target.parentNode.parentNode);
  })
}

function closePopup(popup) {
  return popup.classList.remove('popup_opened');
}

function formEditSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileDesc.textContent = inputProfileDesc.value;
  closePopup(evt.target.parentNode.parentNode);
}
formEdit.addEventListener('submit', formEditSubmitHandler);

function formAddSubmitHandler (evt) {
  evt.preventDefault();
  addPic(inputNamePic.value, inputUrlPic.value);
  closePopup(evt.target.parentNode.parentNode);
}
formAdd.addEventListener('submit', formAddSubmitHandler);

btnEdit.addEventListener('click', function() {
  inputProfileName.value = profileName.innerText;
  inputProfileDesc.value = profileDesc.innerText;
  openPopup(popupEditProfile);
})

btnAdd.addEventListener('click', function() {
  openPopup(popupAddPic);
})

function addPic(inputNamePic, inputUrlPic) {
  const elementTemplate = document.querySelector('#element-template').content;
  const picElement = elementTemplate.querySelector('.element').cloneNode(true);

  picElement.querySelector('.element__photo').src = inputUrlPic;
  picElement.querySelector('.element__title').textContent = inputNamePic;
  picElement.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  })
  picElement.querySelector('.element__delete').addEventListener('click', function(evt) {
    evt.target.parentNode.remove();
  })
  picElement.querySelector('.element__photo').addEventListener('click', function(evt) {
    popupPhotoPic.src = evt.target.currentSrc;
    popupPhotoDesc.textContent = evt.target.nextSibling.parentNode.innerText;
    openPopup(popupPhoto);
  })
  return elements.prepend(picElement);
}

initialCards.forEach(function(item) {
  return addPic(item.name, item.link);
})





