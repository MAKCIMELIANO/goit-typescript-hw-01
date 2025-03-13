interface Address {
  city: string;
  country: string;
}

interface User {
  name: string;
  age: number;
  email: string;
  address?: Address;
}

const Vasya: User = {
  name: 'Vasya',
  age: 30,
  email: 'john@example.com',
  address: {
    city: 'New York',
    country: 'USA',
  },
};

const Petya: User = {
  name: 'Petya',
  age: 30,
  email: 'john@example.com',
};

export {};
