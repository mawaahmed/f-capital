import type {
  AuthResponse,
  ForgetPasswordInput,
  GetProfileInput,
  LoginInput,
  LoginResponse,
  ProfileResponse,
  RegisterInput,
  ResetPasswordInput,
} from "@/types/auth";
import baseApi from "./base-service";

export const registerService = async (
  payload: RegisterInput
): Promise<AuthResponse> => {
  return (await baseApi.post("/auth/register", payload)).data;
};

export const loginService = async (
  payload: LoginInput
): Promise<LoginResponse> => {
  return (await baseApi.post("/auth/login", payload)).data;
};

export const forgetPasswordService = async (
  payload: ForgetPasswordInput
): Promise<void> => {
  return (await baseApi.post("/auth/reset-password", payload)).data;
};

export const resetPasswordService = async (
  payload: ResetPasswordInput
): Promise<void> => {
  return (await baseApi.post("/auth/change-password", payload)).data;
};

export const getProfileService = async (
  payload: GetProfileInput
): Promise<ProfileResponse> => {
  return (await baseApi.get(`/users/profile/${payload.email}`)).data;
};
