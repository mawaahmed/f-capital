import { Upload } from "lucide-react";

export default function VehicleInfoForm() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Vehicle Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <label htmlFor="licensePlate" className="flex flex-col gap-2">
          License Plate Number
          <input
            className="border p-2 rounded"
            placeholder="License Plate Number"
          />
        </label>
        <label htmlFor="chassisNumber" className="flex flex-col gap-2">
          Chassis Number
          <input className="border p-2 rounded" placeholder="Chassis Number" />
        </label>
        <label htmlFor="vehicleBrand" className="flex flex-col gap-2">
          Vehicle Brand / Model
          <input
            className="border p-2 rounded"
            placeholder="Vehicle Brand / Model"
          />
        </label>
        <label htmlFor="color" className="flex flex-col gap-2">
          Year of Manufacture
          <input
            className="border p-2 rounded"
            placeholder="Year of Manufacture"
          />
        </label>

        <label htmlFor="insurance" className="flex flex-col gap-2">
          Insurance Company Name
          <input
            className="border p-2 rounded"
            placeholder="Insurance Company Name"
          />
        </label>

        <label htmlFor="Type" className="flex flex-col gap-2">
          Type of Insurance{" "}
          <input
            className="border p-2 rounded"
            placeholder="Type of Insurance"
          />
        </label>
        <label htmlFor="contact" className="flex flex-col gap-2">
          Contact Information
          <input
            className="border p-2 rounded"
            placeholder="Contact Information"
          />
        </label>

        <label htmlFor="owner" className="flex flex-col gap-2">
          Owner's name
          <input className="border p-2 rounded" placeholder="Owner's name" />
        </label>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium mb-2">Upload Logo</label>
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
