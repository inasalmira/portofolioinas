"use client";

export default function CancelButton() {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className="text-sm font-semibold text-gray-900"
    >
      Cancel
    </button>
  );
}