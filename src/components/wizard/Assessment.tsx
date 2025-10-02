

export default function AssessmentForm() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Assessment</h2>
      <div className="flex flex-col gap-4">
        <label htmlFor="Date" className="flex flex-col gap-2">
          Initial Status
          <input
            className="border p-2 rounded col-span-2"
            placeholder="Pending"
            type="text"
          />
        </label>

        <div className="grid grid-cols-2 gap-4">
            <label htmlFor="Type" className="flex flex-col gap-2">
          Estimated Repair Cost{" "}
          <input
            className="border p-2 rounded col-span-2"
            placeholder=""
          />
        </label>
        <label htmlFor="Type" className="flex flex-col gap-2">
          Estimated Recovery Value{" "}
          <input
            className="border p-2 rounded col-span-2"
            placeholder=""
          />
        </label>
        </div>
        <label htmlFor="Type" className="flex flex-col gap-2">
          Assigned Claims Officer{" "}
          <input
            className="border p-2 rounded col-span-2"
            placeholder=""
          />
        </label>
      </div>
    </div>
  );
}
