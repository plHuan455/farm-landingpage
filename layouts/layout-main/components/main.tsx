import { cn } from "libs/utils/cn"

interface Props {
  children: React.ReactNode
  className?: string
}

export default function Main({ children, className }: Props) {
  return (
    <main className={cn("mt-[--header-height] pb-[calc(var(--bottomBar-height)+16px)]", className)}>{children}</main>
  )
}
