import { useRouter } from "next/router"

import Navigation from "./Navigation"

const navigation = [
  { name: "Films", href: "/", current: false },
  { name: "Team", href: "/team", current: false },
  { name: "People", href: "#", current: false },
  { name: "Planets", href: "#", current: false },
  { name: "Species", href: "#", current: false },
  { name: "Starships", href: "#", current: false },
  { name: "Vehicles", href: "#", current: false },
]

export default function Header() {
  const router = useRouter()

  return (
    <>
      <Navigation
        navigation={navigation.map((item) => {
          return item.href === router.route ? { ...item, current: true } : item
        })}
      />
    </>
  )
}
