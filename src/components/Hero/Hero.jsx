import React from 'react';
import { HERO, PRICING_SECTION } from '../../data/content.js';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import HeroMockup from '../HeroMockup/HeroMockup';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.overline}>{HERO.overline}</p>
          <h1 id="hero-title" className={styles.title}>
            {HERO.title}
          </h1>
          <p className={styles.subtitle}>{HERO.subtitle}</p>

          <ul className={styles.highlights}>
            {HERO.highlights.map((item) => (
              <li key={item}>
                <Icon name="check" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Button to="/#contacts" variant="primary" size="lg">
              {HERO.primaryCta}
            </Button>
            <Button to="/#features" variant="secondary" size="lg">
              {HERO.secondaryCta}
            </Button>
          </div>

          <p className={styles.note}>
            <Icon name="shield" size={18} />
            {HERO.note}
          </p>

          <p className={styles.priceNote}>
            Тариф: {PRICING_SECTION.price} {PRICING_SECTION.priceUnit}.
          </p>
        </div>

        <div className={styles.visual}>
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
