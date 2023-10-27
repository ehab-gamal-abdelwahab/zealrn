import { DOMAIN, apiTokens } from "../utils/constants";
import axios from "axios";
import { UserData } from "../types/auth.type";

export const loginUser = async (payload: UserData) => {
  return axios
    .post(`${DOMAIN}${apiTokens.login}`, payload, {
      "Content-Type": "application/json",
    })
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
};
export const registerUser = (payload: UserData) =>
  axios
    .post(`${DOMAIN}${apiTokens.register}`, payload, {
      "Content-Type": "application/json",
    })
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const getUsers = (token: string) =>
  axios
    .get(`${DOMAIN}${apiTokens.users}`, { headers: { token: token } })
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const getLocations = (token: string) =>
  axios
    .get(`${DOMAIN}${apiTokens.locations}`, { headers: { token: token } })
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const deleteUser = ({ token, email }: any) =>
  axios
    .delete(`${DOMAIN}${apiTokens.users}/${email}`, {
      headers: { token: token },
    })
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const userLocations = ({ token, email }: any) =>
  axios
    .get(`${DOMAIN}${apiTokens.locations}/${email}`, {
      headers: { token: token },
    })
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const deleteLocation = ({ token, id }: any) =>
  axios
    .delete(`${DOMAIN}${apiTokens.locations}/${id}`, {
      headers: { token: token },
    })
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const BUNDLE_ENTERPRISE__CONTRIBSYS__COM = "cafebabe:deadbeef";
