import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";

export type LoginInputs = {
  email: string;
  password: string;
};

export interface IPropsLogin<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
> {
  navigate: (to: string) => void;
  register: UseFormRegister<LoginInputs | RegisterInputs>;
  errors: FieldErrors<TFieldValues>;
}

export type RegisterInputs = {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export interface IPropsRegister<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
> {
  navigate: (to: string) => void;
  register: UseFormRegister<LoginInputs | RegisterInputs>;
  errors: FieldErrors<TFieldValues>;
}

export interface IAuthState {
  //user: {} | IPublicUser;
  user: IPublicUser;
  isLogged: boolean;
}

interface IPublicUser {
  id: number | null;
  firstName: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  watchlist: [IWatchlist];
}

interface IWatchlist {
  id: number | null;
  name: string;
  assetId: string;
  createdAt: string;
  updatedAt: string;
  user: number | null;
}
