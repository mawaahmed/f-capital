export type LoginInput = {
  email: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
  email: string;
};

export type RegisterInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  companyEmail: string;
  category: string;
  password: string;
};

export type AuthResponse = {
  access_token: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  companyEmail: string;
  category: string;
};

export type ForgetPasswordInput = {
  email: string;
};

export type ResetPasswordInput = {
  token: string;
  newPassword: string;
};

export type GetProfileInput = {
  email: string;
};

export type ProfileResponse = {
  email: string;
  name: string;
  phone: string;
  address: string;
  profile: {
    id?: string;
    firstName?: string;
    address?: string;
    lastName?: string;
    phone: string;
    email: string;
    name: string;
    profileImageUrl: string;
  };
  company: {
    id: string;
    name: string;
    logo: string;
    phone: string;
    email: string;
    address: string;
    longitude: string;
    latitude: string;
    type: string;
    businessCategory: string;
    vatPercentage: number;
    taxIdentificationNumber: string;
    contactPerson: string;
    tva?: string;
  };
  roles: [
    {
      name: string;
      description: string;
    }
  ];
};
