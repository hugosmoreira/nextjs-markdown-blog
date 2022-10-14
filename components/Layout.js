import Head from 'next/head'


export default function Layout({ title, children, keywords, description }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords} />
                <meta name='description' content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>{children}</main>
        </div>
    )
}

Layout.defaultProps = {
    title: 'WebDev News',
    keywords: 'web development, programming',
    description: 'Get the latest news in web dev',

}