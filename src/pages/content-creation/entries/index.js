import React from 'react'

import Layout from '../../../components/Layout'
import EntryRoll from '../../../components/EntryRoll'

export default class EntryIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
     
              <EntryRoll />
            
        </section>
      </Layout>
    )
  }
}
