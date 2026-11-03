import React from 'react';
import { PROCESS_SECTION } from '../../data/content.js';
import Icon from '../Icon/Icon';
import styles from './ProcessSection.module.scss';

export default function ProcessSection() {
  return (
    <section id="process" className={styles.section} aria-labelledby="process-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 id="process-title" className={styles.title}>
            {PROCESS_SECTION.title}
          </h2>
          <p className={styles.text}>{PROCESS_SECTION.text}</p>
        </div>

        <ul className={styles.grid}>
          {PROCESS_SECTION.items.map((item) => (
            <li key={item.title} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                <Icon name={item.icon} size={24} />
              </span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
