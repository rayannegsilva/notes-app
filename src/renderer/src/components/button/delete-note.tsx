import { deleteNoteAtom } from '@renderer/store';
import { useSetAtom } from 'jotai';
import { FaRegTrashCan } from 'react-icons/fa6';
import { ActionButton, ActionButtonType } from "./action-button";

export function DeleteNote({...props }: ActionButtonType) {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDeleteNote = async () => {
    await deleteNote()
  }

  return  (
    <ActionButton {...props } onClick={handleDeleteNote}>
      <FaRegTrashCan className='w-4 h-4 text-zinc-300'/>
    </ActionButton>
  )
}
