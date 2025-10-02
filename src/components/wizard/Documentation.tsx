import { Upload } from "lucide-react";

export default function DocumentationForm() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Documents</h2>
      <div className="mt-4">
        <label className="block text-sm font-medium mb-2">
          Police Report
        </label>
        <div className="border-dashed border-2 border-gray-300 p-6 text-center rounded cursor-pointer">
          <Upload className="mx-auto text-gray-400 mb-2" />
          <span className="text-blue-600 cursor-pointer">
            Click to upload
          </span>{" "}
          or drag and drop
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium mb-2">
          Expert/Mechanic Report
        </label>
        <div className="border-dashed border-2 border-gray-300 p-6 text-center rounded cursor-pointer">
          <Upload className="mx-auto text-gray-400 mb-2" />
          <span className="text-blue-600 cursor-pointer">
            Click to upload
          </span>{" "}
          or drag and drop
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium mb-2">
          Other Supporting Documents
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
