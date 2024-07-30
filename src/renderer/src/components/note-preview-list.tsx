import { useNotesList } from '@renderer/hooks/useNotesList'
import { isEmpty } from 'lodash'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { NotePreview } from './note-preview'

export type NotePreviewListType = ComponentProps<'ul'> & {
  onSelect: () => void
}

export function NotePreviewList ({ onSelect, className, ...props}: NotePreviewListType) {
  const { notes, handleNoteSelect, selectedNoteIndex } = useNotesList({ onSelect })

  if(!notes) return null

  if(isEmpty(notes)) {
    return (
      <ul className={twMerge('text-center pt-4', className)}>
        <span>Nenhuma nota registrada!</span>
      </ul>
    )
  }

  return (
    <ul {...props}>
      {notes.map((note, index) => (
        <NotePreview
        onClick={handleNoteSelect(index)}
        isActive={selectedNoteIndex === index}
        key={note.title + note.lastEditTime}
          {...note}
        />
      ))}
    </ul>
  )
}
