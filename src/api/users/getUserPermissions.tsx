import type { IOkResult, IUserPermission } from "../../modals";
import axiosClient, { getErrorMessage } from "../axiosClient";

export const getUserPermissions = async (): Promise<IUserPermission[]> => {
  try {
    const response = await axiosClient.get<IOkResult<IUserPermission[]>>(
      "api/get_user_permissions"
    );
    return response.data.data;
  } catch (e) {
    throw new Error(getErrorMessage(e));
  }
};
