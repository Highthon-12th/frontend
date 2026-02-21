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
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoieWpzMTIxODA4MjVAZ21haWwuY29tIiwiaWF0IjoxNzcxNjc1NDczLCJleHAiOjE3NzIyODAyNzN9.oP7KZ7M74vPVm5xqlJSPHeQfO40eZZKA84BqrsA62qA";

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
