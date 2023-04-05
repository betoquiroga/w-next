import { IconSvg } from "src/common/interfaces/icon.interface"
import classNames from "classnames"
import Link from "next/link"
import { usePathname } from "next/navigation"

const MainMenuItem = ({ icon, href }: MainMenuItemProps) => {
  const Icon = icon

  return (
    <Link
      href={href}
      className={classNames("w-full flex justify-center py-6 transition", {
        "bg-ww-green-600": usePathname()?.split("/")[1] === href.split("/")[1],
        "hover:bg-ww-alt": usePathname()?.split("/")[1] !== href.split("/")[1],
      })}
    >
      <Icon />
    </Link>
  )
}

type MainMenuItemProps = {
  icon: IconSvg
  href: string
}

export default MainMenuItem
