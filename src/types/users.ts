// "email": "user@gmail.com",
//   "password": "***...",
//   "name": "CARRE...",
//   "category": "CARRE...",
//   "phone

export interface User {
  email: string;
  password: string;
  name: string;
  category: string;
  phone: string;
};

// create a new user
export interface CreateUserInput {
  email: string;
  firstName?: string;
  lastName?: string;
  password: string;
  name: string;
  category?: string;
  phone: string;
  status?: "active";
};
