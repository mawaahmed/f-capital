import PartImageUpload from "@/components/import-image";
import PartForm from "@/components/part-form";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";

type InfoCardProps = {
  title: string;
}; 

export default function AddPart({title}: InfoCardProps) {
  const { id } = useParams();
  return (
    <div className="p-6">
      <Link to="/dashboard/parts-management" className="flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" /> Back To Parts List
      </Link>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <h1 className="hidden">Part {id}</h1>
      <div className="flex gap-4 w-full">
        <PartForm />
        <PartImageUpload />
      </div>
    </div>
  );
}
