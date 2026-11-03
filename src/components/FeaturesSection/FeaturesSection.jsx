import React from 'react';
import { FEATURES_SECTION } from '../../data/content.js';
import Icon from '../Icon/Icon';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './FeaturesSection.module.scss';

export default function FeaturesSection() {
  return (
    <section id="features" className={`${styles.section}`} aria-labelledby="features-title">
      <div className={styles.inner}>
        <SectionHeading
          id="features-title"
          overline="Возможности"
          title={FEATURES_SECTION.title}
          text={FEATURES_SECTION.text}
        />

        <ul className={styles.grid}>
          {FEATURES_SECTION.items.map((item, index) => (
            <li
              key={item.title}
              className={`${styles.card} ${index === 0 ? styles.cardWide : ''}`}
            >
              <span className={styles.icon} aria-hidden="true">
                <Icon name={item.icon} size={26} />
              </span>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
