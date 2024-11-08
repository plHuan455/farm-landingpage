import BottomBar from "layouts/components/bottom-bar"

import Header from "./header"

interface Props {
  children: React.ReactNode
}

export default function LayoutMain({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <BottomBar />
    </>
  )
}
