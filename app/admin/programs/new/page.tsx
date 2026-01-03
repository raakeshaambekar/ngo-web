import ContentForm from "../../../../components/admin/ContentForm";
import { createProgram } from "../../../../lib/program";

export default function NewProgram() {
  async function handleSubmit(data: any) {
    "use server";
    await createProgram(data);
  }

  return (
    <>
      <h1 className="text-2xl font-semibold mb-8">New Program</h1>
      <ContentForm type="Program" onSubmit={handleSubmit} />
    </>
  );
}
