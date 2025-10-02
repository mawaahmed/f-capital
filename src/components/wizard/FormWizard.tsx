"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Stepper from "./Stepper";
import VehicleInfoForm from "./VehicleInfoForm";
import AccidentDetailsForm from "./AccidentDetailsForm";
import type { ReactElement } from "react";
import DommageForm from "./DommageParts";
import AssessmentForm from "./Assessment";
import DocumentationForm from "./Documentation";
import ConfirmationStep from "./Confirmation";

type Step = {
  title: string;
  component: ReactElement;
};

export default function FormWizard() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps: Step[] = [
    { title: "Vehicle Info", component: <VehicleInfoForm /> },
    { title: "Accident Details", component: <AccidentDetailsForm /> },
    { title: "Damaged parts", component: <DommageForm /> },
    { title: "Assessment", component: <AssessmentForm /> },
    { title: "Documentation", component: <DocumentationForm /> },
    { title: "Confirmation", component: <ConfirmationStep /> },
  ];

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () =>
    setCurrentStep((prev) => Math.max(prev - 1, 0));

  const isLastStep = currentStep === steps.length - 1;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Stepper */}
      <Stepper steps={steps} currentStep={currentStep} />

      {/* Formulaire actif */}
      <div className="mt-6">{steps[currentStep].component}</div>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        {/* Cancel toujours visible */}
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 0}
        >
          Cancel
        </Button>

        {/* Next caché sur la dernière étape */}
        {!isLastStep && (
          <Button onClick={nextStep}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
