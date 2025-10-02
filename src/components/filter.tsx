type FilterProps = {
  title: string;
  filters?: string[]; // liste des filtres à afficher
};

export default function Filter({ title, filters = ["Today", "This week", "This Month", "This Year"] }: FilterProps) {
  return (
    <div className="flex items-center mb-5 mt-5 justify-between shadow rounded text-center p-3 text-sm font-medium text-gray-600">
      <div>
        <p className="text-black text-[16px]">{title}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-gray-600 text-[14px]">Time Period :</p>
        {filters.map((filter, index) => (
          <button
            key={index}
            className={`text-[14px] ${
              index === 0 ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
