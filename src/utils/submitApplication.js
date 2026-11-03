// =============================================================================
// Отправка заявки.
//
// ВАЖНО: реальная интеграция приёма заявок настраивается владельцем.
// Если задана переменная окружения VITE_APPLICATION_ENDPOINT, заявка уходит
// POST-запросом на указанный адрес. Если адрес не задан, форма честно
// открывает почтовый клиент с уже заполненной заявкой (временный сценарий
// без имитации «успешной серверной отправки»).
// =============================================================================

import { APPLICATION_SUBJECT_PREFIX, COMPANY } from '../data/content.js';

const ENDPOINT = import.meta.env.VITE_APPLICATION_ENDPOINT || '';
const WEBHOOK_FORMAT = (import.meta.env.VITE_APPLICATION_FORMAT || 'json').toLowerCase();

export function isEndpointConfigured() {
  return Boolean(ENDPOINT);
}

function buildMessage(payload) {
  const lines = [
    `${APPLICATION_SUBJECT_PREFIX}`,
    '',
    `Заведение / точка: ${payload.venue}`,
    `Контактное лицо: ${payload.name}`,
    `Телефон: ${payload.phone}`,
    `Email: ${payload.email || '—'}`,
    '',
    'Комментарий:',
    payload.comment || '—',
    '',
    `Согласие на обработку персональных данных: да`,
    `Отправлено с сайта: ${COMPANY.site}`,
  ];
  return lines.join('\n');
}

export function buildMailtoLink(payload) {
  const subject = `${APPLICATION_SUBJECT_PREFIX} — ${payload.venue}`;
  const body = buildMessage(payload);
  return `${COMPANY.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Отправляет заявку.
 * @param {object} payload данные формы
 * @returns {Promise<{channel:'endpoint'|'mailto'}>}
 */
export async function submitApplication(payload) {
  const requestBody = {
    ...payload,
    source: 'landing',
    submittedAt: new Date().toISOString(),
  };

  if (ENDPOINT) {
    let response;
    if (WEBHOOK_FORMAT === 'form') {
      const form = new URLSearchParams();
      Object.entries(requestBody).forEach(([key, value]) => {
        form.append(key, String(value ?? ''));
      });
      response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: form.toString(),
      });
    } else {
      response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
    }

    if (!response.ok) {
      throw new Error(`Не удалось отправить заявку (код ${response.status}).`);
    }

    return { channel: 'endpoint' };
  }

  // Временный сценарий: открываем почтовый клиент с готовым письмом.
  const link = buildMailtoLink(payload);
  window.location.href = link;
  return { channel: 'mailto' };
}
