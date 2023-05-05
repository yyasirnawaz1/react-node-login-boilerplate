export type User = {
  name: string;
  email: string;
  role: string[];
};

export type Claim = {
  token: string;
  user: User;
};
