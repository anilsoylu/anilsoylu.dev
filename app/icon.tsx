import { ImageResponse } from "next/og"

interface IconSize {
  width: number
  height: number
}

const ICON_SIZE: IconSize = {
  width: 32,
  height: 32,
} as const

export const size = ICON_SIZE
export const contentType = "image/png" as const

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width={ICON_SIZE.width}
          height={ICON_SIZE.height}
        >
          <path
            d="M 0 16 C 0 4, 4 0, 16 0 S 32 4, 32 16, 28 32 16 32, 0 28, 0 16"
            transform="rotate(0,16,16) translate(0,0)"
          />
        </svg>
      </div>
    ),
    size
  )
}
