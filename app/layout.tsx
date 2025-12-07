import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Footer, Layout, Navbar } from "nextra-theme-docs";

import "nextra-theme-docs/style.css";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "WatchAPI Docs",
  description: "Product documentation powered by Nextra.",
};

const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;
const navbar = <Navbar logo={<b>WatchAPI</b>} />;
const footer = <Footer>WatchAPI - {new Date().getFullYear()}</Footer>;

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          search={false}
          //   banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/watchapi/watchapi-cli/tree/main/"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
