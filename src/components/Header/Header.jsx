import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { NAV_ITEMS } from '../../data/content.js';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import styles from './Header.module.scss';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Закрываем меню при смене маршрута
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  // Блокируем прокрутку и закрываем меню по Escape, когда открыто мобильное меню
  useEffect(() => {
    if (!isOpen) {
      document.body.classList.remove('is-locked');
      return undefined;
    }

    document.body.classList.add('is-locked');
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.classList.remove('is-locked');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} aria-label="Bronfood CRM — на главную страницу">
          <img src={logo} alt="Bronfood" width="150" height="42" />
        </Link>

        <nav className={styles.nav} aria-label="Основное меню">
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button
            to="/#contacts"
            variant="primary"
            size="sm"
            className={styles.cta}
            icon={<Icon name="arrowRight" size={18} />}
          >
            Подключить CRM
          </Button>

          <button
            type="button"
            className={styles.burger}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Icon name={isOpen ? 'close' : 'menu'} size={26} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}
        hidden={!isOpen}
      >
        <nav aria-label="Мобильное меню">
          <ul className={styles.mobileList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className={styles.mobileLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button to="/#contacts" variant="primary" size="lg" block>
          Подключить CRM
        </Button>
      </div>
    </header>
  );
}
