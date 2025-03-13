type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, 'errors'>;

const formData: Form = {
  email: 'user@example.com',
  firstName: 'John',
  lastName: 'Doe',
  phone: '123-456-7890',
  errors: {
    email: ['Invalid email format'],
    phone: ['Phone number is required'],
  },
};

function createOrUpdateUser(params: Params): void {
  console.log('Creating or updating user with the following data:', params);
}
const userParams: Params = {
  email: 'user2@example.com',
  firstName: 'Jane',
  lastName: 'Smith',
  phone: '098-765-4321',
};

createOrUpdateUser(userParams);

console.log(formData);

export {};
