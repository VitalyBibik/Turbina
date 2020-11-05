import React from 'react';
import { Field, Formik } from 'formik';
import styles from './form.module.css';

const Form = () => (
  <div className={styles.form}>
    <Formik
      initialValues={{
        fullName: '',
        mobilePhone: '',
        email: '',
        userText: '',
        checked: [],
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Имя и фамилия автора"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fullName}
          />
          {errors.fullName && touched.fullName && errors.fullName}
          <input
            type="tel"
            name="mobilePhone"
            placeholder="Телефон"
            minLength="11"
            maxLength="18"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.mobilePhone}
          />
          {errors.mobilePhone && touched.mobilePhone && errors.mobilePhone}
          <input
            type="email"
            name="email"
            placeholder="Почта"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="text"
            name="fullName"
            placeholder="Стихи"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.userText}
          />
          {errors.userText && touched.userText && errors.userText}
          <label>
            <Field type="checkbox" name="toggle" />
            {`Согласен с офертой `}
          </label>
          <button type="submit" disabled={isSubmitting}>
            Отправить форму
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;
