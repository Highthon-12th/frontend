import { API } from "@shared/api/instance";
import { useQuery } from "@tanstack/react-query";

interface IPresent {
  id: number;
  name: string;
  selectedRecords: {
    id: number;
    category: string;
    content: string;
    imageUrl: string;
    createdAt: string;
  }[];
  recipientId: number;
  isSent: boolean;
  createdAt: string;
}

export const usePresents = () => {
  const token = import.meta.env.VITE_TOKEN;

  const query = useQuery({
    queryKey: ["presentList"],
    queryFn: async () => {
      const { data } = await API.get("/presents", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data as IPresent[];
    },
    retry: 1,
  });

  return {
    ...query,
  };
};
