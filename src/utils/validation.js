// =============================================================================
// Валидация формы заявки (ТЗ, п. 8.1)
// =============================================================================

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
const PHONE_DIGITS = /\d/g;

/**
 * Проверяет телефон: допускает цифры, пробелы и символы + ( ) -,
 * требует не менее 10 цифр.
 */
export function isValidPhone(value) {
  const trimmed = String(value || '').trim();
  if (!/^[+\d\s()-]+$/.test(trimmed)) {
    return false;
  }
  const digits = (trimmed.match(PHONE_DIGITS) || []).length;
  return digits >= 10 && digits <= 15;
}

/**
 * Валидирует все поля формы заявки.
 * @param {{venue:string,name:string,phone:string,email:string,comment:string,consent:boolean}} values
 * @returns {Record<string,string>} объект с ошибками по полям (пустой, если всё верно)
 */
export function validateApplicationForm(values) {
  const errors = {};

  const venue = String(values.venue || '').trim();
  if (!venue) {
    errors.venue = 'Укажите название заведения или точки.';
  } else if (venue.length < 2) {
    errors.venue = 'Название слишком короткое.';
  } else if (venue.length > 120) {
    errors.venue = 'Название слишком длинное (максимум 120 символов).';
  }

  const name = String(values.name || '').trim();
  if (!name) {
    errors.name = 'Укажите имя контактного лица.';
  } else if (name.length < 2) {
    errors.name = 'Имя слишком короткое.';
  } else if (name.length > 80) {
    errors.name = 'Имя слишком длинное (максимум 80 символов).';
  }

  if (!String(values.phone || '').trim()) {
    errors.phone = 'Укажите телефон для связи.';
  } else if (!isValidPhone(values.phone)) {
    errors.phone = 'Проверьте телефон: используйте цифры и символы + ( ) -.';
  }

  const email = String(values.email || '').trim();
  if (email && !EMAIL_PATTERN.test(email)) {
    errors.email = 'Проверьте адрес электронной почты.';
  }

  const comment = String(values.comment || '').trim();
  if (comment.length > 1000) {
    errors.comment = 'Комментарий слишком длинный (максимум 1000 символов).';
  }

  if (!values.consent) {
    errors.consent = 'Необходимо согласие на обработку персональных данных.';
  }

  return errors;
}

/**
 * Проверка «ловушки» для спам-ботов: скрытое поле должно остаться пустым,
 * а форма заполняться не мгновенно.
 */
export function looksLikeSpam(values, elapsedMs) {
  if (values.website) {
    return true;
  }
  return typeof elapsedMs === 'number' && elapsedMs > 0 && elapsedMs < 1500;
}
