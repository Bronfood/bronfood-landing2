import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY } from '../../data/content.js';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import styles from './SuccessPage.module.scss';

export default function SuccessPage() {
  const location = useLocation();
  const state = location.state || {};
  const isMailto = state.channel === 'mailto';
  const venue = state.venue;

  useEffect(() => {
    document.title = 'Спасибо за заявку — Bronfood CRM';
  }, []);

  return (
    <section className={styles.page} aria-labelledby="success-title">
      <div className={styles.inner}>
        <span className={styles.iconWrap} aria-hidden="true">
          <Icon name="check" size={40} strokeWidth={2.2} />
        </span>

        <h1 id="success-title" className={styles.title}>
          Спасибо! Заявка отправлена.
        </h1>
        <p className={styles.text}>
          Команда Bronfood свяжется с вами по указанным контактам.
          {venue ? ` Мы получили заявку по заведению «${venue}».` : ''}
        </p>

        {isMailto && (
          <div className={styles.note} role="status">
            <Icon name="mail" size={20} />
            <p className={styles.noteText}>
              Мы открыли ваш почтовый клиент с уже заполненным письмом. Если окно не открылось,
              отправьте заявку на{' '}
              <a href={COMPANY.emailHref} className={styles.link}>
                {COMPANY.email}
              </a>{' '}
              или позвоните по номеру{' '}
              <a href={COMPANY.phoneHref} className={styles.link}>
                {COMPANY.phone}
              </a>
              .
            </p>
          </div>
        )}

        <div className={styles.actions}>
          <Button to="/" variant="primary" size="lg">
            Вернуться на главную
          </Button>
          <Button to="/#features" variant="secondary" size="lg">
            Посмотреть возможности
          </Button>
        </div>

        <p className={styles.help}>
          Нужна помощь с подключением?{' '}
          <Link to="/#contacts" className={styles.link}>
            Перейти в раздел контактов
          </Link>
        </p>
      </div>
    </section>
  );
}
