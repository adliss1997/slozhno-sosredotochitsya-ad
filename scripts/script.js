document.addEventListener('DOMContentLoaded', () => {
  const themeButtons = document.querySelectorAll('.header__theme-menu-button');
  const html = document.documentElement;

  // Функция для установки темы
  function setTheme(themeName) {
    // Удаляем все классы тем
    html.classList.remove('theme-light', 'theme-dark', 'theme-auto');
    
    // Добавляем нужный класс
    html.classList.add(`theme-${themeName}`);
    
    // Обновляем активные кнопки
    themeButtons.forEach(button => {
      button.classList.remove('header__theme-menu-button_active');
    });
    
    // Активируем текущую кнопку
    const activeButton = document.querySelector(`[data-theme="${themeName}"]`);
    if (activeButton) {
      activeButton.classList.add('header__theme-menu-button_active');
    }
  }

  // Обработчики кликов для кнопок
  themeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const themeType = button.getAttribute('data-theme');
      setTheme(themeType);
    });
  });

  // Инициализация темы при загрузке
  function initTheme() {
    // Проверяем, есть ли уже установленная тема
    if (html.classList.contains('theme-light')) {
      setTheme('light');
    } else if (html.classList.contains('theme-dark')) {
      setTheme('dark');
    } else if (html.classList.contains('theme-auto')) {
      setTheme('auto');
    } else {
      // Если тема не установлена, используем авто
      setTheme('auto');
    }
  }

  initTheme();
});
