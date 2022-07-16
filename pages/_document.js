import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
//import Head from 'next/head'
function _document() {
  return (
    <Html>
    <Head>
    {/* google adsense */}
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    <script dangerouslySetInnerHTML={{
        __html: `
        (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-6532090720746655",
            enable_page_level_ads: true
            });
            `
            }} />
</Head>

<Main />
<NextScript />
</Html>
  )
}

export default _document