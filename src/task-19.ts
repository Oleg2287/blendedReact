// Задача 19

// Функція fetchUser повертає проміс, який через axios отримує одного користувача з API по userId.

// import axios from "axios";

// const fetchUser = async (userId) => {
//   const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
//   return response.data;
// };

// const getUserName = async (id) => {
//   const user = await fetchUser(id);
//   console.log(user.name);
// };

// getUserName(1);

// Завдання:

// Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchUser.
import axios from "axios";

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const fetchUser = async (userId: number): Promise<User> => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return response.data;
};  
const getUserName = async (id: number): Promise<void> => {
  const user = await fetchUser(id);
  console.log(user.name);
};

console.log(getUserName(1));
