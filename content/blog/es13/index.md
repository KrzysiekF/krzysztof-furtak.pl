---
title: ES13
date: "2022-08-17T22:12:03.284Z"
description: "ES13"
---

Przed nami kolejna wersja naszego ulubionego języka programowania. Piszę oczywiście o JavaScript :) Aktualna wersja zatytułowana ECMAScript 2022 (ES13) dostarczyła nam kilku naprawdę fajnych i przydatnych rzeczy.

## 1. Deklaracja pól klasy

Do tej pory jeśli chcieliśmy zdefiniować pole klasy, mogliśmy to zrobić tylko poprzez konstruktor. Czyli ...

```javascript
class Cat {
    constructor() {
        this.name = 'Szarek';
        this.age = 1;
    }
}
```

w ES13 możemy to zrobić w bardziej intuicyjny sposób. Możemy więc napisać:

```javascript
class Cat {
    name = 'Szarek';
    age = 1;
}
```

## 2. Prywatne metody i pola klasy
## 3. Operator await w najwyższym scope'ie