import { API } from "@shared/api/instance";
import {
  useMutation,
  type MutationFunctionContext,
} from "@tanstack/react-query";

type Props = {
  onSuccess?: (
    data: any,
    variables: number,
    onMutateResult: unknown,
    context: MutationFunctionContext,
  ) => void;
};

export const useUpdatePresnetSent = ({ onSuccess }: Props = {}) => {
  const token = import.meta.env.VITE_TOKEN;

  const mutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await API.patch(
        `/presents/${id}/send`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return response;
    },
    onSuccess: (data, variables, result, context) => {
      onSuccess?.(data, variables, result, context);
    },
  });

  return {
    ...mutation,
  };
};
