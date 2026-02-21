export interface FilterOption {
  id: string;
  label: string;
}

interface FilterBarProps {
  filters: FilterOption[];
  active: string;
  onChange: (id: string) => void;
}

export const FilterBar = ({ filters, active, onChange }: FilterBarProps) => {
  return (
    <div className="px-5 pt-5 pb-3 flex gap-2">
      {filters.map((f) => (
        <button
          key={f.id}
          onClick={() => onChange(f.id)}
          className={`px-3.5 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
            active === f.id
              ? "bg-main text-white"
              : "border border-stroke bg-white text-grey"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};
