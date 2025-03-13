import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// async function exampleUsage() {
//   const userData = await fetchData<User>('https://api.example.com/user/1');
//   console.log(userData);
// }

// exampleUsage();

export {};
