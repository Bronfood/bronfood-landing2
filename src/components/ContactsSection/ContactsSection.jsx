import React from 'react';
import {
  COMPANY,
  CONSENT_DOCUMENT,
  CONTACTS_SECTION,
  LEGAL_DOCUMENTS,
} from '../../data/content.js';
import ApplicationForm from '../ApplicationForm/ApplicationForm';
import Icon from '../Icon/Icon';
import styles from './ContactsSection.module.scss';

export default function ContactsSection() {
  return (
    <section id="contacts" className={styles.section} aria-labelledby="contacts-title">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 id="contacts-title" className={styles.title}>
            {CONTACTS_SECTION.title}
          </h2>
          <p className={styles.text}>{CONTACTS_SECTION.text}</p>
        </div>

        <div className={styles.layout}>
          <div className={styles.formCol}>
            <ApplicationForm />
          </div>

          <aside className={styles.infoCol} aria-label="Контакты и реквизиты">
            <h3 className={styles.infoTitle}>{CONTACTS_SECTION.requisitesTitle}</h3>

            <ul className={styles.contacts}>
              <li>
                <span className={styles.contactIcon} aria-hidden="true">
                  <Icon name="phone" size={20} />
                </span>
                <span className={styles.contactBody}>
                  <span className={styles.contactLabel}>Телефон</span>
                  <a className={styles.contactValue} href={COMPANY.phoneHref}>
                    {COMPANY.phone}
                  </a>
                </span>
              </li>
              <li>
                <span className={styles.contactIcon} aria-hidden="true">
                  <Icon name="mail" size={20} />
                </span>
                <span className={styles.contactBody}>
                  <span className={styles.contactLabel}>Электронная почта</span>
                  <a className={styles.contactValue} href={COMPANY.emailHref}>
                    {COMPANY.email}
                  </a>
                </span>
              </li>
              <li>
                <span className={styles.contactIcon} aria-hidden="true">
                  <Icon name="globe" size={20} />
                </span>
                <span className={styles.contactBody}>
                  <span className={styles.contactLabel}>Сайт</span>
                  <span className={styles.contactValue}>{COMPANY.site}</span>
                </span>
              </li>
              <li>
                <span className={styles.contactIcon} aria-hidden="true">
                  <Icon name="pin" size={20} />
                </span>
                <span className={styles.contactBody}>
                  <span className={styles.contactLabel}>Адрес</span>
                  <address className={styles.contactValue}>{COMPANY.address}</address>
                </span>
              </li>
            </ul>

            <div className={styles.requisites}>
              <p className={styles.requisiteRow}>
                <span>Наименование</span>
                <strong>{COMPANY.name}</strong>
              </p>
              <p className={styles.requisiteRow}>
                <span>БИН</span>
                <strong>{COMPANY.bin}</strong>
              </p>
            </div>

            <div className={styles.docs}>
              <h4 className={styles.docsTitle}>Документы</h4>
              <ul className={styles.docsList}>
                {LEGAL_DOCUMENTS.map((doc) => (
                  <li key={doc.route}>
                    <a
                      className={styles.docLink}
                      href={doc.file}
                      download={doc.downloadName}
                      aria-label={doc.fileLabel}
                    >
                      <Icon name="download" size={18} />
                      {doc.title} (.docx)
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    className={styles.docLink}
                    href={CONSENT_DOCUMENT.file}
                    download={CONSENT_DOCUMENT.downloadName}
                    aria-label={CONSENT_DOCUMENT.fileLabel}
                  >
                    <Icon name="download" size={18} />
                    {CONSENT_DOCUMENT.title} (.docx)
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
