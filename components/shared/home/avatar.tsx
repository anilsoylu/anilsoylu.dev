import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const AvatarComponent = () => {
  return (
    <AspectRatio ratio={1} className="relative">
      <Image
        src="/uploads/anil.jpeg"
        alt="Anıl Soylu's profile picture"
        fill
        className={`
          object-cover rounded-md shadow-2xl
          transition-opacity duration-300
        `}
        priority
        sizes="(max-width: 768px) 100vw, 256px"
      />
    </AspectRatio>
  )
}

export default AvatarComponent
