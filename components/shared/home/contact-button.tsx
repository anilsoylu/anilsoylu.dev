import { memo } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import data from "@/data/data.json"

const ContactButton = memo(() => (
  <Button
    variant="link"
    className="my-10 w-full font-bold uppercase border-2 border-black rounded-none 
              hover:bg-black hover:text-white hover:no-underline
              transition-colors duration-200 ease-in-out"
    asChild
    aria-label="Send a message via email"
  >
    <Link href={`mailto:${data.SiteMail}`} prefetch={false} className="py-2">
      Send Message
    </Link>
  </Button>
))

ContactButton.displayName = "ContactButton"

export default ContactButton
