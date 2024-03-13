export type CreateReturn<T = any> = {
  success: boolean;
  data?: T[];
  error?: string;
};

export type ServiceReturn<T = unknown> = {
  success: boolean;
  message: string;
  data?: T[];
};
