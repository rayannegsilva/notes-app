import { ComponentProps } from "react";
import { DeleteNote, NewNoteButton } from "./button";

export function ActionButtonsRow ({...props}: ComponentProps<'div'>) {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNote />
    </div>
  )
}
