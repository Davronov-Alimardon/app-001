import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <div className="m-5 flex justify-between px-2">
      <Button>Click me</Button>
      <ModeToggle />
    </div>
  )
}
