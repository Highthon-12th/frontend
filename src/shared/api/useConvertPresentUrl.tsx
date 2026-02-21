import { API } from "@shared/api/instance";
import {
  useMutation,
  type MutationFunctionContext,
} from "@tanstack/react-query";

interface IUrl {
  recapUrl: string;
}

type Props = {
  onSuccess?: (
    data: IUrl,
    variables: number,
    onMutateResult: unknown,
    context: MutationFunctionContext,
  ) => void;
};

export const useConvertPresentUrl = ({ onSuccess }: Props = {}) => {
  const token = import.meta.env.VITE_TOKEN;

  const mutation = useMutation({
    mutationFn: async (id: number) => {
      const { data } = await API.post(
        `/presents/${id}/recap`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );

      return data as IUrl;
    },
    onSuccess: (data, variables, result, context) => {
      onSuccess?.(data, variables, result, context);
    },
  });

  return {
    ...mutation,
  };
};
