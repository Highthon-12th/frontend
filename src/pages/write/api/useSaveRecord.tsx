import { API } from "@shared/api/instance";
import {
  useMutation,
  type MutationFunctionContext,
} from "@tanstack/react-query";

type Props = {
  onSuccess?: (
    data: IRecord,
    variables: MutationParams,
    onMutateResult: unknown,
    context: MutationFunctionContext,
  ) => void;
};

interface MutationParams {
  recipientId: number;
  category: string;
  content: string;
  imageUrl: string;
}

interface IRecord {
  id: number;
  category: string;
  content: string;
  imageUrl: string;
  createdAt: string;
}

export const useSaveRecord = ({ onSuccess }: Props = {}) => {
  const token = import.meta.env.VITE_TOKEN;

  const mutation = useMutation({
    mutationFn: async ({
      recipientId,
      category,
      content,
      imageUrl,
    }: MutationParams) => {
      const body = {
        recipientId,
        category,
        content,
        imageUrl,
      };
      const { data } = await API.post(`/records`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data as IRecord;
    },
    onSuccess: (data, variables, result, context) => {
      onSuccess?.(data, variables, result, context);
    },
  });

  return {
    ...mutation,
  };
};
