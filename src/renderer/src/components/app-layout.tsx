import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export function RootLayout ({ className, children, ...props}: ComponentProps<'main'>) {
  return (
    <main className={twMerge('flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  )
}

export function SideBar ({ className, children, ...props}: ComponentProps<'aside'>) {
  return (
    <aside className={twMerge('w-[250px] mt-10 h-[100vh + 10px] overflow-auto', className)} {...props}>
      {children}
    </aside>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>> (
  ({ children, className, ...props}, ref) => (
    <div ref={ref} {...props} className={twMerge('flex-1 overflow-auto', className)}>
      {children}
    </div>
  ))

  Content.displayName = 'Content'

