import React from 'react';
import { FAQ_SECTION } from '../../data/content.js';
import Accordion from '../Accordion/Accordion';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './FaqSection.module.scss';

export default function FaqSection() {
  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-title">
      <div className={styles.inner}>
        <SectionHeading id="faq-title" overline="Вопросы" title={FAQ_SECTION.title} />
        <Accordion items={FAQ_SECTION.items} idPrefix="faq" />
      </div>
    </section>
  );
}
