import { API } from "@shared/api/instance";
import { useQuery } from "@tanstack/react-query";

interface IRecipients {
  id: number;
  name: string;
  phone: string;
  profileImageUrl: string;
  records: number;
  presents: number;
  createdAt: string;
}

export const useRecipients = () => {
  const token = import.meta.env.VITE_TOKEN;

  const query = useQuery({
    queryKey: ["recipients"],
    queryFn: async () => {
      const { data } = await API.get("/recipients", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data as IRecipients[];
    },
    retry: 1,
  });

  return {
    ...query,
  };
};
