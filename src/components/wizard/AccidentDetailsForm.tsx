import { Upload } from "lucide-react";

export default function AccidentDetailsForm() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Accident Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <label htmlFor="Date" className="flex flex-col gap-2">
          Date of Accident
          <input
            className="border p-2 rounded col-span-2"
            placeholder="Date of Accident"
            type="date"
          />
        </label>

        <label htmlFor="Type" className="flex flex-col gap-2">
          Type of Accident{" "}
          <input
            className="border p-2 rounded col-span-2"
            placeholder="Type of Accident"
          />
        </label>

        <label htmlFor="Severity" className="flex flex-col gap-2">
          Severity
          <input
            className="border p-2 rounded col-span-2"
            placeholder="Severity"
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
          Upload accident photos
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
