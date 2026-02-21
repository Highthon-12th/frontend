import { API } from "@shared/api/instance";
import {
  useMutation,
  type MutationFunctionContext,
} from "@tanstack/react-query";

interface IFile {
  id: number;
  url: string;
}

type Props = {
  onSuccess?: (
    data: IFile,
    variables: File,
    onMutateResult: unknown,
    context: MutationFunctionContext,
  ) => void;
};

export const useConvertImgUrl = ({ onSuccess }: Props = {}) => {
  const token = import.meta.env.VITE_TOKEN;

  const mutation = useMutation({
    mutationFn: async (img: File) => {
      const formData = new FormData();
      formData.set("file", img);
      const { data } = await API.post(`/files/upload`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      return data as IFile;
    },
    onSuccess: (data, variables, result, context) => {
      onSuccess?.(data, variables, result, context);
    },
  });

  return {
    ...mutation,
  };
};
