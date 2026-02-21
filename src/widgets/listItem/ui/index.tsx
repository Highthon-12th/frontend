import { useConvertPresentUrl } from "@shared/api/useConvertPresentUrl";
import { useRecipientById } from "@shared/api/useRecipientById";
import { useUpdatePresnetSent } from "@shared/api/useUpdatePresentSent";
import { useQueryClient } from "@tanstack/react-query";

export { FilterBar } from "./FilterBar";
export type { FilterOption } from "./FilterBar";

interface ListItemProps {
  id: number;
  name: string;
  date: string;
  status: boolean;
  recipientId: number;
}

export const ListItem = ({
  id,
  name,
  date,
  status,
  recipientId,
}: ListItemProps) => {
  const queryClient = useQueryClient();
  const { data } = useRecipientById(recipientId.toString());
  const { mutate } = useUpdatePresnetSent({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["presentList"],
      });
    },
  });

  const convertPresentUrl = useConvertPresentUrl({
    onSuccess: (data) => {
      window.location.href = data.recapUrl;
    },
  });

  if (status) {
    return (
      <div
        className="flex flex-col w-full pt-5 px-4 pb-4 items-start gap-2.5 rounded-[10px] border border-[#E7EBF2] bg-white"
        onClick={() => {
          convertPresentUrl.mutate(id);
        }}
      >
        <div className="flex flex-col gap-1">
          <p className="text-base font-bold text-text">{name}</p>
          <div className="flex gap-2.5">
            <p className="text-sm text-light-grey">{date}</p>
            <p className="text-sm text-light-grey">{data?.name}에게</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full p-4 justify-between items-start rounded-[10px] border border-[#E7EBF2] bg-white">
      <div className="flex flex-col gap-1 w-full">
        <p className="text-base font-bold text-text">{name}</p>
        <div className="flex gap-2.5">
          <p className="text-sm text-light-grey">{date}</p>
          <p className="text-sm text-light-grey">{data?.name}에게</p>
        </div>
        <div
          className="w-full rounded-[10px] bg-stroke p-4.5 text-center text-grey"
          onClick={() => {
            mutate(id);
          }}
        >
          <p className="text-base font-semibold">구매완료</p>
        </div>
      </div>
    </div>
  );
};
