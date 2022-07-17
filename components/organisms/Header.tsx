import { useRouter } from "next/router"

import Navigation from "./Navigation"

const navigation = [
  { name: "Rockets", href: "/", current: false },
  { name: "Dragons", href: "#", current: false },
  { name: "Ships", href: "#", current: false },
  { name: "Launches", href: "#", current: false },
  { name: "Crew", href: "#", current: false },
  { name: "404", href: "/404page", current: false },
]

export default function Header() {
  const router = useRouter()

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      <Navigation
        navigation={navigation.map((item) => {
          return item.href === router.route ? { ...item, current: true } : item
        })}
      />
    </header>
  )
}
