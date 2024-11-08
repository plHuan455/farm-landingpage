"use client"

import { ButtonBase } from "@comp/atoms/button-base"
import { useRouter } from "next/navigation"

interface Props {
  slots?: {
    center?: React.ReactNode
    right?: React.ReactNode
  }
  onBackClick?: () => void
}
export default function DetailHeader({ slots, onBackClick }: Props) {
  const router = useRouter()
  return (
    <header className="fixed top-0 z-zHeader inset-x-0 border-b border-black-500/10 bg-content-1">
      <div className="container flex justify-between items-center h-[--header-height]">
        <ButtonBase
          size={40}
          className=""
          isIconOnly
          variant="text"
          onClick={() => (onBackClick ? onBackClick() : router.back())}
        >
          {"<"}
        </ButtonBase>
        {slots?.center}
        {slots?.right}
      </div>
    </header>
  )
}
