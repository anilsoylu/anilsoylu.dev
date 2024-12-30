import Image from "next/image"

const AvatarComponent = () => {
  return (
    <Image
      src="/uploads/anil.jpeg"
      alt="Anıl Soylu"
      width={256}
      height={256}
      className="w-full h-auto rounded-md shadow-2xl"
    />
  )
}

export default AvatarComponent
