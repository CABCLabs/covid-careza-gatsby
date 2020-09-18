import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import ReactPlayer from "react-player";

export const EntryPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
          <h1 style={{ marginTop: '40px', marginBottom: '40px', fontSize: `3rem`, fontWeight: '500', textAlign: 'center' }}>{title}</h1>
           </div>
        </div>
      </div>
    </section>
  )
}

EntryPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
}

const EntryPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <div className="columns">
      <div className="column is-12">
      <EntryPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Entry">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
      <p>{post.frontmatter.station} Competition</p>
      <div class="entryBlock">
        <header>
                          {post.frontmatter.imageEntry ? (
                              <div className="column is-12">
                            <div className="featured-thumbnail">
                              <PreviewCompatibleImage
                                imageInfo={{
                                  image: post.frontmatter.imageEntry,
                                  alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                }}
                              />
                            </div>
                            </div>
                          ) : null}
                        </header>
                        <ReactPlayer
        url={post.frontmatter.VideoEntryUrl}
      />
     
      <div>
      <h4 class="textEntry">{post.frontmatter.TextEntry}</h4>
      
      </div>
      </div>       
    </div>
    </div>
    <h2 style={{ fontSize: `2rem`, fontWeight: '500' }}>Related Entries</h2>
            <EntryRoll/>
                        </Layout>
  )
}

EntryPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default EntryPost

export const pageQuery = graphql`
  query EntryPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        imageEntry {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        VideoEntryUrl
        TextEntry
        station
      }
    }
  }
`
