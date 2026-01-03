import { getProgramById,updateProgram} from "../../../../lib/program";
import { serializeDoc } from "../../../../lib/serialize";
import ContentForm from "../../../../components/admin/ContentForm";

export default async function EditProgram({ params }: any) {
  const program = await getProgramById(params.id);

  const safeProgram = serializeDoc(program);

  async function handleSubmit(data: any) {
    "use server";
    await updateProgram(params.id, data);
  }

  return (
    <>
      <h1 className="text-2xl font-semibold mb-8">Edit Program</h1>
      <ContentForm
        type="Program"
        initialData={safeProgram}
        onSubmit={handleSubmit}
      />
    </>
  );
}
