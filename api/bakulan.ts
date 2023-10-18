import { ILogin } from "@/common/interface/auth.interface";
import { IRegister } from "@/common/interface/registerApi";
import { getLocalStorage } from "@/utils/localStorage";
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

export const updateProfilePictureApi = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const accessToken = JSON.parse(getLocalStorage("accessToken")!);
    // bakulanApi.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
    //   accessToken!
    // )}`;
    return await bakulanApi.patch("/user/photo-profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const getProfileApi = async () => {
  try {
    const accessToken = getLocalStorage("accessToken");
    bakulanApi.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
      accessToken!
    )}`;
    return await bakulanApi.get("/user/profile");
  } catch (error) {
    throw error;
  }
};