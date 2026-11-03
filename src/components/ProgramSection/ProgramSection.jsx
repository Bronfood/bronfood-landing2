import React from 'react';
import { PROGRAM_SECTION } from '../../data/content.js';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import styles from './ProgramSection.module.scss';

export default function ProgramSection() {
  return (
    <section id="program" className={styles.section} aria-labelledby="program-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.badge}>Программа первых 100 клиентов</p>
          <h2 id="program-title" className={styles.title}>
            {PROGRAM_SECTION.title}
          </h2>
          <p className={styles.text}>{PROGRAM_SECTION.text}</p>

          <ul className={styles.list}>
            {PROGRAM_SECTION.points.map((point) => (
              <li key={point}>
                <Icon name="check" size={18} />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Button to="/#contacts" variant="light" size="lg">
              {PROGRAM_SECTION.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
