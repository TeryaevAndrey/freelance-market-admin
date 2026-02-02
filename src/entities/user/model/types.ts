import type {
  PaginationParams,
  PaginationResponse,
  WithNull,
} from "@/shared/types/main-types";

export enum USER_ROLES {
  "ADMIN" = 0,
  "MODERATOR" = 1,
  "SUPPORT" = 2,
  "CLIENT" = 3,
  "PERFORMER" = 4,
}

export enum LEGAL_STATUSES {
  "PRIVATE_PERSON" = 0,
  "NPD_PAYER" = 1,
  "BUSINESSMAN" = 2,
  "BUSINESS_SOCIETY" = 3,
}

export enum USER_STATUSES {
  DRAFT = 0,
  CONFIRMED = 1,
  PUBLISHED = 2,
  HIDDEN = 3,
  FROZEN = 4,
  BLOCKED = 5,
}

export const USER_STATUS_NAMES: Record<USER_STATUSES, string> = {
  [USER_STATUSES.DRAFT]: "Черновик",
  [USER_STATUSES.CONFIRMED]: "Подтвержден",
  [USER_STATUSES.PUBLISHED]: "Опубликован",
  [USER_STATUSES.HIDDEN]: "Скрыт",
  [USER_STATUSES.FROZEN]: "Заморожен",
  [USER_STATUSES.BLOCKED]: "Заблокирован",
};

export interface User {
  id: number;
  cities: string[];
  linguas: string[];
  tranings: string[];
  achievements: string[];
  role: USER_ROLES;
  last_login?: WithNull<string>;
  is_superuser?: boolean;
  username?: WithNull<string>;
  date_created: string;
  ad_consent?: boolean; // согласие на получение рекламных рассылок
  is_email_verified: boolean;
  email?: WithNull<string>;
  email2?: WithNull<string>; // Контактный email
  is_phone_number_verified: boolean;
  phone_number?: WithNull<string>;
  phone_number2?: WithNull<string>; // Контактный телефон
  first_name?: WithNull<string>;
  last_name?: WithNull<string>;
  third_name?: WithNull<string>;
  passport_series?: WithNull<string>;
  passport_number?: WithNull<string>;
  passport_date?: WithNull<string>;
  passport_authority?: WithNull<string>; // Кем выдан
  passport_authority_code?: WithNull<string>;
  reg_adress?: WithNull<string>;
  post_adress?: WithNull<string>; // Почтовый (юридический) адрес
  tax_id?: WithNull<string>; // ИНН
  legal_structure?: WithNull<LEGAL_STATUSES>; // Организационно-правовая форма
  incorp_date?: WithNull<string>; // Дата регистрации юр. лица
  legal_name?: WithNull<string>; // Полное наименование юр. лица
  trade_mark?: WithNull<string>; // Торговое наименование
  reason_code?: WithNull<string>; // КПП
  ogrn?: WithNull<number>;
  ceo_name?: WithNull<string>; // ФИО руководителя
  rep_name?: WithNull<string>; // ФИО представителя
  rep_role?: WithNull<string>; // Должность представителя
  ip_address: WithNull<string>;
  status: WithNull<USER_STATUSES>;
  score: number;
  premium_date: WithNull<string>;
  referal_code: WithNull<string>;
  is_active: boolean;
  is_staff: boolean;
  referee?: WithNull<number>;
  groups?: number[];
  categories: number[];
  user_permissions?: number[];
}

export interface GetUsersParams extends PaginationParams {
  city?: string;
  date_created_after?: string;
  date_created_before?: string;
  id?: number;
  is_active?: boolean;
  query?: string;
  role?: USER_ROLES;
  status?: USER_STATUSES;
}

export interface GetUsersResponse extends PaginationResponse {
  results: User[];
}

export interface Role {
  id: number;
  name: string;
}

export interface GetRolesParams extends PaginationParams {}

export interface GetRolesResponse extends PaginationResponse {
  results: Role[];
}

export interface CreateRoleParams {
  name: string;
}

export interface CreateRoleResponse extends Role {}

export interface CreateUserParams {
  role: number;
  username: string;
  password: string;
  password2: string;
}

export interface CreateUserResponse {
  id: number;
  role: number;
  username: string;
}