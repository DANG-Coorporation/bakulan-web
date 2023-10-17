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
