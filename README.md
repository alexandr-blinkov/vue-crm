# vue-crm
## Демо
https://vue-srmsystem.firebaseapp.com/

## Описание 
### Основные возможности
CRM система написанная с помощью Vue. В данном приложении есть:
1) Возможность просмотра курса валют, а также просмотр личныйх средств, в таких валютах как - RUB, USD, GBP (можно кастомизировать, при помощи запросов API)
2) Возможность просмотра истории записей расходов/доходов. Также предусмотрен график расходов/доходов, для более наглядного просмотра.
3) Возможность построения планирования расходов/доходов для конкретной категории.
4) Возможность редактирования и добавления новой категории.
5) Возможность добавления записей расходов/доходов в конкретную категорию.
6) Предусмотрена авторизация и регистрация пользователей.

### Дополнительный возможности
1) Возможность просмотра и редактирования профиля.
2) Возможность выбора языка - ENG/RUS (в данный момент, переведена только небольшая часть приложения)

## Запуск
### Предустановка
Для начала, вам необходимо указать свои данные от Firebase в файле: src -> main.js -> firebase.initializeApp().
Где key - поле которое требуется изменить.
Необходимую информацию вы сможете найти на сайте - https://console.firebase.google.com/
```bash
firebase.initializeApp({
  apiKey: "key",
  authDomain: "key",
  databaseURL: "key",
  projectId: "key",
  storageBucket: "key",
  messagingSenderId: "key",
  appId: "key",
  measurementId: "key"
})
```

### Установка
```bash
# Установка необходимых компонентов
$ npm install

# Для запуска приложения по адресу localhost
$ npm run serve
```

## Изображения
![Счет](https://github.com/alexandr-blinkov/vue-crm/raw/master/public/img/github/1.png)
![История](https://github.com/alexandr-blinkov/vue-crm/raw/master/public/img/github/2.png)
![Планирование](https://github.com/alexandr-blinkov/vue-crm/raw/master/public/img/github/3.png)
![Новая запись](https://github.com/alexandr-blinkov/vue-crm/raw/master/public/img/github/4.png)
![Категории](https://github.com/alexandr-blinkov/vue-crm/raw/master/public/img/github/5.png)
![Профиль](https://github.com/alexandr-blinkov/vue-crm/raw/master/public/img/github/6.png)


