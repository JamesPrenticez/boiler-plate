import axios from "axios";
import { type IErrorResult, ParameterError } from "../modals";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getErrorMessage = (e: unknown): string => {
  let message: string;
  if (axios.isAxiosError<IErrorResult>(e)) {
    if (e.response != null) {
      message = `Response from Server: ${e.response?.data.error.message}`;
    } else {
      message = `Axios Error: ${e.message}`;
    }
  } else {
    message = "An unexpected error occurred";
  }
  return message;
};

export const getParameterError = (e: unknown): ParameterError => {
  let error: ParameterError;
  if (axios.isAxiosError<IErrorResult>(e)) {
    if (e.response != null) {
      error = new ParameterError(
        `Response from Server: ${e.response?.data.error.message}`,
        e.response.data.error.details
      );
    } else {
      error = new ParameterError(`Axios Error: ${e.message}`);
    }
  } else {
    error = new ParameterError("An unexpected error occurred");
  }
  return error;
};

export default axiosClient;
