---
title: 8 nowości w ECMAScript 2022 (ES13), o których powinieneś wiedzieć
date: "2022-08-17T22:12:03.284Z"
description: "W artykule opisuje 8 nowości, które pojawiły się w ECMAScript 2022 (ES13). Deklaracja pól klas, Prywatne metody i pola klasy, Operator await, Statyczne pola klas oraz statyczne prywatne metody, Statyczne bloki klas, Metoda at(), Metoda Object.hasOwn(), Metody findLast oraz findLastIndex"
---

Przed nami kolejna wersja naszego ulubionego języka programowania. Piszę oczywiście o **JavaScript** 😉 Aktualna wersja zatytułowana **ECMAScript 2022** (**ES13**) dostarczyła nam kilku naprawdę fajnych i przydatnych rzeczy. To lecimy ...

## 1. Deklaracja pól klas

Do tej pory jeśli chcieliśmy zdefiniować **pole klasy**, mogliśmy to zrobić tylko poprzez **konstruktor**. Czyli ...

```javascript
class Cat {
    constructor() {
        this.name = 'Szarek';
        this.age = 1;
    }
}
```

w **ES13** możemy to zrobić w bardziej intuicyjny sposób. Możemy więc napisać:

```javascript
class Cat {
    name = 'Szarek';
    age = 1;
}
```

## 2. Prywatne metody i pola klasy

W JavaScript przy posługiwaniu się klasami nie mieliśmy możliwości tworzenia prywatnych pól klas ani prywatnych metod. Można było stosować konwencję, która mówiła, że prywatne "rzeczy" wyróżniamy przedrostkiem `_`. Wyglądało to w ten sposób:

```javascript
class Cat {
    _name = 'Szarek';
    _age = 1;
    
    _getName() {
        return this._name;
    }
}
```

Jednak w zachowaniu kodu nie miało to żadnego odzwierciedlenia. Więc jeśli spróbowaliśmy pobrać wartość bezpośrednio z pola klasy:

```javascript
const cat = new Cat();
console.log(cat._name); // -> 'Szarek'
```

... dostaliśmy bez problemu wartość pola. Z pomocą śpieszy nam oczywiście **ECMAScript 2022** 🙂 Wprowadza ona **prywatne pola klas** oraz **prywatne metody**!

**Prywatne metody** oraz **prywatne pola klas** definiujemy od tej wersji za pomocą przedrostka `#` Czyli nasz kod wyglądałby w ten sposób:

```javascript
class Cat {
    #name = 'Szarek';
    #age = 1;
    
    #getName() {
        return this.#name;
    }
    
    getAge() {
        return this.#age;
    }
}
```

I teraz jeśli próbujemy się dostać do **prywatnego pola klasy**:

```javascript
console.log(cat.#name); // -> SyntaxError: Private name #name is not defined.
```

do **metody prywatnej**:

```javascript
console.log(cat.getName()); // -> TypeError: cat.getName is not a function
```

no i do **metody publicznej**:

```javascript
console.log(cat.getAge()); // -> 1 
```

... tak jak byśmy tego oczekiwali, dostajemy wartość. 

## 3. Operator `await` w najwyższym `scope'ie`

Temat dotyczy kombinacji operatorów **`async` - `await`**. Jeśli jeszcze nie do końca kojarzysz temat to zapraszam do <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=YIKVZ8jkZuk">mojego materiału na YT</a>, w którym wyjaśniam "z czym to się je" 😉 

W skrócie - operatora **`await`** nie mogliśmy używać poza funkcją oznaczoną operatorem **`async`**. Więc taki zapis generował błąd: 

```javascript
const waitPrmise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('RESOLVE!');
        }, 5000);
    });
};

await waitPrmise(); // -> // SyntaxError: await is only valid in async functions
```

Nowa wersja, znosi takie ograniczenie i przykład powyżej będzie w niej działał poprawnie.

## 4. Statyczne pola klas oraz statyczne prywatne metody

Od wersji **ES13** możemy definiować **statyczne prywatne pola klas** oraz **statyczne prywatne metody klas**. Statyczne metody mają dostęp do innych statycznych (prywatnych i publicznych) metod poprzez `this`.   

```javascript
class Pet {
    static #count = 0;

    static getCount() {
        return this.#count;
    }
    constructor() {
        this.constructor.#incrementCount();
    }
    static #incrementCount() {
        this.#count++;
    }
}

const pet1 = new Pet();
const ppet2 = new Pet();

console.log(Pet.getCount()); // -> 2
```

## 5. Statyczne bloki klas

**ECMSScript 2022** pozwala nam definiować **stateczne bloki kodu** wewnątrz klasy. Deklarujemy je za pomocą: `static {}`. Statyczne bloki kodu są wykonywane tylko raz podczas inicjalizacji klasy.

Klasa może posiadać **dowolną ilość statycznych bloków kodu**. Bloki te będą **wykonywane zgodnie z kolejnością ich deklaracji**.

```javascript
class Pet {
    static count = 0;

    static {
        this.count++;
    }

    static {
        this.count++;
    }
}

console.log(Pet.count); // -> 2
```

## 6. Metoda `at()` dla tablic, stringów oraz obiektów `TypedArray`

OK teraz trochę o tablicach. Jeśli chcemy pobrać element z tablicy o konkretnym indeksie to z reguły używamy w tym celu nawiasów kwadratowych `[]`, w ten sposób:

```javascript
const letters = ['a', 'b', 'c', 'd', 'e'];
console.log(letters[2]); // -> c
```

Pamiętamy, że indeksy zaczynają się od `0` 😉 Jeżeli chcemy pobrać ostatni element tablicy, to musimy zrobić takie fiku-miku:

```javascript
console.log(letters[letters.length - 1]); // -> e
```

`letters.lenght` zwróci nam długość tablicy `5` i od tego odejmujemy `1`, żeby zgodził się indeks. 

Dzięki nowej metodzie **`at()`** możemy wyciągać wartości z tablic w bardziej naturalny sposób.

```javascript
console.log(letters.at(0)); // -> a
console.log(letters.at(1)); // -> b
console.log(letters.at(-1)); // -> e
console.log(letters.at(-2)); // -> d
```

Jak widzisz **pobieranie ostatniego elementu tablicy** zostało uproszczone. Wystarczy, że do metody przekażemy ujemną liczbę, a pozycje będą brane od końca tablicy.

Metoda `at()` oprócz tablic została dodana także do `string`'ów oraz tablic typu `TypedArray`.

## 7. Metoda `Object.hasOwn()`

Kto wie jak sprawdzić czy klasa posiada jakieś pole? 😉 Możemy to zrobić używając metody `hasOwnProperty`  w ten sposób:

```javascript
class Cat {
    name = 'Szarek';
}

const cat = new Cat();

cat.hasOwnProperty('name'); // -> true
cat.hasOwnProperty('age'); // -> false
```

Problem polega na tym, że tą metodę można w bardzo prosty sposób nadpisać i kompletnie zmienić jej logikę, więc nie powinniśmy takiego rozwiązania stosować w naszym kodzie.

Rozwiązaniem tego problemu jest skorzystanie z metody `call` na prototypie: `Object.prototype.hasOwnProperty.call(obj, propertyKey)` i tutaj jesteśmy już bardziej bezpieczni.

Jednak w najnowszej wersji JavaScript pojawiło się lepsze i bardziej eleganckie rozwiązanie. Dostaliśmy do dyspozycji metodę **`Object.hasOwn()`**, która wykonuje taką samą pracę jak `Object.prototype.hasOwnProperty.call(obj, propertyKey)`.

```javascript
class Cat {
    name = 'Szarek';
}

const cat = new Cat();

Object.hasOwn(cat, 'name'); // -> true
Object.hasOwn(cat, 'age'); // -> false
```
 
## 8. Metody `findLast` oraz `findLastIndex`

Znasz metody `find` oraz `findIndex`? Jeśli nie to w szczegółach możesz posłuchać o nich w <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=hl-B4pQ_nzc">moim materiale</a> o nowościach z ES6.

Teraz dostaliśmy do kolekcji dwie nowe metody tego typu, czyli **`findLast`** i **`findLastIndex`**. Działają one tak samo, ale zwracają co innego:

```javascript
const letters = [
    { value: 'a' },
    { value: 'b' },
    { value: 'c' },
    { value: 'b' },
    { value: 'd' },
];

letters.findLast((element) => element.value === 'b'); // -> { value: 'b' }
letters.findLastIndex((element) => element.value === 'b'); // -> 3
```

W odróżnieniu od `find` i `findIndex`, nowe metody szukają **od końca** tablicy. Więc **znajdą ostatni pasujący element**.

Metoda **`findLast`** zwróci znaleziony element, natomiast metoda **`findLastIndex`** zwróci indeks znalezionego elementu.


> *Dzięki wielkie, że odwiedziłeś moją stronę! 😊 Mam nadzieję, że artykuł okazał się dla Ciebie przydatny.*
> 
> *Pozdrawiam,<br> Krzysiek*