import { API } from "@shared/api/instance";
import { useMutation } from "@tanstack/react-query";

export interface AddFriendRequest {
  name: string;
  phone: string;
  profileImg?: string;
}

export const useAddFriend = () => {
    const token = import.meta.env.VITE_TOKEN;

    const mutation = useMutation({
        mutationFn: async (request: AddFriendRequest) => {
            if(!request.name.trim() || !request.phone.trim()) {
                throw new Error("이름과 전화번호는 필수입니다.");
            }

            const {data} = await API.post("/recipients", {
                name: request.name,
                phone: request.phone,
                profileImg: request.profileImg || null
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            return data;
        }
    });

    return {
        ...mutation
    }
}