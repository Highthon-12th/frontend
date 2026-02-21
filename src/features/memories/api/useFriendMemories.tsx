import { API } from "@shared/api/instance";
import { useQuery } from "@tanstack/react-query";

interface IMemories {
  id: number;
  category: string;
  content: string;
  imageUrl: string;
  createdAt: string;
}

export const useFriendMemories = (id: string) => {
  const token = import.meta.env.VITE_TOKEN;

  const query = useQuery({
    queryKey: ["friendsRecipientById"],
    queryFn: async () => {
      const { data } = await API.get(`/records/recipients/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data as IMemories[];
    },
    retry: 1,
  });

  return {
    ...query,
  };
};
