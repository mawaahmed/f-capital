import { Upload } from "lucide-react";

export default function DommageForm() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Dommage Parts</h2>
      <div className="flex flex-col gap-4">
        <label htmlFor="Date" className="flex flex-col gap-2">
          Add part(s) Affected
          <input
            className="border p-2 rounded col-span-2"
            placeholder="Parts Affected"
            type="text"
          />
        </label>

        <label htmlFor="Type" className="flex flex-col gap-2">
          Condition{" "}
          <input
            className="border p-2 rounded col-span-2"
            placeholder="Condition"
          />
        </label>

        <textarea
          className="border p-2 rounded col-span-2"
          placeholder="Description"
          rows={3}
        ></textarea>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium mb-2">
          Photo Of the Part
        </label>
        <div className="border-dashed border-2 border-gray-300 p-6 text-center rounded cursor-pointer">
          <Upload className="mx-auto text-gray-400 mb-2" />
          <span className="text-blue-600 cursor-pointer">
            Click to upload
          </span>{" "}
          or drag and drop
        </div>
      </div>
    </div>
  );
}
