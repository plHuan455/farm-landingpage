import JotaiProvider from "@libs/jotai/provider"
import ThemeProviderBase from "@libs/next-themes/provider"
import QueryClientProvider from "@libs/react-query/provider"
import { LOCALE_CONSTANTS } from "constants/locale"

import "../../../styles/index.scss"
import I18Provider from "@libs/i18/provider"

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}
export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  return (
    <html lang={locale || LOCALE_CONSTANTS.vi} className={`font-sans`} suppressHydrationWarning>
      <body>
        <ThemeProviderBase>
          <I18Provider locale={locale}>
            <QueryClientProvider>
              <JotaiProvider>{children}</JotaiProvider>
            </QueryClientProvider>
          </I18Provider>
        </ThemeProviderBase>
      </body>
    </html>
  )
}
