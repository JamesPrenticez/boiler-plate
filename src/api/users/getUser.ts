import type { IOkResult, IUser } from "../../modals";
import axiosClient, { getErrorMessage } from "../axiosClient";

export const getUser = async (): Promise<IUser> => {
  try {
    const response = await axiosClient.get<IOkResult<IUser>>("api/get_user");
    return response.data.data;
  } catch (e) {
    throw new Error(getErrorMessage(e));
  }
};
