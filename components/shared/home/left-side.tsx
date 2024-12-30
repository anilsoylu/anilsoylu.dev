import Link from "next/link"
import { Button } from "@/components/ui/button"
import AvatarComponent from "./avatar"
import LeftInformation from "./info"
import data from "@/data/data.json"

const LeftSide = () => {
  return (
    <div className="flex-none w-full md:w-1/4">
      <AvatarComponent />
      <LeftInformation />
      <Button
        variant="link"
        className="hover:no-underline my-10 border-2 border-black rounded-none w-full uppercase font-bold hover:bg-black hover:text-white"
        asChild
      >
        <Link href={`mailto:${data.SiteMail}`}>Send Message</Link>
      </Button>
    </div>
  )
}

export default LeftSide
