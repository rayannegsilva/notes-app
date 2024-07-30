import { useRef } from "react"
import { Content, FloatingNoteTitle, MarkdownEditor, NotePreviewList, RootLayout, SideBar } from "./components"
import { ActionButtonsRow } from "./components/action-buttons-row"

const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <>
    {/* <DraggableTopBar /> */}
    <RootLayout>
      <SideBar className="px-2">
        <div className="sticky top-0">
          <ActionButtonsRow className="flex justify-between py-4 bg-zinc-900"/>
        </div>
        <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll}/>
      </SideBar>
      <Content ref={contentContainerRef} className="border-l bg-zinc-800/50 border-l-white/5">
      <FloatingNoteTitle className="pt-2"/>
        <MarkdownEditor />
      </Content>
    </RootLayout>
    </>
  )
}

export default App
