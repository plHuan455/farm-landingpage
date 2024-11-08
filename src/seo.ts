import { TEXT_CONSTANTS } from "constants/common"
import { IMAGE_SRC } from "constants/image"
import { LOCALE_CONSTANTS } from "constants/locale"
import ENVS from "envs"
import { Metadata } from "next"

import { ValuesOf } from "types/index.d"

export interface MetadataProps {
  locale: ValuesOf<typeof LOCALE_CONSTANTS>
  type?: string
  title?: string
  description?: string
  keywords?: string
  thumbnail?: string
  url: string
  lang?: string
}

export const generatePageMetadata = async (props?: MetadataProps) => {
  const { locale, type = "website", title = "", description, keywords, thumbnail, url } = props || {}

  return {
    metadataBase: new URL(ENVS.DOMAIN as string),
    applicationName: TEXT_CONSTANTS.SITE_NAME,
    title: title,
    description: description,
    keywords: keywords,
    alternates: {
      canonical: url,
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: title,
    },
    formatDetection: {
      telephone: false,
    },
    openGraph: {
      type: type,
      siteName: TEXT_CONSTANTS.SITE_NAME,
      locale: locale,
      title: title,
      description: description,
      url: url,
      images: [
        {
          url: thumbnail || IMAGE_SRC.thumbnail,
          width: 720,
          height: 480,
        },
      ],
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
    },
    additionalMetaTags: [
      {
        name: "keywords",
        content: keywords,
      },
    ],
  } as Metadata
}
