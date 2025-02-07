import '@ant-design/v5-patch-for-react-19';
import { ReactNode } from "react";
import { ConfigProvider, theme } from "antd";
import { NextIntlClientProvider } from "next-intl";
import ReduxProvider from "../../providers/ReduxProvider";
import { getMessages } from 'next-intl/server';
import "../[locale]/globals.css";
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import Header from '@/components/Layout/Header';

export default async function RootLayout({ children, params }: { children: ReactNode; params: { locale: string } }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(params.locale as any)) {
    return notFound();
  }
  
  const messages = await getMessages({ locale: params.locale });

  return (
    <html lang={params.locale}>
      <body>
        <ReduxProvider>
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
              <Header />
              <main>
                {children}
              </main>
            </ConfigProvider>
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}