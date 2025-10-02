import type { ReactElement } from "react"

type Step = {
  title: string;
  component: ReactElement;
};

export default function Stepper({ steps, currentStep }: { steps: Step[]; currentStep: number }) {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={index} className="flex-1 flex flex-col items-center">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full border-2 
              ${index <= currentStep ? "bg-blue-600 text-white border-blue-600" : "bg-gray-100 text-gray-400 border-gray-300"}
            `}
          >
            {index + 1}
          </div>
          <span
            className={`text-xs mt-2 ${
              index <= currentStep ? "text-blue-600 font-medium" : "text-gray-400"
            }`}
          >
            {step.title}
          </span>
        </div>
      ))}
    </div>
  );
}
