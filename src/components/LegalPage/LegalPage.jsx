import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import styles from './LegalPage.module.scss';

// =============================================================================
// Универсальный шаблон юридической страницы:
// заголовок, шапка с датой, кнопка скачивания и блоки документа.
// =============================================================================

function renderBlock(block, index) {
  if (block.type === 'list') {
    const ListTag = block.ordered ? 'ol' : 'ul';
    return (
      <ListTag key={index} className={block.ordered ? styles.ol : styles.ul}>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ListTag>
    );
  }

  return (
    <p key={index} className={styles.paragraph}>
      {block.text}
    </p>
  );
}

export default function LegalPage({
  title,
  lead,
  edition,
  downloadHref,
  downloadName,
  downloadLabel,
  notice,
  sections,
}) {
  return (
    <article className={styles.page}>
      <div className={styles.inner}>
        <nav className={styles.breadcrumbs} aria-label="Навигация по сайту">
          <Link to="/">Главная</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{title}</span>
        </nav>

        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          {lead && <p className={styles.lead}>{lead}</p>}
          <p className={styles.edition}>{edition}</p>
          {downloadHref && (
            <Button
              href={downloadHref}
              download={downloadName}
              variant="secondary"
              size="md"
              icon={<Icon name="download" size={18} />}
            >
              {downloadLabel}
            </Button>
          )}
        </header>

        {notice && (
          <p className={styles.notice}>
            <Icon name="doc" size={20} />
            <span>{notice}</span>
          </p>
        )}

        <div className={styles.content}>
          {sections.map((section) => (
            <section key={section.title} className={styles.section} aria-labelledby={section.id}>
              <h2 id={section.id} className={styles.sectionTitle}>
                {section.title}
              </h2>
              {section.blocks.map(renderBlock)}
            </section>
          ))}
        </div>

        <div className={styles.footerLinks}>
          <Link to="/" className={styles.backLink}>
            <Icon name="arrowRight" size={18} />
            Вернуться на главную
          </Link>
          <Link to="/#contacts" className={styles.backLinkSecondary}>
            Оставить заявку на подключение
          </Link>
        </div>
      </div>
    </article>
  );
}
