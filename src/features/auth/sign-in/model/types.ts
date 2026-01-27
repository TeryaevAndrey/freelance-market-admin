export interface SignInParams {
    email: string;
    password: string;
}

export interface SignInResponse {
    email: string;
    token: string;
}