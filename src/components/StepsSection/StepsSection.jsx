import React from 'react';
import { STEPS_SECTION } from '../../data/content.js';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './StepsSection.module.scss';

export default function StepsSection() {
  return (
    <section id="how" className={styles.section} aria-labelledby="how-title">
      <div className={styles.inner}>
        <SectionHeading id="how-title" overline="Как это работает" title={STEPS_SECTION.title} />

        <ol className={styles.steps}>
          {STEPS_SECTION.steps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.number} aria-hidden="true">
                {index + 1}
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </li>
          ))}
        </ol>

        <div className={styles.note}>
          <p className={styles.noteText}>
            Оставьте заявку — мы поможем настроить точку и первый заказ. Если самостоятельная
            регистрация ещё не работает, кнопка ведёт на форму заявки, а не имитирует регистрацию.
          </p>
          <Button to="/#contacts" variant="primary" size="md" icon={<Icon name="arrowRight" size={18} />}>
            Оставить заявку
          </Button>
        </div>
      </div>
    </section>
  );
}
