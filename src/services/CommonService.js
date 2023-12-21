import axios from "axios";
import { REACT_APP_BASE_URL } from "../utils/Constants";

// Create Base URL
const commonService = axios.create({
  baseURL: REACT_APP_BASE_URL,
});

// Create Base GET method
export const get = async (path, options = {}) => {
  const response = await commonService.get(path, options);
  return response.data;
};

// Create Base POST method
export const post = async (path, data, options = {}) => {
  const response = await commonService.post(path, data, options);
  return response;
};

// Create Base PUT method
export const put = async (path, data, options = {}) => {
  const response = await commonService.put(path, data, options);
  return response.data;
};

// Create Base DELETE method
export const delete_ = async (path, options = {}) => {
  const response = await commonService.delete(path, options);
  return response.data;
};
