import React from 'react';
import Icon from '../Icon/Icon';
import styles from './HeroMockup.module.scss';

// =============================================================================
// Иллюстративный макет рабочего интерфейса CRM (очередь заказов).
// Это схематичный плейсхолдер: его следует заменить реальным скриншотом
// интерфейса Bronfood CRM (без карты и витрины для посетителей).
// =============================================================================

const ORDERS = [
  {
    id: '#1024',
    type: 'Доставка',
    status: 'Готовится',
    statusTone: 'progress',
    time: 'Доставка к 18:30',
    icon: 'clock',
  },
  {
    id: '#1025',
    type: 'Самовывоз',
    status: 'Новый',
    statusTone: 'new',
    time: 'Создан 2 мин назад',
    icon: 'plus',
  },
  {
    id: '#1026',
    type: 'Обслуживание в зале',
    status: 'Предзаказ',
    statusTone: 'preorder',
    time: 'Начало приготовления в 19:00',
    icon: 'bell',
  },
];

export default function HeroMockup() {
  return (
    <div className={styles.wrap} role="img" aria-label="Схематичный вид очереди заказов в Bronfood CRM">
      <div className={styles.device}>
        <div className={styles.topbar}>
          <span className={styles.dots} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className={styles.screenTitle}>Очередь заказов</span>
          <span className={styles.pill}>Активная точка</span>
        </div>

        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <span className={styles.statValue}>12</span>
            <span className={styles.statLabel}>заказов сегодня</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>3</span>
            <span className={styles.statLabel}>предзаказа</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>18:30</span>
            <span className={styles.statLabel}>ближайшая доставка</span>
          </div>
        </div>

        <ul className={styles.orders}>
          {ORDERS.map((order) => (
            <li key={order.id} className={styles.order}>
              <span className={styles.orderIcon} aria-hidden="true">
                <Icon name={order.icon} size={18} />
              </span>
              <span className={styles.orderBody}>
                <span className={styles.orderTop}>
                  <strong className={styles.orderId}>{order.id}</strong>
                  <span className={styles.orderType}>{order.type}</span>
                </span>
                <span className={styles.orderTime}>{order.time}</span>
              </span>
              <span className={`${styles.status} ${styles[order.statusTone]}`}>
                {order.status}
              </span>
            </li>
          ))}
        </ul>

        <div className={styles.footerRow}>
          <span className={styles.footerHint}>
            <Icon name="chart" size={16} />
            Аналитика продаж
          </span>
          <span className={styles.footerHint}>
            <Icon name="status" size={16} />
            Статусы заказов
          </span>
        </div>
      </div>
    </div>
  );
}
