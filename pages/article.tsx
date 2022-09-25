import Head from 'next/head'

export const config = { amp: true }

const Home = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8"/>
        <meta name="amp-consent-blocking" content="amp-ad"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Welcome My Story News</title>
        <amp-consent id="googlefc" layout="nodisplay" type="googlefc">
        <script  type="application/json">
        {"clientConfig":{"publisherIdentifier":"pub-6607653375286321"}}
        </script>
        </amp-consent>
         
         <script 
           async 
           custom-element="amp-consent" 
           src="https://cdn.ampproject.org/v0/amp-consent-0.1.js"/>
          <script
            async 
            custom-element="amp-iframe" 
            src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"/>
           <script 
             async 
             custom-element="amp-ad" 
             src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"/>

        <script
          async
          key="amp-video"
          custom-element="amp-video"
          src="https://cdn.ampproject.org/v0/amp-video-0.1.js"
        />
      </Head>
          <amp-story-grid-layer template="vertical">
            <h1>Hello World</h1>
            <p>This is an AMP Story.</p>
          </amp-story-grid-layer>
        
