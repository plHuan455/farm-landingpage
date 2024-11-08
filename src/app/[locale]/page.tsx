import Flex from "@comp/atoms/flex"
import LinkBase from "@comp/atoms/link-base"
import Typography from "@comp/atoms/typography"
import { kemcoPixelFont } from "@constants/fonts"
import { Metadata } from "next"
import React from "react"
import { generatePageMetadata } from "src/seo"

export async function generateMetadata(params): Promise<Metadata> {
  return generatePageMetadata({
    url: "/",
    title: "TON Farms - The Best GameFi on TON Ecosystem",
    description: "Ton Farms is a GameFi which is built for everyone and uses Blockchain technology to connect millions of people around the world.",
    keywords: 't farm telegram games, web telegram, happy day farm, happy farm',
    thumbnail: '/images/banner.webp',
    locale: params.locale,
  })
}

export default function Page() {
  const socials = [
    {name: 'Telegram', href: "https://t.me/+NSdQNNbgG_02ZjUx"},
    {name: 'X', href: "https://x.com/tonfarms_com"},
    {name: 'Youtube', href: "https://www.youtube.com/@TONFarms"},
    {name: 'Medium', href: "https://medium.com/@tonfarms"},
    {name: 'VK', href: "https://vk.com/tonfarms"}
  ]
  return <div style={{
    width: '100%',
    position: 'relative'
  }}
    className={kemcoPixelFont.className}
  >
    <header className="fixed inset-x-0 container">
      <Flex className="w-full gap-4 text-[#ffffff] h-[70px] items-center justify-center lg:justify-start">
        {socials.map((value => (
          <div key={value.name}>
            <LinkBase href={value.href} target="_blank" aria-label={value.name}>
              <Typography size={14} className=""
                style={{
                  filter: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0%)) drop-shadow(1px 2px 1px rgb(0 0 0 / 0.3))'
                }}
              >{value.name}</Typography>
            </LinkBase>
          </div>
        )))}
      </Flex>
    </header>
    <div className='absolute top-[12%] w-full flex items-center flex-col'
    >
      <img src="/images/logo.webp" draggable={false} alt="logo" className="block w-[70%] lg:w-[60%] lg:max-w-[440px] "/>
      <img src='/images/coming-soon.webp' draggable={false} alt='coming soon' className="mt-6 block w-[30%] max-w-[200px] animate-pulse"/>

      <LinkBase href="https://t.me/tonfarm_offical" target="_blank">
        <div
          className="mt-10 bg-[#e7ff4a] h-[44px] lg:h-[52px] text-[14px] lg:text-[16px] font-bold flex items-center justify-center px-5 cursor-pointer"
          style={{
            clipPath: "polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))",
            boxShadow: "inset -4px -4px 0px rgba(0, 0, 0, 0.2), inset 4px 4px 0px rgba(255, 255, 255, 0.2)"
          }}
        >
          JOIN COMMUNITY
        </div>
      </LinkBase>

      <div>

      </div>
    </div>
    <picture className="pointer-events-none">
      <source media="(max-width: 799px)" srcSet="/images/banner-mobile.webp" />
      <source media="(min-width: 800px)" srcSet="/images/banner.webp" />
      <img src="/images/banner.webp" alt=""
        style={{
          display: 'block',
          width: '100vw',
          height: '100dvh',
          objectFit: 'cover'
        }}
      />
    </picture>
  </div>
}