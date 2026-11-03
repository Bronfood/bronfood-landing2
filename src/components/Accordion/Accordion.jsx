import React, { useState } from 'react';
import Icon from '../Icon/Icon';
import styles from './Accordion.module.scss';

// =============================================================================
// Доступный аккордеон для блока «Часто задаваемые вопросы».
// =============================================================================

export default function Accordion({ items, idPrefix = 'faq' }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <ul className={styles.list}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${idPrefix}-panel-${index}`;
        const buttonId = `${idPrefix}-button-${index}`;

        return (
          <li key={item.q} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
            <h3 className={styles.questionHeading}>
              <button
                type="button"
                id={buttonId}
                className={styles.question}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span className={styles.questionText}>{item.q}</span>
                <span className={styles.chevron} aria-hidden="true">
                  <Icon name="arrowDown" size={20} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={styles.answer}
              hidden={!isOpen}
            >
              <p className={styles.answerText}>{item.a}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
