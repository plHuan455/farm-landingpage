import { TEXT_CONSTANTS } from "constants/common"
import { IMAGE_ORIGIN, IMAGE_RESIZE_TOOL } from "constants/image"
import ENVS from "envs"
import ENV_CONFIGS from "envs"
import { cn } from "libs/utils/cn"
import { ImageOriginTypes, detectImageOrigin, formatImageUrl, myImageLoader } from "libs/utils/image"
import Image, { ImageProps } from "next/image"
import { useCallback, useMemo } from "react"

export enum RESIZE_TYPE {
  GLOBAL_CONFIG = "global_config",
  NEXT = "next",
}

const mapResize = (resizeType: RESIZE_TYPE) => {
  switch (resizeType) {
    case RESIZE_TYPE.NEXT: {
      return IMAGE_RESIZE_TOOL.NEXTJS
    }
    default: {
      return ENVS.RESIZE_IMAGE
    }
  }
}
export interface ImageBaseProps extends ImageProps {
  imageClassName?: string
  origin?: ImageOriginTypes
  resizeType?: RESIZE_TYPE
}

const ImageBase: React.FC<ImageBaseProps> = ({
  src,
  alt = TEXT_CONSTANTS.IMAGE_ALT,
  origin,
  fill = true,
  priority = false,
  unoptimized = true,
  resizeType = RESIZE_TYPE.GLOBAL_CONFIG,
  ...props
}) => {
  const { detectedOrigin, formatSrc } = useMemo(() => {
    const detectedOrigin = origin ?? detectImageOrigin(src as string)

    return {
      detectedOrigin,
      formatSrc: formatImageUrl(src as string, { origin: detectedOrigin }),
    }
  }, [origin, src])

  const loader = useCallback(
    (origin?: ImageOriginTypes) => {
      const resizeTool = mapResize(resizeType)
      if (resizeTool === IMAGE_RESIZE_TOOL.NONE) {
        return ({ src }) => src
      }

      if (origin === IMAGE_ORIGIN.cloud && resizeTool === IMAGE_RESIZE_TOOL.CLOUDFLARE) {
        return myImageLoader
      }

      return undefined
    },
    [resizeType],
  )

  return (
    <>
      <Image
        title={alt}
        src={formatSrc}
        sizes="100vw"
        alt={alt}
        fill={fill}
        unoptimized={
          ENV_CONFIGS.RESIZE_IMAGE === IMAGE_RESIZE_TOOL.DISABLED
            ? true
            : ENV_CONFIGS.RESIZE_IMAGE === IMAGE_RESIZE_TOOL.NONE
            ? unoptimized ?? true
            : undefined
        }
        data-unoptimize={
          ENV_CONFIGS.RESIZE_IMAGE === IMAGE_RESIZE_TOOL.DISABLED
            ? true
            : ENV_CONFIGS.RESIZE_IMAGE === IMAGE_RESIZE_TOOL.NONE
            ? unoptimized ?? true
            : undefined
        }
        priority={priority}
        className={cn("object-cover", props.className)}
        loader={loader(detectedOrigin)}
        {...props}
      />
    </>
  )
}

export default ImageBase
