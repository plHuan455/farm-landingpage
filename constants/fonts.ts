import { Pixelify_Sans } from "next/font/google"
import localFont from "next/font/local"


export const PixelityFont = Pixelify_Sans({
  weight: ["400", "700" ],
  subsets: ["latin"],
  variable: "--font-pixelity",
})

export const kemcoPixelFont = localFont({
  src: [
    {
      path: "../public/fonts/KemcoPixel-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-kemco",
})