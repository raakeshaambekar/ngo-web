import { getPrograms } from "../../../lib/program"; 
import ProgramList from "./ProgramList";
import { serializeDoc } from "../../../lib/serialize";
import Link from "next/link";

export default async function ProgramsPage() {
  const programs = await getPrograms(true);

  const safePrograms = programs.map(serializeDoc);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Programs</h1>

        <Link
          href="/admin/programs/new"
          className="bg-red-600 text-white px-4 py-2 rounded text-sm"
        >
          + New Program
        </Link>
      </div>
      
      <ProgramList programs={safePrograms} />
    </div>
  );
}
