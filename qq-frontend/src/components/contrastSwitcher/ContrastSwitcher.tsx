import { useEffect, useState } from 'react';

import styles from './ContrastSwitcher.module.css';

function ContrastSwitcher() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState(prefersDark);

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <button className={styles.switcher} aria-label="Переключить режим" onClick={() => setDarkMode(!darkMode)}>
      <i>{darkMode ? 'Светлый' : 'Темный'} режим</i>
    </button>
  );
}

export default ContrastSwitcher;
