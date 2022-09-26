
import Head from 'next/head'

export const config = { amp: true }

const Home = () => {
  return (
    <>
      <Head>
        <title>Web Design Theme</title>
        

        
      </Head>
       <h1>Blog News</h1>
  <amp-story>
  <amp-story-auto-ads>
    <script type="application/json">
      {
        "ad-attributes": {
          // ad server configuration
        }
      }
    </script>
  </amp-story-auto-ads>
  <amp-story-page>
 
</amp-story>
      

        
    </>
  )
}

export default Home
