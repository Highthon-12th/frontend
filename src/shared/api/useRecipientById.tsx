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
  const token = import.meta.env.VITE_TOKEN;

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
