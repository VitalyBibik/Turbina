import React from 'react';
import { Field, Formik } from 'formik';
import styles from './form.module.css';
import { CreateAndValidate } from '../../utils/validation';

const Form = () => (
  <Formik
    initialValues={{
      fullName: '',
      mobilePhone: '',
      email: '',
      userText: '',
      checked: [],
    }}
    validate={(values) => {
      return CreateAndValidate(values);
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log(values, 'Форма готова');
        setSubmitting(false);
      }, 400);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      /* and other goodies */
    }) => (
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles['form__input']}
          type="text"
          name="fullName"
          placeholder="Имя и фамилия автора"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fullName}
          required
        />
        <span className={styles['form__error']}>
          {' '}
          {errors.fullName && touched.fullName && errors.fullName}{' '}
        </span>
        <input
          className={styles['form__input']}
          type="tel"
          name="mobilePhone"
          placeholder="Телефон"
          minLength="11"
          maxLength="18"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.mobilePhone}
          required
        />
        <span className={styles['form__error']}>
          {' '}
          {errors.mobilePhone && touched.mobilePhone && errors.mobilePhone}{' '}
        </span>
        <input
          className={styles['form__input']}
          type="email"
          name="email"
          placeholder="Почта"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          required
        />
        <span className={styles['form__error']}>
          {' '}
          {errors.email && touched.email && errors.email}{' '}
        </span>
        <input
          className={styles['form__input']}
          type="text"
          name="userText"
          placeholder="Стихи"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.userText}
          required
        />
        <span className={styles['form__error']}>
          {' '}
          {errors.userText && touched.userText && errors.userText && (
            <span className={styles['form__error']}>{errors.userText}</span>
          )}
        </span>
        <label className={styles['form__check']}>
          <Field
            type="checkbox"
            name="toggle"
            className={styles['form__ellipse']}
            required
          />
          <span className={styles['form__span']} />
          {
            <p className={styles['form__text']}>
              Согласен с &#160;
              <a href={'/'} className={styles['form__link']}>
                офертой
              </a>
            </p>
          }
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className={styles['form__button']}
        >
          Отправить форму
        </button>
      </form>
    )}
  </Formik>
);

export default Form;
