import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
        <h1 style={{ marginTop: '40px', marginBottom: '15px', fontSize: `3rem`, fontWeight: '500', textAlign: 'center' }}>Latest News</h1>
          <div className="container">
            <div className="content">
            <h2 style={{ marginTop: '0px', marginBottom: '40px', fontSize: `1.4rem`, fontWeight: '500', textAlign: 'center' }}>NO to fake news
NO to hate speech.<br/>
KNOW your facts.<br/>
CareZA provides information to kickstart conversations!<br/>
</h2>
<p style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '0px', marginBottom: '80px', fontSize: `1rem`, fontWeight: '500', textAlign: 'center' }}>NO to fake news
CareZA will never promote or endorse fake news, hate speech, propaganda, hoaxes or misinformation, but we will expose it where necessary. This is a platform created for public service and for doing good, so our aim is to always provide factually correct and helpful information for you to share. 
</p>
              <BlogRoll />
              <p style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '40px', marginBottom: '40px', fontSize: `1rem`, fontWeight: '500', textAlign: 'center' }}>NO to fake news
              For more interesting reads check out the Centre for Analytics and Behavioural Change:<br/>
<a href="https://www.cabc.org.za/blog" target="blank">CABC.org.za</a>
</p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
