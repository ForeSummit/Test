// 아주 간단한 JS: 시간 표시 + 테마 토글
document.addEventListener('DOMContentLoaded', () => {
  const nowEl = document.getElementById('now');
  const showTimeBtn = document.getElementById('showTime');
  const toggleThemeBtn = document.getElementById('toggleTheme');

  showTimeBtn.addEventListener('click', () => {
    const d = new Date();
    nowEl.textContent = d.toLocaleString();
  });

  // 테마 상태를 localStorage에 저장
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  toggleThemeBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });
});