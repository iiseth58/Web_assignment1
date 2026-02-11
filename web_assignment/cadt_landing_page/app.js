// Footer year
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn?.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden');
  menuBtn.setAttribute('aria-expanded', String(!isOpen));
});

// Theme toggle with persistence
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

// Load saved preference
const saved = localStorage.getItem('theme');
if (saved === 'dark') {
  root.classList.add('dark');
  if (themeToggle) themeToggle.textContent = '☀️';
}

// Toggle on click
themeToggle?.addEventListener('click', () => {
  const isDark = root.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
});