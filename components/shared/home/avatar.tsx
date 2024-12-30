import Image from "next/image"

const AvatarComponent = () => {
  return (
    <Image
      src="/uploads/anil.jpeg"
      alt="Anıl Soylu's profile picture"
      width={256}
      height={256}
      className="w-full h-auto rounded-md shadow-2xl"
      priority
      sizes="(max-width: 768px) 100vw, 256px"
    />
  )
}

export default AvatarComponent
