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
            
<p style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '0px', marginBottom: '5px', fontSize: `2rem`, fontWeight: '500', textAlign: 'center' }}>
Know your facts and start healthy conversations. </p>
<p style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '0px', marginBottom: '5px', fontSize: `1.1rem`, fontWeight: '500', textAlign: 'center' }}>Stay up to date with all the latest news and get different perspectives on social, political and environmental issues right here. Here are our top picks of essential reading:</p>
              <BlogRoll />
              <p style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '40px', marginBottom: '40px', fontSize: `1rem`, fontWeight: '500', textAlign: 'center' }}>
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
