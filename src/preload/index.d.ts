import { CreateNote, DeleteNote, GetNotes, ReadNotes, WriteNote } from "@shared/types"

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      locale: string
      getNotes: GetNotes
      readNotes: ReadNotes
      writeNote: WriteNote
      createNote: CreateNote
      deleteNote: DeleteNote
    }
  }
}
