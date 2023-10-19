import axios from "axios";

const apiUrl = "/api";

const urls = {
  register: `${apiUrl}/register`,
  login: `${apiUrl}/login`,
  logout: `${apiUrl}/login/logout`,
  user: `${apiUrl}/user`,
};

export const AuthApi = {
  register(body) {
    return axios.post(urls.register, body);
  },
  login(body) {
    return axios.post(urls.login, body);
  },
  logout() {
    return axios.post(urls.logout);
  },
};

export const UserApi = {
  get() {
    return axios.get(urls.user);
  },
};
