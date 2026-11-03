import React from 'react';
import styles from './SectionHeading.module.scss';

// =============================================================================
// Заголовок секции: надзаголовок + h2 + описание.
// =============================================================================

export default function SectionHeading({ overline, title, text, align = 'center', id, as = 'h2' }) {
  const Heading = as;

  return (
    <div className={`${styles.heading} ${styles[align]}`}>
      {overline && <p className={styles.overline}>{overline}</p>}
      <Heading id={id} className={styles.title}>
        {title}
      </Heading>
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
}
