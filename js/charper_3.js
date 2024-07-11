//Работа с массивами

// Список продуктов

// let listForMarket = ['Milk', 'Bread', 'Apples'];
// listForMarket.splice(1, 1, 'Bananas', 'Eggs');
// listForMarket.sort();

// listForMarket.splice(2, 0,  'Carrots', 'Lattuce');
// let newList = ["Juice", "Pop"];
// let list = listForMarket.concat(newList).concat(newList);

// let index = list.lastIndexOf("Pop");
// console.log(index)

// Многомерные массивы

// let arr1 = ['1', '2', '3'];
// let arr2 = ['4', '5', '6'];
// let arr3 = ['7', '8', '9'];

// let arr = [arr1, arr2, arr3];

// console.log(arr[1][0]);

// Свойства объекта

// let people = {
//   friends: [
//     {
//       Name: "Alex",
//       lastName: "Shmidt",
//       Age: 24,
//       ID: 123,
//     },
//     {
//       Name: "Phiona",
//       lastName: "Smit",
//       Age: 29,
//       ID: 124,
//     },
//   ],
// };

// console.log(people.friends[1].ID);



// Progect

// const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
//     {test: 'one', score: 55}, ['one', 'two']];

// ***  Используя методы pop(), push(), shift() и unshift(), добейтесь следующего результата в консоли:
// *** ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

// theList.shift('Laurence');
// theList.unshift("FIRST");
// theList.pop();
// theList.pop();
// theList.pop();
// theList.pop();
// theList.pop();
// theList.pop();
// theList.push("MIDDLE", "hello World", "LAST");
// console.log(theList)