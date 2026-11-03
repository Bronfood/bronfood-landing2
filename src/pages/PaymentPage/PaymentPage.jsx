import React from 'react';
import LegalPage from '../../components/LegalPage/LegalPage';
import { LEGAL_DOCUMENTS } from '../../data/content.js';
import { paymentRulesSections } from '../../data/legal/paymentRules.js';

const doc = LEGAL_DOCUMENTS.find((item) => item.route === '/payment');

export default function PaymentPage() {
  return (
    <LegalPage
      title="Порядок оплаты и возврата"
      lead="Правила оплаты услуг Bronfood CRM и рассмотрения обращений о возврате средств, внесённых для оплаты использования CRM."
      edition="Дата редакции: указывается после согласования и публикации."
      downloadHref={doc?.file}
      downloadName={doc?.downloadName}
      downloadLabel={doc?.fileLabel}
      notice="Документ относится только к услугам программного сервиса Bronfood CRM и не регулирует покупку еды, доставку или расчёты между покупателями и заведениями."
      sections={paymentRulesSections}
    />
  );
}
