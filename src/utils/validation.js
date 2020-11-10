const regExpMail = /([a-zA-Z0-9]([-_.]?[a-zA-Z0-9]+)*)@([a-zA-Z0-9]([-]?[a-zA-Z0-9]+)*)(\.([a-zA-Z])+)+/i;
const regExpName = /([А-ЯЁ][а-яё]+)(?:(?:-)([А-ЯЁ][а-яё]+))?/i;
const regExpPhone = /(\+7|\d)\s?\(?\d{3}\)?\s?-?\d{3}-?\d{2}-?\d{2}/;

export function CreateAndValidate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Обязательное поле';
  } else if (!regExpMail.test(values.email)) {
    errors.email = 'Неверный Email адрес';
  }
  if (!values.fullName) {
    errors.fullName = 'Обязательное поле';
  } else if (!regExpName.test(values.fullName)) {
    errors.fullName = 'Введите корректное имя';
  }
  if (!values.mobilePhone) {
    errors.mobilePhone = 'Обязательное поле';
  } else if (!regExpPhone.test(values.mobilePhone)) {
    errors.mobilePhone = 'Телефон в формате: +7 (900) 000-00-00';
  }
  if (!values.userText) {
    errors.userText = 'Обязательное поле';
  }
  return errors;
}
