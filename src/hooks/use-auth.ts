import {
  forgetPasswordService,
  getProfileService,
  loginService,
  registerService,
  resetPasswordService,
} from "@/services/auth-services";
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
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useRegister = (
  onSuccess?: (data: AuthResponse) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: RegisterInput) => registerService(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      onSuccess?.(data);
    },
    onError,
  });
};

export const useLogin = (
  onSuccess?: (data: LoginResponse) => void,
  onError?: (err: unknown) => void
) => {
  return useMutation({
    mutationFn: (payload: LoginInput) => loginService(payload),
    onSuccess: (data) => {
      onSuccess?.(data);
    },
    onError,
  });
};

export const useGetProfile = (
  onSuccess?: (data: ProfileResponse) => void,
  onError?: (err: unknown) => void
) => {
  return useMutation({
    mutationFn: (payload: GetProfileInput) => getProfileService(payload),
    onSuccess: (data) => {
      console.log({ data });
      onSuccess?.(data);
    },
    onError,
  });
};

export const useForgetPassword = (
  onSuccess?: () => void,
  onError?: (err: unknown) => void
) => {
  return useMutation({
    mutationFn: (payload: ForgetPasswordInput) =>
      forgetPasswordService(payload),
    onSuccess: () => {
      onSuccess?.();
    },
    onError,
  });
};

export const useResetPassword = (
  onSuccess?: () => void,
  onError?: (err: unknown) => void
) => {
  return useMutation({
    mutationFn: (payload: ResetPasswordInput) => resetPasswordService(payload),
    onSuccess: () => {
      onSuccess?.();
    },
    onError,
  });
};
