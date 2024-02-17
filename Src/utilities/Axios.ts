import axios from "axios";
import { store } from "../redux/store";
import { base_url } from "./ApiConstant";


const axios1 = axios.create({
  baseURL: base_url,

 timeout: 5000,
});






axios1.interceptors.response.use(
  async (response) => {
    if (response.data?.statusCode === 200 || response?.status === 200) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response.data);
    }
  },
  function (error) {
    if (error?.response) {
      if (error.response?.data) {
        return Promise.reject(error.response?.data);
      }
    }
    return Promise.reject(error);
  }
);














export { axios1 };
