import { Editor } from "./editor";
import Toolbar from "./toolbar";
interface DocumentIdProps {
  params: Promise<{ documentId: string }>

};

const DocumentId = async ({ params }: DocumentIdProps) => {
  const { documentId } = await params;



  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <Toolbar />
      <Editor />
    </div>
  );
}
export default DocumentId;
