import { createEmptyNoteAtom } from '@renderer/store';
import { useSetAtom } from 'jotai';
import { LuFileSignature } from 'react-icons/lu';
import { ActionButton, ActionButtonType } from "./action-button";

export function NewNoteButton ({...props }: ActionButtonType) {
  const createEmptyNote= useSetAtom(createEmptyNoteAtom)

  const handleCreation = async () => {
    await createEmptyNote()
  }

  return (
    <ActionButton {...props} onClick={handleCreation}>
      <LuFileSignature className='w-4 h-4 text-zinc-300'/>
      </ActionButton>
  )
}
