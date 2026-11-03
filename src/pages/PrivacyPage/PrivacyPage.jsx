import React from 'react';
import LegalPage from '../../components/LegalPage/LegalPage';
import { LEGAL_DOCUMENTS } from '../../data/content.js';
import { privacyPolicySections } from '../../data/legal/privacyPolicy.js';

const doc = LEGAL_DOCUMENTS.find((item) => item.route === '/privacy');

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Политика конфиденциальности и обработки персональных данных"
      lead="Порядок обработки и защиты персональных данных при использовании сервиса Bronfood CRM."
      edition="Дата редакции: указывается после согласования и публикации."
      downloadHref={doc?.file}
      downloadName={doc?.downloadName}
      downloadLabel={doc?.fileLabel}
      notice="Документ подготовлен для публикации. Перед публикацией подтвердите фактические процессы обработки данных, инфраструктуру хранения и платёжного провайдера, а также проведите юридическую проверку."
      sections={privacyPolicySections}
    />
  );
}
