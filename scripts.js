//1

let str1 = "aaa@bbb@ccc";
let newstr = str1.replace(/@/g, "!");
console.log(newstr);
//2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025.

let dateNow = new Date();
let newDate =
  dateNow.getDate() + "/" + dateNow.getMonth() + "/" + dateNow.getFullYear();

console.log(newDate);

//3.Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript»
//тремя разными способами(через substr, substring, slice).

let str3 = "Я учу javascript!";
console.log(str3.substring(2, 5));
console.log(str3.substring(6, 16));
console.log(str3.substr(2, 3));
console.log(str3.substr(6, 10));
console.log(str3.slice(2, 5));
console.log(str3.slice(6, 16));

//4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
//из суммы кубов его элементов.Для решения воспользуйтесь циклом for.

let arr4 = [4, 2, 5, 19, 13, 0, 10];
let sum4 = 0;
for (let i = 0; i < arr4.length; i++) {
  sum4 += Math.pow(arr4[i], 3);
}
console.log(Math.sqrt(sum4));

//5. Даны переменные a и b. Отнимите от a переменную b и результат
//присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
//c записалось положительное значение. Проверьте работу скрипта при a и b,
//равных соответственно 3 и 5, 6 и 1.

let a = 3;
let b = 5;
let c = a - b;
console.log(Math.abs(c));

//6.Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
//Для решения этой задачи напишите функцию, которая будет добавлять 0
//перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
//сделает 01.09.2014).
let Dates = dateNow.getDate();
let Month = dateNow.getMonth() + 1;
let newDate6 =
  dateNow.getHours() +
  "." +
  dateNow.getMinutes() +
  "." +
  dateNow.getSeconds() +
  "  " +
  (Dates < 10 ? "0" : "") +
  Dates +
  "." +
  (Month < 10 ? "0" : "") +
  Month +
  "." +
  dateNow.getFullYear();

console.log(newDate6);

//7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
//найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
//количество раз, буква 'a'.
let str7 = "aa aba abba abbba abca abea";

console.log(str7.match(/[ ab+a ]/gi));

//8. Напишите ф-цию строгой проверки ввода номер телефона в
//международном формате (<код страны> <код города или сети> <номер
// телефона>). Функция должна возвращать true или false. Используйте
// регулярные выражения.
let number = prompt("Введите номер телефона");
let regexp8 =
  /^\+375 ?\(?(29|44|33|25|17)\)? ?[1-9][0-9]{2}[ -]?[0-9]{2}[ -]?[0-9]{2}$/gm;
console.log(regexp8.test(number));

//  9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
// условия:
// - весь адрес не должен содержать русские буквы и спецсимволы, кроме
// одной «собачки», знака подчеркивания, дефиса и точки;
// - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
// имя может содержать только буквы, цифры, но не быть первыми и
// единственными в имени;
// - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
// не может быть длиной менее 2 и более 11 символов.
// Функция должна возвращать true или false. Используйте регулярные
// выражения.

let email = "info@gmail.com";
let regexp = /[a-z,"-","_",0-9]{2,}@[a-z0-9].[a-z]{2,11}/gi;
console.log(regexp.test(email));

// 10. Напишите ф-цию, которая из полного адреса с параметрами и без,
// например: https://tech.onliner.by/2018/04/26/smart-do-200/?
// utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес
// доменного имени (https://tech.onliner.by), остальную часть адреса без
// параметров (/2018/04/26/smart-do-200/), параметры
// (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе
// может и не быть каких-либо составляющих. Ф-ция должна возвращать
// массив.
let url =
  "https://tech.onliner.by/2018/04/26/smart-do-200/?//utm_source=main_tile&utm_medium=smartdo200#zag3";

console.log(
  url.match(/(https?:\/\/[a-z0-9]+(?:-|\.)?[a-z0-9]+\.[a-z]{2,11}\/?)/gim)
);
//(\/?[^\?\?/s#]+\/?)?(\?[^\s#]+)?(#[a-z0-9]+)?
