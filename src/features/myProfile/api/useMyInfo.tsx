import { API } from "@shared/api/instance";
import { useQuery } from "@tanstack/react-query";

interface IMyInfo {
  id: number;
  name: string;
  email: string;
  phone: string;
  profileImageUrl: string;
  recipientCount: number;
  presentCount: number;
}

export const useMyInfo = () => {
  const token = import.meta.env.VITE_TOKEN;

  const query = useQuery({
    queryKey: ["myInfo"],
    queryFn: async () => {
      const { data } = await API.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data as IMyInfo;
    },
    retry: 1,
  });

  return {
    ...query,
  };
};
