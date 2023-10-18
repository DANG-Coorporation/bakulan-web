import { ILogin } from "@/common/interface/auth.interface";
import { IRegister } from "@/common/interface/registerApi";
import axios from "axios";

export const bakulanApi = axios.create({
  baseURL: `http://nawaytes.cloud:4040/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerApi = async (data: IRegister) => {
  try {
    return await bakulanApi.post("/auth/create-owner", JSON.stringify(data));
  } catch (error) {
    throw error;
  }
};

export const loginApi = async (data: ILogin) => {
  try {
    return await bakulanApi.post("/auth", JSON.stringify(data));
  } catch (error) {
    throw error;
  }
};

export const createTokenForgetPasswordApi = async (email: string) => {
  try {
    return await bakulanApi.post(
      "/reset-password/send-reset-password-email",
      JSON.stringify({ email })
    );
  } catch (error) {
    throw error;
  }
};

export const checkTokenResetPasswordApi = async (token: string) => {
  try {
    return await bakulanApi.get(`/reset-password/check-token/${token}`);
  } catch (error) {
    throw error;
  }
};

export interface IResetPassword {
  data: {
    password: string;
    confirmPassword: string;
  };
  token: string;
}

export const sendResetPasswordApi = async (input: IResetPassword) => {
  try {
    return await bakulanApi.post(
      `/reset-password/reset-password/${input.token}`,
      input.data
    );
  } catch (error) {
    throw error;
  }
};
