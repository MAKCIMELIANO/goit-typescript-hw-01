type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

let user: User = {
  name: 'John',
  surname: 'Doe',
  email: 'user123@mail.com',
  password: 'password456',
};

function createOrUpdateUser(initialValues: Partial<User>) {
  user = { ...user, ...initialValues };
  console.log(user);
}

createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123',
});

console.log(user);

export {};
