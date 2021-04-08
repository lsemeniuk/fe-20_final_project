# Для начала работы нужно настроить окружение

## Установка Prettier (для vs code, кто на webstorm всё аналогично)

Установите расширение Prettier - Code formatter.

Установите default formater. Чтобы открыть палитру команд, вы можете использовать `COMMAND + SHIFT + P` в macOS или
`CTRL + SHIFT + P` в Windows.\
Выполните в палитре команд поиск по ключевому слову `format` и выберите `Format Document`.\
Возможно, вам будет предложено выбрать формат для использования. Для этого нажмите кнопку Configure. Затем выберите
Prettier - Code Formatter.\
Если вы не видите диалога выбора формата по умолчанию, вы можете вручную изменить его в разделе «Настройки». Установите для
`Editor: Default Formatter` значение `ebsenp.prettier-vscode`.

Установите форматирование кода при сохранении.\
Чтобы изменить эту настройку, нажмите `COMMAND +` в macOS или `CTRL +` в Windows, чтобы открыть меню Settings (Настройки).
Выполните в меню поиск `Editor: Format On Save` и убедитесь, что эта опция включена. Теперь вы можете писать код как обычно,
и он будет автоматически форматироваться при сохранении файла.

Файл .prettirrc

{\
 "printWidth": 120, длина строки - 120 \
 "tabWidth": 2, длина "таба" - 2 пробела\
 "useTabs": false, использовать пробелов вместо табов\
 "semi": true, точка с запятой - нет\
 "singleQuote": true, использовать одинарные кавычки - да!\
 "trailingComma": "es5", запятая в последней строке - да\
 "bracketSpacing": true, пробел между скобками\
 "jsxBracketSameLine": false, закрывающийся jsx в этой же строке\
 }

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

# Непосредственно выполнение задач

## Работа с git

### Разделение на ветки

Для выполнения задачи (блока) от ветки dev ($ git checkout dev) создаём новую ветку с названием описывающим блок либо
задачу ($ git branch name)
[документация git](https://git-scm.com/book/ru/v2/%D0%92%D0%B5%D1%82%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-Git-%D0%9E-%D0%B2%D0%B5%D1%82%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B8-%D0%B2-%D0%B4%D0%B2%D1%83%D1%85-%D1%81%D0%BB%D0%BE%D0%B2%D0%B0%D1%85)

### Pull request

Прямые коммиты в ветку master **ЗАПРЕЩЕНЫ!**\
Слияние выполняем с веткой `dev`. Pull request - это запрос на слияние вашей ветки в ветку `dev`. Для слияния в основную
ветку dev нужно два Approve от учасников команды. Поэтому после создания Pull request обязательно пишите в ощий чат. [Как выполнять Pull request](https://dan-it.gitlab.io/fe-book/final-project/pull_request.html)

Прошу качественно просматривать Pull request для улучшения качества кода. Все мы учимся, даже професионалы допускают
ошибки. [видеоматериал](https://www.youtube.com/watch?v=U4uLZkMAzr0)
