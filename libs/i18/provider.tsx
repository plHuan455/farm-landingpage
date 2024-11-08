"use server"

import { NextIntlClientProvider } from "next-intl"
import { getMessages, unstable_setRequestLocale } from "next-intl/server"
import React from "react"

interface Props {
  children: React.ReactNode
  locale: string
}
export default async function I18Provider({ locale, children }: Props) {
  unstable_setRequestLocale(locale)
  const messages = await getMessages({ locale })
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Asia/Ho_Chi_Minh">
      {children}
    </NextIntlClientProvider>
  )
}
