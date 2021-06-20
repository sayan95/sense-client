import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document';

// _document component
class MyDocument extends Document {
    render(){
        return(
            <Html lang='en'>
            <Head>
                <link rel="preload" as="image" href="/assets/logo/sense_logo_white_back.jpg"/>
                <link rel="preload" as="image" href="/assets/svgs/profile_data.svg"/>
                <link rel="preload" as="image" href="/assets/images/sense-landing-bg-1.png"/>
                <link rel="preload" as="image" href="/assets/svgs/happy-place.svg"/>
                <link rel="preload" as="image" href="/assets/images/happy-place.png"/>
                <link rel = "icon" href='/assets/logo/sense_logo_white_back.jpg'/>
                
                {/* Oswald fonts preload */}
                <link rel="preload" as="font" href="/fonts/oswald/oswald-v36-latin-regular.woff2" type="font/woff2" crossOrigin="anonymous"></link>
                <link rel="preload" as="font" href="/fonts/oswald/oswald-v36-latin-regular.woff" type="font/woff" crossOrigin="anonymous"></link>
                <link rel="preload" as="font" href="/fonts/oswald/oswald-v36-latin-500.woff2" type="font/woff2" crossOrigin="anonymous"></link>
                <link rel="preload" as="font" href="/fonts/oswald/oswald-v36-latin-500.woff" type="font/woff" crossOrigin="anonymous"></link>
                
                {/* Oswald fonts preload */}
                <link rel="preload" as="font" href="/fonts/oswald/quicksand-v22-latin-regular.woff2" type="font/woff2" crossOrigin="anonymous"></link>
                <link rel="preload" as="font" href="/fonts/quicksand/quicksand-v22-latin-regular.woff" type="font/woff" crossOrigin="anonymous"></link>
                <link rel="preload" as="font" href="/fonts/quicksand/quicksand-v22-latin-500.woff2" type="font/woff2" crossOrigin="anonymous"></link>
                <link rel="preload" as="font" href="/fonts/quicksand/quicksand-v22-latin-500.woff" type="font/woff" crossOrigin="anonymous"></link>
                
                {/* Titillium fonts preload  */}
                <link rel="preload" as="font" href="/fonts/titillium/titillium-web-v9-latin-regular.woff2" type="font/woff2" crossOrigin="anonymous"></link>
                <link rel="preload" as="font" href="/fonts/titillium/titillium-web-v9-latin-regular.woff" type="font/woff" crossOrigin="anonymous"></link>
                <link rel="preload" as="font" href="/fonts/titillium/titillium-web-v9-latin-600.woff2" type="font/woff2" crossOrigin="anonymous"></link>
                <link rel="preload" as="font" href="/fonts/titillium/titillium-web-v9-latin-600.woff" type="font/woff" crossOrigin="anonymous"></link>
                <link rel="preload" as="font" href="/fonts/titillium/titillium-web-v9-latin-700.woff2" type="font/woff2" crossOrigin="anonymous"></link>
                <link rel="preload" as="font" href="/fonts/titillium/titillium-web-v9-latin-700.woff" type="font/woff" crossOrigin="anonymous"></link>
                
                {/* Mulish fonts preload */}
                <link rel="preload" as="font" href="/fonts/mulish/mulish-v3-latin-regular.woff2" type="font/woff2" crossOrigin="anonymous"></link>
                <link rel="preload" as="font" href="/fonts/mulish/mulish-v3-latin-regular.woff" type="font/woff" crossOrigin="anonymous"></link>
                <link rel="preload" as="font" href="/fonts/mulish/mulish-v3-latin-500.woff2" type="font/woff2" crossOrigin="anonymous"></link>
                <link rel="preload" as="font" href="/fonts/mulish/mulish-v3-latin-500.woff" type="font/woff" crossOrigin="anonymous"></link>
                <link rel="preload" as="font" href="/fonts/mulish/mulish-v3-latin-600.woff2" type="font/woff2" crossOrigin="anonymous"></link>
                <link rel="preload" as="font" href="/fonts/mulish/mulish-v3-latin-600.woff" type="font/woff" crossOrigin="anonymous"></link>
                <link rel="preload" as="font" href="/fonts/mulish/mulish-v3-latin-700.woff2" type="font/woff2" crossOrigin="anonymous"></link>
                <link rel="preload" as="font" href="/fonts/mulish/mulish-v3-latin-700.woff" type="font/woff" crossOrigin="anonymous"></link>
                
                <link rel="stylesheet" href="/icons/line-awesome-master/dist/line-awesome/css/line-awesome.min.css"></link>
            </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
}

export default MyDocument;
