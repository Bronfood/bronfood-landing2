import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// =============================================================================
// Управляет прокруткой: при смене маршрута — наверх,
// при наличии якоря (#id) — к соответствующему элементу.
// =============================================================================

export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let frame = 0;
      let timeout = 0;

      const scrollToId = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };

      // Ждём отрисовки целевого маршрута
      frame = window.requestAnimationFrame(() => {
        if (!scrollToId()) {
          timeout = window.setTimeout(scrollToId, 120);
        }
      });

      return () => {
        window.cancelAnimationFrame(frame);
        window.clearTimeout(timeout);
      };
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    return undefined;
  }, [pathname, hash]);

  return null;
}
