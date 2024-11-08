import Typography from "@comp/atoms/typography"

export default function Header() {
  return (
    <header className="fixed top-0 z-zHeader inset-x-0 border-b border-black-500/10 bg-content-1">
      <div className="container flex justify-center items-center h-[--header-height]">
        <div className="">
          <Typography className="text-16 font-bold">{"Game's name"}</Typography>
        </div>
      </div>
    </header>
  )
}
