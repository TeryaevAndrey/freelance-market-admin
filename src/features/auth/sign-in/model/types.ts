export interface SignInParams {
  email?: string;
  username?: string;
  password: string;
}

export interface SignInResponse {
  email?: string;
  username?: string;
  token: string;
}
