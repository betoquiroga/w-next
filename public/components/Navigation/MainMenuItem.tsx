import { IconSvg } from "@interfaces/icon.interface"
import classNames from "classnames"
import Link from "next/link"

const MainMenuItem = ({ icon, active }: MainMenuItemProps) => {
  const Icon = icon
  return (
    <Link
      href="/"
      className={classNames("w-full flex justify-center py-6 transition", {
        "bg-ww-green-600": active,
        "hover:bg-ww-alt": !active,
      })}
    >
      <Icon />
    </Link>
  )
}

type MainMenuItemProps = {
  icon: IconSvg
  active?: boolean
}

export default MainMenuItem
