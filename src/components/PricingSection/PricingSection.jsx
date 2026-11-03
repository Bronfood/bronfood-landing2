import React from 'react';
import { Link } from 'react-router-dom';
import { LEGAL_DOCUMENTS, PRICING_SECTION } from '../../data/content.js';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './PricingSection.module.scss';

export default function PricingSection() {
  return (
    <section id="pricing" className={styles.section} aria-labelledby="pricing-title">
      <div className={styles.inner}>
        <SectionHeading
          id="pricing-title"
          overline="Стоимость"
          title={PRICING_SECTION.title}
        />

        <div className={styles.layout}>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <h3 className={styles.planName}>{PRICING_SECTION.planName}</h3>
              <p className={styles.priceLine}>
                <span className={styles.price}>{PRICING_SECTION.price}</span>
                <span className={styles.priceUnit}>{PRICING_SECTION.priceUnit}</span>
              </p>
              <p className={styles.equivalent}>{PRICING_SECTION.equivalent}</p>
            </div>

            <p className={styles.cardNote}>{PRICING_SECTION.note}</p>

            <h4 className={styles.listTitle}>{PRICING_SECTION.includedTitle}</h4>
            <ul className={styles.included}>
              {PRICING_SECTION.included.map((item) => (
                <li key={item}>
                  <Icon name="check" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button to="/#contacts" variant="primary" size="lg" block>
              {PRICING_SECTION.cta}
            </Button>
          </div>

          <div className={styles.side}>
            <div className={styles.panel}>
              <h3 className={styles.panelTitle}>{PRICING_SECTION.paymentTitle}</h3>
              <p className={styles.panelText}>{PRICING_SECTION.paymentText}</p>
              <p className={styles.panelNote}>{PRICING_SECTION.ctaNote}</p>
              <ul className={styles.docLinks}>
                {LEGAL_DOCUMENTS.map((doc) => (
                  <li key={doc.route}>
                    <Link to={doc.route} className={styles.docLink}>
                      <Icon name="doc" size={18} />
                      {doc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <p className={styles.disclaimer}>
              Указанные условия носят информационный характер. Порядок оплаты, тарификации и возврата
              определяется публичной офертой и правилами оплаты и возврата.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
