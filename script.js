(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');

 
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem('manga-theme');
  } catch {

  }

  if (savedTheme === 'light' || savedTheme === 'dark') {
    root.dataset.theme = savedTheme;
  }

  const updateThemeButton = () => {
    const isLight = root.dataset.theme === 'light';
    themeButton.setAttribute('aria-label', isLight ? 'Chuyển sang giao diện tối' : 'Chuyển sang giao diện sáng');
    themeButton.setAttribute('aria-pressed', String(isLight));
  };

  updateThemeButton();

  themeButton.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = nextTheme;

    try {
      localStorage.setItem('manga-theme', nextTheme);
    } catch {
    
    }

    updateThemeButton();
  });
})();
