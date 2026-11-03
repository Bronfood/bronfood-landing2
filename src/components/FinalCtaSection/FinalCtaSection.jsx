import React from 'react';
import { FINAL_CTA } from '../../data/content.js';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import styles from './FinalCtaSection.module.scss';

export default function FinalCtaSection() {
  return (
    <section className={styles.section} aria-labelledby="final-cta-title">
      <div className={styles.inner}>
        <h2 id="final-cta-title" className={styles.title}>
          {FINAL_CTA.title}
        </h2>
        <p className={styles.text}>{FINAL_CTA.text}</p>
        <Button to="/#contacts" variant="primary" size="lg">
          {FINAL_CTA.cta}
        </Button>
        <p className={styles.note}>
          <Icon name="shield" size={18} />
          {FINAL_CTA.note}
        </p>
      </div>
    </section>
  );
}
