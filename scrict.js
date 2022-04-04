
// Строкі: 'Dasha - zopa', 'abcdfegdfvdfvdknjfgb', 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879', 'sfsdfavbajhbaajbaaad34'


// 7 Вивести довжину строки

// 1  Version

// let userOne = 'Dasha - zopa';
// let userTwo = 'abcdfegdfvdfvdknjfgb';
// let userThree = 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879';
// let userFour = 'sfsdfavbajhbaajbaaad34';
// let userNew = userOne + userTwo + userThree + userFour;
// console.log(userNew.length);

// 2  Version

// let userNew = 'Dasha - zopa' + 'abcdfegdfvdfvdknjfgb' + 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879' + 'sfsdfavbajhbaajbaaad34';
// console.log(userNew.length);

// 3  Version

// let user = 'Dasha - zopa';
// let addStrict = user.concat('abcdfegdfvdfvdknjfgb', 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879', 'sfsdfavbajhbaajbaaad34');
// console.log(addStrict.length);

// 4  Version

// let array = ['Dasha - zopa', 'abcdfegdfvdfvdknjfgb', 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879', 'sfsdfavbajhbaajbaaad34'];
// let addStrict = array.join("");
// console.log(addStrict.length);




// 8 Вивести кожен символ строки із нового рядка

// 1 Version
// let customerOne = 'Dasha - zopa';
// let customerTwo = 'abcdfegdfvdfvdknjfgb';
// let customerThree = 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879';
// let customerFour = 'sfsdfavbajhbaajbaaad34';
// let customer = customerOne + customerTwo + customerThree + customerFour;
// for (let f = 0; f < customer.length; f++) {
//     console.log(customer[f]);
// };

// 2 Version

// let customer = 'Dasha - zopa' + 'abcdfegdfvdfvdknjfgb' + 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879' + 'sfsdfavbajhbaajbaaad34';
// for (let f = 0; f < customer.length; f++) {
//     console.log(customer[f]);
// };

// 3  Version

// let customer = 'Dasha - zopa';
// let addStrict = customer.concat('abcdfegdfvdfvdknjfgb', 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879', 'sfsdfavbajhbaajbaaad34');
// for (let f = 0; f < addStrict.length; f++) {
//     console.log(addStrict[f]);
// };

// 4  Version

// let customer = ['Dasha - zopa', 'abcdfegdfvdfvdknjfgb', 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879', 'sfsdfavbajhbaajbaaad34'];
// let addStrict = customer.join("");
// for (let f = 0; f < addStrict.length; f++) {
//     console.log(addStrict[f]);
// };



// 9 Вивести кожен символ строки із нового рядка, до того часу, поки символ не буде 'a' (Якщо слово - 'Vlad', то виведеться V, l)

// 1  Version

// let userName = 'Dasha - zopa' + 'abcdfegdfvdfvdknjfgb' + 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879' + 'sfsdfavbajhbaajbaaad34';
// for (let notA of userName) {
//   if (notA == "a") {
//     break;
//   } { console.log(notA); }
// };

// 2  Version

// let One = 'Dasha - zopa';
// let Two = 'abcdfegdfvdfvdknjfgb';
// let Three = 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879';
// let Four = 'sfsdfavbajhbaajbaaad34';
// let userName = One + Two + Three + Four;
// for (let notA of userName) {
//   if (notA == "a") {
//     break;
//   } { console.log(notA); }
// };

// 3  Version

// let userName = 'Dasha - zopa';
// let addStrict = userName.concat('abcdfegdfvdfvdknjfgb', 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879', 'sfsdfavbajhbaajbaaad34');
// for (let notA of addStrict) {
//   if (notA == "a") {
//     break;
//   } { console.log(notA); }
// };

// 4  Version 

// let userName = ['Dasha - zopa', 'abcdfegdfvdfvdknjfgb', 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879', 'sfsdfavbajhbaajbaaad34'];
// let addStrict = userName.join("");
// for (let notA of addStrict) {
//   if (notA == "a") {
//     break;
//   } { console.log(notA); }
// };


// 10 Вивести кожен символ строки, крім 'a', з нового рядка (Якщо слово - 'Vlad', то виведеться V, l, d)

// 1  Version

// let userName = 'Dasha - zopa' + 'abcdfegdfvdfvdknjfgb' + 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879' + 'sfsdfavbajhbaajbaaad34';
// for (let notA of userName) {
//   (notA == "a") ? false : console.log(notA);
// }

// 2  Version

// let One = 'Dasha - zopa';
// let Two = 'abcdfegdfvdfvdknjfgb';
// let Three = 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879';
// let Four = 'sfsdfavbajhbaajbaaad34';
// let userName = One + Two + Three + Four;
// for (let notA of userName) {
//   (notA == "a") ? false : console.log(notA);
// };

// 3  Version

// let userName = 'Dasha - zopa';
// let addStrict = userName.concat('abcdfegdfvdfvdknjfgb', 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879', 'sfsdfavbajhbaajbaaad34');
// for (let notA of userName) {
//   (notA == "a") ? false : console.log(notA);
// };

// 4  Version 

// let userName = ['Dasha - zopa', 'abcdfegdfvdfvdknjfgb', 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879', 'sfsdfavbajhbaajbaaad34'];
// let addStrict = userName.join("");
// for (let notA of addStrict) {
//   (notA == "a") ? false : console.log(notA);
// };


// 11 Аналогічно 10, тільки всі, крім 'a', 'b', 'c', 'd', 'e', 'f,' та 'A', 'B', 'C', 'D', 'E', 'F'

// 1  Version

// let arrUser = 'Dasha - zopa' + 'abcdfegdfvdfvdknjfgb' + 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879' + 'sfsdfavbajhbaajbaaad34';
// for (let z of arrUser) {
//   if (z == 'a' || z == 'b' || z == 'c' || z == 'd' || z == 'e'|| z == 'f'|| z == 'A' || z == 'B' || z == 'C' || z == 'D'|| z == 'E'|| z == 'F' ) {
//     continue;
//   } { console.log(z);
//   }
// };

// 2  Version

// let One = 'Dasha - zopa';
// let Two = 'abcdfegdfvdfvdknjfgb';
// let Three = 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879';
// let Four = 'sfsdfavbajhbaajbaaad34';
// let arrUser = One + Two + Three + Four;
// for (let z of arrUser) {
//   if (z == 'a' || z == 'b' || z == 'c' || z == 'd' || z == 'e'|| z == 'f'|| z == 'A' || z == 'B' || z == 'C' || z == 'D'|| z == 'E'|| z == 'F' ) {
//     continue;
//   } { console.log(z);
//   }
// };

// 3  Version

// let arrUser = 'Dasha - zopa';
// let addLetter = arrUser.concat('abcdfegdfvdfvdknjfgb', 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879', 'sfsdfavbajhbaajbaaad34');
// for (let z of addLetter) {
//   if (z == 'a' || z == 'b' || z == 'c' || z == 'd' || z == 'e'|| z == 'f'|| z == 'A' || z == 'B' || z == 'C' || z == 'D'|| z == 'E'|| z == 'F' ) {
//     continue;
//   } { console.log(z);
//   }
// };

// 4  Version 

// let arrUser = ['Dasha - zopa', 'abcdfegdfvdfvdknjfgb', 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879', 'sfsdfavbajhbaajbaaad34'];
// let addLetter = arrUser.join("");
// for (let z of addLetter) {
//   if (z == 'a' || z == 'b' || z == 'c' || z == 'd' || z == 'e'|| z == 'f'|| z == 'A' || z == 'B' || z == 'C' || z == 'D'|| z == 'E'|| z == 'F' ) {
//     continue;
//   } { console.log(z);
//   }
// };


// 12 Вивести кожен символ строки із нового рядка, але, якщо цей символ 'a', 'b', 'c', 'd', 'f', то вивести його в верхньому реєстрі

// 1  Version

// let addUpper = 'Dasha - zopa' + 'abcdfegdfvdfvdknjfgb' + 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879' + 'sfsdfavbajhbaajbaaad34';
// for (let key of addUpper) {
//   (key == 'a' || key == 'b' || key == 'c' || key == 'd' || key == 'f' ) ? console.log(key.toUpperCase()) : console.log(key);
// };

// 2  Version

// let One = 'Dasha - zopa';
// let Two = 'abcdfegdfvdfvdknjfgb';
// let Three = 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879';
// let Four = 'sfsdfavbajhbaajbaaad34';
// let addUpper = One + Two + Three + Four;
// for (let key of addUpper) {
//   (key == 'a' || key == 'b' || key == 'c' || key == 'd' || key == 'f' ) ? console.log(key.toUpperCase()) : console.log(key);
// };

// 3  Version

// let arrName = 'Dasha - zopa';
// let addUpper = arrName.concat('abcdfegdfvdfvdknjfgb', 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879', 'sfsdfavbajhbaajbaaad34');
// for (let key of addUpper) {
//   (key == 'a' || key == 'b' || key == 'c' || key == 'd' || key == 'f' ) ? console.log(key.toUpperCase()) : console.log(key);
// };

// 4  Version 

// let arrName = ['Dasha - zopa', 'abcdfegdfvdfvdknjfgb', 'dsdzfxfgchjkhgfdszsdxdcf43ws54ed6rf7g8h9jiophgbvcf879', 'sfsdfavbajhbaajbaaad34'];
// let addUpper = arrName.join("");
// for (let key of addUpper) {
//   (key == 'a' || key == 'b' || key == 'c' || key == 'd' || key == 'f' ) ? console.log(key.toUpperCase()) : console.log(key);
// };






// ASK.
// 1. Чи потрібно було робити перебір символів зі строкb за допоиогою for...of  чи викуористовувати While or for?
// 2. Чи є інші варіанти виводу символів зі строки? Якщо так, то скажи і я ще подумаю над можливими варіантами.
// 3. Задача 11. ЧИ вірно запис через ||? Чи код так вважається занадто довгим? 
// 4. Чи можна ще таких побільше задач, хочу ще порозв'язувати.
// 5. Якщо є помилки, то краще скажи мені, будь ласка, що є помилки і я їх сама пошукаю і виправлю. Якщо не справлюсь, тоді запитаю.

// Зроби за допомогою for
// 2. Є, використай цикл for, там буде зрозуміло
// 3. Можна, але в більшості випадків це виноситься в окремий метод. В даному випадку можна не виносити, а виправити по іншому, подумай як
// Виправити:
// 1. Всі задачі на строкі повинні бути виконані для всіх строк, які я написав зверху.
// 2. Рішення задач 4(є), 9, 10(), 11, та 12 можна скоротити
// P.S. В більшості випадків при використанні оператора 'if' ми використовуємо дужки {} ( як в прикладах 9, 10, 11, 12). 
// Також в більшості випадків цикл for використовується як в першому варіанті. 
// Також зроби ще такі задачі:
//  '13. Для тим самих строк, які я писав після задач, вивести кожен символ через кому і пробіл. Приклад: 'Vlad' результат 'V, l, a, d'.
//   14. Як і в 13, але всі символи у верхньому реєстрі. Результат: 'V, L, A, D'

