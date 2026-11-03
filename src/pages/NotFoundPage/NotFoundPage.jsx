import React, { useEffect } from 'react';
import Button from '../../components/Button/Button';
import styles from './NotFoundPage.module.scss';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = 'Страница не найдена — Bronfood CRM';
  }, []);

  return (
    <section className={styles.page} aria-labelledby="notfound-title">
      <div className={styles.inner}>
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <h1 id="notfound-title" className={styles.title}>
          Страница не найдена
        </h1>
        <p className={styles.text}>
          Возможно, ссылка устарела или страница была перемещена. Вернитесь на главную или оставьте
          заявку на подключение Bronfood CRM.
        </p>
        <div className={styles.actions}>
          <Button to="/" variant="primary" size="lg">
            На главную
          </Button>
          <Button to="/#contacts" variant="secondary" size="lg">
            Оставить заявку
          </Button>
        </div>
      </div>
    </section>
  );
}
