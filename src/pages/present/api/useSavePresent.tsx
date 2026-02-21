import { API } from "@shared/api/instance";
import {
  useMutation,
  type MutationFunctionContext,
} from "@tanstack/react-query";

interface SavePresentProps {
  name: string;
  type: string;
  recipientId: number;
  selectedRecordIds: string[];
}

type Props = {
  onSuccess?: (
    data: any,
    variables: SavePresentProps,
    onMutateResult: unknown,
    context: MutationFunctionContext,
  ) => void;
};

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
}

export const useSavePresent = ({ onSuccess }: Props = {}) => {
  const token = import.meta.env.VITE_TOKEN;

  const mutation = useMutation({
    mutationFn: async ({
      name,
      type,
      recipientId,
      selectedRecordIds,
    }: SavePresentProps) => {
      const body = {
        name,
        type,
        recipientId,
        selectedRecordIds: selectedRecordIds.map(Number),
      };
      const { data } = await API.post(`/presents`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data as IPresent;
    },
    onSuccess: (data, variables, result, context) => {
      onSuccess?.(data, variables, result, context);
    },
  });

  return {
    ...mutation,
  };
};
