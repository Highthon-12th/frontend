import CameraIcon from "@shared/img/camera.svg?react";
import GreyPlusIcon from "@shared/img/grey-plus.svg?react";

interface ImagePickerProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
}

export const ImagePicker = ({ onChange }: ImagePickerProps) => {
  return (
    <label className="w-full flex justify-between px-5 py-3 rounded-[14px] bg-white border border-stroke">
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onChange}
      />
      <div className="flex items-center gap-2.5">
        <CameraIcon />
        <p className="text-sm text-text font-semibold leading-5.5">
          사진 추가하기
        </p>
      </div>
      <GreyPlusIcon />
    </label>
  );
};
