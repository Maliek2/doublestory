
import Head from 'next/head'

export const config = { amp: true }

const Home = () => {
  return (
    <>
      <Head>
        <title>Web Design Theme</title>
        

        
      </Head>
      <h1>Blog News</h1>
      <!-- ## Defining the Consent Flow -->
  <!--
    We define a basic consent flow using the `promptUISrc` to load our custom consent iframe.
  -->
  <amp-consent id="myUserConsent" layout="nodisplay">
    <script type="application/json">{
      "consentInstanceId": "myConsent",
      "consentRequired": true,
      "promptUISrc": "/static/samples/files/diy-consent.html",
      "postPromptUI": "post-consent-ui"
    }</script>
    <div id="post-consent-ui">
      <button on="tap:myUserConsent.prompt()">Update Consent</button>
    </div>
  </amp-consent>

  <!-- ## Consent Dialog Iframe -->
  <!--
    When the consent dialog iframe is ready, it can send the `amp-consent` component a postMessage with the style information.

    ```js
    window.parent.postMessage({
      type: 'consent-ui',
      action: 'ready',
      initialHeight: '80vh',
      enableBorder: true
    }, '*');
    ```

    Here, the initialHeight is a string that represents the viewport height that the iframe should take.
    A viewport height between 30 and 60, inclusive, will tell `amp-consent` to style the iframe in a bottom sheet.
    A viewport height greater than 60 and less than or equal to 80 will tell `amp-consent` to style the iframe as a centered modal.
  -->

    <!--
    Use `data-block-on-consent` attribute to block AMP components until consent is given.
    Individual AMP components can override  blocking behavior and implement blocking logic themselves.

    Here is an image which is blocked until consent is given:
  -->
  <amp-img data-block-on-consent src="https://preview.amp.dev/static/samples/img/landscape_lake_300x201.jpg" width="300" height="201">
  </amp-img>
 

      

        
    </>
  )
}

export default Home
