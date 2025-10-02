"use client";

import { Button } from "@/components/ui/button";

export default function ConfirmationStep() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Vehicle Information */}
      <div className="col-span-2 border rounded-lg p-4 bg-white">
        <h2 className="font-semibold mb-4">Vehicle Information</h2>
        <div className="grid grid-cols-6 gap-4 text-sm">
          <div>
            <p className="font-medium">License Plate</p>
            <p>LT-113-AB</p>
          </div>
          <div>
            <p className="font-medium">Vehicle Brand</p>
            <p>Toyota Corolla 2018</p>
          </div>
          <div>
            <p className="font-medium">chassis number</p>
            <p>VF1AB000123456789</p>
          </div>
          <div>
            <p className="font-medium">Insurance Name</p>
            <p>AXA Insurance</p>
          </div>
          <div>
            <p className="font-medium">Type of Insurance</p>
            <p>Collision Insurance</p>
          </div>
          <div>
            <p className="font-medium">Owner’s Name</p>
            <p>Joseh Ponong</p>
          </div>
        </div>
      </div>

      {/* Accident Details (left) */}
      <div className="border rounded-lg p-4 bg-white">
        <h2 className="font-semibold mb-4">Accident Details</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium">Date of accident</p>
            <p>29/08/2025</p>
          </div>
          <div>
            <p className="font-medium">Type of Accident</p>
            <p>Collision</p>
          </div>
          <div>
            <p className="font-medium">Condition</p>
            <p>High</p>
          </div>
          <div>
            <p className="font-medium">Severity</p>
            <p>High</p>
          </div>
        </div>
      </div>

      {/* Accident Details (right - text) */}
      <div className="border rounded-lg p-4 bg-white">
        <h2 className="font-semibold mb-4">Accident Details</h2>
        <p className="text-sm leading-relaxed">
          The insured vehicle was involved in a front-end collision on June 15,
          2025, at an intersection in downtown Douala. The impact primarily
          affected the front bumper, right headlight, and radiator system. No
          injuries were reported, but the vehicle sustained moderate damage,
          requiring replacement of certain parts. The parts removed have been
          inspected, photographed (before/after), and recorded for potential
          resale, with their condition and estimated resale values detailed
          below.
        </p>
      </div>

      {/* Claim Assessment */}
      <div className="border rounded-lg p-4 bg-white">
        <h2 className="font-semibold mb-4">Claim Assessment</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium">Initial Status</p>
            <p>In Review</p>
          </div>
          <div>
            <p className="font-medium">Estimated repair cost</p>
            <p>80.000 XAF</p>
          </div>
          <div>
            <p className="font-medium">Estimated recovery value</p>
            <p>100.000 XAF</p>
          </div>
        </div>
      </div>

      {/* Accident photos */}
      <div className="border rounded-lg p-4 bg-white">
        <h2 className="font-semibold mb-4">Accident photos</h2>
        <div>
          <p className="font-medium mb-2">Before</p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <img
              src="/images/before1.jpg"
              alt="before accident"
              className="rounded-md object-cover h-28 w-full"
            />
            <img
              src="/images/before2.jpg"
              alt="before accident"
              className="rounded-md object-cover h-28 w-full"
            />
          </div>
          <p className="font-medium mb-2">After</p>
          <div className="grid grid-cols-2 gap-2">
            <img
              src="/images/after1.jpg"
              alt="after accident"
              className="rounded-md object-cover h-28 w-full"
            />
            <img
              src="/images/after2.jpg"
              alt="after accident"
              className="rounded-md object-cover h-28 w-full"
            />
          </div>
        </div>
      </div>

      {/* Damaged Parts */}
      <div className="border rounded-lg p-4 bg-white">
        <h2 className="font-semibold mb-4">Damaged Parts</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium">Part details</p>
            <p>Rear Bumper</p>
          </div>
          <div>
            <p className="font-medium">Condition</p>
            <p>High</p>
          </div>
        </div>
      </div>

      {/* Attachments */}
      <div className="border rounded-lg p-4 bg-white">
        <h2 className="font-semibold mb-4">Attachments & Documents</h2>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex justify-between">
            <span>Police report</span>
            <span className="text-red-500 font-medium">PDF</span>
          </div>
          <div className="flex justify-between">
            <span>Expert report</span>
            <span className="text-red-500 font-medium">PDF</span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="col-span-2 flex justify-end gap-4 mt-6">
        <Button className="bg-blue-900 text-white hover:bg-blue-800">
          Submit claim
        </Button>
      </div>
    </div>
  );
}
