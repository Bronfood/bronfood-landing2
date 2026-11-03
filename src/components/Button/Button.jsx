import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

// =============================================================================
// Универсальная кнопка/ссылка.
//   to   -> внутренняя навигация (react-router Link)
//   href -> обычная ссылка (tel:, mailto:, внешняя, якорь)
//   иначе -> <button>
// =============================================================================

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  block = false,
  className = '',
  type = 'button',
  icon = null,
  iconPosition = 'right',
  ...rest
}) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    block ? styles.block : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <span className={styles.label}>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
