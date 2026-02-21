import { API } from "@shared/api/instance";
import { useQuery } from "@tanstack/react-query";

export interface IRecords {
    id: number;
    category: string;
    content: string;
    imageUrl: string;
    createdAt: string;
}

export interface IReceivePresent {
    id: number;
    name: string;
    selectedRecords: IRecords[];
    recipientId: number;
    isSent: boolean;
    sender: string;
}

export const useReceivePresent = (encodedPresentId: string) => {
    const query = useQuery({
        queryKey: ["receive", "present", encodedPresentId],
        queryFn: async () => {
            const {data} = await API.get(`/presents/recap/${encodedPresentId}`)
            return data;
        },
        retry: false
    })

    return {
        ...query
    }
}