import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { type IUserPermission } from "../../../modals";
import { getUserPermissions } from "../../../api/users/getUserPermissions";
import { mockUserPermissions } from "../../../constants";

export const useUserPermissions = (): UseQueryResult<IUserPermission[], Error> => {
  return useQuery<IUserPermission[], Error>({
    queryKey: ["getUserPermissions"],
    queryFn:
      import.meta.env.VITE_USE_MOCK_DATA === "true"
        ? async () => mockUserPermissions
        : async () => await getUserPermissions(),
  });
};
