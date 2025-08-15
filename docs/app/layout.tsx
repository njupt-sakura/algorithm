import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./global.css";

export const metadata = {
  title: "docs",
  description: "docs",
};

const banner = (
  <Banner storageKey="algorithm-docs-banner">
    <a href="https://161043261.github.io/" target="_blank" rel="noopener">
      https://161043261.github.io/
    </a>
  </Banner>
);

const navbar = <Navbar logo={<b>algorithm</b>} />;

const footer = (
  <Footer>GPL-3.0 {new Date().getFullYear()} © tianchenghang.</Footer>
);

export default async function RootLayout({ children }) {
  return (
    // ltr: left to right
    <html lang="zh-CN" dir="ltr" suppressHydrationWarning>
      <Head
        color={{
          hue: { light: 160, dark: 160 }, // 160
          saturation: { light: 60, dark: 100 },
          lightness: { light: 37, dark: 37 }, // 37
        }}
      />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          sidebar={{ autoCollapse: true }}
          docsRepositoryBase="https://github.com/161043261/algorithm/tree/main/docs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
