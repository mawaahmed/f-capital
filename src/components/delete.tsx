
import { Trash2 } from "lucide-react";

type ConfirmDeleteModalProps = {
  title: string;
  message: string;
  onCancel?: () => void;
  onConfirm?: () => void;
};

export default function ConfirmDeleteModal({
  title,
  message,
  onCancel,
  onConfirm,
}: ConfirmDeleteModalProps) {
  return (
    <div className="text-center">
      {/* Icon */}
      <div className="flex justify-center mb-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-200">
          <Trash2 className="w-6 h-6 text-red-600" />
        </div>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold mb-2">{title}</h2>

      {/* Message */}
      <p className="text-sm text-gray-600 mb-5">{message}</p>

      {/* Actions */}
      <div className="flex justify-center gap-3 w-full">
        <button
          onClick={onCancel}
          className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="w-full px-4 py-2 rounded-md bg-blue-900 text-white hover:bg-blue-800"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
