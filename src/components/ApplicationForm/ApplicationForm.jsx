import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CONSENT_DOCUMENT } from '../../data/content.js';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { looksLikeSpam, validateApplicationForm } from '../../utils/validation.js';
import { submitApplication } from '../../utils/submitApplication.js';
import styles from './ApplicationForm.module.scss';

const EMPTY_VALUES = {
  venue: '',
  name: '',
  phone: '',
  email: '',
  comment: '',
  consent: false,
  website: '', // ловушка для спам-ботов
};

export default function ApplicationForm() {
  const [values, setValues] = useState(EMPTY_VALUES);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const startedAtRef = useRef(Date.now());
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    setErrors((prev) => {
      if (!prev[name]) {
        return prev;
      }
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const focusFirstError = (nextErrors) => {
    const order = ['venue', 'name', 'phone', 'email', 'comment', 'consent'];
    const firstKey = order.find((key) => nextErrors[key]);
    if (!firstKey || !formRef.current) {
      return;
    }
    const field = formRef.current.querySelector(`[name="${firstKey}"]`);
    if (field) {
      field.focus();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError('');

    if (looksLikeSpam(values, Date.now() - startedAtRef.current)) {
      navigate('/success', { state: { channel: 'endpoint' } });
      return;
    }

    const nextErrors = validateApplicationForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      focusFirstError(nextErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitApplication({
        venue: values.venue.trim(),
        name: values.name.trim(),
        phone: values.phone.trim(),
        email: values.email.trim(),
        comment: values.comment.trim(),
        consent: true,
      });

      navigate('/success', {
        state: { channel: result.channel, venue: values.venue.trim() },
      });
    } catch (error) {
      setSubmitError(
        error?.message ||
          'Не удалось отправить заявку. Попробуйте ещё раз или напишите нам на почту.',
      );
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      className={styles.form}
      id="apply"
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="apply-title"
    >
      <h3 id="apply-title" className={styles.title}>
        Заявка на подключение
      </h3>
      <p className={styles.hint}>
        Поля со звёздочкой обязательны. Мы свяжемся с вами по указанным контактам.
      </p>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="venue">
          Название заведения или точки <span aria-hidden="true">*</span>
        </label>
        <input
          id="venue"
          name="venue"
          type="text"
          className={`${styles.input} ${errors.venue ? styles.inputError : ''}`}
          value={values.venue}
          onChange={handleChange}
          autoComplete="organization"
          aria-required="true"
          aria-invalid={Boolean(errors.venue)}
          aria-describedby={errors.venue ? 'venue-error' : undefined}
          placeholder="Например, кофейня «Утро»"
        />
        {errors.venue && (
          <p className={styles.error} id="venue-error">
            {errors.venue}
          </p>
        )}
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            Имя контактного лица <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            value={values.name}
            onChange={handleChange}
            autoComplete="name"
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            placeholder="Как к вам обращаться"
          />
          {errors.name && (
            <p className={styles.error} id="name-error">
              {errors.name}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">
            Телефон <span aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
            value={values.phone}
            onChange={handleChange}
            autoComplete="tel"
            aria-required="true"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            placeholder="+7 700 000 00 00"
          />
          {errors.phone && (
            <p className={styles.error} id="phone-error">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          Email <span className={styles.optional}>(необязательно)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          value={values.email}
          onChange={handleChange}
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          placeholder="mail@example.com"
        />
        {errors.email && (
          <p className={styles.error} id="email-error">
            {errors.email}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="comment">
          Комментарий <span className={styles.optional}>(необязательно)</span>
        </label>
        <textarea
          id="comment"
          name="comment"
          rows={4}
          className={`${styles.textarea} ${errors.comment ? styles.inputError : ''}`}
          value={values.comment}
          onChange={handleChange}
          aria-invalid={Boolean(errors.comment)}
          aria-describedby={errors.comment ? 'comment-error' : undefined}
          placeholder="Сколько точек, какие способы обслуживания важны"
        />
        {errors.comment && (
          <p className={styles.error} id="comment-error">
            {errors.comment}
          </p>
        )}
      </div>

      {/* Ловушка для спам-ботов: скрыто от пользователей */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">Не заполняйте это поле</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={handleChange}
        />
      </div>

      <div className={styles.consent}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="consent"
            className={styles.checkbox}
            checked={values.consent}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
          />
          <span>
            Я ознакомился(лась) с{' '}
            <Link to="/privacy" className={styles.inlineLink}>
              Политикой конфиденциальности
            </Link>{' '}
            Bronfood CRM и даю согласие на сбор и обработку персональных данных в указанных целях.{' '}
            <span aria-hidden="true">*</span>
          </span>
        </label>
        <p className={styles.consentNote}>
          Текст согласия:{' '}
          <a
            className={styles.inlineLink}
            href={CONSENT_DOCUMENT.file}
            download={CONSENT_DOCUMENT.downloadName}
          >
            {CONSENT_DOCUMENT.title} (.docx)
          </a>
        </p>
        {errors.consent && (
          <p className={styles.error} id="consent-error">
            {errors.consent}
          </p>
        )}
      </div>

      {submitError && (
        <p className={styles.submitError} role="alert">
          <Icon name="close" size={18} />
          {submitError}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        block
        disabled={isSubmitting}
        icon={<Icon name="arrowRight" size={18} />}
      >
        {isSubmitting ? 'Отправляем…' : 'Отправить заявку'}
      </Button>

      <p className={styles.legal}>
        Отправляя заявку, вы подтверждаете, что ознакомились с условиями публичной оферты и
        правилами обработки персональных данных.
      </p>
    </form>
  );
}

