import { API } from "@shared/api/instance";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

interface IRecipients {
  id: number;
  name: string;
  phone: string;
  profileImageUrl: string;
  records: number;
  presents: number;
  createdAt: string;
}

export const useRecipientById = (
  id: string,
  options?: Omit<UseQueryOptions<any, any, any, any>, "queryKey" | "queryFn">,
) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoieWpzMTIxODA4MjVAZ21haWwuY29tIiwiaWF0IjoxNzcxNjc1NDczLCJleHAiOjE3NzIyODAyNzN9.oP7KZ7M74vPVm5xqlJSPHeQfO40eZZKA84BqrsA62qA";

  const query = useQuery({
    queryKey: ["recipientById"],
    queryFn: async () => {
      const { data } = await API.get(`/recipients/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data as IRecipients;
    },
    retry: 1,
    ...options,
  });

  return {
    ...query,
  };
};
