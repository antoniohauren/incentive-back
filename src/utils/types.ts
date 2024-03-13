export type RepositoryRetrun<T = any> = {
  success: boolean;
  data?: T[];
  error?: string;
};

export type ServiceReturn<T = unknown> = {
  success: boolean;
  message?: string;
  data?: T;
};

export type JwtPayload = {
  id: string;
  name: string;
  username: string;
  email: string;
};
