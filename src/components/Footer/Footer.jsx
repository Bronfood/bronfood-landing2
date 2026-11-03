import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import {
  COMPANY,
  CONSENT_DOCUMENT,
  LEGAL_DOCUMENTS,
  NAV_ITEMS,
} from '../../data/content.js';
import Icon from '../Icon/Icon';
import styles from './Footer.module.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <img className={styles.logo} src={logo} alt="Bronfood" width="150" height="42" />
          <p className={styles.about}>
            Bronfood CRM — веб-система для создания и обработки заказов внутри заведения:
            предзаказы, время доставки, статусы заказов и аналитика продаж.
          </p>
          <p className={styles.legalNote}>
            Сайт описывает программный сервис для заведений общественного питания. Он не является
            сервисом заказа еды для посетителей.
          </p>
        </div>

        <nav className={styles.col} aria-label="Навигация в футере">
          <h2 className={styles.colTitle}>Навигация</h2>
          <ul className={styles.list}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.col}>
          <h2 className={styles.colTitle}>Документы</h2>
          <ul className={styles.list}>
            {LEGAL_DOCUMENTS.map((doc) => (
              <li key={doc.route}>
                <Link to={doc.route} className={styles.link}>
                  {doc.title}
                </Link>
              </li>
            ))}
            <li>
              <a className={styles.link} href={CONSENT_DOCUMENT.file} download={CONSENT_DOCUMENT.downloadName}>
                {CONSENT_DOCUMENT.title}
              </a>
            </li>
            <li>
              <a
                className={styles.linkDownload}
                href={CONSENT_DOCUMENT.file}
                download={CONSENT_DOCUMENT.downloadName}
              >
                <Icon name="download" size={16} />
                {CONSENT_DOCUMENT.fileLabel}
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h2 className={styles.colTitle}>Контакты</h2>
          <ul className={styles.contacts}>
            <li>
              <Icon name="phone" size={18} />
              <a href={COMPANY.phoneHref} className={styles.link}>
                {COMPANY.phone}
              </a>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href={COMPANY.emailHref} className={styles.link}>
                {COMPANY.email}
              </a>
            </li>
            <li>
              <Icon name="globe" size={18} />
              <span>{COMPANY.site}</span>
            </li>
            <li>
              <Icon name="pin" size={18} />
              <address className={styles.address}>{COMPANY.address}</address>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copy}>
            © {year} {COMPANY.name}. БИН {COMPANY.bin}. Все права защищены.
          </p>
          <p className={styles.disclaimer}>
            Все условия оплаты, пробного периода и возврата описаны в публичной оферте и правилах
            оплаты и возврата.
          </p>
        </div>
      </div>
    </footer>
  );
}
