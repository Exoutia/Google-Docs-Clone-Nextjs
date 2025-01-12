import { create } from "zustand"
import { type Editor } from "@tiptap/react"

interface EditorState {
  editor: Editor | null;
  setEditor: (eitor: Editor | null) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  editor: null,
  setEditor: (editor) => set({ editor })
}))
