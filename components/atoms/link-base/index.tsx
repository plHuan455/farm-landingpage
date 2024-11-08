import { cn } from "libs/utils/cn"
import Link, { LinkProps } from "next/link"

// type Props = (({
//   href: string
// } & Omit<LinkProps, 'href'>) | ({
//   href?: undefined
// } & React.HTMLAttributes<HTMLElement>)) & {
//   className: string
// }

// type Props = Partial<LinkProps> & React.HTMLAttributes<HTMLElement> && {
//   href?: string
// }

interface Props extends React.HTMLAttributes<HTMLElement> {
  linkProps?: Omit<LinkProps, "href">
  href?: string
  target?: string
}

const LinkBase: React.FC<Props> = ({ linkProps, children, href, className, target, ...props }) => {
  if (href) {
    return (
      <Link href={href} passHref {...linkProps} className={cn("block", className)} target={target} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export default LinkBase
