import React from 'react';
import { AUDIENCE_SECTION } from '../../data/content.js';
import Icon from '../Icon/Icon';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './AudienceSection.module.scss';

export default function AudienceSection() {
  return (
    <section id="audience" className={styles.section} aria-labelledby="audience-title">
      <div className={styles.inner}>
        <SectionHeading
          id="audience-title"
          overline="Для кого подходит"
          title={AUDIENCE_SECTION.title}
          text={AUDIENCE_SECTION.text}
        />

        <ul className={styles.grid}>
          {AUDIENCE_SECTION.cards.map((card) => (
            <li key={card.title} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                <Icon name={card.icon} size={28} />
              </span>
              <h3 className={styles.cardTitle}>{card.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
