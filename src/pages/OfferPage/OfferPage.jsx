import React from 'react';
import LegalPage from '../../components/LegalPage/LegalPage';
import { LEGAL_DOCUMENTS } from '../../data/content.js';
import { publicOfferSections } from '../../data/legal/publicOffer.js';

const doc = LEGAL_DOCUMENTS.find((item) => item.route === '/offer');

export default function OfferPage() {
  return (
    <LegalPage
      title="Публичная оферта"
      lead="Условия предоставления доступа к программному сервису Bronfood CRM для заведений общественного питания."
      edition="Дата редакции: указывается после согласования и публикации."
      downloadHref={doc?.file}
      downloadName={doc?.downloadName}
      downloadLabel={doc?.fileLabel}
      notice="Документ подготовлен для публикации. Перед публикацией оферта согласовывается с юристом и платёжным провайдером. Условия тарифа, пробного периода и оплаты приведены в соответствие с фактической работой сервиса."
      sections={publicOfferSections}
    />
  );
}
