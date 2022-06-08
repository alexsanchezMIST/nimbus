import Head from 'next/head';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';

export const siteURL = 'www.example.com'; // Replace this with the URL of the website.
export const siteName = 'Example'; // Replace this with the name of the website.
export const siteTitle = 'Next.js Sample Website'; // Replace this with the title of the website.
export const siteDescription = 'Lorem ipsum dolor sit amet ...'; // Replace this with a brief description of the website.
export const siteKeywords = ['one', 'two', 'three']; // Replace this with a few website keywords.
export const siteImage = '../public/images/README.md'; // Replace this with the path to the website image.
export const twitterHandle = '@twitter'; // Replace this with the website author's Twitter handle.

export default function Layout({ children, pageTitle, pageDescription }) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>{siteTitle}</title>
        <meta name='description' key='description' content={siteDescription} />
        <meta name='keywords' key='keywords' content={siteKeywords} />

        {/* OPENGRAPH / FACEBOOK */}
        <meta property='og:title' key='ogtitle' content={pageTitle} />
        <meta property='og:description' key='ogdesc' content={pageDescription || siteDescription} />
        <meta property='og:url' key='ogurl' content={siteURL} />
        <meta property='og:image' key='ogimage' content={siteImage} />
        <meta property='og:site_name' key='ogsitename' content={siteName} />

        {/* TWITTER */}
        <meta name='twitter:card' key='twcard' content='summary' />
        <meta name='twitter:creator' key='twhandle' content='twitterHandle' />

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>{children}</main>
    </>
  );
}
