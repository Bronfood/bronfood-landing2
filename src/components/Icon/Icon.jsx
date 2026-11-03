import React from 'react';

// =============================================================================
// Набор простых SVG-иконок интерфейса Bronfood CRM.
// Иконки декоративные: смысл передаётся текстом рядом.
// =============================================================================

const ICONS = {
  inbox: (
    <path d="M3 13h4l1.6 2.6h6.8L17 13h4M5 5h14l2 8v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5l2-8Z" />
  ),
  status: (
    <>
      <circle cx="6" cy="6.5" r="2.2" />
      <circle cx="6" cy="17.5" r="2.2" />
      <path d="M6 8.7v6.6M11 6.5h9M11 17.5h9M11 12h6" />
    </>
  ),
  bell: (
    <path d="M18 15.5H6l1.3-2.2V9a4.7 4.7 0 0 1 9.4 0v4.3L18 15.5ZM10 18.5a2 2 0 0 0 4 0" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  chart: (
    <path d="M4 20V4M4 20h16M8 20v-6M12.5 20v-9M17 20V8" />
  ),
  layers: (
    <>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
      <path d="m4.6 12.2 7.4 3.9 7.4-3.9M4.6 16.4l7.4 3.9 7.4-3.9" />
    </>
  ),
  plus: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  coffee: (
    <path d="M5 8h11v6.5a4.5 4.5 0 0 1-4.5 4.5h-2A4.5 4.5 0 0 1 5 14.5V8Zm11 1h1.8a2.7 2.7 0 0 1 0 5.4H16M4 21h13" />
  ),
  cafe: (
    <>
      <path d="M7 3v8M11 3v8M7 7h4M3.5 14h13" />
      <path d="M5 14a6 6 0 0 0 10 0" />
    </>
  ),
  fastfood: (
    <>
      <path d="M4 9.5a8 8 0 0 1 16 0H4Z" />
      <path d="M4 12.5h16M4 15.5h16" />
    </>
  ),
  restaurant: (
    <>
      <path d="M7 3v7a2.5 2.5 0 0 0 5 0V3M9.5 3v18" />
      <path d="M17 3c-1.6 1.6-2 3.4-2 5.5S15.7 12 17 12.5V21" />
    </>
  ),
  check: <path d="m4.5 12.5 4.5 4.5 10-10" />,
  arrowRight: <path d="M5 12h13m-5-6 6 6-6 6" />,
  arrowDown: <path d="M12 5v13m-6-6 6 6 6-6" />,
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 5.6 5.6l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6.5-5.4 6.5-10.5A6.5 6.5 0 0 0 5.5 10.5C5.5 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.2 2.3 3.3 5.3 3.3 8.5S14.2 18.2 12 20.5c-2.2-2.3-3.3-5.3-3.3-8.5S9.8 5.8 12 3.5Z" />
    </>
  ),
  download: <path d="M12 4v10m0 0 4-4m-4 4-4-4M5 19h14" />,
  doc: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 5 6v6c0 4.2 3 7.4 7 8.5 4-1.1 7-4.3 7-8.5V6l-7-2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

export default function Icon({ name, size = 24, className, strokeWidth = 1.8, ...rest }) {
  const content = ICONS[name];
  if (!content) {
    return null;
  }

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {content}
    </svg>
  );
}
