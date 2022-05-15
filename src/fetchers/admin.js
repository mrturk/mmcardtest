import axios from "axios";
import { ADD_USER, ADMIN_LOGIN, getApiEndPoint } from "../endpoints";

export const adminLogin = async (payload) => {
  const { data } = await axios.post(getApiEndPoint(ADMIN_LOGIN), payload);
  return data;
};

export const addUser = async (payload) => {
  const { data } = await axios.post(getApiEndPoint(ADD_USER), payload, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });
  return data;
};
