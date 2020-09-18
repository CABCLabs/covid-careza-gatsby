import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array.slice(0, 4);;
  
}
class EntryRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const shuffledPosts = shuffleArray(posts);

    return (
      <div className="columns is-multiline entries">
        {shuffledPosts &&
          shuffledPosts.map(({ node: post }) => (
            <div className="is-parent column is-4" key={post.id}>
            <Link
                  className="title has-text-primary is-size-4"
                  to={post.fields.slug}
                >
            <article
              className={`blog-list-item tile is-child box notification entryBox ${
                post.frontmatter.featuredpost ? "is-featured" : ""
              }`}
            >
              <header>
                {post.frontmatter.headerImage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.headerImage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                ) : null}
              </header>
              <p className="post-meta">
                <Link
                  className="title has-text-primary is-size-4"
                  to={post.fields.slug}
                >
                  <span class="entryTitle">{post.frontmatter.title}</span>
                </Link>
                {/* <span className="subtitle is-size-5 is-block">
                  {post.frontmatter.date}
                </span> */}
              
              </p>
            </article>
            </Link>
          </div>
          ))}
      </div>
    )
  }
}

EntryRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query EntryRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { station: { eq: "Bush Radio" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                VideoEntryUrl
                templateKey
                date(formatString: "DD/MM/YYYY")
                featuredpost
                station
                headerImage {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                imageEntry {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <EntryRoll data={data} count={count} />}
  />
)
