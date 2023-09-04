# Asteroid Watch

The app is based on NextJS 13.
There are three pages. The homepage lists a number of asteroids and corresponding data fetched from NASA Asteroids - NeoWs API. You can аdd any asteroid to cart for subsequent destruction by ARMAGEDDON team. The data is loaded on scrolling until there is nothing more to fetch. You can look through details about the asteroid, including its name, diameter, distance to earth (switch between km / lunar MU), maximum approach data and hazard status. Clicking on the asteroid name will bring you to the asteroid page, where the entire approach data alongside the asteroid details are listed. The cart panel to the right of the page is designed to confirm the order and upon clicking on the button you will find yourself on the order page. From there you can browse through the list of added asteroids.
The layout is responsive and has cross-browser support.

## Install:

```
make install
```

### Compile and run in dev mode

```
make dev
```

### Build for production

```
make build
```

### Lint and fix files

```
make lint
```

### Run tests

```
make test
```

### Stack:

- Typescript
- Next 13
- Sass
- Jest
- Eslint

---

Приложение написано на NextJS 13.
На главной странице представлен список атероидов с соответствующими данными, полученными с NASA Asteroids - NeoWs API. Добавляйте астеройды в корзину для последующего уничтожения командой ARMAGEDDON. Данные подгружаются порциями при прокрутке до того момента, пока подгружать будет нечего. Просматривайте подробную информацию об астероиде, включая его название, диаметр, расстояние до земли (можно переключаться между ЕИ в км / лунных орбитах), время и дату максимального сближения, а также статус угрозы. По нажатию на названии астрероида вы перейдете на страницу астероида, где представлена вся информация о его сближениях с и о самом астероиде. Корзина в правой части страницы предназначена для подтверждения заказа, и по нажатию на кнопку отправки открывается страница успешного заказа, где перечислены заказанные сближения.
У приложения адаптивная и кроссбраузерная верстка.

## Установка:

```
make install
```

### Запуск в режиме разработки

```
make dev
```

### Сборка для продакшена

```
make build
```

### Запуск линтера и исправление ошибок

```
make lint
```

### Запуск тестов

```
make test
```
### Используемый стек:

- Typescript
- Next 13
- Sass
- Jest
- Eslint
