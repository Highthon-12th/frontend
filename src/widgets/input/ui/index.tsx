export interface IInputProps {
    label?: string;
    required?: boolean;
    placeholder?: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props : IInputProps) => {
    return <div className="flex flex-col gap-2">
        <span className="font-normal text-md">
            {props.label}
            {props.required && <span style={{ color: 'red' }}> * </span>}
        </span>
        <input
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            className="w-full border rounded-[10px] border-stroke bg-white p-4 outline-none placeholder:text-light-grey"
            placeholder={props.placeholder}
        />
    </div>
}