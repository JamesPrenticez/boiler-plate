import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { type IUser } from "../../../modals";
import { getUser } from "../../../api/users/getUser";
import { mockUser } from "../../../constants/data/mockUser";

export const useUser = (): UseQueryResult<IUser, Error> => {
  return useQuery<IUser, Error>({
    queryKey: ["getUser"],
    queryFn:
      import.meta.env.VITE_USE_MOCK_DATA === "true"
        ? async () => mockUser
        : async () => await getUser(),
  });
};
