
# 🎥 Universal Embedded Video Player (v8 – Fullscreen & Layout Fix)

## 💡 Цель

Реализовать корректное поведение fullscreen-режима и выровнять визуальное поведение плеера. Сейчас fullscreen работает технически, но не масштабирует видео и не центрирует контролы.

---

## 🔧 Проблемы, которые нужно устранить

### 1. ❌ Fullscreen:
- Видео не растягивается на весь экран
- Контейнер не фиксируется поверх всего (нет `position: fixed`)
- Контролы остаются прижатыми к левому краю
- Контент fullscreen не центрирован

### 2. ❌ Нет адаптации классов под `isFullscreen`:
- Используется один layout
- Нужно переключать `className` в зависимости от состояния

### 3. ❌ Контролы UI:
- Не закреплены снизу
- Не адаптированы под fullscreen
- Не выделяются на фоне (нет прозрачной подложки)

---

## ✅ Что нужно сделать

### Fullscreen-режим:
- Контейнер `div` в `isFullscreen`:
  - `position: fixed; top: 0; left: 0; z-index: 50;`
  - `width: 100vw; height: 100vh;`
  - `display: flex; justify-center; items-center`
- Видео:
  - `w-screen h-screen object-contain` (или `cover`)
- Контролы:
  - Либо `fixed bottom-0`, либо внутри контейнера, но по центру

### Обычный режим:
- Контейнер: `max-w-5xl mx-auto bg-black bg-opacity-70`
- Видео: `w-full h-auto`

---

## 🧱 Компоненты

- `VideoPlayer.jsx`: логика и layout fullscreen
- `Controls.jsx`, `VolumeSlider.jsx`, `FullscreenButton.jsx`: сохранить, но стилизовать
- `index.css`: глобальный сброс, базовые стили

---

## 💡 Пример className переключения:

```jsx
<div className={isFullscreen ? 'fixed w-screen h-screen ...' : 'max-w-5xl mx-auto ...'}>
```

---

## 🛠 Stack

- React + Vite
- Tailwind CSS
- Без сторонних библиотек

---

## 🚀 Запуск

```bash
npm install
npm run dev
```
