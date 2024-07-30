import { cn, formateDateFromMs } from "@renderer/utils"
import { NoteInfo } from "@shared/models"
import { ComponentProps } from "react"

export type NotePreviewType = NoteInfo & {
  isActive?: boolean

} & ComponentProps<'div'>

export function NotePreview ({ title, content, lastEditTime, isActive = false, className, ...props }: NotePreviewType) {
  const date = formateDateFromMs(lastEditTime)

  return (
    <div { ...props } className={cn('cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75', {
      'bg-zinc-400/75': isActive,
      'hover:bg-zinc-500/75': !isActive
    }, className)}>
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">{date}</span>
    </div>
  )
}
