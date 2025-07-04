
# 🎥 Universal Embedded Video Player (v9 – Fullscreen Fixes Only)

## ❗ Проблема

Fullscreen не работает корректно:
- Контейнер не занимает весь экран
- Видео не растягивается на весь экран
- Контент остаётся прижат к левому краю
- Нет адаптации className по isFullscreen

---

## ✅ Что нужно реализовать

### Fullscreen layout:
- Контейнер:
  ```js
  className={isFullscreen
    ? "fixed top-0 left-0 z-50 w-screen h-screen bg-black flex flex-col justify-center items-center"
    : "max-w-5xl mx-auto bg-black bg-opacity-70 p-4 rounded-lg flex flex-col items-center"}
  ```

- Видео:
  ```js
  className={isFullscreen
    ? "w-screen h-screen object-contain"
    : "w-full h-auto"}
  ```

- Контролы (под видео или fixed снизу):
  ```js
  className="flex items-center justify-between w-full mt-2 bg-black/60 p-2 rounded-md"
  ```

---

## 💡 Стек:
- React
- Tailwind CSS
