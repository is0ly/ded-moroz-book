# ❄️ Жизнь Дедов Морозов — книга на mdBook

Готовый каркас книги для публикации на GitHub Pages. Текст глав — заглушки, пиши в файлах `src/glava-*.md`.

## Структура

```
book.toml            — настройки книги
src/SUMMARY.md       — оглавление (8 глав)
src/glava-01..08.md  — главы (заготовки)
theme/custom.css     — зимнее оформление
theme/snow.js        — падающий снег
.github/workflows/   — автопубликация на GitHub Pages
```

## Как посмотреть локально

1. Установи mdBook: скачай с https://github.com/rust-lang/mdBook/releases (или `brew install mdbook` на Mac).
2. В папке книги: `mdbook serve --open` — книга откроется в браузере и будет обновляться при каждом сохранении.

## Как опубликовать на GitHub

1. Создай репозиторий на github.com (например `ded-moroz-book`).
2. Загрузи в него все файлы этой папки:
   ```
   git init
   git add .
   git commit -m "Книга: каркас"
   git branch -M main
   git remote add origin https://github.com/ВАШ_ЛОГИН/ded-moroz-book.git
   git push -u origin main
   ```
3. В репозитории: **Settings → Pages → Source → GitHub Actions**.
4. Через минуту-две книга появится по адресу `https://ВАШ_ЛОГИН.github.io/ded-moroz-book/` и будет пересобираться при каждом push.

## Как писать главы

Открой `src/glava-01.md` и пиши обычным Markdown под заголовком. Разделитель-снежинки уже вставлен, списки автоматически получают маркеры ❄.
