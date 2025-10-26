// Задача 7

// const users = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
// ];

// Завдання:

// Створіть інтерфейс User, який описує структуру об’єкта з іменем і віком.
// Типізуйте змінну users.

// Додайте ще одного користувача до масиву, дотримуючись структури.
// Переконайтеся, що TypeScript не дозволяє додати об’єкт без обов’язкових полів (name, age).

type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];


console.log(users);

// interface User {
//     name: string;
//     age: number;
// }


// const user: User[] = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
// ];

// function addUser(newUser: User): User[] {
//     user.push(newUser);
//     return user;
// }

// addUser({ name: "Charlie", age: 35 });

// addUser({ name: "Charlie",}); // Помилка: Відсутнє поле 'age'